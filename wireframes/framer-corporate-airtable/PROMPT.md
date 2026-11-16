# Bid wireframe: Framer corporate site with Airtable listings, international advisory firm

Quick bid wireframe, 16 Nov 2026, for Director. Citable Framer rows: **softpunch-framer** (https://softpunch.framer.website) and **quayhold-framer** (https://quayhold.framer.website). There is no published live Airtable–Framer example in the citable registry; the bid must not invent one. No company name was given; the nav uses a simple mark labelled "Client brand". Not a full build. Do not publish.

## The build

"We are a advisory firm providing corporate, investment, real estate, and residency advisory services."

"We are looking for an experienced Framer developer with strong design capabilities to design, develop, and launch a premium, modern, professional corporate website."

"The website must reflect the positioning of an international advisory firm, with excellent attention to design, usability, performance, and detail."

Project scope, quoted from the post:

- "Complete corporate website developed in Framer."
- "Approximately 5–6 dedicated service pages, plus core corporate pages."
- "Dynamic real estate project listings integrated with Airtable."
- "Lead generation forms connected to our existing CRM and automation system."
- "Fully responsive, SEO-optimized, and production-ready website."

"This is primarily a static corporate website. The real estate projects section will be the main dynamic component."

Design expectations include "Premium, sophisticated, and modern corporate design," "Clean layouts, strong typography, and consistent visual identity," "Professional visual storytelling," "Smooth animations, transitions, and subtle interactive elements," and "Excellent user experience across desktop, tablet, and mobile."

Functional requirements include homepage and core corporate pages, "Intuitive navigation," "Strategically placed CTAs," "Contact and enquiry forms," "SEO-friendly page structure and metadata," and "Fast loading speeds."

Airtable inventory must "Automatically fetch and display project information from Airtable," show a "professional listing/grid layout," "Generate reusable dynamic project detail pages," include "project images, descriptions, locations, prices, property types, specifications," "Support filtering by location, property type, price range," and "Reflect project additions, updates, and removals from Airtable without manually creating individual pages."

"Our team must be able to manage the entire real estate inventory directly through Airtable without requiring developer assistance for routine updates."

Lead generation: enquiry and contact forms, CRM and automation, "Integrate WhatsApp contact functionality," and testing of "all CTA buttons, forms, and lead generation workflows."

"TIMELINE: STRICTLY 15 CALENDAR DAYS." Final deliverable: "a polished, fully functional, production-ready website, not a design prototype or partially completed project."

## Feeling from the scope

Visitors should feel they have reached "an international advisory firm — corporate, investment, real estate, and residency — of serious, discreet calibre." Arriving, "quietly impressed and at ease; the firm should feel established and international, not loud or salesy." An enquiry should feel "safe," "taken seriously, not chased," and handled "privately and professionally," with property work that is "current and dependable."

## Concept

Quiet international standing. Ivory ground, espresso nav, a single bronze rule, no gold shouting from the type. The hero is a calm view of glass towers. Four named practices sit in an even grid. Project cards feel curated, not like a classifieds board, and a single detail page shows how inventory changes appear without a new page being built by hand. The enquiry is private, with WhatsApp as a second quiet door.

## Emotion of the scope

Client wants customers to feel: the "positioning of an international advisory firm" and a "premium, modern, professional corporate website" of "serious, discreet calibre," "quietly impressed and at ease," "taken seriously, not chased," with property work that is "current and dependable."

**Quietly established: an international firm of discreet calibre.**

Not a task. The calm of being taken seriously.

### Feeling journey

#### Arrive — impressed
- Feeling word: impressed
- Inner voice: “Stone, space, and a quiet city. A firm of this standing.”
- Design levers: full-bleed towers flush under an espresso nav; a deep scrim so ivory type holds 4.5:1; a two-to-three-line H1; a thin bronze rule; ample space and few words.

#### Explore — oriented
- Feeling word: oriented
- Inner voice: “Corporate, investment, property, residency — laid out without rush.”
- Design levers: four named service pages in a quiet grid; curated project listings with filters; sample properties clearly labelled; restrained typography.

#### Decide — safe
- Feeling word: safe
- Inner voice: “An enquiry would be handled as a private conversation, not a chase.”
- Design levers: a project detail drawn from inventory; an About passage that is calm rather than salesy; a clear, unforced path to enquire.

#### Act — ready
- Feeling word: ready
- Inner voice: “Name, interest, a preferred way to talk. They will take it from here.”
- Design levers: enquiry form on the page and from the project; WhatsApp as a second route; 50px fields; a primary button that does not clip.

#### After — private
- Feeling word: private
- Inner voice: “The listings look current. Someone is keeping this in order.”
- Design levers: a confidential confirmation; no upsell; a reminder that the inventory stays in the team’s hands.

Never feel:

- Flashy, like a startup launch
- Brochure-touristy real estate
- Bargain, or a classifieds grid
- Cluttered, or chased into a call
- That the firm is anything other than an international practice

## Scope coverage

| Requirement | Where it appears | Shown |
|---|---|---|
| Complete corporate website in Framer | `screens.html` home, services, projects, about, contact | yes |
| Homepage and core corporate pages | `screens.html` hero, `#about`, `#enquire` | yes |
| Approximately 5–6 dedicated service pages | `screens.html` `#services` (four named practices plus the same structure for further pages) | yes |
| Corporate, investment, real estate and residency advisory | Four service cards in `screens.html` `#services` | yes |
| Dynamic real estate listings from Airtable | `screens.html` `#projects` grid and inventory copy; approach in `wireframe.md` | yes |
| Professional listing/grid layout | `screens.html` `#projects` | yes |
| Filtering by location, property type, price range | Filter chips in `screens.html` `#projects` | yes |
| Reusable dynamic project detail pages | `screens.html` `#project` | yes |
| Images, descriptions, locations, prices, types, specifications | Project cards and detail in `screens.html` (prices as “Price on enquiry”, labelled Sample content) | yes |
| Team updates inventory in Airtable without a developer | Copy in `#project`; approach in `wireframe.md` | yes |
| Enquiry and contact forms into existing CRM | `screens.html` `#enquire` form; notes in `wireframe.md` | yes |
| WhatsApp contact | WhatsApp path in `screens.html` `#enquire` | yes |
| Strategically placed CTAs | Hero, project detail, and contact buttons in `screens.html` | yes |
| Fully responsive, SEO-optimized, production-ready | `proofs/desktop-1440.png`, `proofs/phone-390.png`; title and meta in `screens.html` | yes |
| 15-calendar-day delivery, immediate start | Bid text (Director); `wireframe.md` | yes |
| Full ownership and editing access, documentation for integrations | Bid text (Director); `wireframe.md` | yes |

## Rationale

The wireframe is the firm they described, not a template. Sample listings are labelled, because we do not have their Airtable. Softpunch and Quayhold are the citable Framer sites; there is no citable live Airtable–Framer example, and the bid must say so and explain the approach instead.
