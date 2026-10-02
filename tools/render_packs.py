#!/usr/bin/env python3
"""Render the packs page card grid from packs/packs.json.

    python3 tools/render_packs.py           # rewrite packs/index.html in place
    python3 tools/render_packs.py --check   # exit 1 if packs/index.html is out of date

packs.json is the PUBLIC subset of the Crom proof list (generated upstream; it
holds only card copy, CTAs and thumbs). Only cards with "public": true and CTAs
with "public": true are rendered. The block between the two marker comments in
packs/index.html is replaced; everything else on the page is left alone.
Thumbs get ?v=<cachebust>: the explicit "v" from the data, or a hash of the file.
Standard library only.
"""
import hashlib, html, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGE = os.path.join(ROOT, "packs", "index.html")
DATA = os.path.join(ROOT, "packs", "packs.json")
START = "<!-- packs:cards:start (generated from packs/packs.json by tools/render_packs.py; edit the data, not this block) -->"
END = "<!-- packs:cards:end -->"
ALLOWED_CARD = {"id", "public", "title", "body_html", "thumb", "ctas"}
ALLOWED_THUMB = {"png", "webp", "alt", "v"}
ALLOWED_CTA = {"label", "href", "public"}


def esc(s):
    return html.escape(s, quote=True)


def bust(thumb, key):
    if thumb.get("v"):
        return str(thumb["v"])
    with open(os.path.join(ROOT, "packs", thumb[key]), "rb") as f:
        return hashlib.md5(f.read()).hexdigest()[:10]


def card_html(c):
    t = c["thumb"]
    v = bust(t, "png")
    alt = esc(t["alt"])
    if t.get("webp"):
        media = (
            '          <picture>\n'
            f'            <source srcset="./{esc(t["webp"])}?v={v}" type="image/webp" />\n'
            f'            <img src="./{esc(t["png"])}?v={v}" width="1600" height="900" alt="{alt}" />\n'
            '          </picture>\n'
        )
    else:
        media = f'          <img src="./{esc(t["png"])}?v={v}" width="1600" height="900" alt="{alt}" />\n'
    ctas = "".join(
        f'          <a class="cta" href="{esc(x["href"])}" rel="noopener noreferrer">{esc(x["label"])}</a>\n'
        for x in c["ctas"] if x.get("public") is True
    )
    return (
        '      <article class="pack">\n'
        '        <div class="pack-media">\n'
        f'{media}'
        '        </div>\n'
        '        <div class="pack-body">\n'
        f'          <h2>{esc(c["title"])}</h2>\n'
        f'          <p>{c["body_html"]}</p>\n'
        f'{ctas}'
        '        </div>\n'
        '      </article>\n'
    )


def validate(d):
    for c in d["cards"]:
        extra = set(c) - ALLOWED_CARD
        if extra:
            sys.exit(f"card {c.get('id')}: non-public fields not allowed in packs.json: {sorted(extra)}")
        if set(c["thumb"]) - ALLOWED_THUMB:
            sys.exit(f"card {c['id']}: bad thumb fields")
        for x in c["ctas"]:
            if set(x) - ALLOWED_CTA:
                sys.exit(f"card {c['id']}: bad cta fields")
            if x.get("public") is True and not x["href"].startswith("https://"):
                sys.exit(f"card {c['id']}: CTA href must be https: {x['href']}")
        low = json.dumps(c).lower()
        for bad in ("mailto:", "gmail", "@"):
            if bad in low:
                sys.exit(f"card {c['id']}: contact details are not allowed on the packs page ({bad})")


def render():
    with open(DATA, encoding="utf-8") as f:
        d = json.load(f)
    validate(d)
    block = "\n".join(card_html(c) for c in d["cards"] if c.get("public") is True)
    with open(PAGE, encoding="utf-8") as f:
        page = f.read()
    if START not in page or END not in page:
        sys.exit("marker comments not found in packs/index.html")
    head, rest = page.split(START, 1)
    _, tail = rest.split(END, 1)
    return page, head + START + "\n" + block + "      " + END + tail


if __name__ == "__main__":
    old, new = render()
    if "--check" in sys.argv:
        if old != new:
            print("packs/index.html is out of date: run python3 tools/render_packs.py")
            sys.exit(1)
        print("packs/index.html is up to date")
    else:
        with open(PAGE, "w", encoding="utf-8") as f:
            f.write(new)
        print("rendered", sum(1 for _ in json.load(open(DATA))["cards"]), "cards into packs/index.html")
