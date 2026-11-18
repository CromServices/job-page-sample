# Bid wireframe: M & M (P) International Lovable redesign (PeoplePerHour 4531030)

Quick pre-bid wireframe, 18 Nov 2026, for Director. The client already has a live site and a design direction. This pack builds that direction out — doorway logo, Roboto, navy/green/gold — rather than inventing a new look. Dry-run publish only.

## The build

Quoted from the client’s PeoplePerHour post:

- "I’m looking for an experienced web designer and developer to take over and professionally improve my existing website: https://mmpglobaladvisory.com."
- "My business, M & M (P) International, provides practical property, relocation and business advisory support in South East London for overseas clients. We are an advisory service, not an estate agency."
- "I need someone who can improve the design while preserving and checking these existing features."
- "Shorten lengthy pages while retaining important service information and clear enquiry forms."
- "I prefer to improve the existing website rather than rebuild it unnecessarily."

Quoted from the attached revised scope (13 November 2026). Personal contact details in that file are not repeated here.

- "I need a polished, credible website that helps overseas clients understand our South East London advisory services and submit genuine enquiries."
- "Keep the doorway logo, Roboto and existing navy/green/gold identity. Navy body text on light backgrounds; gold primary enquiry actions."
- "Present homepage, Services and one service-detail page in desktop and mobile layouts for approval before a full rollout."

## Coverage checklist

| Requirement | Location |
|-------------|------------------|
| Improve the existing live site, not an unnecessary rebuild | Whole pack, starting from the live identity at https://mmpglobaladvisory.com — same IA, logo, Roboto, navy/green/gold |
| Clearer, more professional design | Homepage (`#home`), Services (`#services`), and Property Advisory service-detail (`#property`), each in desktop and mobile |
| Improve navigation | Header on every public screen: Home, About, Services, Areas, Free Guide, and a gold Make an enquiry action (phone: menu + the same items) |
| Improve mobile layouts | Phone frames of homepage, Services, and the property service-detail page (`proofs/phone-390.png`) |
| Improve image selection; remove repetition; licensed photos with credits | Homepage hero uses the live Greenwich photograph only once. Property, relocation and business paths use Woolwich, Abbey Wood and Plumstead photographs from the live site, each credited as the live site does. Founder portrait retained on `#home-contact`. No stock-as-work, no invented offices |
| Improve text alignment and consistency | Shared Roboto type, spacing, and buttons across Home, Services, property detail and Contact |
| Shorten lengthy pages, especially Services, without losing important service information | `#services`: three paths, one fees band with all four VAT-inclusive fees, inclusions in expandable sections, boundaries stated once (the live page repeats them). Longer property explanation sits in expandable sections on `#property` |
| Clear enquiry forms and one clear enquiry journey | Header/hero gold enquiry action, Services and property-detail CTAs, and the three-step Contact form on `#contact` |
| Keep fees and service boundaries visible | `#services-fees` and `#property`: Local Property Check £175/visit, Overseas Property Care £225/month, Family Relocation Support £950/assignment, UK Business Landing Support £1,500/assignment, all VAT-inclusive, with inclusions, exclusions and the boundaries/rights band |
| Keep doorway logo, Roboto, navy/green/gold | Header and components; logo about 64px tall on desktop and 48px on phone; navy body on light grounds; gold primary enquiry actions |
| Tagline and advisory positioning: “Here when you can’t be.”; not an estate agency | Homepage hero (`#home-start`) |
| Local areas and landmarks | `#home-areas` retains the eight existing area pages; `#setup` shows the landmarks map as click-to-load with a neighbourhood-only fallback |
| Configure the owner’s Google Maps key on the real domain | `#setup` map panel: click-to-load, attribution, external Maps fallback, no private home address; key and the 404 landmarks route marked to-check |
| Preserve page addresses and local search foundations | Footer and nav keep the live IA (Home, About, Services, Areas, Guides, legal pages, account sign-in). No invented URL changes. `/why-mmp` → `/about` noted on `#setup` |
| Legal disclaimer and privacy changes only after solicitor-approved wording | Footer legal note and `#setup` legal item: published wording remains until solicitor-approved text arrives; no legal advice |
| Check enquiries, notifications, client access, payments; identify unfinished setup | `#setup` setup-check panel, plus the Contact success state which still reports that email acknowledgements are not enabled yet. Existing enquiry, account, dashboard and payment surfaces are noted, not redesigned |
| Guides and three branded PDFs | `#home-guide` and the Contact brochure note. “Read online” does not repeat PDF chrome |
| Test, publish, handover | Out of scope for this first wireframe pass (delivery after award) |
| Never invent offices, team, testimonials, authorisation, success figures or returns | All public screens. The Dubai/Woolwich situation on `#property` stays labelled as an illustrative example, not a case study |
| Do not show a private home address | `#home-areas` and the `#setup` map: neighbourhood orientation only |
| www / host routing issue noted at live check | `#setup`: apex returned 200 and www timed out at 16:46 Australia/Perth on 18 Nov 2026 — recorded as a host issue, not a design screen |

