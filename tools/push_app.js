#!/usr/bin/env node
/**
 * push_app.js — 用 GitHub App 安装令牌推送当前分支到 origin/main。
 *
 * 凭证来源（全部本地，绝不入库）：
 *   - App ID        : 环境变量 GH_APP_ID（默认 4524038）
 *   - Installation ID: 环境变量 GH_INSTALL_ID（默认 152115894）
 *   - 私钥 .pem     : 环境变量 GH_APP_KEY_PATH（绝对/相对路径）
 *                     或 环境变量 GH_APP_PEM（原始 PEM 文本）
 *                     或 默认路径 tools/secrets/github-app.pem
 *
 * 流程：App 私钥签 RS256 JWT -> 换 installation token -> git push（一次性 URL，输出打码）。
 * 用法：node tools/push_app.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const REPO = 'Davidyue-0510/history-in-my-hand';
const BRANCH = 'main';
const APP_ID = process.env.GH_APP_ID || '4524038';
const INSTALL_ID = process.env.GH_INSTALL_ID || '152115894';
const repoRoot = path.resolve(__dirname, '..');

function resolveKey() {
  if (process.env.GH_APP_PEM) return process.env.GH_APP_PEM;
  const p = process.env.GH_APP_KEY_PATH
    || path.join(repoRoot, 'tools', 'secrets', 'github-app.pem');
  if (!fs.existsSync(p)) {
    console.error(`[push_app] 找不到私钥文件：${p}\n  请设置 GH_APP_KEY_PATH 或把 .pem 放到 tools/secrets/github-app.pem`);
    process.exit(2);
  }
  return fs.readFileSync(p, 'utf8');
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

async function main() {
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
  });
  const data = await res.json().catch(() => ({}));
  if (res.status !== 201 || !data.token) {
    console.error(`[push_app] 换取 token 失败 HTTP=${res.status}: ${JSON.stringify(data)}`);
    process.exit(3);
  }
  const token = data.token;
  console.log(`[push_app] token 已获取 (HTTP ${res.status})，开始推送 ${REPO} -> ${BRANCH}`);

  let out;
  try {
    out = execSync(
      `git -c credential.helper= push "https://x-access-token:${token}@github.com/${REPO}.git" HEAD:${BRANCH}`,
      { encoding: 'utf8' }
    );
  } catch (e) {
    out = (e.stdout || '') + (e.stderr || '');
  }
  const masked = mask(out, token);
  process.stdout.write(masked);
  if (/Everything up-to-date|->|master|main/.test(masked) && !/fatal|error:/i.test(masked)) {
    console.log('\n[push_app] 推送成功（或已是最新）。');
  } else if (/fatal|error:/i.test(masked)) {
    console.error('\n[push_app] 推送出现错误，见上。');
    process.exit(4);
  }
}

main().catch((e) => { console.error('[push_app] 异常:', e.message); process.exit(5); });
