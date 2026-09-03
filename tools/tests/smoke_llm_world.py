"""真实 LLM 接入冒烟（v0.80）：仅验证 world 模式的「抽取 + 合规化」链路真能跑通。

不挂 gates——它会真烧一次小 token，不该每次 gates 跑时重复调用。
手动执行：python tools/tests/smoke_llm_world.py
前置：.env 配置 LLM_API_KEY（DeepSeek 端点，ingest._call_llm 自动读取）。

设计：只调 _llm_extract_world（内部真调 _call_llm + JSON 解析 + _conform_world 合规化），
不落文件、不注册、不 build——所以跑完零残留、不污染 data/ 与 demo/。
若沙箱网络不可达 api.deepseek.com 或无 key，脚本返回 0 并显式标注「跳过」，不误报失败。
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "ingestion"))
import ingest as IN


def main():
    IN._load_dotenv()
    key = os.environ.get("LLM_API_KEY") or os.environ.get("OPENAI_API_KEY")
    if not key:
        print("[smoke] 无 LLM_API_KEY / OPENAI_API_KEY，跳过真实 LLM 冒烟（不报错）")
        return 0
    if not os.environ.get("LLM_BASE_URL"):
        os.environ.setdefault("LLM_BASE_URL", "https://api.deepseek.com/v1")
    if not os.environ.get("LLM_MODEL"):
        os.environ.setdefault("LLM_MODEL", "deepseek-chat")

    spec = {
        "id": "wtest_llm", "title": "真实 LLM 冒烟", "kind": "county", "region": "liaodong",
        "source": {"id": "wt_src", "title": "明史·太祖本纪（节选）", "party": "明方",
                   "color": "#8C6239", "period": "明"},
        "source_text": (
            "万历四十六年，努尔哈赤以七大恨告天，誓师伐明，攻抚顺，守将李永芳降。"
            "明年，陷清河。辽东震动。"
        ),
    }
    print("[smoke] 真实调用 %s 抽取 ..." % os.environ["LLM_MODEL"])
    raw = IN._llm_extract_world(spec)
    if not raw:
        print("[smoke] FAIL: LLM 返回为空（网络被拦或配额耗尽）")
        return 1
    persons = raw.get("persons", [])
    events = raw.get("events", [])
    places = raw.get("places", [])
    asserts = raw.get("assertions", [])
    print("[smoke] REAL_LLM_OK persons=%d events=%d places=%d assertions=%d"
          % (len(persons), len(events), len(places), len(asserts)))
    if not asserts:
        print("[smoke] FAIL: 真实 LLM 未产出任何断言")
        return 1
    print("[smoke] 真实 LLM 接入冒烟通过（已烧一次小 token，零残留）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
