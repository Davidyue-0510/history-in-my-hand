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
                cur.execute(
                    "SELECT %s FROM %s WHERE c_name_chn LIKE ? OR c_name LIKE ? LIMIT 50"
                    % (sel, table), ("%" + query["name"] + "%",) * 2)
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
