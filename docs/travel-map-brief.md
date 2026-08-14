# Brief — Interactive Travel Map page (`/travel`)

Repo: `j-alicia-long/me` (Astro 7 + React 19 + Tailwind 3, GitHub Pages, base path `/me`).
Written 2026-08-14. Audience: a dynamic multi-agent workflow that will design and build this.

---

## 1. Outcome

**What should be different:** the site has a `/travel` page that presents Jennifer's travel
history as a visual, interactive world map instead of the two plain bulleted lists that exist
in the working tree today. A visitor should be able to look at the map and immediately get the
shape of her travel — where she's been, how often, and roughly when — then drill into a
specific place or year.

**Who it's for:** public visitors to her portfolio (recruiters, friends, people who found the
photography page). Secondary audience: Jennifer herself, as a personal record she'll keep
adding trips to. It is a portfolio/creative page, not a utility.

**Artifacts that should exist when done:**
- A new `src/pages/travel.astro` rendering the map experience. (An earlier untracked
  `travel.astro` held only a raw data dump; it has since been deleted and its data moved to
  `travel.md` — see §2. Nothing is being overwritten.)
- A structured travel dataset in `src/data/` — the site's established pattern is a typed TS
  module (`src/data/photography.ts`, `src/data/projects.ts`); follow it. Each trip should carry
  at minimum: date/date-range, place name, region/country, coordinates, and a trip "kind" if one
  is inferable. Derived/computed logic belongs in `src/utils/` (mirrors `src/utils/photography.ts`).
- `Travel` added to the header nav (`src/components/layout/Header.astro`, `links` array), unless
  a deliberate reason not to is documented.
- Whatever interaction layers are chosen beyond the map itself (see §3 / §6).
- A commit on `main` (deploy is automatic via GitHub Actions on push to `main`).

---

## 2. Starting state

**Authoritative sources, in priority order:**
1. `travel.md` (repo root) — **untracked, uncommitted**. The single authoritative travel log,
   replacing the earlier `src/pages/travel.astro` data dump (now deleted). 44 top-level entries
   plus 29 nested sub-lines, 2008 → July 2026. Jennifer will revise this file herself later, and
   has confirmed **all of its content may be published and committed to the repo**. Shape notes:
   - Granularity varies: bare year (`2008 - Orlando`), month (`Mar 2018 - Nashville (TN)`),
     month-range (`Jun-Aug 2019 - Richmond (VA)`).
   - Some entries are multi-city: a parent line with nested destinations
     (`Sep 2022` → Toronto / Montreal / Quebec City; `Nov 2024 - Spain/Portugal solo trip` →
     Barcelona / Madrid / Porto / Lisbon).
   - Some nested lines are *context notes*, not destinations (`Duolingo Getaway #1`,
     `Grace Hopper conference`, `First solo trip to West coast to visit friends!`).
     Telling a nested place from a nested note is a parsing judgment call.
   - Contains an HTML-escape artifact (`-&gt;`) and an escaped `\+`.
   - Extends into the **future** (Mar 2026 Whistler, July 2026 South of France).
2. `personal-os/02-projects/personal-website/AGENTS.md` — project conventions and design notes.
   Note: its "Current Tech Stack" section says Astro 2.10 and lists `astro-compress`; **that is
   stale**. The repo is on Astro 7 (`26d045b Upgrade Astro 2 to 7, drop astro-compress`) with
   React 19. Trust `package.json`.
3. `CONTEXT.md` — the site's ubiquitous-language glossary. It defines Project, Photo, Tag, Card, etc.
   It has **no travel vocabulary yet**; whatever nouns this page introduces (Trip? Destination?
   Flight? Visit?) should be added there in the same voice.
4. `personal-os/01-areas/travel/greece-girls-trip-sept-2026.md` — an example of how she writes
   about a trip (voice, level of detail) and a source of real detail for the Sept 2026 Greece trip
   if trip-detail views need one non-placeholder example.
