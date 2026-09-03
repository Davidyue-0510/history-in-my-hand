#!/usr/bin/env python3
"""一键跑全部守门闸门：lint -> test -> leads -> build -> interaction。

合作者、CI、本地提交前跑一条命令即可：

    python tools/gates.py                    # 警告不阻断
    python tools/gates.py --strict           # 任何 warning 也视为失败（CI 用）
    python tools/gates.py --no-interaction   # 跳过浏览器交互闸门（无 Node/浏览器环境）

任意闸门失败会立即中止并报 exit=1，方便在坏数据进入提交前拦住。

第 5 道「交互闸门」跑无头浏览器，用真实鼠标事件验证地图点得动。
它抓的是前四道抓不到的一类缺陷：数据全对、编译全对、截图也正常，
但浏览器里所有 click 监听器都是死的（详见 tools/probe_interaction.js 顶部注释）。
Node 或浏览器缺失时该闸门自动跳过，不会误伤没有图形环境的 CI。
"""
import shutil
import subprocess
import sys
import os
import signal

# Windows 控制台默认 GBK，非 ASCII 符号（✓/✗/✅）会抛 UnicodeEncodeError。
# 统一用 ASCII，且尽量强制 stdout 为 UTF-8，避免协作者在本机跑时崩溃。
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STEPS = [
    # ── 摄入与构建层 ──
    ("守门员 lint · 数据完整性",     ["tools/ingestion/lint.py"]),
    ("重算研究线索 leads",            ["tools/ingestion/leads.py"]),
    ("重编译 demo/data.js · build",  ["tools/ingestion/build.py"]),
    ("统计快照 stats",                ["tools/ingestion/stats.py"]),
    ("场景注册表一致性 check",         ["tools/ingestion/check_scenes.py"]),
    ("战略维度契约 check",             ["tools/check_strategic_contract.py"]),
    ("六维信息类别契约 check",          ["tools/check_dims_contract.py"]),
    # ── 查询与分析层 ──
    ("共振报告 resonance",            ["tools/analysis/resonance.py"]),
    # ── 推演与模拟层 ──
    ("仿真维度契约 check",            ["tools/check_sim_contract.py"]),
    ("推演不变量 test",               ["tools/tests/test_simulate.py"]),
    # ── 测试层 ──
    ("不变量回归 test",              ["tools/tests/test_assertions.py"]),
    ("年号换算 test",                ["tools/tests/test_reign.py"]),
    ("世界模型查询 test",            ["tools/tests/test_world_query.py"]),
    ("语境包 test",                  ["tools/tests/test_vocab.py"]),
    ("地形契约 test",                ["tools/tests/test_terrain.py"]),
    ("分片契约 test",                ["tools/tests/test_sharding.py"]),
    ("地名落点 test",                ["tools/tests/test_geocode.py"]),
    ("控制层契约 test",              ["tools/tests/test_control.py"]),
    ("战—朝关联契约 test",          ["tools/tests/test_warcourt.py"]),
    ("农历转换 test",                ["tools/tests/test_lunar.py"]),
    ("别名校正 test",                ["tools/tests/test_alias.py"]),
    ("六维词表推断鲁棒性 test",        ["tools/tests/test_ingest_dims.py"]),
    # ── 一键世界生成闭环（v0.79 修 --multi 假绿后挂入） ──
    ("一键世界生成 smoke test",       ["tools/tests/test_world_gen.py"]),
    ("CLI 世界生成 smoke test",       ["tools/tests/test_world_cli.py"]),
    ("跨源冲突汇总 test",             ["tools/tests/test_cross_conflicts.py"]),
    ("v0.82 world emit 仅产 JSON test", ["tools/tests/test_emit.py"]),
    ("v0.83 emit→from-json 往返 test",  ["tools/tests/test_emit_roundtrip.py"]),
    ("v0.86 跨会话记忆载体 test",        ["tools/tests/test_emit_memory_carrier.py"]),
]

# 真实 LLM 接入冒烟：可选闸门，默认不挂（避免每次 gates 烧 token）。
# 仅当设 REAL_LLM=1 才纳入；无 key / 网络不可达时脚本返回 0 并显式「跳过」，
# gates 据此报 [SKIP] 而非假绿。env 取值：1/true/yes/on 视为开启。
if os.environ.get("REAL_LLM", "").lower() in ("1", "true", "yes", "on"):
    STEPS = STEPS + [("真实 LLM 接入冒烟 test（REAL_LLM=1）", ["tools/tests/smoke_llm_world.py"])]


