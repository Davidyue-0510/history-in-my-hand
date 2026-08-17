#!/usr/bin/env node
/**
 * push_app.js — 用 GitHub App 安装令牌推送当前分支到 origin。
 *
 * 凭证来源（全部本地，绝不入库）：
 *   - App ID         : 环境变量 GH_APP_ID（默认 4524038）
 *   - Installation ID: 环境变量 GH_INSTALL_ID（默认 152115894）
 *   - 私钥 .pem      : 按以下顺序自动寻找（命中即用）：
 *                       1) 环境变量 GH_APP_PEM（原始 PEM 文本）
 *                       2) 环境变量 GH_APP_KEY_PATH（绝对/相对路径）
 *                       3) tools/secrets/github-app.pem
 *                       4) 仓库根目录下任意 *.pem（已被 .gitignore 忽略，仅本地）
 *
 * 用法：
 *   node tools/push_app.js                      # 推送当前 HEAD 到默认分支 main
 *   node tools/push_app.js --branch dev         # 推到 dev 分支
 *   node tools/push_app.js --commit "v0.9.1"    # 先 git add -A 并提交，再推送
 *   npm run push                                # 等价第一条
 *   npm run push:commit -- "v0.9.1"             # 等价第三条
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const REPO = 'Davidyue-0510/history-in-my-hand';
const APP_ID = process.env.GH_APP_ID || '4524038';
const INSTALL_ID = process.env.GH_INSTALL_ID || '152115894';
const repoRoot = path.resolve(__dirname, '..');

function resolveBranch() {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--branch') return args[++i] || 'main';
  }
  return process.env.GH_PUSH_BRANCH || 'main';
}

function resolveCommitMsg() {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--commit') return args[++i] || '';
  }
  return null;
}

function printHelp() {
  console.log(`push_app.js — GitHub App 安装令牌推送
  默认分支: main（可用 --branch <b> 或 GH_PUSH_BRANCH 覆盖）
  --branch <b>   推送到指定分支
  --commit [msg] 先 git add -A 并提交（无 msg 用默认），再推送
  -h, --help     显示本帮助`);
}

function resolveKey() {
  if (process.env.GH_APP_PEM) return process.env.GH_APP_PEM;
  const explicit = process.env.GH_APP_KEY_PATH;
  if (explicit && fs.existsSync(explicit)) return fs.readFileSync(explicit, 'utf8');
  const sec = path.join(repoRoot, 'tools', 'secrets', 'github-app.pem');
  if (fs.existsSync(sec)) return fs.readFileSync(sec, 'utf8');
  const cands = fs.readdirSync(repoRoot).filter((f) => f.endsWith('.pem'));
  if (cands.length) return fs.readFileSync(path.join(repoRoot, cands[0]), 'utf8');
  console.error('[push_app] 找不到私钥文件。请设置 GH_APP_KEY_PATH / GH_APP_PEM，' +
    '或将 .pem 放到 tools/secrets/ 或仓库根目录。');
  process.exit(2);
}

function b64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function makeJWT(key) {
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const payload = b64url(JSON.stringify({ iat: now - 60, exp: now + 600, iss: APP_ID }));
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${payload}`);
  const sig = signer.sign(key, 'base64');
  return `${header}.${payload}.${b64url(Buffer.from(sig, 'base64'))}`;
}

function mask(s, token) {
  if (!s) return s;
  let out = String(s);
  if (token) out = out.split(token).join('***INSTALL_TOKEN***');
  return out.replace(/ghp_[A-Za-z0-9]+/g, 'ghp_***');
}

function maybeCommit(msg) {
  try { execSync('git add -A', { stdio: 'ignore' }); } catch (e) { /* ignore */ }
  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (!status) { console.log('[push_app] 无待提交变更，跳过提交。'); return; }
  const message = msg || 'chore: update via push_app';
  execSync(`git commit -m ${JSON.stringify(message)}`, { encoding: 'utf8', stdio: 'ignore' });
  console.log('[push_app] 已提交本地变更。');
}

async function main() {
  if (process.argv.includes('-h') || process.argv.includes('--help')) { printHelp(); return; }
  const branch = resolveBranch();
  const commitMsg = resolveCommitMsg();
  if (commitMsg !== null) maybeCommit(commitMsg);

  const key = resolveKey();
  const jwt = makeJWT(key);
  console.log('[push_app] 已取得 JWT，正在换取 installation token ...');
  const res = await fetch(`https://api.github.com/app/installations/${INSTALL_ID}/access_tokens`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'vege-civ-push-app',
    },
    signal: AbortSignal.timeout(30000),  // 30s 超时，避免 GitHub API 挂起导致 push_app 卡死
  });
  const data = await res.json().catch(() => ({}));
  if (res.status !== 201 || !data.token) {
    console.error(`[push_app] 换取 token 失败 HTTP=${res.status}: ${JSON.stringify(data)}`);
    process.exit(3);
  }
  const token = data.token;
  console.log(`[push_app] token 已获取 (HTTP ${res.status})，开始推送 ${REPO} -> ${branch}`);

  let out;
  try {
    out = execSync(
      `git -c credential.helper= push "https://x-access-token:${token}@github.com/${REPO}.git" HEAD:${branch}`,
      { encoding: 'utf8', timeout: 120000 }  // 120s 超时，避免网络挂起导致 push_app 卡死
    );
  } catch (e) {
    out = (e.stdout || '') + (e.stderr || '');
    if (e.killed && e.signal) {
      out += `\n[push_app] git push 超时（>${e.signal}），已被强制终止，未卡死。`;
    }
  }
  const masked = mask(out, token);
  process.stdout.write(masked);
  if (/Everything up-to-date|->/.test(masked) && !/fatal|error:/i.test(masked) && !/超时/.test(masked)) {
    console.log('\n[push_app] 推送成功（或已是最新）。');
  } else if (/fatal|error:/i.test(masked) || /超时/.test(masked)) {
    console.error('\n[push_app] 推送出现错误/超时，见上。');
    process.exit(4);
  }
}

main().catch((e) => { console.error('[push_app] 异常:', e.message); process.exit(5); });
