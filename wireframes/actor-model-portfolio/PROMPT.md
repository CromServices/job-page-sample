# Prompt — Actor and model portfolio

Quick bid wireframe for Upwork 2124031902209825438, a new portfolio site for an actor and model with no current site, name, photos, reel, resume, domain or links supplied. Sample performer: Avery Langford, labelled as sample content throughout. One page, desktop and phone: a way in, an Acting book, a Modeling book, a booking pack download, and casting and social links that stay in the header. Platform (Squarespace, Wix or WordPress), 2–3 example sites, and the screening answers belong in the bid.

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| Clean, fast, mobile-friendly portfolio website | Whole page, desktop and phone; phone first view about 100 KB |
| Squarespace, Wix, or WordPress | Later-build decision, footer delivery note only |
| Acting: headshots, embedded video reels, downloadable resume | `#acting`: reel player, three headshots, resume ledger and PDF download |
| Modeling: comp card, digitals, measurements, editorial/commercial gallery | `#modeling`: comp card with measurements, digitals on the reverse, editorial and commercial toggle |
| Links to casting profiles and social media | Header on every screen, plus `#links` (sample links) |
| Domain to Search Console, sitemap, meta titles and descriptions for the name, Person schema | Footer delivery note, page title, meta description and Person JSON-LD with the sample name |
| Walkthrough so photos and resume can be swapped | `data-wf` note in `#book`; owner-editable |
| 2–3 example sites | Bid letter |
| Screening questions | Bid letter |

Full checklist in COVERAGE.md.

## The build

The client wrote: "I am an actor and model looking for a web designer to build a clean, fast, mobile-friendly portfolio website on Squarespace, Wix, or WordPress." They need "Separate, easy-to-navigate sections for Acting (headshots, embedded video reels, downloadable resume) and Modeling (comp card, digitals, measurements, editorial/commercial gallery)." They want "Integration of links to my casting profiles and social media." The SEO ask is "Basic On-Page SEO: Connect my custom domain to Google Search Console, submit the sitemap, optimize meta titles/descriptions for my name, and add Person Schema markup so my site indexes properly in Google search results." At the end: "A quick walkthrough at the end so I know how to swap out photos and update my resume myself." And: "Please share 2–3 examples of talent, creative, or portfolio websites you have built" — that last one belongs in the bid letter. Full checklist in COVERAGE.md.

## Feeling from the scope

"a casting director or booker already takes this person seriously, and can leave with what they need in one visit, including on a phone." The post asks for "clean, fast, mobile-friendly" and "easy-to-navigate" sections.

## Tonal register

**Wow / spectacle, in warm bright colour.** A booker should feel struck in the first five seconds.
- Motion: decisive and cinematic. Panels open in 600 ms on a hard-out ease, photographs push in slowly, reel scenes dissolve. Everything is still under `prefers-reduced-motion`.
- Type: Archivo (a modern grotesk, not Space Grotesk this time), 700 weight, tight tracking. The name runs at 99px desktop, 5.5× body, on one line; 56px on phone.
- Colour and imagery: full-bleed faces, coral `#FF5A3C`, sun `#FFC736`, cream `#FFF4E6`, ink `#141414`. Photographs carry the warmth; no brown ground.
- Copy: Avery’s own plain voice, short and direct, never a slogan.

Skeleton: a full-width coral name band over a two-panel diptych that fills the screen edge to edge, then a dark reel stage, a yellow comp-card stage, a coral download band and a ruled link list. It is not a headline-beside-photo layout.

## Key ideas

1. **Two books, opened from the first screen.** The Acting and Modeling panels sit edge to edge under the name; hover or keyboard focus opens one wider and flips through that book’s photographs.
2. **The work moves.** The reel plays on the page and the comp card turns over to its digitals, so a booker sees movement and the numbers without leaving the site.
3. **One thing to take away.** One PDF booking pack carries the resume, comp card and measurements, offered in the header, hero, resume and closing band.

## Emotion of the scope

Client wants customers to feel a booker already takes this person seriously, and can leave with what they need in one visit, including on a phone.

**Headline feeling: A booker is struck by the face first, and leaves certain they have the headshot, reel, numbers and resume.**

