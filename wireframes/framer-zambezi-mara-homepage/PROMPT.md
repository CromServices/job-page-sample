# Wireframe prompt: Zambezi-Mara homepage polish (Framer)

Refinement wireframe, 16 Nov 2026, for Director. Practice pack built to bid standard. Not a bid, not published.

The client's own idea comes first. Zambezi-Mara already has a homepage on Framer staging (https://zambezimara.framer.website/revamp/home-v2) and an owner-approved UI reference (IMG_9568.png, "CONSOLIDATED UI REFERENCE — OWNER APPROVAL GATE") showing COME CLOSER. in ivory serif caps, a gold CTA, a dark frame, the SEFU character slider with pagination, and the nav Home, Watch, World, Characters, Journal. This wireframe polishes THAT homepage: their copy word for word, their characters, their black-and-gold palette, their logo, nav and sections in their order. It pushes the reference further rather than tracing it.

## The build

The client's idea, in their words: "We are looking for a talented UI designer with exceptional visual judgment to elevate our existing homepage to a premium cinematic standard." "We have developed an approved UI reference, attached to this posting. We want a designer who can improve upon it—not simply reproduce it." "Our inspiration includes Dune, A24 and Severance: cinematic atmosphere, sophisticated typography and distinctive visual composition. These are sources of inspiration, not designs to copy."

Every Build requirement, quoted from the post:

Scope
- "Improve the Hero, typography, navigation, buttons and character slider."
- "Create exceptional desktop and mobile layouts (375px, 390px and 430px)."
- "Integrate our five supplied cinematic images."
- "Preserve existing copy, character identities, brand colors, navigation and Framer functionality."
- "This is a visual-design assignment, not a website rebuild."

Deliverables
- "Improved homepage UI with desktop and mobile previews."
- "Framer-compatible design specifications for our existing developer. Direct implementation is optional."
- "Brief explanation of your key design improvements."
- "One reasonable revision following feedback."

Limits
- "Please review our staging homepage and attached UI reference before applying."
- "No new pages, copy changes, paid assets or custom functionality."
- From the reference: "VISUAL DIRECTION ONLY — PRESERVE EXISTING BRAND, COPY, NAVIGATION, PALETTE AND FRAMER COMPONENTS".

What they will judge (screening): the staging page's "three most important visual weaknesses" and how to fix them, and "How would you improve upon our reference while preserving existing copy, Framer functionality and the $30 fixed budget?" The answers are in `SPEC.md`.

## Scope coverage

| Requirement | Where it appears | Shown |
|---|---|---|
| Elevate the existing homepage to a premium cinematic standard | `screens.html`, the whole homepage, desktop and phone | yes |
| Review / follow the staging site | Same sections, order, copy, logo and nav as staging; notes in `wireframe.md` | yes |
| Improve upon the reference, not merely reproduce it | Hero composition, two-panel slider, title-card manifesto, The Approach; reasoning in `SPEC.md` | yes |
| Improve the Hero | `#hero`: full-bleed ensemble image, letterbox, COME CLOSER. serif, gold rule, CTA | yes |
| Improve typography | Display serif + Manrope throughout; type scale in `SPEC.md` | yes |
| Improve navigation | `header.nav`: their items (Watch, Characters, World, Journal, About), transparent over hero, phone menu-open state in `proofs/phone-menu-open.png` | yes |
| Improve buttons | Gold primary and ivory-outline secondary, 52px tall, used for all their existing CTAs | yes |
| Improve the character slider | `#characters`: Sefu active, Aziza and Moos Moos as tabs, 01 / 03 progress, arrows | yes |
| Exceptional desktop layout | `proofs/desktop-1440.png` | yes |
| Exceptional mobile layouts at 375, 390 and 430px | `proofs/phone-375.png`, `proofs/phone-390.png`, `proofs/phone-430.png` | yes |
| Integrate five supplied cinematic images | Five image slots filled with their staging images: ensemble (hero), Sefu, Aziza, Moos Moos, ensemble reprise (World); swap for the masters when supplied | yes |
| Preserve existing copy | All text copied verbatim from staging, including line breaks and quotes | yes |
| Preserve character identities | Sefu, Aziza, Moos Moos with their own portraits, quotes and descriptions | yes |
| Preserve brand colours | Black #000/#0F0F0F, gold #C6A85B / #C79F3C, ivory #EDEDED from staging | yes |
| Preserve navigation and Framer functionality | Same links and order; slider, dropdown and buttons map to their existing Framer components (`SPEC.md`) | yes |
| Not a rebuild; no new pages | Homepage only | yes |
| Desktop and mobile previews | `proofs/` desktop 1440 and phone 375/390/430 | yes |
| Framer-compatible design specifications | `SPEC.md`: tokens, type scale, spacing, breakpoints, component props, scroll-effect settings | yes |
| Brief explanation of key design improvements | `SPEC.md` "Key improvements" and the three staging weaknesses | yes |
| One reasonable revision | Offered in the bid; process note in `wireframe.md` | yes |
| No copy changes, paid assets or custom functionality | Only their copy and images; free fonts; native Framer effects only | yes |
| Cinematic atmosphere in the spirit of Dune, A24, Severance, not copies | Letterbox, grain, restraint and type in `screens.html`; no borrowed layouts | yes |

## Feeling from the scope

