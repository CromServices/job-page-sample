# Jobline — client portal and ops desk (Crom-owned Lovable demo)

Wireframe, 17 Nov 2026. Crom Services is the client. Jobline is a fictional Australian consultancy; every person, company, job and file is sample content. Nate approves this wireframe before any Lovable build. Dry-run publish only.

## The build

Quoted from post.md (no attachments exist):

- "Crom is building a portfolio demo for a fictional Australian consultancy, Jobline."
- "The demo is a signed-in client portal and internal ops tool."
- "Staff and clients share one place for jobs, tasks, resources, status, and files, with email notifications when something changes."
- "Sign-in by email magic link (no password form)."
- "Roles: admin, staff, and client. Each role sees only what they should see."
- "A dashboard of jobs, tasks, and resources, filtered by role."
- "Status updates on a job or task, with a clear history."
- "File uploads attached to a job or task."
- "Email notifications via Resend when status changes or a file is added."
- "Supabase as the backend for auth, data, and files."
- "Use clearly fictional people, jobs, and files, all labelled as sample."
- Sign-off: "a user can request a magic link and land in the right role dashboard"
- Sign-off: "a staff member can update a job status and upload a file; a client can see that update"
- Sign-off: "a sample Resend email is shown for the notification; Supabase and Resend appear as connected services in admin"
- "Do not use “Lovable Partner”, “Lovable Expert”, “Certified”, or the Lovable logo anywhere"

## Coverage checklist

| Requirement | Location |
|-------------|----------|
| Portfolio demo for a fictional Australian consultancy, Jobline | Jobline mark in the header, emails and footer; "Sample content" pill in the chrome; footer credit to Crom Services |
| Signed-in client portal and internal ops tool | Screen 2 app shell (signed-in user, role menu) and Screen 5 admin |
| One place for jobs, tasks, resources, status and files, with email when something changes | Screen 2 dashboard (jobs, tasks, resources) + Screen 3 job (status, files) + Screen 4 emails |
| Sign-in by email magic link, no password form | Screen 1 `#signin`: email field, "Email me a sign-in link", three-step flow, "Check your inbox" sent state |
| Roles admin, staff, client; each sees only their own | Screen 2 role preview switch (Admin / Staff / Client) hides and shows menu items and panels; role annotation cards; Screen 5 "Who sees what" matrix |
| Dashboard of jobs, tasks and resources filtered by role | Screen 2 `#dashboard`: next job, stats, jobs list, tasks today (filled + empty state), resources and hours (hidden for client) |
| Status updates on a job or task with clear history | Screen 3 `#job`: Update status form (status, applies to job or task, note, email toggle) and History timeline |
| File uploads attached to a job or task | Screen 3 Files panel: file list with the task each file belongs to, drop zone, uploading progress state |
| Resend email when status changes or a file is added | Screen 4 `#email`: two sample emails (status change, file added), each beside its cause |
| Supabase backend for auth, data and files | Screen 5 Connected services: Supabase card (Auth magic link, tables, row rules, private storage bucket) |
| Fictional people, jobs and files, labelled sample | Sample pills on jobs, files, people and emails; footer statement |
| Sign-off: request a magic link, land in the right role dashboard | Screen 1 sent state names the role ("opens your Staff dashboard"); Screen 2 opens as Staff |
| Sign-off: staff updates status and uploads a file; client sees it | Screen 3 Post update + upload; "What Priya (client) sees" panel; Seen receipt on the timeline |
| Sign-off: sample Resend email shown; Supabase and Resend connected in admin | Screen 4 emails; Screen 5 Connected services, both "Connected" |
| No Lovable Partner, Expert, Certified wording or Lovable logo | None on any screen |

## Feeling from the scope

Quoted from the scope: "Staff and clients share one place"; "email notifications when something changes"; "Each role sees only what they should see." Before this product people feel scattered, chasing a status in a thread and unsure whether the client saw the file. Sign-in should feel quiet and trusted; the dashboard should feel like their own work; a status change should feel final and kind; the email should read like a person telling them.

## Emotion of the scope

Client wants customers to feel: that staff and clients "share one place", that they hear about it "when something changes", and that "each role sees only what they should see".

**Nobody has to chase anybody.**

### Feeling journey

#### Arrive — trusted
- Feeling word: trusted
- Inner voice: “A link in my inbox and I'm in. No password to dig up.”
- Design levers: flush hero with the desk photograph; one email field and one button; a three-step strip; a calm "Check your inbox" state that names the role it will open.

