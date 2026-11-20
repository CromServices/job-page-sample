# Prompt — Framer gift box landing page

Quick bid wireframe for Upwork 2123713115777364975, "Framer Landing Page with Scroll Animations". One landing page: hero, four product reveals in the client's order, the final gift box reveal and one call-to-action. No brand, product names, prices or copy were supplied, so the titles and photos are labelled sample stand-ins. No brand is invented, and "RAVEN" is not used on the page.

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| "a visually impressive landing page for an ecommerce gift box collection" | Whole page, opening at the hero (`#top`) |
| "a smooth scrolling experience where products are revealed one by one as the visitor scrolls down the page" | `#tshirt` → `#bracelet` → `#necklace` → `#perfume`, one full-height reveal each |
| "Hero section" | `#top`: closed gift box, 3-line H1, scroll cue |
| "T-shirt reveal" | `#tshirt` |
| "Bracelet reveal" | `#bracelet` |
| "Necklace reveal" | `#necklace` |
| "Perfume reveal" | `#perfume` |
| "Final gift box reveal" | `#box`: the four pieces gather in as the lid lifts and the open box appears |
| "Call-to-action button" | `#give`: "Shop the gift box" |
| "a premium, modern feel with motion and animation rather than a standard ecommerce page" | Every section; no grid, cart, filters or prices |
| "Add scroll-based animations and transitions" | Scroll-linked rise/scale on each product; scroll-linked lid lift and gathering on `#box`; reduced motion shows the box already open |
| "Ensure the page works well on desktop and mobile" | Proofs at 390, 1440 and 3440 |
| "Integration and implementation on Shopify" | `#give` button and header link are where the Shopify product or checkout link goes; no storefront on the page |
| Client will provide "Product images", "Product information", "Brand direction", "Content/text" | Stand-in photos and sample title, with one sample-content note at the top of the page |
| "Design and build the page in Framer" | Wireframe now; Framer build direction below |

Proposal items (Framer examples, cost, timeline, "RAVEN" opener, screening answer, Shopify connection method) go in the bid.

## The build

The client wants "a visually impressive landing page for an ecommerce gift box collection" with "a smooth scrolling experience where products are revealed one by one as the visitor scrolls down the page". The flow they gave: "Hero section", "T-shirt reveal", "Bracelet reveal", "Necklace reveal", "Perfume reveal", "Final gift box reveal", "Call-to-action button". They want "a premium, modern feel with motion and animation rather than a standard ecommerce page", and they want the freelancer to "Add scroll-based animations and transitions", "Ensure the page works well on desktop and mobile" and handle "Integration and implementation on Shopify". Full checklist in COVERAGE.md.

## Key ideas

1. **One piece at a time.** Each product gets a full screen in its own warm colour (peach, pink, lemon, apricot), rising into place as you scroll. There's never a row of thumbnails.
2. **The box opens as you scroll.** In the final reveal, the four pieces you've just met fly in from the corners as the ribbon-tied lid lifts away, and the open box appears holding all four.
3. **The store is behind the button.** The page is a story, not a shop. A single "Shop the gift box" call-to-action is where Shopify connects.

## Emotion of the scope

Client wants customers to feel the quiet pleasure of a gift being opened slowly, one piece at a time, with a premium, modern feel and motion in the air, not the feeling of browsing a shop.

**Headline feeling: I'm unwrapping it already, and I want to give it.**

### Feeling journey

#### Arrive — curious
- Feeling word: curious
- Inner voice: “What's in the box?”
- Design levers: hero flush under a quiet header, the closed coral box with a white ribbon, a 3-line H1, an animated scroll cue.

#### Explore — intrigued
- Feeling word: intrigued
- Inner voice: “A T-shirt, then a bracelet… what's next?”
- Design levers: one product per full-height screen in its own warm colour, the photo rising and settling as it scrolls in, a short first/then/last line.

#### Decide — delighted
- Feeling word: delighted
- Inner voice: “Oh, it all goes together. That's the gift.”
- Design levers: the four pieces gather into the box as the lid lifts, and the open box holds all four.

#### Act — ready
- Feeling word: ready
- Inner voice: “One button. I'll get it.”
- Design levers: a full-width raspberry band with one white "Shop the gift box" button that leads into Shopify.

#### After — assured
- Feeling word: assured
- Inner voice: “It still feels like the same gift with their own photos in it.”
- Design levers: the layout and motion stay put when the client's images, copy and brand replace the stand-ins.

Never feel: a standard ecommerce page (grids, collection lists, cards, filters, carts or price tiles); cheap or catalogue-like; earthy, brown or muted luxury beige; serif or soft-traditional type; eyebrow labels, slogan headings, pill badges or empty marketing language; placeholder frames or invented brand names, including "RAVEN"; all four products shown as equal cards before the box; a busy shop header.

## Standout moment

The gift box opens as you scroll. When the stage enters the viewport, the closed, ribbon-tied box lifts up by 18%, tilts 4° and fades out. At the same time, round chips of the T-shirt, bracelet, necklace and perfume slide in from the four corners, shrink into the centre and drop into the box as the open box scales up from 0.9 to full size. It's scroll-linked, like Framer Scroll Transforms, and latches once open, so scrolling back up doesn't close it. With prefers-reduced-motion, the box is already open and nothing moves.

## Framer build direction (bid and build only, not on the page)


- One Framer page; each product section is a stack with a Scroll Transform (appear on scroll: from y 120, scale 0.86, opacity 0 → y 0, scale 1, opacity 1, spring), run once.
- Gift box: a sticky stage section with Scroll Transforms keyed to scroll progress. The closed-box layer goes y −18%, rotates −4° and fades out; the open-box layer scales from 0.9 to 1 and fades in; four round product chips move from the corners to the centre and scale down.
- Reduced motion: use Framer's reduced-motion variant to show the open box with no transforms.
- CTA: link to the Shopify product or checkout URL, or embed a Shopify Buy Button component.
- Breakpoints: Desktop 1440, Tablet 810, Phone 390. Space Grotesk via Framer fonts.

## Type and colour

- Font: Space Grotesk only (self-hosted woff2). No serifs. Body 18px desktop / 17px phone; H1 72px desktop / 44px phone, 3 lines. 7-step type scale and 4/8 spacing scale in :root.
- Palette: ink #2A1740, soft ink #4A3460, raspberry #C8283F (CTA band; white text 5.48:1), raspberry deep #A61E33, white #FFFFFF, blush #FCD0C6, peach #F8D8BF, pink #FBD6D2, lemon #FBEAA3, apricot #F9C595, coral #F7C3B8. No brown, beige or earth tones.

## Images (generated stand-ins, labelled sample on the page)

`box-closed`, `tshirt`, `bracelet`, `necklace`, `perfume`, `box-open` (plus `-720` sizes). Imperfect: the items inside the open box don't exactly match the solo shots. The bracelet has no bar, the necklace has a gold disc instead of a crystal, and the perfume bottle shape differs. The closed and open box are close but not pixel-matched. All are replaced by the client's product images.