## Feeling from the scope

> a polished, credible website that helps overseas clients understand our South East London advisory services and submit genuine enquiries.

> Here when you can’t be.

> An advisory service, not an estate agency.

> Explore the opportunity. Check the detail.

The feeling is calm, careful and local: practical advice for people who are not on the ground, with fees and boundaries in the open, and no sales-site swagger.

## Emotion of the scope

Client wants customers to feel they have "a polished, credible website that helps overseas clients understand our South East London advisory services and submit genuine enquiries", that someone is "Here when you can’t be", and that this is "An advisory service, not an estate agency" — with room to "Explore the opportunity. Check the detail."

**Here when you can’t be.**

### Feeling journey

#### Arrive — oriented
- Feeling word: oriented
- Inner voice: “The place is real. Someone is already there.”
- Design levers: hero flush under the nav; the live Greenwich photograph; the tagline as a 2-line H1; one gold Make an enquiry action (in the header on desktop, in the hero on a phone); no second competing button.

#### Explore — careful
- Feeling word: careful
- Inner voice: “Property, relocation, business — each path is distinct, and the fees are in the open.”
- Design levers: three support paths with three different live-site photographs and credits; “Explore the opportunity. Check the detail.” kept as a careful four-step band; Services shortened but every fee and inclusion still visible.

#### Decide — sure
- Feeling word: sure
- Inner voice: “This is advice, not a sales pitch. The limits are written down.”
- Design levers: VAT-inclusive fees on Services and the property detail page; inclusions and exclusions in expandable sections; boundaries and rights stated once; the illustrative situation labelled as an example, not a result.

#### Act — ready
- Feeling word: ready
- Inner voice: “A short, private enquiry. Nothing is owed until the scope is agreed.”
- Design levers: one three-step Contact form from the live journey; 52px gold Send enquiry; no payment to enquire; success shows a saved reference and the honest note that email acknowledgements are not enabled yet.

#### After — held
- Feeling word: held
- Inner voice: “The unfinished work is named, not dressed up as done.”
- Design levers: Mayank’s real portrait as the point of contact; the setup-check panel with to-check labels for enquiries, notifications, accounts, payments, the Maps key, legal wording and the www host; click-to-load map with a neighbourhood-only fallback.

Never feel: sold a return, lost on a long Services page, unsure of the fee, as if this were an estate agency, as if a private address had been published, or as if unfinished setup had been marked complete.

## Standout moment

The first screen makes the positioning unmistakable: “Here when you can’t be,” the South East London Greenwich photograph, and a single gold enquiry action, then three clear support paths — property, relocation and business — each with its own photograph, and no second competing button. Credibility first, then the enquiry.

## Key design ideas

Drawn from the client’s own site and brief:

1. **Their identity, built out.** Doorway logo, Roboto, navy body text on light grounds, gold enquiry actions. The live sitemap stays; this is an improve-in-place, not a new brand.
2. **Shorter Services, nothing important dropped.** All four VAT-inclusive fees, inclusions, exclusions and the legal boundaries remain visible. Longer detail moves into the property page or an expandable section. Repeated imagery and a second gold button come out.
3. **Honest unfinished setup.** Enquiries, notifications, client accounts, payments, the Maps key, solicitor-approved legal wording and the www host are listed on the setup-check panel as to-check or waiting, not invented as complete.

## Rationale

The client already has a design. The wireframe starts from the 18 Nov 2026 live homepage and the 13 Nov 2026 scope, then tightens layout, image choice and the enquiry journey. No new display font. No invented offices, team, testimonials, figures or addresses. Director publishes; this pack is dry-run only.
