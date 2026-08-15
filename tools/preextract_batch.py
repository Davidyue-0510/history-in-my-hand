# -*- coding: utf-8 -*-
"""批量预抽取：把 .tmp/ 里已抓的史料原文用 deepseek 抽成 fixture 缓存。

目的（响应 8.17 DeepSeek 涨价）：现在用旧价把能拿到的史料全抽了存成
JSON 数组 fixture，未来导入只需 --provider fixture，零 token。

注意：
- 沙箱 Bash 连不上 Wikisource（TLS 超时），所以只处理「手上已有原文」的文件。
- 7 个 fetchable 书目（实录/国榷/清史稿/皇太极）原文不在本环境，本批不覆盖。
- 大文件（酌中志 377KB）需分块，本批先跳过，后续补。
- 每个文件独立调用，单文件失败不影响其余；fail>0 的会标注但不丢弃（缓存供复核）。

用法：
  python tools/preextract_batch.py            # 跑全表
  python tools/preextract_batch.py --only sarhu   # 只跑含此场景的
"""
import argparse
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools", "ingestion"))
import ingest

FIX = os.path.join(ROOT, "tools", "fixtures")
os.makedirs(FIX, exist_ok=True)

# (源文件, 场景白名单 or None, 输出名)
# 输出名用于 fixtures/<输出名>.json（JSON 数组，可直接 --provider fixture）
PLAN = [
    # ── 战役对齐的 src_* 合成文本（小、贴场景、高价值）──
    (".tmp/src_sarhu.txt", "sarhu", "sarhu_src_sarhu"),
    (".tmp/src_tieling3.txt", "tieling", "tieling_src_tieling3"),
    (".tmp/src_liaoyang.txt", "liaoyang", "liaoyang_src_liaoyang"),
    (".tmp/src_liaoyang3.txt", "liaoyang", "liaoyang_src_liaoyang3"),
    (".tmp/src_fushun3.txt", "fushun", "fushun_src_fushun3"),
    (".tmp/src_guangning.txt", "guangning", "guangning_src_guangning"),
    (".tmp/src_ningyuan.txt", "ningyuan", "ningyuan_src_ningyuan"),
    (".tmp/src_ningyuan3.txt", "ningyuan", "ningyuan_src_ningyuan3"),
    (".tmp/src_zzz_combined.txt", "guangning", "guangning_src_zzz_combined"),
    (".tmp/src_zzz_xiong.txt", "guangning", "guangning_src_zzz_xiong"),
    (".tmp/src_zzz_donglin.txt", "guangning", "guangning_src_zzz_donglin"),
    (".tmp/src_guanghaijun_sarhu.txt", "sarhu", "sarhu_src_guanghaijun"),
    (".tmp/src_sanchaoliao_shenyang.txt", "shenyang", "shenyang_src_scl"),
    (".tmp/src_sanchaoliao_liaoyang.txt", "liaoyang", "liaoyang_src_scl"),
    (".tmp/src_scl_sarhu.txt", "sarhu", "sarhu_src_scl"),
    # ── 明通鑑 各卷（编年体战役叙述，按战役年代对齐场景）──
    (".tmp/mingtongjian_080.txt", "sarhu", "mingtongjian_v080_sarhu"),
    (".tmp/mingtongjian_081.txt", "liaoyang", "mingtongjian_v081_liaoyang"),
    (".tmp/mingtongjian_082.txt", "guangning", "mingtongjian_v082_guangning"),
    (".tmp/mingtongjian_086.txt", "ningyuan", "mingtongjian_v086_ningyuan"),
    (".tmp/mingtongjian_088.txt", "ningyuan", "mingtongjian_v088_ningyuan"),
    (".tmp/mingtongjian_091.txt", "ningyuan", "mingtongjian_v091_songjin"),
    (".tmp/mingtongjian_092.txt", "ningyuan", "mingtongjian_v092_songjin"),
    (".tmp/mingtongjian_093.txt", "ningyuan", "mingtongjian_v093_ningyuan"),
    (".tmp/mingtongjian_094.txt", "ningyuan", "mingtongjian_v094_ningyuan"),
    (".tmp/mingtongjian_095.txt", "ningyuan", "mingtongjian_v095_ningyuan"),
    (".tmp/mingtongjian_096.txt", "ningyuan", "mingtongjian_v096_ningyuan"),
    # ── 明史 列传（人物/战役传记）──
    (".tmp/mingshi_255.txt", "guangning", "mingshi_v255_guangning"),
    (".tmp/mingshi_259.txt", "ningyuan", "mingshi_v259_ningyuan"),
]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", help="只跑输出名/场景含此子串的")
    args = ap.parse_args()

    ingest._load_dotenv()
    os.environ.setdefault("LLM_BASE_URL", "https://api.deepseek.com/v1")
    os.environ.setdefault("LLM_MODEL", "deepseek-chat")

    plan = PLAN
    if args.only:
        plan = [p for p in PLAN if args.only in p[2] or args.only in (p[1] or "")]

    tot_in = tot_out = 0
    done = skip = fail = 0
    for src, scene, out in plan:
        sp = os.path.join(ROOT, src)
        if not os.path.exists(sp):
            print("[skip] 不存在 %s" % src); skip += 1; continue
        outjson = os.path.join(FIX, out + ".json")
        if os.path.exists(outjson):
            print("[skip] 已缓存 %s" % out); skip += 1; continue
        try:
            text = open(sp, encoding="utf-8").read()
        except Exception as e:
            print("[skip] 读失败 %s %s" % (src, e)); skip += 1; continue
        id_space = ingest.scene_id_space(scene) if scene else None
        try:
            raw, usage = ingest.extract_llm(text, id_space)
        except Exception as e:
            print("[FAIL] %s 抽取异常 %s" % (src, e)); fail += 1; continue
        if raw is None:
            print("[FAIL] %s 无 API key？" % src); fail += 1; break
        ok, fcount, by = ingest.normalize_and_validate(raw)
        # 写 JSON 数组 fixture
        with open(outjson, "w", encoding="utf-8") as f:
            json.dump(raw, f, ensure_ascii=False, indent=1); f.write("\n")
        # 写 JSONL（供场景追加）
        ingest.write_jsonl(raw, os.path.join(FIX, out + ".jsonl"))
        ui = (usage or {}).get("prompt_tokens", 0)
        uo = (usage or {}).get("completion_tokens", 0)
        tot_in += ui; tot_out += uo
        flag = "" if fcount == 0 else "  [WARN %d 条未过校验]" % fcount
        print("[ok] %s -> %d 条 | in %d out %d%s" % (out, len(raw), ui, uo, flag))
        done += 1

    print("\n=== 批量预抽完成 ===")
    print("完成 %d / 跳过 %d / 失败 %d" % (done, skip, fail))
    print("累计 token: 输入 %d + 输出 %d = %d" % (tot_in, tot_out, tot_in + tot_out))
    print("所有 fixture 在: %s" % FIX)


if __name__ == "__main__":
    main()
