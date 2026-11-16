# Wireframe prompt: GroundWell Sound & Wellness Center (Wix + Acuity)

Refinement wireframe, 16 Nov 2026, for Director. Practice pack built to bid standard. Not a bid, not published.

The client's own idea comes first. GroundWell already has a direction: an interactive mockup with 14 pages, their logo, an ivory, sage and olive palette, Cormorant Garamond headings, League Spartan labels and the line "A Place to Pause". This wireframe builds THAT mockup out, page for page, with every function working as a real-looking screen. It does not replace it with a new design.

## The build

The client's idea, in their words: "I’m looking for an experienced Wix developer to build a website for GroundWell Sound & Wellness Center using an established interactive mockup." "The design direction, navigation, and page structure are already established. I need the website implemented in Wix, integrated with Acuity Scheduling, and built with SEO and easy maintenance in mind."

Every Build requirement, quoted from the post:

Pages
- "The website includes 14 main pages: Home, Sound, Reiki, Tuning Forks, Somatics, Drumming, Mentorship, Classes & Events, Individual Sessions, Certifications & Training, About, Contact & Visit, Sound Instruments, and Gift Certificates."
- "Also include one shared individual appointment-booking page."

Shared CMS templates
- "All class, workshop, and event detail pages must use ONE shared Wix CMS template. Adding an offering should involve entering content, not designing or manually duplicating a page."
- "One shared class/workshop/event template with approximately 13 initial entries."
- "One shared certification template with approximately four initial entries."
- "Entering an offering once in Wix should populate its detail page and connected listings, including Classes & Events, relevant modality pages, and the homepage when marked as featured."
- "I need to manage descriptions, images, dates, prices, booking links, and publication status myself. Upcoming listings should display chronologically."

Acuity Scheduling
- "Individual appointments with multiple practitioners and session lengths."
- "Classes, workshops, certifications, and mentorship."
- "Recurring dates and multi-day training."
- "Shared treatment-room scheduling and conflict prevention."
- "Payments, coupon codes, intake forms, waivers, confirmations, and reminders."
- "Optional registration add-ons."
- "Gift certificate purchasing and redemption."
- "Availability settings and personal-calendar syncing."
- "Individual appointments should use an embedded booking page. Group offerings should use a reusable booking pop-up where supported."
- "Explain which information requires updates in Wix and which requires updates in Acuity. Quote automatic synchronization separately."

Design and features
- "Follow the established mockup and branding."
- "Responsive desktop, tablet, and mobile layouts."
- "Consistent navigation, header, and footer."
- "Compact team biographies with More/Less expansion."
- "Guest collaborator information on relevant offering pages."
- "Contact form and email signup."
- "Map and visitor information."
- "Replaceable photographs and testimonials."
- "Downloadable PDF calendar link."
- "Three reusable pop-up layouts: booking, FAQs/cancellation policies, and privacy/terms."
- "The Sound Instruments page is informational, with an email button to request an appointment. No online retail store or inventory management is needed."
- "The Gift Certificates page should connect to Acuity purchasing and be linked from the footer. Certificates will exclude retail purchases."

SEO
- "Logical page structure, headings, and descriptive URLs. Include location in page names."
- "Unique page titles and meta descriptions." "SEO fields for CMS-generated offering pages." "Image optimization, alt text, and mobile performance." "Internal linking and local SEO foundations." "Appropriate business structured data." "Sitemap, indexing settings, and Google Search Console setup."

Content and handover
- "I will supply branding, final copy, photographs, policies, and offering details. Use clearly labeled placeholders during development."
- "Include initial content entry, one consolidated final content-replacement round, domain connection, and testing of forms, bookings, payments, room conflicts, add-ons, and gift certificates."
- "Build in accounts I own and provide a recorded walkthrough showing how to manage Wix content and Acuity."
- Out of base scope, per the post: "Ongoing maintenance, PDF-calendar production, online retail sales, and custom Wix–Acuity synchronization."

What they will judge: "Relevant Wix CMS and Acuity examples", "Your proposed approach and any limitations", a fixed-price quote, timeline, subscriptions, revisions and support.

## Scope coverage

