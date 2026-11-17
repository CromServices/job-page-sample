# Bid wireframe: B2B corporate gifting store (Freelancer 40814942)

Quick pre-bid wireframe, 17 Nov 2026, for Director. The client asked for a store "similar in functionality and layout to Brandability.co.za" with Amrod Vendor API integration. This pack builds out that layout direction (promo bar, search-first header with My Quote, mega-menu, hero with Shop / Request a quote, trust strip, category tiles, product row with prices excl. VAT). It does not copy Brandability's logo, photographs or wording. The store name Harbour Mark is a neutral sample. All prices, stock counts, quotes and admin figures are labelled "Sample content". Not a full build. Do not publish from this pack.

Key design ideas drawn from the brief: a clean, search-first catalogue that feels official the moment you arrive; a product page where branding is priced in the open; a formal PDF quote with 15% VAT that a buyer can send upstairs without waiting.

## The build

Quoted from the client post:

- "build a modern B2B/B2C corporate gifting and promotional clothing e-commerce website similar in functionality and layout to Brandability.co.za."
- "seamless, automated integration with the Amrod Vendor API (identity.amrod.co.za) to pull products, variations, live stock levels, pricing tiers, and branding guidelines into our own database."
- "Authenticate via OAuth2/Bearer tokens against identity.amrod.co.za/VendorLogin with automatic token refresh handling."
- "Build scheduled background sync jobs (cron/queues) to pull and upsert parent products, child SKU variants (colors/sizes), product images, stock counts, and pricing feeds into our local database (PostgreSQL)"
- "a full catalogue/image sync every 24 hours, and a lightweight live stock-level sync every 30 minutes."
- "Admin Markup Engine: A backend dashboard setting allowing me to apply configurable profit markups (e.g., percentage tiers by category or order volume) on top of Amrod’s reseller cost prices."
- "Clean, fast, mobile-responsive UI modeled after Brandability.co.za."
- "Multi-level mega-menu navigation (Apparel, Headwear, Bags, Drinkware, Tech, Eco-Friendly)."
- "Fast faceted search and filtering by category, color swatch, size, live stock availability, and branding method."
- "Interactive color swatches that swap the main product gallery images and update the available size/stock matrix."
- "Bulk tiered pricing table (showing price breaks for larger quantities)."
- "Interactive Branding Calculator: Users can toggle between \"Unbranded\" and \"Branded.\" When \"Branded\" is selected, users choose the branding position (e.g., Left Chest, Front), branding method (Screen Print, Embroidery, Laser Engraving, etc.), and number of colors. The calculator must dynamically compute: (Base Unit Price + Unit Branding Cost) × Quantity + One-Off Setup/Origination Fees."
- "Option A — Instant Quote: Allows corporate buyers to generate and download/email an itemized formal PDF quote (inclusive of 15% South African VAT and setup fees) and saves the quote in the Admin Dashboard for follow-up."
- "Option B — Online Checkout: Standard cart checkout with artwork file upload fields (.ai, .eps, .pdf, .svg) per branded item, courier shipping calculation, and integration with a South African payment gateway (PayFast or Peach Payments)."
- "Frontend: Next.js (React), TypeScript, Tailwind CSS." / "Backend & Database: Node.js, PostgreSQL, Prisma ORM (or similar scalable stack—please specify your proposed stack in your bid)."
- Bid asks: "Links to 2–3 complex e-commerce or third-party API integration projects", "Confirmation that you have experience working with OAuth2/REST APIs that have parent-child product variations and scheduled cron syncs", "Your proposed milestone breakdown and estimated timeline".

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| Brandability-like B2B/B2C gifting storefront | Home (`#home`): promo bar, search header with My Quote, category bar, hero (Shop the range / Request a quote), trust strip, category tiles, product row with prices excl. VAT |
| Mega-menu: Apparel, Headwear, Bags, Drinkware, Tech, Eco-Friendly | Mega-menu screen (`#mega`): six named groups with subcategories |
| Faceted search by category, colour swatch, size, live stock, branding method | Listing (`#listing`) filter sidebar and results |
| Colour swatches swap gallery and size/stock matrix | Product (`#product`) gallery, swatch row, size × stock matrix |
| Bulk tiered pricing table | Product (`#product`) quantity-break table |
| Branding calculator (Unbranded/Branded, position, method, colours, live formula) | Product (`#product`) calculator; standout working line and live stock beside quantity |
| Instant PDF quote with 15% VAT and setup fees, saved to admin | Quote (`#quote`) PDF preview with VAT line; Admin quotes (`#admin-quotes`) list |
| Cart checkout, artwork upload (.ai .eps .pdf .svg), courier, PayFast or Peach Payments | Cart and checkout (`#checkout`) |
| Amrod API sync: OAuth2/Bearer, token refresh, 24h catalogue sync, 30min stock sync, PostgreSQL upserts | Admin Amrod sync (`#admin-sync`) |
| Admin markup engine: % tiers by category and order volume, cost to sell preview | Admin markup (`#admin-markup`) |
| Proposed stack: Next.js, TypeScript, Tailwind, Node.js, PostgreSQL, Prisma, job queue | Build plan (`#plan`) |
| Milestone breakdown and estimated timeline | Build plan (`#plan`): M1 sync + catalogue, M2 storefront + calculator, M3 quote + checkout |