**Sell / hook**
- Desire: the booker wants to see a bookable face, hear it move, check the numbers, and take everything away in one visit.
- Hook: the first viewport is Avery’s face twice, as two open books. Hover or focus opens a book wider and flips through headshots or editorial work, and “Play the reel” sits beside the name.
- Objection killers: “Is this current?” (three headshots, comp card and digitals in natural light); “Can I see them move?” (the reel plays on the page); “Do I have the numbers?” (measurements beside the comp card, resume in the booking pack).
- Proof: the work itself (reel, comp card, digitals, measurements, editorial and commercial photographs), shown as Avery’s sample portfolio.
- The one conversion action: download the booking pack, in the header, hero, resume and closing band.

### Feeling journey

#### Arrive — struck
- Feeling word: struck
- Inner voice: “That’s a face I want to see move. Two books, I can open either.”
- Design levers: coral name band at 99px, edge-to-edge diptych flush under it, panels that open and flip photographs on hover or focus, “Play the reel” beside the name.

#### Explore — absorbed
- Feeling word: absorbed
- Inner voice: “I’m watching the reel, flipping the card, going through the work. It’s all here.”
- Design levers: dark reel stage with play, scrub and chapters; three headshots in a snapping strip; the comp card that turns over to its digitals; an Editorial and Commercial toggle.

#### Decide — certain
- Feeling word: certain
- Inner voice: “Height, hips, shoe, resume, a reel. I have what I need to say yes.”
- Design levers: measurements ruled beside the comp card, digitals in natural light, a ruled resume ledger, casting and social links in the header.

#### Act — ready
- Feeling word: ready
- Inner voice: “One PDF with the resume and comp card. I’ll take it.”
- Design levers: a single download button in the header, hero and closing band, in coral and ink, never competing with other buttons.

#### After — assured
- Feeling word: assured
- Inner voice: “I can reach their casting profile and socials from here, and open this on my phone again.”
- Design levers: ruled casting and social list, links in the header on desktop and under Links on the phone, a fast page that is about 100 KB on first view.

Never feel: a default template; serif type; eyebrow labels, slogan headings, card grids or pill badges; grey placeholders or “your photo here”; a dead gap under the nav; an invented client name presented as real, fake credits or agencies; a first screen that only files the work into boxed categories; or a hook that is a grey “forthcoming” note.

## Standout moment

The opening: Avery’s face twice, filling the screen edge to edge as the Acting and Modeling books. Point at either and it opens wider and flips through that book’s photographs, so the booker is choosing a book before reading a word, while the reel is one tap away.

## Working interactions

1. **Diptych open and flip (first viewport).** Hover or keyboard focus widens a panel and flips headshots (Acting) or comp card, editorial and commercial photographs (Modeling). Touch devices get the stacked panels and a tap.
2. **Reel player.** “Play the reel” in the first viewport scrolls to the stage and plays. Play and pause, a scrubber, three chapters (Drama, Street, Commercial) and a timecode, all keyboard operable. Under reduced motion, Play steps to the next scene.
3. **Comp card turn-over.** A button turns the card between photograph with measurements and the digitals on the reverse.
4. **Editorial and Commercial toggle.** Switches the work gallery; images load when selected.
5. **Persistent casting and social links** in the sticky header (desktop) or the Links menu (phone).

## Type and colour

- Font: Archivo only (self-hosted), weights 400–700. Body 18px desktop / 17px phone. H1 99px desktop (1 line) / 56px phone (2 lines). 7-step type scale and 4/8 spacing scale in :root.
- Logo: a typeset AL monogram (sample), 64px desktop / 48px phone. The name sits beside it on desktop; on phone the mark stands alone so the header does not clip.
- Palette: ink #141414, cream #FFF4E6, coral #FF5A3C, sun #FFC736, white. Ink on coral 5.8:1; coral on ink 5.8:1; no white text on coral.

## Images

One matched set of ten photographs of the sample performer, all generated from the same reference headshot (an apricot-backdrop theatrical headshot): three headshots (theatrical, dramatic, commercial), a comp card photograph, front and profile digitals, an editorial frame, a commercial frame, and two reel stills. Each was checked against the reference (face, dark wavy shoulder-length hair, olive skin) and none needed regenerating. Everything is labelled sample on the page. 640px variants serve the phone, and below-fold images load only when scrolled near. Sample booking pack PDF (resume plus comp card) is generated from the same set.
