# Builder and source notes: GroundWell (not shown on the page)

Practice pack, 16 Nov 2026. Not a bid. Do not publish without Nate's go.

## Files
- `PROMPT.md`: the prompt (client idea and every quoted requirement first, then key ideas, emotion, standout moment, scope coverage).
- `screens.html` + `styles.css`: all 14 pages, then the shared booking page, two CMS templates, three pop-ups plus the pause state, and the owner view. A page bar at the top jumps to each one.
- `src/build.py`: generates `screens.html` from ONE list of offerings and ONE list of certifications. That is the CMS idea made literal: a record entered once shows on Home (if featured), its modality page, Classes & Events and its detail template.
- `proofs/desktop-1440.png`, `proofs/phone-390.png`, `proofs/tablet-834.png` (full page, DPR 2), `proofs/contact-sheet.jpg` (all 19 screens).
- `files/groundwell-sample-calendar-nov-dec-2026.pdf`: the client's own sample PDF calendar, linked from header, Classes & Events and footer.

## Portfolio (nearest citable rows in portfolio/registry.md)
- **general-power-wix** (Wix client rebuild, citable). Wix CMS experience.
- **little-chip-dental** (Lovable booking demo, citable). Booking flow example. It is not Acuity; do not present it as Acuity.
- No citable Acuity or wellness-center row exists. Say so honestly in any bid; do not invent Acuity case studies.

## Sources
- Design direction: the client's mockup https://groundwell-expanded-review.asknow.chatgpt.site/ (mirrored in Director's `attachments/mockup-site/`). Page list, nav, footer, palette (#F8F8F5, #FDFDF9, #E5E7DE, #353C32, #4D5141, #626650, #D2D2C8), logo accent #936F4F, Cormorant Garamond + League Spartan, the hero line and three doors are theirs.
- Logo: `images/groundwell-logo.svg`, the client's own file, unchanged, 64px desktop / 48px phone.
- Copy: the mockup's real lines are kept verbatim ("A Place to Pause", door copy, event descriptions, "Be part of something new.", "Not sure where to begin?..."). Where the mockup had lorem ipsum, short calm sample copy is written and tagged "Sample content". Practitioner names (Avery, Morgan, Quinn, River), dates and prices are the mockup's and PDF's own fictional samples, tagged the same way. Reiki 2, Clinic, Tuning Forks, EFT and Breathwork durations, the hours and the first-visit details are our samples.
- No reviews invented: the testimonials block shows GroundWell's own promise plus a "Share your experience" path. Replace with real visitor words, with permission.
- Address, phone, email, Instagram and Facebook: from the mockup footer.
- Map: OpenStreetMap tiles around 334 East Garfield Road, Aurora, OH (geocoded via Nominatim), desaturated. Attribution "© OpenStreetMap contributors" is on the image. In Wix, use the Google Maps element.

| Image | Source |
|---|---|
| hero, forest, leaves | Client's mockup photographs (`attachments/mockup-site/assets/`) |
| sound | https://www.pexels.com/photo/6252126/ (Antoni Shkraba) |
| reiki | https://www.pexels.com/photo/5240733/ (Anete Lusina) |
| session | https://www.pexels.com/photo/6998265/ (Arina Krasnikova) |
| forks | https://www.pexels.com/photo/6194031/ (Thirdman) |
| somatics | https://www.pexels.com/photo/4534681/ |
| drum | https://www.pexels.com/photo/13029700/ (Mauricio Gomes) |
| instruments | https://www.pexels.com/photo/5602498/ (cottonbro studio) |
| mentor | https://www.pexels.com/photo/6252090/ (Antoni Shkraba) |
| class | https://www.pexels.com/photo/14466078/ |
| bowl | https://www.pexels.com/photo/11889659/ (Connor Scott McManus) |
| gong | https://www.pexels.com/photo/6252085/ (Antoni Shkraba) |
Licence: https://www.pexels.com/license/. All are WebP at 800 and 1600px, lazy-loaded below the fold.

## Approach for the bid (Director)
- Wix site, client-owned account. Two CMS collections: Offerings (class/workshop/event, ~13 entries) and Certifications (~4). Fields: title, slug, modality (multi-reference), category, description, image, dates (start, end, recurring list), display price, duration, facilitator, guest collaborator (name, short bio, photo), Acuity booking link or class ID, Featured, Published/Draft, SEO title, meta description. Dynamic pages for each template; repeaters on Home (filter Featured = true, sort by next date), modality pages (filter by modality), Classes & Events (sort by next date ascending, category filter).
- Acuity: appointment types for each individual session at 60/90 min; practitioners as calendars; the Treatment Room and Sound Room as shared resources so overlapping bookings are blocked; classes and series as Acuity classes (multi-day as a package/series); intake form and waiver on each type; coupons; add-ons; gift certificates; reminders; Google/Outlook calendar sync per practitioner.
- Individual bookings: Acuity's scheduler embedded on one shared Wix page (/book-a-session), deep-linked per session type. Groups: one reusable Wix lightbox holding the Acuity embed, opened with the class's own link. On mobile, Acuity's embed runs inside an iframe at full width. It uses Acuity's own fonts and step order, so the wireframe's step labels and styling will look slightly different; the colours can be matched in Acuity's appearance settings. Some long forms may scroll inside the frame, so test on 375px phones.
- What lives where: see the table in the owner view. In short, Wix holds the content and SEO; Acuity holds bookable times, charged price, capacity, rooms, payments, coupons, gift certificates and reminders. The dates and price shown on a listing are typed in both until an optional automatic sync is added. Quote that sync separately, as the client asked.
- Pop-ups: three Wix lightboxes (booking, FAQs/cancellation, privacy/terms), reusable from any page.
- Standout: the one-minute pause. A CSS or Lottie ring in the hero (Wix custom element or Lottie embed), with a lightbox for the full-screen pause. Honour prefers-reduced-motion.
- SEO: descriptive slugs with location (for example /sound-bath-aurora-oh), a unique title and meta per page (shown in each page strip), SEO fields on both CMS templates, alt text on every image, LocalBusiness/HealthAndBeautyBusiness JSON-LD, sitemap, Search Console verification, internal links between practices and the three doors.
- Handover: initial content entry, one consolidated replacement round, domain connection, tests (forms, bookings, payments, room conflicts, add-ons, gift certificates), recorded walkthrough of Wix CMS and Acuity.
- Out of base scope (per client): ongoing maintenance, PDF-calendar production, retail sales, custom Wix–Acuity sync.
- Subscriptions are the client's: a Wix premium plan and an Acuity plan with gift certificates and resources. Both are likely above about A$20/mo, so flag them to Nate in the bid.

## Checks run
- axe-core 4.14 (WCAG 2 A/AA) at 1440 and 390: 0 violations.
- No horizontal overflow at 390; no clipped buttons.
- Body 18px desktop, 17px phone. H1 "A Place / to Pause" on two lines. Hero flush under the header.
- Phone first view (390px, DPR 2): about 212 KB transferred (under 300 KB). See `proofs/proof-log.json`.
- The desktop proof is kept under 31,000 CSS px tall so the 2880px-wide PNG stays under Pillow's pixel limit in publish.py.