5. `src/pages/photography.astro` + `src/utils/photography.ts` — **the closest existing precedent**
   and the pattern to imitate: typed data module → resolve/derive in utils → Astro page with
   Alpine-driven filter pills (`.filter-btn` / `.filter-count` in `src/styles/photography.css`)
   and a lightbox detail view. A travel filter UI that looks unrelated to those pills would be wrong.

**What's been tried:** only the data dump above — an intermediate step, not a design attempt.
No map library has been evaluated, no coordinates exist anywhere in the repo, and the two lists
have never been reconciled with each other.

**Known data problems the build must confront (not optional cleanup):**
- The two lists overlap and disagree. Beijing appears as `Sep 2025` in destinations and
  `2025-10-05 NYC from Beijing` in flights. Deciding what a map pin *represents* — a trip, or a
  flight leg — is a modeling decision, not a formatting one.
- Flight rows are one-directional legs including return flights home to NYC; naively pinning every
  flight row produces a map dominated by JFK/LGA/EWR.
- Several rows have no resolvable place (`HNWUL9`, `Book flight!!`, `Flight back`, `TQO`).
- ~15 future-dated entries. Whether upcoming trips appear on the map, and how they're distinguished
  from completed ones, is a genuine product choice (see §6).
- No coordinates exist. They must be produced and committed as data — the page is a static build
  with no server, so runtime geocoding is not available.

**Environment:** clean `main`, no `node_modules` (run `npm ci`). Dev server at
`http://localhost:4321/me/`. Verify with `npm run build` — the base path `/me` and asset handling
are the usual sources of breakage here, and `src/utils/url.ts` (`withBase`) exists for that reason.

---

## 3. Quality bar

**Standard to hit:** the photography page. It's the strongest page on the site and the honest
benchmark — considered hover states, real filtering, a genuine detail view, and dark mode that
was actually designed rather than inverted. A travel page that reads as less polished than
`/photography` is not done.

**Aesthetic:** "minimalistic map" per her words, and the site backs that up — Tailwind `stone` as
the entire `primary` palette (no other colors are configured in `tailwind.config.cjs`), Inter
400/500, max-width 1100px, generous whitespace, `rounded-2xl`, `ring-1 ring-primary-950/10`
hairline borders. The map should feel like it belongs to this site: muted landmass, no
default-Mapbox blue, no country-flag emoji confetti, no saturated marker pins. "Match the existing
theme to an extent" is permission to introduce *one* restrained accent for pins/paths — not
license for a different visual language.

**Acceptance criteria:**
- Map renders with a pin per destination; hover reveals place + date without a click and without
  layout shift. This is the one interaction she named explicitly — it must feel good, not merely function.
- At least one secondary way to navigate the same data (timeline, year filter, and/or trip detail
  are all named as "maybe" — see §6 on how many to build).
- Works in **both** light and dark mode. Non-negotiable; the theme toggle is on every page.
- Works on mobile. Hover doesn't exist on touch — a tap-equivalent path to the same information
  is required, not a stretch goal. She has explicitly been burned by sloppy mobile layouts before.
- Keyboard-reachable and screen-reader-sane: pins are real focusable elements with accessible
  labels, not bare `<div>`s. The existing codebase is careful about this
  (`focus-visible:outline`, `aria-expanded`, `sr-only` labels throughout) — match it.
- `npm run build` passes clean, and the built page works under the `/me` base path (not just in dev).
- Data is committed as structured data, not markup. Adding next year's trip should mean editing
  one data entry, never touching JSX.
- No stray dependency bloat. The repo's philosophy doc (`.ponytail/AGENTS.md`, referenced from the
  workspace index as the coding standard) is explicit: no new dependency if it can be avoided,
  reuse what's installed, shortest working diff. A map does likely justify *something*; adding
  three things does not.