| Requirement | Where it appears | Shown |
|---|---|---|
| Home | `#p-home`: hero, three doors, featured listings, community words, email signup | yes |
| Sound | `#p-sound`: practice intro, what to expect, upcoming sound listings, individual sound session, link to Sound Instruments | yes |
| Reiki | `#p-reiki`: four certifications, clinic/share/intro listings, individual Reiki with practitioner choice, mentorship link | yes |
| Tuning Forks | `#p-tuning-forks`: intro, workshop listing, tuning fork session | yes |
| Somatics | `#p-somatics`: intro, Somatic Self-Care, EFT and Breathwork listings | yes |
| Drumming | `#p-drumming`: drum circle and frame-drum workshop | yes |
| Mentorship | `#p-mentorship`: Reiki and Sound mentorship, 60/90 min, Acuity booking button | yes |
| Classes & Events | `#p-classes-events`: category filters, all 13 entries grouped by month in date order, PDF calendar card | yes |
| Individual Sessions | `#p-individual-sessions`: four sessions, 60/90 min, practitioner choice, Book a session, link to bios | yes |
| Certifications & Training | `#p-certifications-training`: four certification entries plus a Sound Education interest card | yes |
| About | `#p-about`: story, team bios with More/Less, guest collaborators, first visit | yes |
| Contact & Visit | `#p-contact-visit`: contact form, map, visitor information, hours, email signup | yes |
| Sound Instruments | `#p-sound-instruments`: informational instrument families, "Email to request an appointment" button, no shop | yes |
| Gift Certificates | `#p-gift-certificates`: Acuity purchase form state, redemption steps, retail exclusion; footer link | yes |
| One shared individual appointment-booking page | `#b-booking`: embedded Acuity flow, five steps from session to confirmation | yes |
| One shared class/workshop/event CMS template with about 13 entries | `#t-event`: one template (An Evening of Sound); the same records feed `#p-classes-events` (13) | yes |
| One shared certification CMS template with about 4 entries | `#t-course`: one template (Usui Reiki Master Training); 4 records on `#p-certifications-training` | yes |
| Enter once: detail page, Classes & Events, modality pages, Home when featured | `#o-owner` "Appears on" panel; the same record visibly on `#p-home`, `#p-sound`, `#p-classes-events`, `#t-event` | yes |
| Client manages descriptions, images, dates, prices, booking links, publication status | `#o-owner`: Wix CMS collection with those fields, Featured toggle and Published/Draft status | yes |
| Upcoming listings in date order | `#p-classes-events` month groups; every modality "Coming up" list; Home featured row | yes |
| Acuity: individual appointments, multiple practitioners and lengths | `#b-booking` steps 1–3 (session, 60/90 min, Avery/Morgan/Quinn/any) | yes |
| Acuity: classes, workshops, certifications, mentorship | Register buttons on every listing; `#x-popups` booking pop-up; `#p-mentorship` booking | yes |
| Acuity: recurring dates and multi-day training | Recurring "Also" date chips on `#p-classes-events` (drum circle, sound evening, meditation, Reiki share) and `#t-event`; three-day series on `#t-course` | yes |
| Acuity: shared treatment-room scheduling and conflict prevention | `#o-owner` Acuity rooms panel showing a blocked overlapping slot; greyed time in `#b-booking` step 4 | yes |
| Acuity: payments, coupon codes, intake forms, waivers, confirmations, reminders | `#b-booking` step 5 (intake, waiver, coupon, card) and confirmation with reminder | yes |
| Acuity: optional registration add-ons | `#x-popups` booking pop-up (frame-drum kit / journal add-on) and `#t-course` (manual add-on) | yes |
| Acuity: gift certificate purchasing and redemption | `#p-gift-certificates` purchase form and redemption code field in `#b-booking` step 5 | yes |
| Acuity: availability settings and personal-calendar syncing | `#o-owner` availability and calendar-sync panel; "Add to my calendar" on confirmation | yes |
| Embedded booking page for individuals; reusable pop-up for groups | `#b-booking` (embedded) and `#x-popups` booking pop-up (groups) | yes |
| Explain Wix vs Acuity updates; quote sync separately | `#o-owner` "Update here" table; quote note in `wireframe.md` | yes |
| Mockup bookings vs Acuity tools, especially mobile | `wireframe.md` approach notes; phone proof shows the embed stacked | yes |
| Follow the established mockup and branding | Every page: their logo, palette, Cormorant/League Spartan, nav, footer and page order | yes |
| Responsive desktop, tablet, and mobile layouts | `proofs/desktop-1440.png`, `proofs/tablet-834.png`, `proofs/phone-390.png` | yes |
| Consistent navigation, header, and footer | One header (Explore Offerings menu, Print Calendar PDF) and one footer across all pages | yes |
| Compact team biographies with More/Less | `#p-about` team (Avery open, Morgan and Quinn closed); linked from `#p-individual-sessions` | yes |
| Guest collaborator information on relevant offering pages | `#t-event` "With Avery and a guest violinist"; Sound listings | yes |
| Contact form and email signup | `#p-contact-visit` form; signup on `#p-home` and `#p-contact-visit` | yes |
| Map and visitor information | `#p-contact-visit` map of 334 East Garfield Road, parking, access, hours | yes |
| Replaceable photographs and testimonials | Photo frames swap from the CMS; `#p-home` community words block with "Share your experience" | yes |
| Downloadable PDF calendar link | Header "Print Calendar PDF", `#p-classes-events` card, footer; links their sample PDF | yes |
| Three pop-ups: booking, FAQs/cancellation, privacy/terms | `#x-popups`: all three layouts | yes |
| Foundational SEO, location in names, unique titles, CMS SEO fields | URL and title strip on every page (for example /sound-bath-aurora-oh); SEO fields in `#o-owner` | yes |
| Alt text, image optimisation, mobile performance | Alt on every image; WebP 800/1600; phone first view measured in `wireframe.md` | yes |
| Internal linking, local SEO, structured data, sitemap, Search Console | Cross-links between practices and doors; JSON-LD in `screens.html`; plan in `wireframe.md` | yes |
| Labelled sample content until final copy arrives | "Sample content" tags on schedules, bios, prices and copy blocks | yes |
| Initial content entry, one replacement round, domain, testing | `wireframe.md` handover plan | yes |
| Client-owned accounts and recorded walkthrough | `wireframe.md` handover plan | yes |
| No retail store, no custom sync, no maintenance or PDF production in base | Sound Instruments has no cart; `wireframe.md` exclusions | yes |

