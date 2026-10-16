#!/usr/bin/env python3
"""L-054 banned-pattern check for this public sample site. Exits 1 on any hit.
Scans tracked text files and the text of the sample PDFs. Exceptions: .l054-allow (regex on file:line:text)."""
import pathlib, re, subprocess, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
RULES = [
    ("private key", r"-----BEGIN [A-Z ]*PRIVATE KEY-----"),
    ("GitHub token", r"\bgh[pousr]_[A-Za-z0-9]{30,}"),
    ("JWT / API key", r"\beyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.|\bsk-[A-Za-z0-9]{20,}|\bAC[0-9a-f]{32}\b"),
    ("AU mobile number", r"(\+?61\s?4|\b04)\d{2}[\s-]?\d{3}[\s-]?\d{3}\b"),
    ("bot/AI wording", r"\b(chat ?bot|AI assistant|ChatGPT|OpenAI|Claude|Grok|LLM)\b"),
]
SAMPLE_ONLY = [("real client in sample docs", r"\b(Alex|Guru|2121274)\b")]
TEXT = {".html", ".js", ".css", ".json", ".md", ".py", ".sh", ".txt", ".yml"}
allow = [re.compile(l.strip()) for l in (ROOT / ".l054-allow").read_text().splitlines()
         if l.strip() and not l.startswith("#")] if (ROOT / ".l054-allow").exists() else []
files = subprocess.run(["git", "ls-files"], cwd=ROOT, capture_output=True, text=True, check=True).stdout.split()
hits = 0
def scan(name, text, rules):
    global hits
    for i, line in enumerate(text.splitlines(), 1):
        for label, rx in rules:
            if re.search(rx, line, re.I if label.startswith("bot") else 0):
                ref = f"{name}:{i}:{line.strip()}"
                if not any(a.search(ref) for a in allow):
                    print(f"{name}:{i}: {label}"); hits += 1
for f in files:
    p = ROOT / f
    if f == "tools/check_banned.py" or not p.is_file():
        continue
    sample = f.startswith("sample-docs/") or f == "index.html"
    if p.suffix in TEXT:
        scan(f, p.read_text(errors="ignore"), RULES + (SAMPLE_ONLY if sample else []))
    elif p.suffix == ".pdf":
        txt = subprocess.run(["pdftotext", str(p), "-"], capture_output=True, text=True).stdout
        scan(f, txt, RULES + SAMPLE_ONLY)
if hits:
    print(f"check_banned: {hits} hit(s)"); sys.exit(1)
print(f"check_banned: {len(files)} files clean")
