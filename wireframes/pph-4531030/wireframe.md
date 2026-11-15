# Builder notes (not shown on the page)

## Source
- Live site read 15 Nov 2026, 16:47 AWST: https://mmpglobaladvisory.com (home, /services, /areas, /guides, /about).
- Logo: https://mmpglobaladvisory.com/assets/international-doorway-logo-D45yZzCw.png (1268×423, transparent). Cleaned only: resized to 128px tall for a 64px desktop / 48px phone display at 2×. Already tight-cropped; no recolouring.
- Palette from the live CSS variables (oklch converted): primary navy #102a42, secondary teal #2b5d57, gold #d8bc86, accent mint #d9eee4, background #fcfcfa, border #d5d0c7.
- Hero photograph: their own `greenwich-photograph.jpg` (Wikimedia Commons, File:312SFEC_LONDON-20070917.JPG, Steve F-E-Cameron, CC BY-SA 3.0). Credit kept on the image, as on their site. The 1600 file is their 1280px original re-encoded to WebP.
- Copy: their own words, shortened. The £175 Local Property Check fee and the company registration line are copied from the live site.
- Fonts: their site uses Roboto. The concept uses Manrope for headings and body (house standard); keeping Roboto for body text is an option if they prefer.

## Portfolio
- Cite **little-chip-dental** (https://little-chip-dental.lovable.app/, citable: yes per registry, confirmed by Nate via Director 15 Nov 2026). Read 15 Nov 2026, 17:12 AWST: home and /book.
- Patterns taken from it: per-service "Enquire about …" buttons that pre-select the enquiry form option (like its "Book with Dr …" links to /book?practitioner=…); a separate staff/owner sign-in link in the footer (like its "Clinic sign-in"), which also gives the owner dashboard a visible way in. Everything else is unchanged from v1 of this pack.
- advocate-4-u is also citable (https://advocate4u.lovable.app) but was not used as a pattern.

## Notes for Director’s bid
- Stay on Lovable / React / TanStack Start; no platform change.
- Remove the public "Edit with Lovable" badge from the live site.
- Accessibility: their hero lede and four-checks text sat on low-contrast backgrounds; the concept fixes this with a stronger scrim.
- Google Maps: client’s own API key with HTTP referrer restriction to their domain; Maps billing is the client’s (free tier likely covers it; flag if above about A$20/mo).
- Suggested milestones: 1 paid initial review and audit report; 2 navigation, home and service pages; 3 areas map, forms, notifications, accounts and payments check; 4 local SEO foundations with page addresses preserved; 5 legal wording (when solicitor approves), test, publish, handover.