## Feeling from the scope

Their own words set the feeling: "A Place to Pause", "A wellness and education center where you can pause, reconnect and explore practices that nurture your well-being", and "Not sure where to begin? Reach out and we’ll help you choose." Director's scope adds: a quiet center, "not a clinic, a gym, or a shop", where booking never feels "like a shopping cart".

## Key design ideas

Three ideas taken from their mockup and their line "A Place to Pause". Each one decides something on the page.

1. **Stillness.** The site should slow the visitor down the way the room does.
   - Imagery: their own mockup photographs first (the singing bowl in the forest, the forest path, the leaves). Extra photographs show the real practice (bowls and gong, Reiki hands, a tuning fork, a frame drum) in warm, low light. No smiling stock crowds.
   - Layout: generous ivory space, one idea per band, a slow vertical rhythm. The hero is a single breath: their H1 across two lines, one button.
   - Type: their Cormorant Garamond at large sizes with loose leading; League Spartan only for small labels; 18px body (17px on phone).
2. **Grounded warmth.** Earth, not spa luxury.
   - Imagery: wood, bronze, moss, hands. Their logo's brown sun (#936F4F) is the one warm accent.
   - Layout: sage (#E5E7DE) bands alternate with ivory, like moving between rooms. Olive (#353C32) is the ink and the button colour, as in their mockup.
   - Type: italic Cormorant for the gentle asides ("Sound & Strings, with a guest violinist").
3. **Simple, looked-after paths.** Every page ends in one clear next step, never a cart.
   - Imagery: none on forms; quiet is the point.
   - Layout: dates first and in order; one "Register" or "Book a session" per card; the Acuity steps one at a time with a visible "Step 2 of 5"; the three doors (Classes & Events, Individual Sessions, Certifications & Training) repeat on every modality page.
   - Type: dates in League Spartan caps so they scan; prices quiet beside them, never shouted.

## Emotion of the scope

Client wants customers to feel: "A Place to Pause"; that they can "pause, reconnect and explore practices that nurture your well-being"; and, when unsure, that "we’ll help you choose." Director's scope: a quiet center, "not a clinic, a gym, or a shop".

**Received, and allowed to slow down.**

Not a task. The exhale of walking into a room where nobody is rushing you.

### Feeling journey

#### Arrive — settled
- Feeling word: settled
- Inner voice: "Oh. My shoulders just dropped. There is time here."
- Design levers: their singing-bowl photograph flush under the nav; "A Place to Pause" over two lines; one white button; a slow ring around the bowl that breathes at six breaths a minute; their logo at 64px.

#### Explore — curious
- Feeling word: curious
- Inner voice: "Sound, Reiki, tuning forks, drumming. Each one sounds gentle enough to try."
- Design levers: one calm page per practice with its own photograph; "What to expect" written plainly; the next three dates for that practice pulled from the same listings; guest collaborators named in italic.

#### Decide — cared
- Feeling word: cared
- Inner voice: "Someone has thought about how I'll feel on the day: where to park, what to wear, who I'll meet."
- Design levers: compact bios with More/Less; first-visit details; practitioner choice with "Any available practitioner"; 60 or 90 minutes side by side; policies one tap away in a pop-up, not hidden.

#### Act — ease
- Feeling word: ease
- Inner voice: "That was gentle. Two choices, a time, my details, done."
- Design levers: Acuity steps one at a time with "Step 2 of 5"; large date cells; intake and waiver in plain words; coupon and add-on tucked under a quiet link; a full-width olive button that never clips.

#### After — welcomed
- Feeling word: welcomed
- Inner voice: "They'll remind me. And I'd like to bring a friend next time."
- Design levers: a calm confirmation with "Add to my calendar"; a reminder note; the gift certificate linked from the footer; email signup "Be part of something new."; the PDF calendar to keep on the fridge.

Never feel: clinical or medical; hurried or sold to; inside a shopping cart; a generic luxury spa; lost between fourteen pages; tricked by a fake review or an invented credential.

## Standout moment

**The one-minute pause.** In the hero, a soft ring around the singing bowl expands and settles at six breaths a minute. Beside the button sits a quiet second control, "Pause for one minute". Tap it and the page dims to sage, the ring fills the screen with "Breathe in" and "Breathe out", and after sixty seconds a single line offers "When you're ready" with their "Explore upcoming experiences" button.

Why: their whole idea is "A Place to Pause". Every wellness site says it; this one lets you do it before you've booked anything. It is the first thing a visitor will tell a friend about, it shows the client their tagline made real, and it costs nothing to run (a CSS or Lottie animation in Wix, honouring reduced-motion settings). They did not ask for it, and it is the kind of detail that makes them want to work with us.

## Rationale

The client has already done the hard thinking. The win is showing them their mockup as a finished, working site: every page, every Acuity state, every CMS link. Then one moment they did not think of. Their copy is kept wherever the mockup has real words. Where the mockup had filler, calm sample copy is written and labelled "Sample content". Practitioner names, dates and prices are the mockup's own fictional samples and are labelled the same way. No reviews, results or credentials are invented.

## Build prompt (for the builder)

Build screens.html as one long file in the GroundWell mockup's style: ivory #F8F8F5, cream #FDFDF9, sage #E5E7DE, olive ink #353C32, button #4D5141, muted #626650, line #D2D2C8, logo brown #936F4F as decoration. Headings in Cormorant Garamond 400/500, labels and nav in League Spartan, body in their Arial stack at 18px (17px phone). A slim olive bar above the header lists all 14 pages, as their mockup does. Each page opens with a strip showing its number, descriptive URL with location, and SEO title. Pages in the client's order, then the shared booking page, the two CMS templates, the three pop-ups, and the owner's view of Wix and Acuity. Every section carries data-feeling (settled, curious, cared, ease, welcomed). Hero flush under the nav with the breathing ring. Images lazy-load below the fold; phone first view stays at or under 300 KB.
