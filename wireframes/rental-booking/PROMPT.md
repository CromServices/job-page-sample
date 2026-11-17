# Coastal Stays — holiday rental and booking site (Crom-owned Lovable demo)

Wireframe, 17 Nov 2026. Crom Services is the client. Coastal Stays, Saltwood Bay (a fictional WA coastal place), the homes, people and rates are all sample content. Nate approves this wireframe before any Lovable build. Dry-run publish only.

## The build

Quoted from post.md (no attachments exist):

- "Crom is building a portfolio demo for a fictional Australian coastal rental brand, Coastal Stays."
- "The site lets travellers browse stays, check a date-range calendar, and send a booking request."
- "The owner signs in to manage listings, availability, and requests."
- "A home page of property listings (three or more clearly fictional sample stays)."
- "A property page with photos, description, amenities, and an availability calendar."
- "A date-range enquiry / booking request, with a confirmation state."
- "The booking request is emailed to the owner via Resend."
- "Owner admin with login (email magic link): listings, calendar, and an inbox of requests."
- "Use a clearly fictional coastal place in Western Australia and fictional property names, all labelled as sample."
- Sign-off: "a visitor can open a stay, pick dates that are free, and send a request; the confirmation is clear"
- Sign-off: "the owner can sign in and see that request against the calendar; a sample Resend email is shown for the request"
- "Do not use “Lovable Partner”, “Lovable Expert”, “Certified”, or the Lovable logo anywhere"

## Coverage checklist

| Requirement | Location |
|-------------|----------|
| Fictional Australian coastal rental brand, Coastal Stays | Coastal Stays mark in header, owner email and footer; "Sample content" pill in the chrome |
| Browse stays, date-range calendar, send a booking request | Screen 1 date search + All stays; Screen 2 calendar + booking box; Screen 3 request |
| Owner signs in to manage listings, availability, requests | Screen 4 owner sign-in; Screen 5 owner admin (calendar, requests, listings) |
| Home page of property listings, three or more sample stays | Screen 1 `#home`: flush photo hero, date search, three sample stays (Dune House, Limestone Hut, Karri Cabin) with free/booked chips and sample rates |
| Property page with photos, description, amenities, availability calendar | Screen 2 `#stay`: three-photo gallery, description, eight amenities, December calendar with booked nights closed |
| Date-range enquiry / booking request with confirmation state | Screen 3 `#request`: request form (dates, name, guests, email, message) and "Request sent" confirmation repeating stay, dates and guests |
| Booking request emailed to the owner via Resend | Screen 3 sample Resend email to the owner beside the confirmation |
| Owner admin with magic-link login: listings, calendar, request inbox | Screen 4 `#owner` magic-link form + sent state; Screen 5 `#admin` calendar, requests inbox (new, accepted, declined), listings with Add a stay and an empty drafts state |
| Fictional WA coastal place and property names, labelled sample | Saltwood Bay labelled "sample place"; sample pills on stays, rates, email; footer statement |
| Sign-off: open a stay, pick free dates, send a request; clear confirmation | Screens 2–3: free dates selected, "Those nights are free", Send booking request, Request sent panel |
| Sign-off: owner signs in and sees the request against the calendar; sample Resend email | Screen 4 sign-in; Screen 5 calendar with 11–13 Dec held for Ellie Hart beside the inbox row; Screen 3 email |
| No Lovable Partner, Expert, Certified wording or Lovable logo | None on any screen |

## Feeling from the scope

Quoted from the scope: "browse stays, check a date-range calendar, and send a booking request"; "The owner signs in to manage listings, availability, and requests." Before this site a traveller feels uncertain and the owner feels behind. The home should feel like arriving at the coast at first light, still and a little excited; picking dates should feel sure; sending should feel received; the owner should feel in control of their own calendar.

## Emotion of the scope

Client wants customers to feel: free to "browse stays", sure when they "check a date-range calendar", and heard when they "send a booking request"; the owner wants to "manage listings, availability, and requests" without a scramble.

**The stay is already held for you.**

### Feeling journey

#### Arrive — still
- Feeling word: still
- Inner voice: “Pink light on the water, a timber deck, and nobody else around. That's the one.”
- Design levers: full-bleed dawn photograph flush under the nav; deep left scrim for 4.5:1 text; Manrope 800 H1 in two lines; the date search sitting right in the hero.

#### Explore — drawn
- Feeling word: drawn
- Inner voice: “Linen, a wide window on the dunes, the sea from the sofa. Easy to picture waking up there.”
- Design levers: photography-led cards with free/booked chips for the chosen dates; a three-photo gallery; short honest description; amenity list with plain words.

