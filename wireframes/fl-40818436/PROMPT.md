# Bid wireframe: Shopify art store custom build (Freelancer 40818436)

Quick bid wireframe, 15 Nov 2026, for Director. Built from the portfolio (nearest citable row: **ojjm-hire-shopify**, https://cromservices.github.io/ojjm-hire/ — a Shopify hire catalogue, not an art store). Not a full build, and not the client’s supplied designs, which have not been seen. Do not publish.

## The build

A custom Shopify art store built to the client’s approved designs, with supplier sync. Quoted from the client post:

- Homepage: "Replace the existing Shopify homepage with our approved New Art Venture design"
- Product catalog: "Upload and organize the completed product files"
- Product pages: "Implement our approved “The Pearl” design, with sizes and presentation options"
- Custom Wedding Art: "Integrate the brochure, questionnaire, and ordering process"
- View Art on Your Wall: "Build the interactive room preview with multiple artworks, frame choices, saving, and sharing"
- Fundraising program: "Implement school/parish referral links, attribution, and commission reporting"
- Checkout: "Configure payments, shipping, taxes, and order processing"
- "Sync with Supplier"
- Mobile experience: "Ensure everything works properly on phones, tablets, and computers"

They will judge "Experience customizing Shopify themes to match supplied designs", "Demonstrated work with artwork, framing, or configurable products" and "Experience integrating interactive product-preview applications", on "a fixed price with milestone payments". They also ask for "A verified profile in Shopify’s official Partner Directory" — Crom does not claim one.

## Feeling from the scope

The post is a build list and names no customer feeling outright. The cues are the art itself and the way it is meant to be lived with: "our approved New Art Venture design", "our approved “The Pearl” design", "Custom Wedding Art", and above all "View Art on Your Wall" — the customer is meant to see the piece at home before buying. The fundraising program adds a second feeling: buying art that also gives back to "school/parish" communities.

## Concept

A quiet gallery that walks the customer home. The store opens like a lit gallery wall, lets the eye wander through the collection, settles the decision on "The Pearl" product page (sizes, presentation, frame), then puts the piece on the customer’s own wall. Wedding art is told as a story kept on the wall; fundraising is told as pride in a community. Checkout is calm and complete, with shipping and tax shown before payment. The supplier sync is invisible to the customer: it shows up only as "framed by our framing partner and shipped ready to hang".

## Emotion of the scope

Client wants customers to feel: that the art belongs in their home — the post’s own words are "View Art on Your Wall", "Custom Wedding Art", "frame choices, saving, and sharing", and a "school/parish fundraising system" that gives back. (Quoted from the client post.)

**Belonging: the piece already feels like it lives here.**

Not a task. The quiet moment of standing back from a wall and knowing it is finally right.

### Feeling journey

#### Arrive — wonder
- Feeling word: wonder
- Inner voice: “Warm light on a wall of frames. Something in me slows down.”
- Design levers: full-bleed gallery photograph starting flush under the nav; deep left scrim so ivory type holds 4.5:1; Manrope 800 H1 over two to three lines; one soft lede; two clear buttons, never a banner of offers.

#### Explore — imagining
- Feeling word: imagining
- Inner voice: “That green would sit above the sofa. The pair would suit the hallway.”
- Design levers: 4:5 art crops with generous gaps; filter chips by room and mood as well as style; the room preview with real frames on a real wall; wedding art told as a story, not a product grid.

#### Decide — certainty
- Feeling word: certainty
- Inner voice: “Oak, forty by fifty, with the mat. That is the one, and it will look like this.”
- Design levers: "The Pearl" layout with a large main image and frame-corner and workbench close-ups; size, presentation and frame as tactile chips; price large and calm; "See it on my wall" beside "Add to cart".

#### Act — ease
- Feeling word: ease
- Inner voice: “Shipping, tax, total, all in front of me. Nothing hidden behind the next click.”
- Design levers: one short checkout column; the full summary visible before payment; card, Shop Pay and PayPal; 50px unclipped buttons; no countdowns or upsell pop-ups.

#### After — pride
- Feeling word: pride
- Inner voice: “It is being framed for us. And part of it helped St Mary’s.”
- Design levers: a typographic confirmation with ship updates promised; the saved wall waiting in the account; the fundraising partner named in the order summary; the dark fundraising band with the partner’s own report.

Never feel:

- Like a print warehouse
- Unsure how it will look at home
- Rushed by sales banners
- Surprised by shipping or tax
- That the fundraising is an afterthought
- That wedding art is a template

## Scope coverage

| Requirement | Where it appears | Shown |
|---|---|---|
| Homepage replaced with the approved New Art Venture design | `screens.html` hero and collection (layout direction; final follows their supplied design) | yes |
| Product catalog: upload and organize product files | `screens.html` collection with filter chips by style and room | yes |
| Product pages: "The Pearl" design with sizes and presentation options | `screens.html` product page (size, presentation, frame chips) | yes |
| Custom Wedding Art: brochure, questionnaire, ordering | `screens.html` wedding art section (three steps, brochure and questionnaire buttons) | yes |
| View Art on Your Wall: multiple artworks, frame choices, saving, sharing | `screens.html` room preview (two pieces on the wall, live frame toggle, Save and Share) | yes |
| Fundraising: school/parish referral links, attribution, commission reporting | `screens.html` fundraising band and partner dashboard (link, orders via link, commission) | yes |
| Checkout: payments, shipping, taxes, order processing | `screens.html` checkout and order confirmation | yes |
| Sync with Supplier | `screens.html` product page ("framed by our framing partner"); detail in `wireframe.md` | yes |
| Mobile experience on phones, tablets and computers | `proofs/phone-390.png` and `proofs/desktop-1440.png` | yes |
| Fixed price with milestone payments | Bid text (Director); milestones listed in `wireframe.md` | yes |

## Rationale

The client is asking for a lot of custom work on a tight budget, and they already have approved designs. This wireframe does not try to replace those designs. It shows that we understand what each feature is for, from the customer’s side: the room preview and "The Pearl" options exist to make the customer sure, the wedding flow exists to make them feel heard, and the fundraising exists to make the purchase mean something. Sample products, prices and the partner report are labelled "Sample content".
