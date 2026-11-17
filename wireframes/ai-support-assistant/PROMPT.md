# HelpDesk Hub Help: AI support assistant (Crom-owned Lovable demo)

Wireframe for Nate's review, 17 Nov 2026. Crom Services is the client; HelpDesk Hub is a fictional Australian home-and-garden retailer and every product, article, person and conversation is sample content. Planned host: https://help.cromservices.com.au. No Lovable build starts until Nate approves this wireframe.

Key design ideas drawn from the brief:

1. **Sourced, not made up.** "answers from a knowledge base the business can edit": every reply names its article, and opening that article marks the exact lines used.
2. **A person, without a wall.** "hands a conversation to a person when it should": the assistant says when it is not sure, and "Talk to a person" sits in the same reply. The team gets the whole thread by email.
3. **A calm desk, not a toy.** "keeps a conversation log for the team": a calm dark console, named command-line messages, plenty of air, a team desk that opens on the same messages the visitor saw.

## The build

Quoted from post.md (no attachments exist):

- "Crom is building a portfolio demo for a fictional Australian home-and-garden retailer, HelpDesk Hub."
- "The demo is a help site with an AI support assistant that answers from a knowledge base the business can edit, hands a conversation to a person when it should, and keeps a conversation log for the team."
- "A public help page with a chat widget."
- "Answers drawn only from an FAQ / knowledge base the business edits (sample articles included)."
- "A clear human handoff to an inbox when the assistant cannot help, or when the visitor asks for a person."
- "The handoff notifies the team by email via Resend."
- "A conversation log the team can reopen."
- "Admin login (email magic link) to edit the knowledge base, review conversations, and take a handoff."
- "Use clearly fictional products and articles, all labelled as sample."
- Sign-off: "a visitor can ask a question and get an answer that cites a knowledge-base article"
- Sign-off: "they can ask for a person and see the handoff; a sample Resend email is shown for that handoff"
- Sign-off: "an admin can sign in, open the conversation log, and edit an article"
- "Do not use “Lovable Partner”, “Lovable Expert”, “Certified”, or the Lovable logo anywhere"

## Coverage checklist

| Requirement | Screen / section |
|-------------|------------------|
| Fictional Australian home-and-garden retailer, HelpDesk Hub | All screens: HelpDesk Hub logo and wordmark, garden hero, sample bar |
| Help site with an AI support assistant, knowledge base, handoff, conversation log | Help home (`#help`) through editor (`#editor`), seven sections |
| Public help page with a chat widget | Help home (`#help`): hero, search, topics, chat widget open in its first (empty) state with three starter questions |
| Answers only from the business's knowledge base, sample articles included | Help home article grid (3 sample articles + 3 more); Answered (`#answered`) reply sourced from one article |
| Answer cites a knowledge-base article (sign-off) | Answered (`#answered`): "From the article: Delivery times by state" card; article open beside it with the used lines marked |
| Human handoff when it cannot help or the visitor asks for a person | Handoff (`#handoff`): "I'm not sure" reply with closest article and Talk to a person; visitor asks; "A person will take it from here" held state. Talk to a person also sits in every widget header |
| Handoff notifies the team by email via Resend (sign-off: sample Resend email shown) | Handoff (`#handoff`): sample email with From/To/Subject, last three messages, order, Open conversation button, "sent via Resend" footer |
| Conversation log the team can reopen | Conversation log (`#log`): filters (All, Answered, Handed off, Open), four rows, thread #1042 reopened with timestamps and citation |
| Admin login by email magic link | Team sign-in (`#signin`): email form, "Check your inbox" sent state, and the sign-in link email |
| Admin edits the knowledge base (sign-off: edit an article) | Article editor (`#editor`): title, toolbar, body with the new paragraph marked, Published and assistant-can-answer toggles, history, Save and publish, saved state |
| Admin reviews conversations | Conversation log (`#log`) |
| Admin takes a handoff | Take a handoff (`#take`): claimed by Sam, reply composer filled, visitor sees Sam's reply in the widget |
| Fictional products and articles, labelled sample | Sample bar on the first view, "Sample article" tags, "(sample)" on order lines, "Sample email" footers, footer note |
| No "Lovable Partner", "Lovable Expert", "Certified" or Lovable logo | None on any screen; footer credit reads "A Crom Services demo" only |
| Mobile-first, widget works at 390 wide | Phone proof `proofs/phone-390.png`: widget full width, every state stacked |