#### Explore — oriented
- Feeling word: oriented
- Inner voice: “This is my list. One job at the top, and nothing that isn't mine.”
- Design levers: role-filtered dashboard; a single green "Your next job" band; short jobs list with plain status pills; an empty state that says "Waiting on you: nothing".

#### Decide — sure
- Feeling word: sure
- Inner voice: “There's the change, the time, the file, and who has already looked.”
- Design levers: plain-language history; files labelled with the task they belong to; staff-only notes clearly marked; the Seen receipt beside the latest update.

#### Act — relieved
- Feeling word: relieved
- Inner voice: “Posted. Priya gets a proper note, so the follow-up call is off my list.”
- Design levers: Post update with "Email the client" on by default; Resend email that names the job and the change, written in a person's voice, with one "Open the job" button.

#### After — together
- Feeling word: together
- Inner voice: “Same jobs, same files, same page as the client. We're in one place now.”
- Design levers: admin people and roles; "Who sees what" matrix; Supabase and Resend shown as connected; a "No failed sends" state.

Never feel: lost in a generic CRM, unsure if the other person saw the update, talked down to by product jargon, or shown work that is not theirs.

## Standout moment

**The Seen receipt.** Beyond the brief: when the client opens an update or a file, the timeline and the task list quietly show "✓ Seen by Priya Shah · 3:12 pm". Staff stop wondering whether the client saw it, which is the one worry the scope names as "unsure whether the client saw the file". It pairs with the scope's own beat: each Resend email sits beside the timeline event that caused it, so cause and message are visible together.

## Key design ideas

Drawn from the scope's own idea:

1. **One place.** One timeline per job holds status, notes and files; the client and the staff member read the same page, filtered by role.
2. **A person, not a ping.** Every notification names the job, the change and who made it, in plain words, with a single button back.
3. **Calm by default.** Paper, ink and eucalyptus; one primary action per screen; empty states that reassure instead of nag.

## Site-generation prompt (Lovable, free plan)

Build **Jobline**, a signed-in client portal and internal ops desk for a fictional Australian consultancy (sample content throughout). Stack: React + Tailwind, Supabase (auth by email magic link only, Postgres tables `profiles(role: admin|staff|client, company)`, `jobs`, `tasks`, `resources`, `updates`, `files`, private Storage bucket `job-files`, row-level security per role), Resend for email via a Supabase Edge Function triggered on new `updates` rows and new `files` rows.

- **Voice:** calm, plain Australian English, written as a person ("Hi Priya, it's ready to review."). No jargon, no exclamation marks.
- **Palette:** paper #F6F2EA background, card #FFFDF8, ink #1E2422 text, muted #4C5652, line #DCD4C6, eucalyptus #2F5D4E for actions (hover #244A3E), soft eucalyptus #E2ECE5, clay #8E4429 for "waiting on client", sun #F3E5C3 for sample pills.
- **Type:** wordmark and headings in Syne 800 with tight tracking; body and UI in Manrope (400 body, 700 UI). Body 18px desktop, 17px phone.
- **Imagery and art direction:** one realistic photograph of a tidy Perth studio desk in soft window light (laptop, tied job folders, eucalyptus sprig in a glass jar) on the sign-in screen. No stock people, no illustrations, no purple SaaS gradients.
- **Screens:** (1) Sign in: H1 "Every job, file and update in one quiet place.", email field, "Email me a sign-in link", sent state. (2) Dashboard: sidebar, "Your next job" band, stats, jobs, tasks today with empty state, resources and hours; content filtered by role. (3) Job detail: Update status form (job or task, note, email toggle), History timeline with staff-only notes and Seen receipts, Files with upload to job or task. (4) Email: Resend templates for status change and file added. (5) Admin: people and roles, invite by email with role, "Who sees what", Connected services (Supabase, Resend) with health and a test send.
- **Standout:** record `seen_at` when a client opens an update or file and show "✓ Seen by {name} · {time}" on the timeline.
- **Sample data:** Jobline staff Alex Moreau (admin), Jordan Pike and Sam Okafor (staff); client Priya Shah of Marlow & Finch; jobs Harbour Lane fit-out review, Riverside clinic floor plan, Cottesford library signage. All emails on `.example` domains. Label sample content.
- Free-plan fit: one Supabase project, one Edge Function, one Resend domain; no paid add-ons.

## Rationale

No client design was supplied, so the direction follows the scope: a calm Perth studio desk, paper and ink with eucalyptus actions. Five screens cover every quoted requirement and sign-off item. Headings and the wordmark use Syne 800; body stays Manrope. The brand mark is defined once in `screens.html` (`#brandmark` symbol) so a name or logo swap is one edit.
