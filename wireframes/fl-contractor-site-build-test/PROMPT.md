# Site-generation prompt: Contractor portfolio site (test concept v1)

Test wireframe for the new bid step, 15 Nov 2026. Not a live bid. Do not publish.

---

## SCOPE

Taken only from the client post on Freelancer: "Contractor Site Build & Google Migration". Every gap is marked. Nothing below is invented.

### What & where

Two parallel tasks: a clean, modern website for a contracting business, and a full move from a legacy business email system to Google Workspace.

The site’s sole purpose is to showcase past work and clearly outline the services provided. The client wants a straightforward portfolio layout with space for project photos, brief case-study style descriptions, and an easy-to-find contact form. It must load quickly, look polished on mobile, and be simple for the client to update after hand-over.

- Business name: unknown — ask in bid
- Trade or contracting type: unknown — ask in bid
- Location and service area: unknown — ask in bid
- Existing domain and current website: unknown — ask in bid
- Preferred CMS: WordPress, Webflow, or a similarly intuitive CMS is fine; the specific choice is unknown — ask in bid

Email migration (job scope, not shown on this website concept): transfer all existing messages, folders and aliases to Google Workspace, and update DNS so the new domain-based accounts send and receive correctly.

- Current email provider, mailbox and alias count, mail volume, and whether a Google Workspace account already exists: unknown — ask in bid

### Audience & arrival

unknown — ask in bid. The post implies visitors who need to see completed work and the services on offer, then get in touch.

### Deliverables

- Fully functional website published on the client’s domain, with CMS access handed over
- All existing email data migrated to Google Workspace, tested and verified
- Updated DNS settings for both web and mail, plus a brief hand-off guide

Timeline and budget: unknown — ask in bid.

### Sections (in order)

This concept shows three key sections, each tied to an emotion line:

1. Hero
2. Selected work
3. Contact

A full site would also outline services clearly (the client named this as part of the site’s purpose). The service list itself is unknown — ask in bid, and add a Services section or a short services band once it is supplied. Further pages (individual case-study pages, about, and so on) are unknown — ask in bid. The CMS must let the client add new projects after hand-over.

### Contact paths

An easy-to-find contact form is required. Phone, email address, WhatsApp, and the form’s destination inbox are unknown — ask in bid.

### Client supplies

unknown — ask in bid, and needed before a build: logo, colours, type, project photos, case-study descriptions, the service list, contact details, domain access, the current site if there is one, the current email provider, a mailbox and alias list, and whether Google Workspace is already in place.

### Constraints

Fast to load. Polished on mobile. Simple for the client to update (add new projects themselves after hand-over). WordPress, Webflow, or a similarly intuitive CMS. Licences, insurance, reviews, prices, years in business and results are not in the post — do not invent them.

### Voice

unknown — ask in bid. This concept uses plain, short, calm English. No hype, no superlatives, and no claims the client has not given us.

### Portfolio references (layout/styling only, citable rows)

Used as styling cues only. Not cloned, and not presented as this client’s brand.

| general-power-wix | General Power Wix demo | wix | https://www.generalpower.com.au | demo | yes | | |
| softpunch-framer | Softpunch Framer demo | framer | https://softpunch.framer.website | demo | yes | | |
| quayhold-framer | Quayhold Framer demo | framer | https://quayhold.framer.website | demo | yes | | |
| ojjm-hire-shopify | OJJM Hire Shopify demo | shopify | https://cromservices.github.io/ojjm-hire/ | demo | yes | | |

Cues taken: a clean sans, a clear primary button, and a photo-led portfolio (from General Power and the Framer demos). Headline and hero photo sit high, with no empty band under the nav (L-109). No illustration panels and no “Your photo here” slots.

---

## Emotion of the scope

**The work is already the proof.**

The visitor should feel steady, not sold to. They arrive needing a contractor they can trust, and they should not have to take anyone’s word for it. The first thing they see is finished work, at a high standard, with a short path to get in touch. The page should feel solid, calm and unhurried — timber, dusk light, quiet confidence — never loud or promotional.

- **Hero:** “I can already see the standard they work to.”
- **Selected work:** “They’ve done jobs like mine.”
- **Contact:** “It’s obvious how to start.”

