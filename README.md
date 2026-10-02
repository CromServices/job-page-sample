# Crom Services · job-page sample

Public GitHub Pages site for Crom Services job-page and interaction samples.

Live root: [https://cromservices.github.io/job-page-sample/](https://cromservices.github.io/job-page-sample/)

## Live interaction demos

Two public React demos (static HTML + vendored React 18, no build step). After merge to `main`, GitHub Pages serves:

1. **Services card flip** — 3D CSS / React flip on sample service cards  
   https://cromservices.github.io/job-page-sample/demos/card-flip/

2. **Before / after slider** — drag or keyboard range  
   https://cromservices.github.io/job-page-sample/demos/before-after/

Hub: https://cromservices.github.io/job-page-sample/demos/

These are **Crom interaction samples**, not client sites. No invented clinic names, no HIPAA language, no clinical claims. Card labels (Whitening / Implants / Check-up) are marketing-only. The slider uses placeholder smiles, not patient photos.

Palette: midnight navy (`#0a1628`) with brushed-gold accents.

## Local preview

From the repo root:

```bash
python3 -m http.server 8080
```

Then open:

- http://127.0.0.1:8080/demos/card-flip/
- http://127.0.0.1:8080/demos/before-after/

Existing job-page and packs URLs are unchanged:

- https://cromservices.github.io/job-page-sample/
- https://cromservices.github.io/job-page-sample/packs/

## Packs page cards

The card grid on `/packs/` is generated. Edit `packs/packs.json` (card copy, thumbs, buttons), then:

```bash
python3 tools/render_packs.py          # rewrites the block between the packs:cards markers in packs/index.html
python3 tools/render_packs.py --check  # exits 1 if packs/index.html is out of date
```

`packs.json` holds only public card fields. Thumbs get a `?v=` cache-buster (the `v` in the data, or a hash of the image file). Everything outside the marker comments in `packs/index.html` is left alone.