## Client design direction

None supplied (attachments/MANIFEST.md). Crom's own direction from scope.md: unhurried and useful; warm clay, soft sand, ink type, muted terracotta actions; the chat feels like a person at the desk; a realistic garden photograph starts under the nav. Followed for voice and journey; on 17 Nov Nate redirected the look to terminal style ("Make the hub one a terminal style. Fit the design to the font.").

## Feeling from the scope

Quoted from the post: "answers from a knowledge base the business can edit"; "hands a conversation to a person when it should"; "keeps a conversation log for the team." From scope.md: the help page "should feel calm and specific", an answer "should feel sourced, not made up", asking for a person "should feel like a relief, not a failure", and the admin "should feel caught up".

## Emotion of the scope

Client wants customers to feel: answers that come "from a knowledge base the business can edit", a business that "hands a conversation to a person when it should", and a team that "keeps a conversation log". In the scope's words: "calm and specific", "sourced, not made up", "a relief, not a failure", "caught up".

**Heard, straight away.**

### Feeling journey

#### Arrive — unhurried
- Feeling word: unhurried
- Inner voice: “Late sun on a potting bench, and a chat already open. Nobody's rushing me.”
- Design levers: console hero flush under the nav with a status line, two-to-three-line headline, widget open with one honest greeting and three starter questions, dark console palette with a lime prompt accent, generous mono type.

#### Explore — assured
- Feeling word: assured
- Inner voice: “Three to five days, and there's the article it came from, with the lines marked.”
- Design levers: answer card naming "Delivery times by state", article open beside the chat with the quoted sentences highlighted, "That helps" and "Talk to a person" under every answer.

#### Decide — relieved
- Feeling word: relieved
- Inner voice: “It admitted it wasn't sure. A real person has the whole story now.”
- Design levers: one-line "I'm not sure" reply, closest article, Talk to a person in the same breath, sage "A person will take it from here" held state, Resend email with the last messages.

#### Act — oriented
- Feeling word: oriented
- Inner voice: “One link, I'm in, and Jo's thread is at the top, already flagged.”
- Design levers: magic-link sign-in with a sent state, conversation log filtered by Answered / Handed off / Open, the open handoff highlighted with its full history and citation.

#### After — settled
- Feeling word: settled
- Inner voice: “Sam has it, and the article is fixed, so the next person gets the right answer.”
- Design levers: claimed handoff with Sam's reply landing in the visitor's chat, article editor with the new paragraph marked, Published and assistant-can-answer toggles, "Saved. The assistant now answers from this version."

Never feel: trapped in a loop with a bot, handed an answer with no source, asked to repeat yourself to a person, or (for the team) given a blank ticket with no history.

## Standout moment

**Marked lines.** Beyond the brief's citation, opening the cited article highlights the exact sentences the assistant used, so a visitor checks the answer in one glance and the team sees exactly what the assistant relied on. It pairs with the scope's own beat: when unsure, the assistant says so, shows the closest article and offers a person in the same reply, and the Resend email carries those last messages so the person picks up mid-conversation. The loop closes in the editor: the gap Jo found becomes a new paragraph, and the assistant answers from it next time.

## Site-generation prompt (Lovable)

Build **HelpDesk Hub Help**, the help centre for HelpDesk Hub, a fictional Australian home-and-garden retailer (pots, plants, soil, tools). Label all products, articles, names and conversations as sample content. Planned domain: help.cromservices.com.au.

