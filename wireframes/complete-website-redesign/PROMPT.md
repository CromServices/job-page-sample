# Prompt — Complete website redesign (concept)

Quick bid wireframe for Upwork 2124361468633611274. The post names no business, sector, platform, page list or current URL, and no attachments exist. This is a concept redesign of a professional business site for a stand-in brand, "Sample Co", marked as a concept in the annotation layer only. No photographs: the post names no premises or staff, so none are invented. Portfolio examples belong in the bid. One page, desktop and phone.

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| Complete redesign of the current website | Whole concept site: Home, Usability, Brand, Book, closing index, desktop and phone |
| Modern, responsive designs and a deep understanding of user experience | Responsive resize demo and the measured usability ledger in `#usability`; every section at 1440, 3440 and 390 |
| Implement new features, enhance usability, align with the brand's vision | Ordinary features only: before/after, palette switch in `#brand`, booking flow in `#book` |
| Visually stunning | `#home` first screen, the numerals in `#usability`, and the live time readout in `#book` |
| Elevate our online presence | `#home` reads as a finished public site; `#after` closes the page |
| Strong portfolio of modern, responsive work | Bid letter |

Full checklist in COVERAGE.md.

## The build

The client wrote: "We are seeking an experienced web developer to lead a complete redesign of our current website." The developer needs "a strong portfolio showcasing modern, responsive designs and a deep understanding of user experience", and will "work closely with our team to implement new features, enhance usability, and ensure the site aligns with our brand’s vision." They want "visually stunning websites" that "help us elevate our online presence." The portfolio is for the bid letter. Full checklist in COVERAGE.md.

## Feeling from the scope

"this already looks like a modern public site, and using it feels easy." The post asks for "enhance usability" and a site that "aligns with our brand’s vision."

## Tonal register

**Tech / precision, on warm paper.** A visitor should feel the site is exact and effortless in the first five seconds.
- Motion: tight and exact. 220 ms ease-out slides, a divider that sweeps once and stops, numerals that count to their value and stay. No bounce, no loops. Everything is already complete under `prefers-reduced-motion`.
- Type: Space Grotesk (approved), tabular numerals for the figures, tight tracking; the H1 at 56px and the figures at 99px.
- Colour and imagery: precise hairline rules and a drafting grid on warm cream `#FFF6EA`, ink `#141414`, one switchable warm accent (coral `#FF5A3C`, amber `#FFA200`, rose `#FF3E7F`, sun `#FFD23F`). The lock for a bright warm palette beats the cool default for this register. No photographs, only type, rules and colour fields.
- Copy: the studio talking plainly about the site itself, using the client's phrases, never a slogan.

Skeleton: a centred stack of full-bleed bands. Centred headline over a wide before/after stage, then a measured ledger, a resizable device frame, a colour-switching brand band, a full-screen booking board, and a giant-type index. No two-column headline-and-photo and no diptych.

## Key ideas

1. **The redesign is the first thing you see.** A draggable divider turns a cramped, typical "before" site into the new one on the first screen.
2. **Usability is measured, not claimed.** Menu items, body size, tap target, page weight and primary actions are shown as large figures that count up once.
3. **The next step is its own event.** Booking is a full-screen board: pick a day and time and a giant time readout follows you, then a confirmation draws in.

## Emotion of the scope

Client wants customers to feel this already looks like a modern public site, and that using it feels easy.

**Headline feeling: This already looks like a finished modern site, and every next step is easy.**

**Sell / hook**
- Desire: the client wants a site that looks finished and modern, is easy to use, and still reads as their brand.
- Hook: in the first viewport, a draggable divider sweeps from a cramped typical "before" site to the redesigned "after". Drag it, or use the slider under it with the keyboard.
- Objection killers: "Will it still look like our brand?" (the accent switch in `#brand` re-colours the page live); "Will it work on a phone?" (the resizable frame in `#usability` reflows the same site from 320px to desktop); "Is it really easier?" (measured figures: 4 menu items against 9, 18/17px body, 44px tap targets, a 52 KB phone first view, one primary action).
- Proof: the before/after itself and the measured figures, all true of this build. The "before" is a typical dated layout, marked as a stand-in.
- The one conversion action: book a call. Header button, hero, and the full-screen board in `#book`.

### Feeling journey

#### Arrive — impressed
- Feeling word: impressed
- Inner voice: “That already looks finished. And I can drag it from old to new.”
- Design levers: centred 56px H1 flush under the nav, a wide before/after stage with a divider that sweeps once on load, a slider under it, one "Book a call" button.

#### Explore — at-ease
- Feeling word: at-ease
- Inner voice: “Nothing is hidden. I can see why this is easier, and it works at any width.”
- Design levers: five measured figures at 99px that count up once as they scroll in, then a frame you resize from phone to desktop with a slider.

#### Decide — trusting
- Feeling word: trusting
- Inner voice: “I can see my brand in this: change the colour and the whole site follows.”
- Design levers: four accent swatches that re-colour the page live, and a type and spacing specimen using the real tokens.

#### Act — eager
- Feeling word: eager
- Inner voice: “Tuesday, 10:30. Done. That was quick.”
- Design levers: a full-screen accent board; five day rows and six time rows; a giant tabular readout that rolls to the choice; a button that reads "Book Tue 10:30"; a confirmation that draws in.

#### After — proud
- Feeling word: proud
- Inner voice: “This is the presence I wanted. Everything is one tap away.”
- Design levers: four places in 99px type on ink, with accent bars that sweep in one after another as the section arrives, a hover and focus fill, a quiet footer, and the concept note.

Never feel: a generic web-developer template; a made-up company presented as the real client; serif type; eyebrow labels, slogan headings, card grids or pill badges; grey placeholders or "your photo here"; a dead gap under the nav; invented staff or premises photographs; or any section that falls back to a plain band or list.

## Standout moment

The divider. On load it sweeps from the cramped before to the redesigned after and stops at the middle, with the visitor holding the handle. Then the same energy returns at the end: in `#book`, a giant time readout rolls to whatever day and time they pick, so the conversion step is as alive as the opening.

## Working interactions

1. **Before / after divider (first viewport).** Drag the stage or use the slider; sweeps once on load; keyboard operable; fixed at the middle under reduced motion.
2. **Measured figures count up** once as they scroll in (scroll-driven reveal); complete under reduced motion.
3. **Responsive frame.** A slider resizes the same mini site from 320px to 1100px; it reflows by container query.
4. **Brand colour switch.** Four swatch buttons re-colour the accent across the page.
5. **Booking flow preview (the Act moment).** Day, time, name and email, a rolling readout, and a drawn-in confirmation.
6. **Closing index.** Accent bars sweep in under each link as the section arrives; hover and focus fill the row with the accent.

## Type and colour

- Font: Space Grotesk only (self-hosted). Body 18px desktop / 17px phone. H1 56px desktop (2 lines) / 36px phone. Figures, the time readout and the closing index 99px. 7-step type scale and 4/8 spacing scale in :root.
- Logo: a typeset "S" monogram for the stand-in brand, 64px desktop / 48px phone. The name sits beside it on desktop only.
- Palette: ink #141414, cream #FFF6EA, white, accent switchable (coral #FF5A3C, amber #FFA200, rose #FF3E7F, sun #FFD23F), always with ink text on the accent.

## Images

No raster images. The post gives no sector, premises or staff, so no photographs are invented, and nothing is generated. The before and after sites are built in HTML and CSS and are labelled concept. Phone first view is a few tens of KB.