---

## Rationale

The client asked for a straightforward portfolio: project photos, brief case-study notes, and a form that is easy to find. Most of that decision happens on a phone, in a few seconds, so the first screen is the work itself — a full-bleed finished-job photo with the headline and buttons sitting high, right under the nav, and no dead space (L-109). A three-card work grid comes next, because seeing more than one job turns a nice hero into proof. The form is short (three fields) and follows immediately, so the visitor never has to hunt for it. Business name, trade, colours, logo and real project photos are all unknown, so the concept uses a “Client brand” label, a neutral palette that can be re-skinned, and free-licence stock photographs marked as stand-ins. Nothing on the page invents a service list, a location, a review or a result.

---

## Type

- **Manrope**, 400 and 800 (already a free face on WordPress.com and Webflow). Fall back to Inter Tight or Archivo if the client’s own heading face is a normal-width sans.
- H1: 800 weight, about 64px on desktop and 34px on phone, line-height 1.06–1.1, tracking −0.02em, 2 to 3 lines.
- H2: 800 weight, 36px / 28px.
- Body: 18px desktop, 17px phone, line-height 1.6.
- Labels 15px / 700. Form input text 17px on phone, so iOS does not zoom in.
- No wide or display faces. No Syne.

---

## Palette (easy to re-skin once the client’s colours arrive)

| Token | Value | Role |
|---|---|---|
| `--ink` | `#161410` | body text, nav wordmark on paper, primary surfaces |
| `--paper` | `#F3EFE7` | page background |
| `--muted` | `#4A453E` | secondary text (8.3:1 on paper) |
| `--line` | `#D9D2C6` | hairlines |
| `--accent` | `#9C4A1A` | primary buttons; white text is 6.2:1 |
| `--hero-text` | `#F6F1EA` | type on the hero scrim |

If the client’s brand colour is supplied, `--accent` becomes that colour, darkened if needed so white text stays at 4.5:1.

---

## Art direction

- **Photos:** the client’s own project photos once they are supplied. Until then, free-licence Unsplash stills of finished residential work (no faces, no text in the frame, nothing presented as this client’s property).
- **Lighting:** dusk and late-day warm interior light, as in the hero house. Soft, directional, not flash-lit.
- **Texture:** timber cladding, stone, glass, grass. Quiet and solid.
- **Scrims:** a left-to-right dark gradient on desktop so the headline, lede and buttons sit on the darker side and reach 4.5:1. On phone, a stronger top-to-bottom scrim, because the type sits in the upper part of the hero. Never put body text on a mid-tone patch of the photo.
- **Motion:** none required. Hover only on buttons (slightly brighter). Respect reduced motion.
- **Never:** a made-up logo or business name, “Your photo here” boxes, line-drawing stand-ins, readable faces, text baked into images, invented jobs, reviews, licences, results or prices.

---

## Photo sources

All four are Unsplash stills, downloaded locally as WebP at a 1600px long edge, and used only as layout stand-ins. They are replaced by the client’s project photos before any build. Licence: https://unsplash.com/license

| File | Slot | Source URL |
|---|---|---|
| `images/hero-house.webp` | Hero background | https://images.unsplash.com/photo-1600585154340-be6161a56a0c |
| `images/project-living.webp` | Selected work, Project one | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c |
| `images/project-entry.webp` | Selected work, Project two | https://images.unsplash.com/photo-1600585154526-990dced4db0d |
| `images/project-kitchen.webp` | Selected work, Project three | https://images.unsplash.com/photo-1556912173-46c336c7fd55 |

---

## Build notes (not for the page)

- L-109: the hero photograph starts at the top of the viewport. The nav sits over it. There is no empty band between nav and hero. The eyebrow, H1 and buttons sit in the upper part of the hero, not vertically centred.
- Buttons have generous padding, a 48px minimum height, and must not clip.
- First phone view should stay lean: one font file, hero loaded first, work images lazy-loaded.
- Platform (WordPress / Webflow / other) is chosen in the bid, once the client’s preference is known.
- Google Workspace migration, DNS and the hand-off guide stay in the proposal; they are not part of this page concept.
