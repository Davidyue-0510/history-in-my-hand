# -*- coding: utf-8 -*-
"""CBDB（中国历代人物传记数据库）适配器 · SQLite 只读后端。

数据来源：官方发布的 SQLite 数据库（HuggingFace 直链，见 cbdb_download.py）。
用法：
    python tools/datasources/cbdb.py --name 熊廷弼      # 按中文名查
    python tools/datasources/cbdb.py --personid 12345   # 按人物 ID 查
    python tools/datasources/cbdb.py --check            # 检查本地库状态

数据许可：CBDB 非商用 / 不可再分发。本适配器只读本地 SQLite，
不打包数据入 git（data/external/ 在 .gitignore）。
"""
import argparse
import os
import sqlite3
import sys

try:
    from .base import DataSource
except ImportError:  # 直接以脚本运行时（python tools/datasources/cbdb.py）
    DataSource = object

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DB_DIR = os.path.join(ROOT, "data", "external", "cbdb")

# 简→繁逐字映射（覆盖历史人名高频差异字；逐字替换无等长约束）
_S2T_MAP = {
    "万": "萬", "与": "與", "叶": "葉", "县": "縣", "岭": "嶺", "广": "廣",
    "张": "張", "征": "徵", "后": "後", "发": "發", "恒": "恆", "怀": "懷",
    "惊": "驚", "惩": "懲", "悯": "憫", "恺": "愷", "实": "實", "审": "審",
    "宪": "憲", "导": "導", "层": "層", "异": "異", "孙": "孫", "长": "長",
    "间": "間", "门": "門", "马": "馬", "卢": "盧", "边": "邊", "乡": "鄉",
    "华": "華", "严": "嚴", "卫": "衛", "军": "軍", "击": "擊", "对": "對",
    "归": "歸", "岁": "歲", "师": "師", "帅": "帥", "席": "席", "带": "帶",
    "干": "幹", "冲": "衝", "邓": "鄧", "陈": "陳", "际": "際", "险": "險",
    "陇": "隴", "韦": "韋", "韩": "韓", "风": "風", "飞": "飛", "鲍": "鮑",
    "鸣": "鳴", "鹿": "鹿", "麦": "麥", "黄": "黃", "党": "黨", "黑": "黑",
    "齐": "齊", "齿": "齒", "龙": "龍", "龟": "龜", "临": "臨", "丽": "麗",
    "举": "舉", "务": "務", "动": "動", "劳": "勞", "协": "協", "医": "醫",
    "历": "歷", "只": "隻", "叹": "嘆", "号": "號", "启": "啟", "吴": "吳",
    "吕": "呂", "周": "周", "宁": "寧", "宋": "宋", "官": "官", "宝": "寶",
    "币": "幣", "庆": "慶", "应": "應", "废": "廢", "强": "強", "当": "當",
    "录": "錄", "户": "戶", "拥": "擁", "执": "執", "扫": "掃", "扬": "揚",
    "抚": "撫", "抛": "拋", "扰": "擾", "拨": "撥", "择": "擇", "抬": "抬",
    "摄": "攝", "挥": "揮", "损": "損", "换": "換", "据": "據", "摇": "搖",
    "撑": "撐", "收": "收", "敌": "敵", "数": "數", "断": "斷", "旗": "旗",
    "无": "無", "旧": "舊", "时": "時", "显": "顯", "映": "映", "春": "春",
    "明": "明", "晒": "曬", "普": "普", "暖": "暖", "暴": "暴", "望": "望",
    "未": "未", "末": "末", "本": "本", "术": "術", "机": "機", "杀": "殺",
    "杂": "雜", "权": "權", "条": "條", "来": "來", "杨": "楊", "极": "極",
    "构": "構", "标": "標", "树": "樹", "桥": "橋", "样": "樣", "检": "檢",
    "楼": "樓", "欢": "歡", "欲": "欲", "歌": "歌", "止": "止", "正": "正",
    "步": "步", "武": "武", "岁": "歲", "死": "死", "残": "殘", "段": "段",
    "殷": "殷", "永": "永", "济": "濟", "泼": "潑", "浅": "淺", "法": "法",
    "泡": "泡", "洁": "潔", "浇": "澆", "测": "測", "润": "潤", "液": "液",
    "淡": "淡", "深": "深", "滤": "濾", "激": "激", "点": "點", "燃": "燃",
    "灭": "滅", "灯": "燈", "灿": "燦", "炉": "爐", "烂": "爛", "烧": "燒",
    "热": "熱", "熟": "熟", "爱": "愛", "牧": "牧", "特": "特", "独": "獨",
    "猜": "猜", "猫": "貓", "献": "獻", "玉": "玉", "环": "環", "现": "現",
    "班": "班", "球": "球", "理": "理", "琦": "琦", "琳": "琳", "琴": "琴",
    "琼": "瓊", "瑞": "瑞", "生": "生", "产": "產", "用": "用", "田": "田",
    "由": "由", "甲": "甲", "申": "申", "电": "電", "画": "畫", "疗": "療",
    "疯": "瘋", "疾": "疾", "病": "病", "痛": "痛", "登": "登", "白": "白",
    "百": "百", "益": "益", "盒": "盒", "盘": "盤", "目": "目", "直": "直",
    "相": "相", "盾": "盾", "省": "省", "眉": "眉", "看": "看", "真": "真",
    "眼": "眼", "睡": "睡", "睛": "睛", "知": "知", "短": "短", "石": "石",
    "码": "碼", "研": "研", "础": "礎", "破": "破", "硬": "硬", "确": "確",
    "祥": "祥", "禄": "祿", "祸": "禍", "社": "社", "祝": "祝", "祖": "祖",
    "神": "神", "福": "福", "礼": "禮", "祠": "祠",
    "焕": "煥", "韬": "韜", "烨": "燁", "燧": "燧", "璧": "璧", "炜": "煒",
    "肃": "肅", "卫": "衛", "凤": "鳳", "鸾": "鸞", "诏": "詔", "谥": "諡",
}