**Voice:** terminal-plain and useful. Short, declarative lines, Australian spelling, plain words; status lines in caps (SYSTEM READY / ARTICLES LOADED). The assistant speaks like a person at the desk: names its source, says "I'm not sure" when it is, never guesses.

**Palette (console dark):** console black #080E0D (page), panel #101A16 and #0C1510 (widgets, cards), raised panel #19281F (window bars), line #344B3F, text #E8EEE9, muted #ADBDB3, phosphor lime #B6F36A (prompts, actions with #0B1607 text, cursor, citations), cyan #72CAD1 (visitor prompt, focus ring), amber #F5D38E on #2A2416 (warning tags), success fill #1A3022. All pairs WCAG AA.

**Type:** wordmark, headings, chat, buttons, nav, tags and status lines in JetBrains Mono (600 headings, 500 UI, 400 chat; tracking −0.045em on headings); long-form body and article text in Geist 400 for readability. Self-hosted latin subsets. Body 18px desktop, 17px phone. H1 two to three lines. No serifs.

**Art direction (terminal):** dark console page on a faint 32px grid, `>_` prompt mark, `>`/`$` prompt carets before every speaker and eyebrow, command-line chat with flat panels and a 2px lime rule on assistant replies, blinking block cursor in the input (stilled for reduced motion), 2–3px corners, hard offset shadow on the chat window. Article thumbnails stay as desaturated product photography; the hero is type-led with no photo.

**Imagery and art direction:** type-led console hero with no photo; article thumbnails are desaturated close crops of the garden products (terracotta pots, a potted lemon tree, tools). No people, no stock-office imagery. Logo: a console-black square with a lime outline and a `>_` prompt mark, about 64px on desktop and 48px on phone, beside the "HelpDesk Hub" wordmark.

**Pages and sections:**
1. Help home: sample bar; header (logo, Help centre, Delivery, Returns, Team sign-in, Ask a question button); hero photograph flush under the nav with headline, search and topic chips; chat widget open (greeting, three starters, input); grid of sample articles.
2. Chat states: answered (reply plus "From the article" card linking to the article, with the used lines highlighted on the article page); not sure (one honest line, closest article, Talk to a person); handed off ("A person will take it from here").
3. Handoff email via the Resend connector to the team inbox: subject names the visitor and topic; body has the last messages, the closest article, the order, and an Open conversation button.
4. Team sign-in: email magic link (Supabase auth), sent state, sign-in email.
5. Team desk, Conversations: filter chips, list, reopened thread with timestamps, citations and handoff marker.
6. Team desk, Handoffs: claim, reply composer, the reply appears in the visitor's chat.
7. Team desk, Help articles: editor with title, rich text, Published and "assistant can answer from this" toggles, history, Save and publish. The assistant answers only from published articles.

**Data:** tables for articles, conversations, messages (with cited article id), handoffs. Seed six sample articles: Delivery times by state, Returns on live plants, Caring for citrus in pots, Tracking an order, Terracotta or glazed pots?, Gift cards and store credit.

**Constraints:** WCAG AA contrast, buttons never clip, mobile-first widget that works at 390px wide, no placeholder art. Do not use "Lovable Partner", "Lovable Expert", "Certified" or the Lovable logo. Credit line, if any: "A Crom Services demo". Keep to these seven views so it builds on the Lovable free plan's daily credits.

## Rationale

The brief's whole promise is trust in two directions: visitors trust the answer because it shows its source, and the team trusts the assistant because it hands over with the history attached. So the wireframe makes the source visible (citation card plus marked lines), makes the handoff a relief (one honest line, the person button in the same reply, a held state and a full-context Resend email), and gives the team a desk that opens on the same messages. The terminal look makes the system legible (status lines, prompts, sources), while the plain human voice keeps it feeling like a shop with someone at the counter.
