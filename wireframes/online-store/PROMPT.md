# Threadhouse: small online store (Crom-owned Lovable demo)

Wireframe for Nate's review, 17 Nov 2026. Crom Services is the client; Threadhouse is a fictional Australian clothing and home-textiles label, and every garment, price, person and order is sample content. Planned host: https://shop.cromservices.com.au. No Lovable build starts until Nate approves this wireframe.

Key design ideas drawn from the brief:

1. **Close enough to feel the weave.** "A product page with photos": photographs taken near enough to see the slub of the linen, plus an up-close loupe on the product photo.
2. **A small room, not a warehouse.** "a small online store": eight pieces, two quiet groups, generous space, one rust stitch as the only loud thing.
3. **The till is honest.** "checkout through Stripe in test mode (clearly labelled test mode)": Test mode is said on the cart, the checkout, the confirmation and the email, next to the order number.

## The build

Quoted from post.md (no attachments exist):

- "Crom is building a portfolio demo for a fictional Australian clothing and home-textiles label, Threadhouse."
- "The demo is a small online store: a catalogue, product pages, a cart, and checkout through Stripe in test mode, with an order email and an admin area for products."
- "A catalogue of sample products (clothing plus a few home textiles)."
- "A product page with photos, price in AUD, size or variant, and add to cart."
- "A cart that can update quantity and remove a line."
- "Stripe checkout in test mode (clearly labelled test mode)."
- "An order confirmation on the site, and an order email (Resend or Stripe receipt — show the email)."
- "Admin login (email magic link) to add, edit, and hide products."
- "Use clearly fictional garments and prices, all labelled as sample."
- Sign-off: "a visitor can add a product to the cart and move through Stripe checkout in test mode"
- Sign-off: "the confirmation page and a sample order email are shown"
- Sign-off: "an admin can sign in and edit a product"
- "Do not use “Lovable Partner”, “Lovable Expert”, “Certified”, or the Lovable logo anywhere"

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| Fictional Australian clothing and home-textiles label, Threadhouse | All screens: Threadhouse logo and wordmark, cloth hero, sample bar |
| Small online store: catalogue, product pages, cart, Stripe test checkout, order email, admin | Catalogue (`#catalogue`), product (`#product`), cart (`#cart`), checkout (`#checkout`), confirmation and email (`#confirmation`), admin (`#admin`) |
| Catalogue of sample products, clothing plus home textiles | Catalogue (`#catalogue`): 4 clothing + 4 home textiles, filter chips, every tile photographed, AUD prices marked "Sample price" |
| Product page with photos, AUD price, size or variant, add to cart | Product (`#product`): three-photo gallery with up-close loupe, A$149 incl. GST, colour swatches, sizes (XL sold out), quantity, Add to cart, added state |
| Cart that can update quantity and remove a line | Cart (`#cart`): quantity steppers on two lines, Remove links, "Removed … Undo" state, summary with delivery and GST |
| Stripe checkout in test mode, clearly labelled | Checkout (`#checkout`): purple Test mode banner with test card 4242, Test mode pill in the Stripe header, "Pay A$233.00 (test)" |
| Order confirmation on the site | Confirmation (`#confirmation`): order TH-1027, items, total, "Test order · no real charge" |
| Order email shown (Resend or Stripe receipt) | Confirmation (`#confirmation`): sample order email via Resend, same order number, test-mode pill, card ending 4242 |
| Admin login by email magic link | Admin (`#admin`): email form and "Check your inbox" sent state |
| Admin can add, edit and hide products | Admin (`#admin`): + Add product, product editor (name, price, category, photos, sizes, Visible in the shop toggle, Save, saved state), Wrap Skirt shown Hidden in the list |
| Fictional garments and prices labelled sample | Sample bar, "Sample price" under every tile, "Sample product" tags, "(sample)" in cart, "Sample order email" footer, footer note |
| Sign-off: add to cart and move through Stripe test checkout | `#product` Add to cart → `#cart` Checkout with Stripe → `#checkout` Pay (test) |
| Sign-off: confirmation page and sample order email shown | `#confirmation` |
| Sign-off: admin signs in and edits a product | `#admin` sign-in → editor → saved |
| No "Lovable Partner", "Lovable Expert", "Certified" or Lovable logo | None on any screen; footer credit reads "A Crom Services demo" only |

## Client design direction

None supplied (attachments/MANIFEST.md). Crom's own direction from scope.md: tactile and earthy; warm clay, sand, charcoal, a single rust stitch for actions; cloth photographed close enough to feel the weave; quiet type, generous space; mobile-first; a garment or cloth photograph starts under the nav; every product image finished. Followed as written.

## Feeling from the scope

Quoted from the post: "a small online store"; "catalogue, product pages, a cart, and checkout through Stripe in test mode"; "an order email and an admin area for products." From scope.md: the catalogue "should feel like walking into a small room of cloth, not a warehouse", the product page "close and honest", checkout "safe and plainly a test", and the email "like a note from the maker".

## Emotion of the scope

Client wants customers to feel: they are in "a small online store", walking "into a small room of cloth, not a warehouse"; the product page is "close and honest"; checkout is "safe and plainly a test"; the email reads "like a note from the maker".

**Close to the cloth, calm at the till.**

### Feeling journey

#### Arrive — calm
- Feeling word: calm
- Inner voice: “Folded linen in soft light, eight pieces, nothing shouting at me.”
- Design levers: cloth photograph flush under the nav, three-line headline, a single rust button, short catalogue in two quiet groups, generous space, AUD prices marked sample.

