# Bid wireframe: Vacation rental site with Guesty (Freelancer 40817472)

Quick pre-bid wireframe, 17 Nov 2026, for Director. No client design, Figma, property list or listing URLs were supplied. Sample brand and stays are labelled as sample. Dry-run publish only.

## The build

Quoted from the client post:

- "I run several short–term rentals through Guesty and I’m ready to pull everything into one polished, conversion-focused website."
- "give visitors the choice to book directly through my Guesty checkout or jump over to the corresponding Airbnb or Vrbo listing—whichever they prefer."
- "Each property will live on its own page and needs to surface every detail a traveller looks for."
- "Photos, full description, amenity list, and an interactive location map"
- "Live availability calendar, nightly rates, and any booking rules coming straight from Guesty"
- "Guest reviews, nearby attractions, and a downloadable/online house guide"
- "When a guest clicks “Book Now” the site should open the Guesty booking page in the same window or a new tab (whichever you recommend for best UX)."
- "Clear “View on Airbnb” and “View on Vrbo” buttons must sit beside it."
- "Pull or embed real-time data from Guesty so calendars and prices stay in sync."
- "Clean, responsive design that looks great on mobile first."
- "Fast page loads, basic on-page SEO setup, and simple content management so I can add new properties myself."
- "Analytics ready (Google Analytics / GA4)."
- Sign-off: "All property pages display the elements listed above accurately."
- Sign-off: "Guesty checkout opens and completes a test reservation without errors."
- Sign-off: "Airbnb and Vrbo buttons link to the correct external listings."
- Sign-off: "Site passes a mobile-friendly test and core pages load under three seconds on a standard connection."
- "I'm flexible on the platform—WordPress with a solid theme, Webflow, or another CMS you're confident in—as long as future edits remain straightforward."
- "Share a couple of similar rental sites you've built and outline how you would tackle the Guesty connection"

## Coverage checklist

| Requirement | Location |
|-------------|------------------|
| One polished, conversion-focused site for several rentals | Home hero and All stays grid (three sample properties) |
| Book direct via Guesty or go to Airbnb/Vrbo | Home cards and property booking box: Book Now primary, View on Airbnb and View on Vrbo beside it |
| Each property on its own page | Property page template (`#property`) — one fully worked sample stay |
| Photos, full description, amenity list, interactive location map | Property page: gallery, description, amenity grid, interactive map with pin and nearby markers |
| Live calendar, nightly rates, booking rules from Guesty | Property page calendar with a rate on each open night, min-stay and check-in rules, “Synced from Guesty” chip |
| Guest reviews, nearby attractions, house guide | Property page: reviews strip, nearby list, House guide with PDF download and online view |
| Book Now opens Guesty booking (same tab vs new tab) | Booking box Book Now opens an in-page Guesty checkout (same tab); annotation recommends same tab on mobile with a Back to the stay link |
| View on Airbnb / View on Vrbo beside Book Now | Booking box button row, and the same three actions on each home card |
| Real-time Guesty sync | Plan panel (`#plan`): Guesty Open API / Booking Engine, 15-minute cache refresh |
| Mobile first | 390 phone proof; sticky mobile booking bar; responsive gallery and calendar |
| Speed, on-page SEO, self-serve CMS to add properties | Owner CMS (`#admin`): Add a property form (Guesty listing ID, Airbnb URL, Vrbo URL, guide PDF) plus SEO title, meta description and slug |
| Analytics ready (GA4) | Admin settings: GA4 measurement ID and tracked events (view_property, click_book_now, click_airbnb, click_vrbo) |
| Sign-off: property pages show every listed element | Launch checklist on `#plan` maps this test |
| Sign-off: Guesty checkout completes a test reservation | Launch checklist plus the in-page test checkout on the property page |
| Sign-off: Airbnb and Vrbo buttons link to the correct listings | Launch checklist; URLs stored on the property in the CMS and used by the buttons |
| Sign-off: mobile-friendly and core pages under three seconds | Launch checklist: mobile-friendly test and 3-second load on a standard connection |
| Platform choice, edits remain straightforward | Plan panel: recommended WordPress Property post type (owner adds stays without code); Webflow CMS is also a fit |
| Outline how to tackle the Guesty connection | Plan panel: three-line Guesty connection approach |

