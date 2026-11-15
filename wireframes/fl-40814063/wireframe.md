# Builder notes (not shown on the page)

## Portfolio
- Cite **little-chip-dental** (https://little-chip-dental.lovable.app/, citable: yes per registry, confirmed by Nate via Director 15 Nov 2026) as the booking site we built. Read 15 Nov 2026, 17:12 AWST: home and /book.
- Patterns taken from it: "Who would you like to see?" step with First available as default; next free time per person; "Final price confirmed at your visit" under the service list. It is Lovable, not WordPress or Webflow.
- Still do not cite `booking-demo-saltbush` or `lifecycle-build-wordpress`.

## Brand and trade
- Business, trade and brand are not in the post. The page uses a hair studio as the sample trade, with a neutral clock mark labelled "Client brand". All services, prices, times and the email are sample content.

## Suggested stack and timeline (for Director's bid)
- WordPress (block theme, no page builder) with a booking plugin that does live availability and confirmation emails (for example Amelia or Simply Schedule Appointments, or a Cal.com embed), or Webflow with a Cal.com embed. Pick by the client’s trade and staff count.
- Service list as a custom post type (WordPress) or CMS collection (Webflow), editable without code.
- Contact form to the client’s inbox with Cloudflare Turnstile or reCAPTCHA, plus SMTP so mail does not land in spam.
- Performance budget: phone first view under 300 KB, WebP images at 800/1600, one font file, no sliders; target PageSpeed 90+ on mobile.
- Handover: source files, admin access, one-page hand-off guide.
- Timeline (suggested): week 1 design and content, week 2 build and booking setup, week 3 testing and go live.
- Paid booking plugins are client costs; flag any above about A$20/mo to Nate.

## Imagery (free licence, layout stand-ins)
| File | Source |
|---|---|
| images/hero-stylist-* | https://www.pexels.com/photo/3993320/ |
| images/svc-cut-* | https://www.pexels.com/photo/6487888/ |
| images/svc-blowdry-* | https://www.pexels.com/photo/10028673/ |
| images/svc-wash-* | https://www.pexels.com/photo/8834043/ |
| images/studio-* | https://www.pexels.com/photo/7195805/ |
Licence: https://www.pexels.com/license/
