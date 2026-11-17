# Stock Furniture — product-page CRO preview

A fix preview of the client's own Shopify product page at https://www.stock-furniture.com/products/rio-corner, not a redesign. Same logo, colours, Jost type, and real Rio Corner content, with two quick-win fixes applied: Add to Cart above the fold on phone, and the delivered, installed price shown before Add to Cart.

## The build

Every requirement, quoted from the client post:

1. "My Shopify store attracts roughly 30,000 visitors each month but only converts about 0.5 % of them into buyers."
2. "Increasing the number of completed purchases is my top priority, yet I’m not certain which step of the buying journey—product pages, cart, or checkout—is losing the most customers."
3. "Analyse the entire funnel with Shopify, GA4, and heat-mapping tools to pinpoint friction."
4. "Deliver a concise audit highlighting quick-win fixes alongside a roadmap for structured A/B tests."
5. "Implement or guide the changes directly in Shopify (theme tweaks, app setups, copy/layout adjustments) and track the resulting impact."
6. "Key success metric: a measurable lift in completed transactions, validated through before-and-after data."
7. "I’d love to see how you would tackle this project and what tools or experiments you would prioritise first."
8. "My website www.stock-furniture.com"
9. "Contact me after you audit my website"
10. "Inform me what you can work on and increase my sales"

From the outside-in scan of their live Rio Corner page: mobile Add to Cart sits just under the first screen; "Shipping calculated at checkout" and "Installation is quoted separately" leave the total open.

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| 1, 6 baseline 0.5 % and lift metric | `#audit` — baseline card (30,000 visits, 0.5 %, about 150 orders a month, from their figures) and a measurement plan (add_to_cart, begin_checkout, purchase, before-and-after) |
| 2, 3 which step loses buyers; analyse the funnel with Shopify, GA4, heat maps | `#audit` — funnel chart, product → cart → checkout → purchase, labelled "fill from GA4"; note that heat maps on the top product pages follow account access |
| 4 quick wins + A/B roadmap | `#audit` — quick-win list from the live-page scan, plus an A/B roadmap table (test, hypothesis, metric, order) |
| 5 implement in Shopify, product page | `#product` / `#product-after` — their Rio Corner page with Add to Cart above the fold on a 390×844 phone, and the delivered, installed total before Add to Cart; sticky buy bar |
| 5 cart step | `#cart` — delivery-area selector with cost shown, installation add-on line, trust row from their shipping policy |
| 7 what we prioritise first | `#plan` — the first three experiments, in order |
| 8, 9, 10 their site audited; what we can work on | `#product` — annotated before/after of the live Rio Corner page (screenshots in attachments/); intro names www.stock-furniture.com |
| Standout: know your total before you add to cart | `#product-after` — pick a Lebanon area, tick installation, and the running total appears under the price (delivery and installation figures labelled Sample content) |

## Client design direction

Their live store is the direction: Stock Furniture Lebanon logo, Jost, ink #080A1C, sale and link purple #72518C, announcement bar #333333, light layout, Rio Corner photography and copy from https://www.stock-furniture.com/products/rio-corner. This is a fix of their product page, not a new design.

Key ideas drawn from their brief and their page: certainty of the full price, a buy button you can reach on the first phone screen, and a measurable path from traffic to purchase.

## Feeling from the scope

Quoted from the post: "Increasing the number of completed purchases is my top priority"; "I’m not certain which step"; "pinpoint friction"; "quick-win fixes"; "a measurable lift". The owner wants certainty about where buyers drop. Buyers of a large sofa should feel sure of the full price and delivery before they commit.

## Emotion of the scope

Client wants customers to feel: sure of the full price before they buy; that "Increasing the number of completed purchases is my top priority" is being met with "quick-win fixes" and "a measurable lift", not a guess.

**Sure of the total.**

### Feeling journey

#### Arrive — oriented
- Feeling word: oriented
- Inner voice: This is the sofa I was already looking at, on their own page.
- Design levers: their Stock Furniture logo, the Rio Corner photograph, Jost, ink and purple, the live page named.

#### Explore — curious
- Feeling word: curious
- Inner voice: What will this actually cost at my door in Lebanon?
- Design levers: the area picker and installation tick in the total box; the audit funnel waiting to be filled from GA4.

#### Decide — sure
- Feeling word: sure
- Inner voice: The delivered, installed price is sitting here before I commit.
- Design levers: the running total under the real $1,190.00 price; delivery and installation lines labelled Sample content; the total placed before Add to Cart.

#### Act — ready
- Feeling word: ready
- Inner voice: The buy button is right here, on the first screen of my phone.
- Design levers: Add to Cart above the 390×844 fold; the sticky buy bar; the first experiment in the plan.

#### After — settled
- Feeling word: settled
- Inner voice: Delivery and installation are already on the order, not a surprise later.
- Design levers: cart with area selector, installation add-on, and a trust row taken from their shipping policy.

Never feel: surprised by shipping or installation at checkout; unsure of the full price; as if the shop was redesigned; lost below the fold on a phone.

## Standout moment

A "Know your total before you add to cart" box on their Rio Corner page: pick your area in Lebanon and tick installation, and the delivered, installed total appears under the price, before Add to Cart. Delivery and installation figures are labelled Sample content until they confirm their delivery table.