## Feeling from the scope

Quoted from the post: "one polished, conversion-focused website"; "give visitors the choice"; "whichever they prefer"; "surface every detail a traveller looks for"; "Clean, responsive design that looks great on mobile first"; "future edits remain straightforward". The owner wants guests to feel confident booking direct, and wants to feel in control of their own site without a developer.

## Emotion of the scope

Client wants customers to feel: "the choice", "whichever they prefer", that the site is "polished" and "conversion-focused", and that it can "surface every detail a traveller looks for".

**The stay already feels like yours.**

### Feeling journey

#### Arrive — settled
- Feeling word: settled
- Inner voice: “The porch light is on. This already feels like a stay, not a listing grid.”
- Design levers: full-bleed house photograph flush under the nav; deep scrim so the cream heading holds 4.5:1; Manrope 800 H1 over two to three lines; one short lede; a single clear path into the stays.

#### Explore — curious
- Feeling word: curious
- Inner voice: “Three houses, each with a face. That porch is the one I want to walk through.”
- Design levers: large 3:2 photographs of real houses; short facts (sleeps, beds, sample from-rate); Book Now, Airbnb and Vrbo already on every card; no filter clutter.

#### Decide — certain
- Feeling word: certain
- Inner voice: “Dates, the rate, the rules, the map, the neighbours — every detail a traveller looks for is here.”
- Design levers: wide gallery; full description and amenity grid; interactive map with a pin; live Guesty calendar with a rate on each night; reviews, nearby, and the house guide on the same page.

#### Act — unhurried
- Feeling word: unhurried
- Inner voice: “Book it here, or open Airbnb or Vrbo. Direct looks better, and nobody is rushing the choice.”
- Design levers: booking box with the three buttons in one row; Book direct and save comparison for the selected dates; same-tab Guesty checkout on mobile with a back-to-stay link; sticky booking bar on the phone; 50px unclipped buttons.

#### After — prepared
- Feeling word: prepared
- Inner voice: “The house guide is on my phone. Arrival already feels quiet and arranged.”
- Design levers: downloadable PDF and an online guide view; test checkout confirmation that points back to the stay and the guide; owner CMS that lets them add the next property without a developer.

Never feel: unsure of the dates or the rate, pushed into one booking channel, missing a map or the house guide, lost on a phone, or locked out of editing their own site.

## Standout moment

A “Book direct and save” comparison in the booking box: for the selected dates it shows the direct Guesty total next to a note that Airbnb and Vrbo add their own guest fees, so the guest sees why booking direct is the better deal before they click. The client asked for a conversion-focused site and for the choice to remain open; this nudge serves both. Figures are labelled sample.

## Key design ideas

Drawn from the client’s own brief:

1. **Choice, side by side.** Book Now, View on Airbnb and View on Vrbo sit together on the home cards and the property page. The site never hides the other doors.
2. **Every traveller detail on one property page.** Photos, description, amenities, map, live Guesty calendar, rates, rules, reviews, nearby attractions and the house guide — all on the stay itself.
3. **Coastal calm, mobile first.** Cream and sea, photographs of real houses, a flush hero, a sticky booking bar on the phone, and type that stays readable.

## Rationale

No client mockup was supplied, so the layout is built from the post. Saltlight Stays and the three houses are clearly fictional sample content. WordPress with a Property post type is the recommended stack (the owner adds stays without code); the Guesty connection is the same if they prefer Webflow CMS. Book Now is recommended in the same tab on mobile, with a “Back to the stay” link.