**Evidence of success:** screenshots of the finished page in light and dark, desktop and mobile
widths; a clean `npm run build`; and a walkthrough of the interactions (hover, filter, detail)
with the reconciled trip count stated — how many trips made it onto the map, and which source
rows were dropped as unresolvable and why.

---

## 4. Constraints

- **Must not change:** `Layout.astro`'s shell contract, the Alpine dark-mode store, the stone
  palette in `tailwind.config.cjs`, the `/me` base path, or the deploy workflow. Existing pages
  (`/`, `/projects`, `/photography`, `/bookshelf`, `/404`) must remain untouched and working.
  Adding a nav entry to `Header.astro` is expected; restructuring the header is not (a desktop-nav
  redesign is separately queued in the project AGENTS.md — don't do it here).
- **Static hosting only.** GitHub Pages. No server, no API routes, no runtime secrets, no
  build-time API key that would need to live in the repo. If a map approach requires an access
  token in client code, that's a decision to surface (§7), not to quietly make.
- **No paid services**, and prefer nothing that requires an account for a personal portfolio page.
- **Privacy:** this page is public. Coarse city-level pins only. Don't publish home addresses,
  hotel names, confirmation codes (several are sitting in the raw data — `HNWUL9`, `HX69A5`,
  `GWMHOW` — and must be stripped, not rendered), or the names of other people who appear in the
  raw notes without her say-so ("w/ Cynthia").
- **Future trips are private-ish information.** Publishing "I'll be in Greece Sept 8–15, 2026" and
  "away from NYC" is a real disclosure. Flag it (§7) rather than deciding for her.
- **Conventions:** Tailwind (this repo, unlike her todo app which uses SASS), Prettier config as
  committed (single quotes, 100 cols, semicolons, astro + tailwind plugins), `astro/tsconfigs/strict`.
  Run Prettier before committing.
- **Practical bounds:** 44 top-level entries. This is small data. Any solution whose complexity is
  justified by scale is over-built.
- **Risk to watch:** `travel.md` is untracked and is the *only copy* of this data. Don't lose it.
  Commit it (Jennifer has approved committing and publishing its full contents) before any
  transformation work.
- **Data ownership:** Jennifer will revise `travel.md` herself later. Treat it as read-only input
  and derive from it; do not restructure or "clean up" the source file in place.
- **Deadline:** none stated. Treat as unblocked personal work. No implied urgency, but also no
  reason to sit in analysis — she gave a loose spec because she wants to see something.

---

## 5. Non-goals

- Redesigning the homepage, header/desktop nav, or any other page. All separately queued.
- Building out `/bookshelf` (still a stub) or touching the photography gallery.
- Wiring live Google Sheets or Google Calendar integration. The data was *exported* from those;
  the page consumes committed static data. An automated sync pipeline is a different project.
- Linking travel pins to photos from `/photography`. Tempting, plausible, out of scope for v1 —
  the photography data has free-text `location` strings that would need their own reconciliation
  pass. Note it as a follow-up.
- Astro/dependency upgrades, consolidating Alpine vs React, or general tech-debt cleanup.
- Real trip photography. She said placeholder images and graphics are fine for now — take her
  at her word and don't go hunting through `src/assets/portfolio/` for matches.
- Trip *planning* features (costs, itineraries, wishlists). This is a retrospective log.
- Analytics, SEO work, or social share cards.

---

## 6. Open territory

These are real unknowns where independent exploration adds value. Explore them; don't stall on them.

- **Map rendering approach.** An inline SVG world map with hand-placed projected coordinates, a
  tile-based library, or a lightweight canvas globe are all defensible. Trade-offs to actually
  weigh: bundle weight, whether it needs a token/network at runtime, how well it takes a muted
  stone-palette restyle in *both* themes, and dependency count against the repo's
  minimum-dependency philosophy. Nothing map-related is installed today, so this is a clean choice.
- **What a pin represents.** Trip? Destination-visit? Flight arrival? This determines how the two
  disagreeing lists get merged, whether repeat visits (Cancun appears 5×, Beijing 3×, NYC many)
  stack into one pin with a count or scatter as separate pins, and whether flight *paths* are
  drawn at all. Repeat-visit intensity is arguably the most interesting story in this dataset.
- **How many secondary views to build.** She listed timeline, trip detail, and year filter as
  "maybe … or something like that" — an invitation, not a checklist. One well-executed secondary
  view beats three half-built ones, and the photography page's filter-pill precedent makes year
  filtering nearly free. Worth exploring which single one makes the map *better* rather than
  which combination covers the most surface area.
- **Handling ragged date granularity.** Some entries are a bare year, some a month, some a range.
  A timeline has to render all three honestly without inventing precision.
- **Whether flight data earns a place on the page at all.** It's noisy, partly junk, and largely
  duplicates the destination list. Dropping it entirely — or mining it only to sharpen dates on
  destinations she already listed — may produce a better page than showing it.
- **Interaction feel.** Hover is the one thing she named. There's room to make it genuinely
  delightful (the `emil-design-eng`, `apple-design`, and `animation-vocabulary` skills in this
  workspace are relevant reference material and reflect her taste).

---

## 7. Autonomy boundary

**Decide freely, no check-in:**
- Map technology, projection, and rendering approach.
- Data model, TypeScript types, file names under `src/data/` and `src/utils/`.
- How coordinates are sourced and committed.
- Dropping unresolvable rows (`HNWUL9`, `Book flight!!`, `Flight back`) — just report what was cut.
- Stripping confirmation codes and other people's names from public output.
- Component structure, Astro vs React split, Alpine vs React for interactivity.
- Which secondary view(s) to build, and all visual/motion detail within the stone-palette
  constraint.
- Placeholder imagery and graphics.
- Adding travel vocabulary to `CONTEXT.md` and the nav link in `Header.astro`.
- Committing to `main` — that's how this repo deploys, and it's her personal site.

**Bring back to her:**
- **Whether future trips (through Sept 2026) appear publicly.** A privacy call about her real
  upcoming whereabouts. Default to excluding them until she says otherwise.
- **Any new runtime dependency on a third-party service, account, or API token**, including a
  free-tier map-tile token committed to a public repo.
- **Dropping the flight list entirely**, if that's the conclusion — it's half the data she pointed
  at, and removing it is a scope decision rather than a cleanup.
- **Any change to a page other than `/travel`** beyond the single nav-link addition.
- **Ambiguity in her own trip data that can't be resolved from the repo** — e.g. `TQO` versus the
  `Oct 2025 - Tulum` destination entry, or a place name that could plausibly be two locations.
  Ask rather than guess a pin onto a map of her actual life.

---

## Missing information that would materially change the run

**Resolved 2026-08-14 (no longer open):**
- *Publishing:* all `travel.md` content may be published and committed. Future trips included.
- *Data completeness:* `travel.md` is authoritative but Jennifer will revise it later — so the
  parse must be re-runnable against an edited source, not a one-time hand transcription.
- *View count:* exactly **three** views. One default view held to an exceptional bar; the other two
  need only be decent. Zero visual jank in any of them, at any breakpoint.

**Still genuinely open:**
1. **Which view should be the default** — map is the obvious read of her request, but she named
   timeline and year-filter as equal maybes. The agent may choose and justify; worth flagging in
   the summary so she can overrule cheaply.
2. **Coordinate sourcing** — no coordinates exist anywhere in the repo and there is no build-time
   API budget. Hand-authored lookup table vs. a vendored dataset is an open call.
3. **Per-trip imagery** — an image per trip is required, but she has 37 real photos in
   `src/assets/portfolio/` and no trip→photo mapping. Placeholder strategy vs. attempting a
   mapping is open.

Everything else can be inferred from the repo.
