#!/usr/bin/env bash
# Pre-render the sample Scope / Delivery documents (HTML + PDF) with Brand's locked v1
# templates, unchanged. The renderer lives with Brand, not in this public repo:
#   BRAND_TEMPLATES=/path/to/brand/templates tools/build_sample_docs.sh
# Output: sample-docs/out/{scope,delivery}.html|.pdf (HTML links ../src/doc.css, copied verbatim).
set -euo pipefail
cd "$(dirname "$0")/.."
: "${BRAND_TEMPLATES:?set BRAND_TEMPLATES to the Brand templates folder}"
tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT
cp -r "$BRAND_TEMPLATES"/{src,sections,schema} "$tmp"/
(cd "$BRAND_TEMPLATES" && md5sum -c --quiet MD5SUMS.txt)   # Brand lock: templates unchanged
mkdir -p "$tmp/out" "$tmp/data" sample-docs/out
for k in scope delivery; do
  cp "sample-docs/data/$k.json" "$tmp/data/$k.json"
  python3 "$tmp/src/render.py" "$tmp/data/$k.json" --pdf >/dev/null
  cp "$tmp/out/$k.html" "$tmp/out/$k.pdf" sample-docs/out/
done
cp "$tmp/src/doc.css" sample-docs/src/doc.css
(cd sample-docs && md5sum -c --quiet DOC-CSS-MD5.txt)
echo "sample docs rendered"