#### Explore — close
- Feeling word: close
- Inner voice: “Slubby, soft, a nut button. That's real linen, near enough to touch.”
- Design levers: hanger, folded and hem photographs, up-close loupe on the main photo, fabric, fit and care notes, colour swatches, sizes with sold-out shown honestly.

#### Decide — sure
- Feeling word: sure
- Inner voice: “One shirt, two tea towels, delivery and GST spelled out. Nothing hidden.”
- Design levers: cart with quantity steppers, Remove with Undo, full summary, "Checkout with Stripe" with the Test mode pill beside it.

#### Act — safe
- Feeling word: safe
- Inner voice: “Purple banner, test card, Pay (test). This won't touch my bank.”
- Design levers: persistent Test mode banner and pill on the Stripe checkout, test card note under the card field, confirmation and email repeating "test mode, no charge" next to TH-1027.

#### After — capable
- Feeling word: capable
- Inner voice: “Email link, change the price, hide the skirt till it's back. Done before my tea's cold.”
- Design levers: magic-link sign-in with sent state, product list with Live and Hidden tags, editor with photos, sizes and Visible toggle, saved confirmation.

Never feel: rushed by a noisy theme, unsure whether checkout is live, shown an empty photo box where a garment should be, or locked out of your own shop.

## Standout moment

**The up-close loupe.** Beyond the brief, the main product photo carries a round loupe that shows the weave and a corozo button at close range, with a one-line cloth note, so the shopper gets the touch an online store usually loses. It sits alongside the scope's own trust beat, kept intact: Test mode is said on the cart, the checkout banner, the confirmation and the order email beside the order number, so the path feels like a real purchase without any doubt about a charge.

## Site-generation prompt (Lovable)

Build **Threadhouse**, a small online store for a fictional Australian label selling linen and cotton clothing and a few home textiles. Label all garments, prices, people and orders as sample content. Planned domain: shop.cromservices.com.au.

**Voice:** quiet and plain, like the maker talking across a bench. Short sentences, Australian spelling, honest fabric notes, no hype.

**Palette:** charcoal #2A2826 (type), sand #F4EDE3 (page), oat #E9DFD0, line #D8CBB8, rust #9A3F22 (actions, white text), clay #B7714F (the stitch accent), warm white #FFFCF7 (cards), sage #3F5A3A with #E2E9D9 (success), Stripe test purple #5B3FA0 with #EFE9FB (test-mode labels only).

**Type:** wordmark, headings, prices and order numbers in Inter Tight 650 (tracking −0.035em, H1 −0.045em, tabular price figures); body and UI in Manrope (400 body, 650–700 UI); eyebrows uppercase with +0.16em tracking. Self-hosted latin subset. Body 18px desktop, 17px phone. H1 two to three lines. No serifs.

**Fit to the font:** a fashion-editorial grid: near-square 2px corners on buttons, cards, chips, cart and inputs; charcoal rules between sections; larger, tighter H1 set like a lookbook cover.

**Imagery and art direction:** soft window light on natural linen and cotton in clay, sand, oat and charcoal; close enough to see the weave; flat-lays on sand linen for catalogue tiles; a hanger, a fold and a hem close-up for the product page; a rust running stitch as the recurring detail. No models, no real brands. Logo: a charcoal rounded square with a white house outline and a dashed rust stitch across it, about 64px desktop and 48px phone, beside the "Threadhouse" wordmark.

**Pages and sections:**
1. Catalogue: sample bar; header (logo, Clothing, Home, Sign in, Cart with count); cloth photograph flush under the nav with headline and Shop button; filter chips; Clothing and Home textiles grids with photo, name, cloth, colour, AUD price and "Sample price".
2. Product page: gallery with up-close loupe, name, A$ price incl. GST, colour swatches, sizes with sold-out state, quantity, Add to cart, added state, fabric/fit/care/delivery notes.
3. Cart: lines with quantity steppers and Remove (with Undo), summary with delivery and GST, Checkout with Stripe and a Test mode pill.
4. Checkout: Stripe Checkout in test mode via the Stripe connector, with a persistent "Test mode, no real charge" banner and the 4242 test card note.
5. Order confirmation: order number, items, total, "Test order, no real charge".
6. Order email via the Resend connector after Stripe confirms: same order number, items, total, test-mode pill, a short note from the maker.
7. Admin: email magic-link sign-in (Supabase auth); product list with Live and Hidden tags; Add product; editor with name, AUD price, category, photos, sizes, Visible in the shop toggle, Save.

**Data:** products (name, price_aud, category, cloth, colours, sizes with stock, photos, visible), orders, order_items. Seed the eight sample products: Field Shirt A$149, Easy Trouser A$139, Everyday Tee A$59, Wrap Skirt A$119 (hidden), Stripe Tea Towels set of 2 A$36, Cushion Cover A$59, Table Runner A$69, Fringed Throw A$169, all marked sample.

**Constraints:** Stripe test keys only, never live charges. WCAG AA contrast, buttons never clip, mobile-first, no placeholder art. Do not use "Lovable Partner", "Lovable Expert", "Certified" or the Lovable logo. Credit line, if any: "A Crom Services demo". Keep to these seven views so it builds on the Lovable free plan's daily credits.

## Rationale

A small label wins online by making cloth feel real and the till feel trustworthy. So the wireframe spends its boldness on photography and the loupe, keeps the catalogue to one small room, and turns the test-mode requirement into a trust device repeated at every money moment. The admin shows a real owner task (edit a price, hide a restocking skirt) so the demo proves the store can be run without a developer.