Their words: "premium cinematic standard", "cinematic atmosphere, sophisticated typography and distinctive visual composition". Their own copy sets the mood: "COME CLOSER.", "A story heard from far away loses some of its footsteps.", "Power Is Loud. Character Is What Remains After the Noise Is Gone." Director's scope: serious, atmospheric and close, "not a trailer dump or a travel site".

## Key design ideas

Three ideas taken from their own copy. Each one decides something on the page.

1. **Come closer (intimacy).** Their headline is an instruction, so the design obeys it.
   - Imagery: their ensemble image cropped from head to hip on desktop, so you meet Sefu and Aziza at eye level rather than from across a field. Character portraits fill the frame. Their black-and-white Sefu and Aziza portraits are kept black and white, as close-ups.
   - Layout: the hero is full-bleed and flush under a transparent nav. The slider becomes a two-panel close-up (portrait left, words right) instead of a small card.
   - Type: COME CLOSER. set very large in a high-contrast serif, in ivory, as in their reference. It starts slightly wide-tracked and tightens as you scroll (the standout moment).
2. **Restraint.** Sefu's own line: "Restraint is not the absence of strength. It is strength that still remembers its master."
   - Imagery: no added stock, no effects beyond a soft vignette and film grain. Their five images do the work.
   - Layout: one idea per screen, lots of black, gold used only for the thin rule, the quote and the primary button. The manifesto lines stack with air between them, like title cards.
   - Type: two families only, the reference serif for display and their Manrope for body and labels; small caps tracking for nav and buttons.
3. **The line.** "Three People. Three Ways to Face a Line."
   - Imagery: their pattern strip, used as a thin border at section changes.
   - Layout: a single gold horizontal rule is the recurring device. It sits under the headline, between slider panels, and becomes the progress bar of the slider (01 / 03).
   - Type: quotes in gold italic serif, set between rules.

## Emotion of the scope

Client wants customers to feel: a "premium cinematic standard" with "cinematic atmosphere, sophisticated typography and distinctive visual composition"; their own invitation, "COME CLOSER."; and the pull of "A story heard from far away loses some of its footsteps."

**Drawn in, and holding my breath.**

Not a task. The hush in a cinema just before the first frame.

### Feeling journey

#### Arrive — drawn
- Feeling word: drawn
- Inner voice: "Who are these two? I want to be nearer."
- Design levers: their ensemble image at eye level, flush under a transparent nav; COME CLOSER. in huge ivory serif; letterbox bars and grain; a single gold button; the slow push-in.

#### Explore — intrigued
- Feeling word: intrigued
- Inner voice: "Power is loud… so what remains? Keep going."
- Design levers: the manifesto as title cards on black; generous pauses between lines; gold rule; no clutter.

#### Decide — invested
- Feeling word: invested
- Inner voice: "Sefu, Aziza, Moos Moos. Each one already has a choice waiting for them."
- Design levers: the character slider as full close-ups; each quote in gold italic between rules; names in large serif; 01 / 03 progress line; their MEET buttons.

#### Act — compelled
- Feeling word: compelled
- Inner voice: "Meet Sefu. Now."
- Design levers: their gold buttons restyled with weight and room; the World and Choice sections ending in one clear action each; journal cards that feel like film stills.

#### After — lingering
- Feeling word: lingering
- Inner voice: "The road does not choose the feet that walk it. That line is going to stay with me."
- Design levers: the closing band with their line over the ensemble image; three MEET buttons; a quiet footer in their colours.

Never feel: a tourist-brochure Africa; a loud streaming template or trailer dump; a copy of Dune, A24 or Severance; cluttered or busy; sold to; or that their brand, words or characters were swapped out.

## Standout moment

**The Approach.** As the visitor scrolls the first screen, the camera comes closer. Their ensemble image pushes in from 100% to about 112%. The letterbox bars close in from the top and bottom. COME CLOSER. tightens from wide tracking to its resting spacing, and the gold rule beneath it draws from left to right. The headline does exactly what it says.

Why: the post asks to improve upon the reference, not reproduce it, with "distinctive visual composition", and with "No … custom functionality". This is built entirely from Framer's native Scroll Transform and Appear effects: no code, no new copy, no new component. It turns their own two words into the first thing anyone remembers about the site, which is what a $30 polish rarely delivers and what will make them want to work with us. Settings are in `SPEC.md`; frames are in `proofs/standout-approach.png`.

## Rationale

The owner has approved a direction and wants it pushed, not replaced. So nothing they wrote is changed. Every gain comes from composition, type, light and motion. The staging page's weaknesses (see `SPEC.md`) are fixed with their own assets. The reference's composition (left-aligned serif headline over a wide image, gold CTA, two-panel character slider) is kept and given more weight, closeness and air.

## Build prompt (for the builder)

Build screens.html as the Zambezi-Mara homepage on black (#000 and #0F0F0F), with their gold (#C6A85B, deep #C79F3C) and ivory (#EDEDED). Display type Cormorant Garamond 500 in caps for headlines (closest free match to the reference serif; swap for their licensed face if they have one), Manrope for body and labels. Body 18px desktop, 17px phone. Sections in staging order: nav, hero, manifesto, character slider, World, Choice, Every Road, Journal, closing band, footer. Every section carries data-feeling (drawn, intrigued, invested, compelled, lingering). All copy verbatim from staging. Hero flush under a transparent nav. Phone first view at or under 300 KB.
