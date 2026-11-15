# Bid wireframe: Shopify store for pool products (Freelancer 40815434)

Quick bid wireframe, 15 Nov 2026, for Director. Built from the portfolio (nearest citable row: **ojjm-hire-shopify**, https://cromservices.github.io/ojjm-hire/ — a Shopify hire catalogue, not a pool or dropshipping store). Not a full build. Do not publish.

## The build

The client wants "an experienced Shopify developer to build a comprehensive store for a range of pool products." "The store will feature products from suppliers who will ship directly to customers." Quoted from the client post:

- "Full store setup from scratch"
- Categories: "Pool chemicals and water-care products"; "Pool equipment and replacement parts"; "Pool accessories, toys, and cleaning supplies"
- "Integration with suppliers for direct shipping"
- Skills they want: "Familiarity with product categorization and supplier integration" and "Experience with stores that involve drop shipping"
- "Strong attention to detail and design aesthetics"
- "Please provide samples of your previous work."

Suppliers are not named in the post.

## Feeling from the scope

The post names no customer feeling. Its only aesthetic line is about the freelancer: "Strong attention to detail and design aesthetics." The feeling comes from the purpose of the shop: pool owners buy chemicals and parts because something is wrong or a season is starting, and they want it fixed and delivered without fuss. Toys and floats are the reward at the end.

## Concept

A clean, sunlit store that takes the worry out of pool care. Three plain aisles match the three categories the client named. A water-care helper turns "the water is going green" into the right products and amounts. Parts are filtered by the customer’s own equipment so they fit first time. Direct shipping is explained honestly: each item ships from the supplier that stocks it, with a tracking link per parcel. A store-admin view shows the supplier sync behind it.

## Emotion of the scope

Client wants customers to feel: looked after by a "comprehensive store for a range of pool products", with "Strong attention to detail and design aesthetics", where products from suppliers "ship directly to customers." (Quoted from the client post.)

**Carefree: the pool is sorted, so summer can start.**

Not a task. The feeling of stepping into clear water and not thinking about the pump.

### Feeling journey

#### Arrive — refreshed
- Feeling word: refreshed
- Inner voice: “Blue water, green garden, cool air. This already feels like a weekend.”
- Design levers: full-bleed backyard pool photograph starting flush under the nav; deep navy scrim on the left so white type holds 4.5:1; sun-yellow search button; search pre-filled with a real need; short, plain lede.

#### Explore — reassured
- Feeling word: reassured
- Inner voice: “Green water has a fix, and someone has already worked out how much.”
- Design levers: three aisles named exactly as the categories; a water-care helper led by symptoms, not chemical names; suggested products listed in the order to use them; calm navy band.

#### Decide — confident
- Feeling word: confident
- Inner voice: “Four hundred and eighty to five hundred millimetres. Mine fits.”
- Design levers: a "My equipment" filter at the top of parts; a fit check on the product page in a green panel; delivery time shown beside the price; large clean product photographs.

#### Act — ease
- Feeling word: ease
- Inner voice: “Two parcels, one payment, the total right there.”
- Design levers: one short checkout column; shipping per parcel shown before payment; a plain line explaining direct shipping; 50px unclipped buttons; no pop-ups.

#### After — carefree
- Feeling word: carefree
- Inner voice: “Both are on their way. Back outside.”
- Design levers: a confirmation that tracks each supplier parcel separately; poolside photograph with loungers; one button to track; no upsell wall.

Never feel:

- Lost in a warehouse catalogue
- Unsure which chemical or how much
- Worried a part will not fit
- Confused about why items arrive separately
- Surprised by shipping at the end
- Like the store is just a dropshipping front

## Scope coverage

| Requirement | Where it appears | Shown |
|---|---|---|
| Full store setup from scratch | `screens.html` whole flow: home, categories, helper, parts list, product page, checkout, confirmation | yes |
| Category: Pool chemicals and water-care products | `screens.html` aisle 1 and water-care helper | yes |
| Category: Pool equipment and replacement parts | `screens.html` aisle 2, parts list with equipment filter, product page | yes |
| Category: Pool accessories, toys, and cleaning supplies | `screens.html` aisle 3 and telescopic pole product | yes |
| Integration with suppliers for direct shipping | `screens.html` "Ships direct from supplier" labels, per-parcel checkout and tracking, supplier sync admin | yes |
| Product categorization | `screens.html` aisles, type filters, nav | yes |
| Drop shipping experience | `screens.html` supplier sync admin and per-parcel tracking | yes |
| Attention to detail and design aesthetics | `proofs/desktop-1440.png` and `proofs/phone-390.png` | yes |
| Samples of previous work | Bid text (Director): ojjm-hire-shopify | yes |

## Rationale

The client gave a short brief and 500 bids are already in. A wireframe that shows how a pool owner actually shops (by problem, by their own equipment, and with honest direct-shipping messages) sets the bid apart from generic theme screenshots. Sample products, prices, supplier counts and parcel states are labelled "Sample content".