def find_node():
    """交互闸门需要 Node >= 20（内置 fetch / WebSocket）。找不到就跳过，不误伤 CI。"""
    for cand in (os.environ.get("WORLD_NODE"), "node", "nodejs"):
        if not cand:
            continue
        p = cand if os.path.isabs(cand) and os.path.exists(cand) else shutil.which(cand)
        if p:
            return p
    return None


def _run(cmd, timeout, label):
    """运行子命令并带超时保护：超时则强制终止整组进程（含无头浏览器孙进程），
    避免某个步骤卡死导致整个 gates 无限挂起。返回 exit code。"""
    try:
        if os.name == "nt":
            proc = subprocess.Popen(cmd, cwd=ROOT,
                                    creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)
        else:
            proc = subprocess.Popen(cmd, cwd=ROOT, start_new_session=True)
    except Exception as e:
        print("[FAIL] %s 启动失败: %s" % (label, e))
        return 1
    try:
        proc.wait(timeout=timeout)
        return proc.returncode
    except subprocess.TimeoutExpired:
        # 杀掉整个进程组，避免无头 Edge / 子 shell 残留导致资源泄漏与假挂起
        try:
            if os.name == "nt":
                os.kill(proc.pid, signal.CTRL_BREAK_EVENT)  # 作用于新建的进程组
            else:
                os.killpg(os.getpgid(proc.pid), signal.SIGKILL)
        except Exception:
            try:
                proc.kill()
            except Exception:
                pass
        print("[FAIL] %s 超时（>%d 秒），已强制终止，避免卡死。" % (label, timeout))
        return 124


def _run_capture(cmd, timeout, label):
    """同 _run，但捕获 stdout 以便判断真实 LLM 冒烟是否 SKIP（无 key / 网络不可达）。"""
    try:
        if os.name == "nt":
            proc = subprocess.Popen(cmd, cwd=ROOT, stdout=subprocess.PIPE,
                                    stderr=subprocess.STDOUT,
                                    creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)
        else:
            proc = subprocess.Popen(cmd, cwd=ROOT, stdout=subprocess.PIPE,
                                    stderr=subprocess.STDOUT, start_new_session=True)
    except Exception as e:
        print("[FAIL] %s 启动失败: %s" % (label, e))
        return 1, ""
    try:
        out, _ = proc.communicate(timeout=timeout)
        try:
            text = out.decode("utf-8", "replace")
        except Exception:
            text = ""
        return proc.returncode, text
    except subprocess.TimeoutExpired:
        try:
            if os.name == "nt":
                os.kill(proc.pid, signal.CTRL_BREAK_EVENT)
            else:
                os.killpg(os.getpgid(proc.pid), signal.SIGKILL)
        except Exception:
            try:
                proc.kill()
            except Exception:
                pass
        print("[FAIL] %s 超时（>%d 秒），已强制终止，避免卡死。" % (label, timeout))
        return 124, ""


def main():
    args = sys.argv[1:]
    strict = "--strict" in args
    want_interaction = "--no-interaction" not in args

    total = len(STEPS) + (1 if want_interaction else 0)
    ok = True
    for i, (name, rel) in enumerate(STEPS, 1):
        cmd = [sys.executable, os.path.join(ROOT, rel[0])]
        if name.startswith("守门员") and strict:
            cmd.append("--strict")
        print("\n=== [%d/%d] %s ===" % (i, total, name))
        if "真实 LLM" in name:
            # 可选闸门：捕获输出以区分 PASS / SKIP（无 key 时不假绿）
            rc, out = _run_capture(cmd, timeout=300, label=name)
            if rc == 0 and ("跳过" in out or "SKIP" in out):
                print("[SKIP] %s：无 key / 网络不可达，跳过（未烧 token）" % name)
            elif rc != 0:
                ok = False
                print("[FAIL] %s (exit=%d)" % (name, rc))
                break
            else:
                print("[PASS] %s" % name)
        else:
            rc = _run(cmd, timeout=300, label=name)
            if rc != 0:
                ok = False
                print("[FAIL] %s (exit=%d)" % (name, rc))
                break
            print("[PASS] %s" % name)

    if ok and want_interaction:
        print("\n=== [%d/%d] 交互闸门 · 无头浏览器真实点击 ===" % (total, total))
        node = find_node()
        if not node:
            print("[SKIP] 未找到 Node，交互闸门跳过（装 Node>=20 或设 WORLD_NODE 后可启用）")
        else:
            rc = _run([node, os.path.join(ROOT, "tools", "probe_interaction.js")],
                      timeout=600, label="交互闸门")
            if rc != 0:
                ok = False
                print("[FAIL] 交互闸门 (exit=%d)" % rc)
            else:
                print("[PASS] 交互闸门")

    print("\n" + ("全部闸门通过，可以提交。" if ok
                  else "有闸门未通过，先修再提交。"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