#### Decide — sure
- Feeling word: sure
- Inner voice: “Struck-through nights are taken, mine are free, and the total is right there.”
- Design levers: calendar with hatched, struck-through booked nights; selected range in kelp; "Those nights are free" line and a one-glance total (sample figures) before the button; sticky date bar on the phone.

#### Act — received
- Feeling word: received
- Inner voice: “Sent, and the nights are held. Mia has it in her inbox already.”
- Design levers: confirmation repeating stay, dates and guests; "Nights held for 24 hours" chip; the owner's Resend email shown beside it; "nothing is charged until Mia confirms".

#### After — held
- Feeling word: held
- Inner voice: “It's sitting on my calendar in soft orange, with Accept one tap away.”
- Design levers: owner magic-link sign-in that opens on the calendar; the request as a soft hold on the same nights; inbox row with Accept and Decline; listings with a calm empty drafts state.

Never feel: unsure if the dates are really free, sold a luxury they cannot picture, or (for the owner) hunted through a generic inbox for the request.

## Standout moment

**The 24-hour hold.** Beyond the brief: sending a request holds those nights for 24 hours. The guest sees "Nights held for 24 hours, so nobody else can take them" on the confirmation; the owner sees the same nights in soft orange on the calendar with "23 h left" and Accept beside it. One rule turns a request into something both sides can trust. It extends the scope's own beat: "Those nights are free" and a one-glance stay total before sending.

## Key design ideas

Drawn from the scope's own idea:

1. **First light.** Dawn photography, linen and salt tones, weathered timber and kelp green. Quiet and considered, not chrome and glass.
2. **Honest dates.** Booked nights are visibly closed everywhere: on the home cards, the property calendar and the owner's calendar.
3. **One request, two views.** The guest's confirmation, the owner's email and the owner's calendar all show the same stay, the same nights and the same hold.

## Site-generation prompt (Lovable, free plan)

Build **Coastal Stays**, a holiday rental site for three sample homes in Saltwood Bay, a fictional coastal place in Western Australia (label all content as sample). Stack: React + Tailwind, Supabase (owner auth by email magic link; tables `listings`, `photos`, `blocked_dates`, `requests(status: held|accepted|declined, hold_expires_at)`), Resend via a Supabase Edge Function that emails the owner when a request is inserted.

- **Voice:** quiet, warm Australian English; short sentences; no hype words, no exclamation marks.
- **Palette:** linen #F4EFE6 background, salt #FBF9F5 cards, ink #1F2A28 text, muted #4D5753, line #DDD5C8, kelp #3E5F4A for actions (hover #2F4A39), soft kelp #E1EAE2, dawn #F3DED2 for held nights, timber #7A5E45 accents, sun #F3E5C3 for sample pills.
- **Type:** wordmark and headings in Space Grotesk 700 with tight tracking; body and UI in Manrope (400 body, 700 UI). Body 18px desktop, 17px phone.
- **Imagery and art direction:** realistic south-west WA coastal photography at first light: a silver-timber house on the dunes (hero, flush under the nav), a limestone hut with a surfboard, a black timber cabin among karri trees, a linen living room facing the dunes, a linen bedroom at dawn. No people, no stock-luxury glass and chrome.
- **Pages:** (1) Home: hero H1 "Wake up where the dunes meet the sea.", date search, All stays grid with free/booked chips and sample rates. (2) Property page: gallery, description, amenities, availability calendar (booked nights struck through), booking box with "Those nights are free" and a stay total; sticky date bar on phone. (3) Request form and confirmation; owner email via Resend. (4) Owner sign-in by magic link. (5) Owner admin: calendar with held requests, requests inbox (Accept / Decline), listings with Add a stay.
- **Standout:** a new request sets `status=held` and `hold_expires_at = now() + 24h`; the guest confirmation and the owner calendar both show the hold.
- **Sample data:** Dune House ($340/night sample, sleeps 4), Limestone Hut ($240, sleeps 2), Karri Cabin ($410, sleeps 6); owner Mia; guest Ellie Hart; emails on `.example` domains.
- Free-plan fit: one Supabase project, one Edge Function, one Resend domain; no payments.

## Rationale

No client design was supplied, so the direction follows the scope: early-morning south-west light, linen, pale salt, weathered timber and kelp green, photography-led cards, a hero that starts under the nav and a sticky date bar on the phone. Five screens cover every quoted requirement and sign-off item. Headings and the wordmark use Space Grotesk 700; body stays Manrope. The brand mark is defined once in `screens.html` (`#brandmark` symbol) so a name or logo swap is one edit.
