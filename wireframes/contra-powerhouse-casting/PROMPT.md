# Prompt — Powerhouse Casting (concept)

A Home wireframe plus a Directors index and one director detail for Powerhouse Casting, a Toronto commercial casting company. The site should feel like a premium production company, not a casting catalogue. The only concept markers are the page title and one quiet line in the first viewport.

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| Home, full-width reel, hook in the first viewport, feels like a production company site | `#home` |
| Work / News, without inventing posts or clients | `#home` (the reel is the work) |
| About, published facts only | `#about` |
| Directors, CMS-like index plus one detail, no invented names or bios | `#directors`, `#director` |
| Space, no invented rooms or prices | `#space` |
| Contact at hook energy, existing path | `#contact` |

Full checklist in COVERAGE.md.

## The build

The client asked for a site that should "feel like a production company website, not a casting site", with "a premium look inspired by sites such as Smuggler and Park Pictures". They want "a full-width reel on the Home page", "CMS functionality for News and Directors", and "no slates, masks, or stock actor imagery". All copy and the reel are ready on their side; this concept shows a careful first pass on Home and Directors, with sections structured so they can be hidden or added later.

Powerhouse Casting has been in Toronto since 1996 and, on their own About page, has "successfully cast over 10,000 commercials." The live site already lists the directors they work with, and publishes a Randolph Avenue address, two emails and a telephone number. The concept keeps those facts, uses their white Ph mark, and lets a cinematic reel carry the first viewport.

## Key ideas

- The reel is the home page. Everything else waits until after the cut.
- Directors are typographic credits, not a grid of faces.
- One director can be opened, with a still from the same set and no invented biography.
- Contact is the same size as the hook.

## Emotion of the scope

Client wants customers to feel they have arrived at a production company: confident enough to press play, sure of the directors behind the work, and able to get in touch without a form in the way.

**Headline feeling: The reel holds the room, and the next step is obvious.**

**Register: cinematic confidence.** Dark, cool, minimal, unhurried. Not a launch, not a talent catalogue.

**Sell / hook**
- Desire: a producer or agency lead who wants a casting partner that feels like the production companies they already trust.
- Hook: a full-viewport reel, with the quiet fact “Over 10,000 commercials, since 1996.”
- Objection killers: “Will this still be us?” (their Ph mark, their director list, their address and the published About wording stay); “Is this a casting-catalogue redesign?” (no slates, no masks, no headshots; the page is a reel and a credit roll); “Can we edit Directors later?” (the names are a single collection that can be filtered, opened, hidden or added).
- Proof: the live About facts, the published directors list, and the Randolph Avenue contact path.
- The one conversion action: write or call, from the contact band.

### Feeling journey

#### Arrive — still
- Feeling word: still
- Inner voice: “This is a production house. I’ll watch.”
- Design levers: the full-viewport reel, the quiet concept line, the hook over a dark scrim, play in easy reach.

#### Explore — curious
- Feeling word: curious
- Inner voice: “These are the directors they work with. I can run the list.”
- Design levers: a typographic credit roll, a letter filter, no photographs of people.

#### Decide — sure
- Feeling word: sure
- Inner voice: “I can open a name and still not be sold a biography they did not write.”
- Design levers: one still from the same cinematic set, the name in large type, a way back to the list. About, just below, keeps the published 1996 and 10,000-commercial wording.

#### Space — quiet
- Feeling word: quiet
- Inner voice: “They have a room in Toronto. That’s enough.”
- Design levers: one matched interior still, the published address only.

#### Act — ready
- Feeling word: ready
- Inner voice: “I can write to Andrew or Tristan, or call, from here.”
- Design levers: the telephone number and emails in the same large type as the hook, the address close at hand, no new form system.

Never feel: a talent catalogue, a card grid of faces, earth colours, a slate, or a busy marketing launch.

## Standout moment

The credit roll after the reel: a typographic list of the directors they already name, which can be filtered and opened, while the reel holds the first viewport.

The Act moment matches the hook: the telephone number and emails are set in the same large type.

## Type and colour

- Font: Inter Tight, self-hosted. Sans only. Weights 400, 500, 700.
- Type scale: 15 / 16 / 17 / 18 / 24 / 32 / 40 / 56. Body 18px on desktop, 17px on a phone. Hook and the contact numbers share the 56px step on desktop.
- Spacing: 4 / 8 / 16 / 24 / 32 / 48 / 64.
- Radii: 8px on controls, never a pill.
- Colour:
  - Void `#07080B`
  - Paper `#F5F6F8`
  - Muted `#C5C8D0` (AA on void)
  - Line `#2A2D36`
  - Accent `#5AE0FF` (cool cyan, for play and the active letter only)
- Logo: cleaned white Ph mark, 64px on desktop, 48px on a phone, on the dark mast.

## Images

One matched cinematic set, from a single soundstage still: empty stage, camera, wet night street, cyclorama, and a dark studio room. Cool blue-steel grade. No people, no headshots, no slates, no masks. The home poster is eager; the rest of the reel and below-fold images are lazy-loaded, with 720px variants on a phone. No empty photo boxes.

## Working interactions

1. Play and pause the reel (a silent crossfade of the matched frames). Motion stops when the system asks for reduced motion; the poster stays.
2. Filter the directors list by letter, and open one name into a detail still.

## Per-screen spec

### Home (`#home`)
- Dark mast: cleaned Ph mark, then Work, About, Directors, Space, Contact.
- Full-viewport reel. A quiet plain-text line: “Website concept for Powerhouse Casting”. The page title is “Concept: Powerhouse Casting”.
- Hook: “Over 10,000 commercials, since 1996.” Play control on the reel.

### Directors (`#directors`, `#director`)
- Heading as published: “Directors we work with.”
- Letter filter, then a wrapping typographic credit list of the live names.
- Opening a name reveals a matched cinematic still and the name only. No biography.

### About, Space, Contact (`#about`, `#space`, `#contact`)
- About: the published wording from the live About page, left intact.
- Space: one still, then 21 Randolph Avenue, Suite 204, Toronto ON M6P 4G4.
- Contact: 416 777 0033, Andrew@powerhousecasting.com, Tristan@powerhousecasting.com, at hook size, plus the address.

## Skeleton

Credit roll: a full-bleed reel holds the first viewport; after the cut, the site reads as typographic end credits — a wrapping name list, a single still for one director, and a large-type close. Not a two-column layout, not a card grid, not a family trail, and not a centred band of stacked full-bleed chapters.