## Client design direction

Reference supplied: Brandability.co.za, "similar in functionality and layout" and "UI modeled after Brandability.co.za". Screenshot in `attachments/brandability-home-1440.png`. Build out that layout (patterns listed under The build), not a new design language. Harbour Mark is a neutral sample name and colour (navy and teal, not Brandability's coral). Do not copy their logo, photographs or text.

## Feeling from the scope

Quoted from the post: "seamless, automated integration"; "so the site loads rapidly"; "Clean, fast, mobile-responsive"; "Fast faceted search"; "Instant Quote"; "formal PDF quote". Corporate buyers should feel this is quick and official: they get a real price with VAT in seconds, and the owner feels the catalogue runs itself.

## Emotion of the scope

Client wants customers to feel: "the site loads rapidly", on a "Clean, fast, mobile-responsive" store, with "Fast faceted search", an "Instant Quote", and a "formal PDF quote" from a "seamless, automated integration".

**A formal price, in seconds.**

### Feeling journey

#### Arrive — assured
- Feeling word: assured
- Inner voice: “A clean shop, a search box, and My Quote sitting right there. This is a proper supplier.”
- Design levers: promo bar, search-first header with My Quote, hero flush under the nav, Shop the range and Request a quote, two-to-three-line headline.

#### Explore — oriented
- Feeling word: oriented
- Inner voice: “Apparel, drinkware, the exact colour, and only what is in stock. The range is here.”
- Design levers: mega-menu of the six named groups, category tiles, faceted listing with colour, size, live stock and branding method.

#### Decide — certain
- Feeling word: certain
- Inner voice: “Navy, XL in stock, two hundred and fifty units. The formula is doing the arithmetic in front of me.”
- Design levers: swatches that swap the gallery and the size/stock matrix, tiered price table, branding calculator with the live working line and the Amrod stock count beside quantity.

#### Act — official
- Feeling word: official
- Inner voice: “VAT at fifteen percent, setup fees, a PDF I can send upstairs.”
- Design levers: instant quote PDF preview, artwork upload for .ai .eps .pdf .svg, courier rate, PayFast or Peach Payments.

#### After — unburdened
- Feeling word: unburdened
- Inner voice: “The catalogue refreshed itself. Markup is set. Quotes are waiting in the list.”
- Design levers: Amrod sync dashboard with token refresh and the 24-hour / 30-minute schedules, markup engine, saved quotes for follow-up.

Never feel:

- Waiting on a slow catalogue
- Guessing the branded price
- Sending a quote without VAT
- Wondering whether the stock is real
- Chasing a supplier for a PDF

## Standout moment

The branding calculator shows its working live as a line under the total, for example “(R 42.00 + R 9.50) × 250 + R 450 setup = R 13,325.00 excl. VAT”, with the live Amrod stock count beside the quantity box, so a buyer can trust the number before downloading the quote. Values are labelled sample figures.

## Rationale

The post already names the reference site and every operational piece (sync, markup, calculator, dual checkout). The wireframe is that site, with their catalogue mechanics visible: swatches, tiers, a calculator that shows its working, a VAT-inclusive PDF, and an admin that makes the Amrod feed and the markup feel routine. Sample content only; the client's own brand, products and rates replace Harbour Mark when we build.
