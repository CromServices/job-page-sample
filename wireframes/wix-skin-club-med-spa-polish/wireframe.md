# Builder and source notes: Skin Club Wellness polish (not shown on the page)

Fix-job pack, 16 Nov 2026. Do not publish without Nate's go. Dry run only from this seat.

## Files
- `PROMPT.md`: the build quotes, scope coverage, emotion brief, standout.
- `COVERAGE.md`: the same coverage checklist, one row per quoted requirement.
- `screens.html` + `styles.css`: one-page before/after preview of the client's own live Wix site.
- `proofs/desktop-1440.png`, `proofs/phone-390.png` (full page, DPR 2).
- Live site screenshots live in the Director pack attachments, not this preview pack (file weight).

## Sources
- Live site: https://www.skinclubwellness.com (HTTP 200, captured 16 Nov 2026 afternoon AWST).
- Treatment template example: https://www.skinclubwellness.com/treatment/signature-hydrafacial-skin-rejuvenation-at-skin-club-wellness
- Logo: the client's AF monogram (`b01c37_ea00255d504147e0b43fbf49d0686d1f`), cropped and cleaned, 64px desktop / 48px phone.
- Card, High-Performance and treatment photographs: cropped or downloaded from the live Wix media.
- Copy: verbatim from the live site, including “dermal filters.” Spacing after ® and the em dash in “completely — no pinching” are typographic repairs of overlapping or garbled characters, not new marketing lines. Prices ($199 / $525) are the client's published figures.
- Type: Fraunces (their heading face) and Source Sans 3 as a stand-in for their licensed Helvetica Light, self-hosted.
- Palette sampled from the live screenshots: header #2C2C2C, forest #243A2A, cream #F1EADA, taupe #BBA283, card #EBDECF.
- The client's unpublished 90% draft was not available (needs collaborator access after award). Befores are the public live site. A short note in the pack manifest records that the draft may differ.

## Checks
- Body 18px desktop, 17px phone. Buttons have padding and do not clip. Logo 64 / 48. WCAG AA on preview and after text (forest on cream; forest on taupe for buttons). Gold is not used for small text on cream.
- Phone first view should stay at or under 300 KB: intro is type and the logo only; section photographs are lazy-loaded.