def _to_trad(name):
    return "".join(_S2T_MAP.get(ch, ch) for ch in name)


# 只读：SQLite 以 URI 打开，禁止写
def _connect():
    dbs = []
    if os.path.isdir(DB_DIR):
        for root, _, files in os.walk(DB_DIR):
            for f in files:
                if f.endswith(".sqlite3") or f.endswith(".sqlite") or f.endswith(".db"):
                    dbs.append(os.path.join(root, f))
    dbs.sort()
    if not dbs:
        raise FileNotFoundError(
            "本地无 CBDB 库。请先运行:\n"
            "  python tools/datasources/cbdb_download.py"
        )
    db = dbs[-1]
    return sqlite3.connect("file:%s?mode=ro" % db.replace("\\", "/"), uri=True), db


def _tables(cur):
    cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
    return {r[0] for r in cur.fetchall()}


class CBDBAdapter(DataSource):
    SOURCE = "CBDB · 中国历代人物传记数据库（本地 SQLite 只读）"

    def fetch(self, query):
        """把人物查询映射为 person 记录列表。

        query 支持:
          {"name": "熊廷弼"}        按中文名模糊
          {"personid": 12345}       按人物 ID 精确
        """
        conn, db = _connect()
        cur = conn.cursor()
        tabs = _tables(cur)
        table = "BIOG_MAIN" if "BIOG_MAIN" in tabs else (
            "BIO_MAIN" if "BIO_MAIN" in tabs else None)
        if not table:
            conn.close()
            raise RuntimeError("CBDB 库缺少人物主表（BIOG_MAIN/BIO_MAIN）: %s" % sorted(tabs)[:10])

        cols = [c[1] for c in cur.execute("PRAGMA table_info(%s)" % table)]
        # 实际列名（2026-08 版）：c_birthyear / c_deathyear（非 c_birth_year）
        want = [c for c in ("c_personid", "c_name_chn", "c_name",
                            "c_birthyear", "c_deathyear", "c_index_year",
                            "c_female", "c_surname_chn", "c_mingzi_chn")
                if c in cols]
        sel = ", ".join(want)
        try:
            if "personid" in query:
                cur.execute(
                    "SELECT %s FROM %s WHERE c_personid=?"
                    % (sel, table), (int(query["personid"]),))
            elif "name" in query:
                # 同时查简体和繁体（CBDB 存繁体）
                names = [query["name"]]
                t = _to_trad(query["name"])
                if t != query["name"]:
                    names.append(t)
                cond = " OR ".join(["(c_name_chn LIKE ? OR c_name LIKE ?)"] * len(names))
                args = []
                for n in names:
                    args += ["%" + n + "%"] * 2
                cur.execute("SELECT %s FROM %s WHERE %s LIMIT 50"
                            % (sel, table, cond), args)
            else:
                raise ValueError("query 需含 name 或 personid")
            rows = cur.fetchall()
        except sqlite3.OperationalError as e:
            conn.close()
            raise RuntimeError("CBDB 查询失败（列名可能随版本变化）: %s" % e)
        conn.close()

        out = []
        for r in rows:
            d = dict(zip(want, r))
            out.append({
                "id": d.get("c_personid"),
                "name_chn": d.get("c_name_chn"),
                "name": d.get("c_name"),
                "surname": d.get("c_surname_chn"),
                "given": d.get("c_mingzi_chn"),
                "birth": d.get("c_birthyear"),
                "death": d.get("c_deathyear"),
                "index_year": d.get("c_index_year"),
                "female": d.get("c_female"),
                "source": self.SOURCE,
            })
        return out


def _cli():
    ap = argparse.ArgumentParser()
    ap.add_argument("--name", help="中文名模糊查询")
    ap.add_argument("--personid", type=int, help="人物 ID 精确查询")
    ap.add_argument("--check", action="store_true", help="检查本地库状态")
    args = ap.parse_args()

    if args.check:
        try:
            conn, db = _connect()
            cur = conn.cursor()
            cur.execute("SELECT COUNT(*) FROM BIOG_MAIN")
            n = cur.fetchone()[0]
            cur.execute("SELECT COUNT(*) FROM sqlite_master WHERE type='table'")
            print("[cbdb] 库: %s" % db)
            print("[cbdb] 人物数: %s" % n)
            conn.close()
        except Exception as e:
            print("[cbdb] %s" % e)
            return 1
        return 0

    q = {}
    if args.name:
        q["name"] = args.name
    elif args.personid:
        q["personid"] = args.personid
    else:
        ap.print_help()
        return 1

    try:
        rows = CBDBAdapter().fetch(q)
    except Exception as e:
        print("[cbdb] 错误: %s" % e)
        return 1

    print("[cbdb] 命中 %d 条" % len(rows))
    for r in rows[:20]:
        print("  #%s %s（%s）%s–%s" % (
            r["id"], r["name_chn"] or "?", r["name"] or "?",
            r["birth"] if r["birth"] is not None else "?",
            r["death"] if r["death"] is not None else "?"))
    return 0


if __name__ == "__main__":
    sys.exit(_cli())
