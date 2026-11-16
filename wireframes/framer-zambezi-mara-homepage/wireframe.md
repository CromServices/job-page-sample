# Builder and source notes: Zambezi-Mara (not shown on the page)

Practice pack, 16 Nov 2026. Not a bid. Do not publish without Nate's go.

## Files
- `PROMPT.md`: the prompt (their idea and every quoted requirement first, then key ideas, emotion, standout moment, scope coverage).
- `screens.html` + `styles.css`: the polished homepage, desktop and phone (375–430).
- `SPEC.md`: the Framer-compatible specification, key improvements and the three staging weaknesses (the screening answers).
- Proofs (full page, DPR 2): `proofs/desktop-1440.png`, `proofs/phone-375.png`, `proofs/phone-390.png`, `proofs/phone-430.png`; plus `proofs/phone-menu-open.png` (menu open) and `proofs/standout-approach.png` (three frames of The Approach).

## Portfolio (nearest citable rows in portfolio/registry.md)
- **softpunch-framer** (https://softpunch.framer.website, citable) and **quayhold-framer** (https://quayhold.framer.website, citable). Neither is film or entertainment; present them as Framer craft, not as cinematic case studies.

## Sources
- Staging homepage fetched 16 Nov 2026 with Playwright: https://zambezimara.framer.website/revamp/home-v2. All copy on the page is copied from it verbatim, in order, including the title and meta description. One exception: the staging footer heading reads "CharactERs" (a casing slip); the wireframe shows "Characters". Flag it to the client rather than treat it as a copy change.
- Images: the client's own, from the staging site (framerusercontent.com): ensemble 4BhVMCRbiMRxoaIellumVip75vw, Sefu DRvnnlPfQuieiPPbavaMTzf6fEw, Aziza UevpqWJvSC4wfv6kaUlKK14reqQ, Moos Moos gMbe3nVmXTdAJwfLxlC5kz3TIrw, journal images aUEad5xlRtUV4kB3twfiVPHJ0 and 81mkeFQuCn7iYyHXKWdGTkfX1Q, logo 4UfLLZWCpKMrqdx5lsJ7p3J45U, pattern strip 1ztTooIyZ0ZMXdiyM2jI178yFQU. Re-encoded to WebP; not edited beyond crop and size. CSS adds the vignette, grain and greyscale.
- The post's "five supplied cinematic images" (the Wilson masters) were not attached to the posting. Their staging images fill the five slots and are labelled in `SPEC.md`. Swap them for the masters when supplied.
- UI reference: `attachments/IMG_9568.png`. Kept: left-aligned ivory serif COME CLOSER., gold rule, gold CTA, dark frame, two-panel SEFU slider with pagination. Pushed: closer crop, letterbox, tab navigation, progress line, The Approach.
- Navigation: kept as staging (Watch, Characters, World, Journal, About, with the logo as Home). The reference shows Home, Watch, World, Characters, Journal. We preserved the live order and About because the post says to preserve navigation. Ask which order the owner prefers.
- Fonts: Cormorant Garamond (display, closest free match to the reference serif) and Manrope (already on staging). Both OFL / Google Fonts. Subset WOFF2 files in `fonts/`.

## Bid notes (Director)
- Budget is US$30 fixed. Deliver the improved homepage UI (desktop + 375/390/430), `SPEC.md`, the brief explanation and one revision. Direct Framer implementation is optional, so leave it out of the $30 unless Nate decides otherwise.
- Screening Q1: use the three weaknesses in `SPEC.md`. Q2: improve on the reference through closeness (crop), restraint (two typefaces, gold used sparingly) and the line motif, while keeping their copy, components and palette; The Approach uses only native Framer effects.
- One reasonable revision is included as a process step after feedback.

## Checks run
- axe-core 4.14 (WCAG 2 A/AA) at 1440 and 390: 0 violations.
- No horizontal overflow at 375, 390 or 430; buttons do not clip.
- Body 18px desktop / 17px phone. H1 COME CLOSER. on two lines. Hero flush under a transparent nav.
- Phone first view (DPR 2): about 219 KB at 375/390 and 289 KB at 430 (under 300 KB). See `proofs/proof-log.json`.
