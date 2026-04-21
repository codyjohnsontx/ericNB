# CTX Massage → Astro codebase handoff

These files port the three highest-value pieces from the prototype into your
existing Astro + Tailwind codebase. They match your conventions: frontmatter +
`<slot>`, your palette (`ink`/`paper`/`clay`/`sage`), `business` from
`content/business.ts`, no new dependencies.

## What's included

| File in this folder | Destination in `new-braunfels-massage/` | Action |
|---|---|---|
| `src/components/sections/HeroBooker.astro` | `src/components/sections/HeroBooker.astro` | **NEW** |
| `src/components/sections/Hero.astro` | `src/components/sections/Hero.astro` | **REPLACE** |
| `src/components/sections/TrustStrip.astro` | `src/components/sections/TrustStrip.astro` | **REPLACE** |
| `src/pages/booking.astro` | `src/pages/booking.astro` | **REPLACE** |

No changes to `package.json`, `tailwind.config.mjs`, `astro.config.mjs`, or
`layouts/` as part of this handoff.

The live site may still update **`src/content/business.ts`** (branding, NAP,
`sessionPricing`, etc.) because those values feed the handoff components. Any
other app changes (navigation, routes helper, a11y fixes) are outside the
original four-file port but kept aligned with this design.

## What it does

### 1. `HeroBooker.astro` — the live split-layout widget

Replaces the right-hand "A local massage therapist for real-world goals" card
in the Hero with an interactive booker:

- **Location** (Your place / Studio)
- **Duration** (60 / 90 / 120) — reads prices from `business.sessionPricing`
- **Style** (5 service slugs)
- Live-updating price + summary
- "Continue" button deep-links to `/booking?minutes=90&location=house&service=therapeutic-massage`

Pure Astro + a single `<script>` block. No React, no islands.

### 2. `TrustStrip.astro` — 6-column credentials grid

Upgrade from the thin `TrustBadgeRow` to a dense label / value / hint grid:
License · Therapist · Hours · Payment · Cancellation · Travel.

### 3. `/booking` — 4-step wizard

Complete replacement for the current page. Four steps:

1. Session (location + minutes + style)
2. Schedule (day strip + time slots)
3. Details (name / phone / email / address / notes)
4. Review + confirm → success card

With a **sticky summary card** on the right showing live total. Reads URL
prefill (`?minutes=90&location=house&service=...`) so the HeroBooker
hand-off lands on step 1 with your selection ready.

Back-link returns to the previous step (or `/` from step 1). Address field
only appears for house calls. "Most booked" highlight on 90 min. Sunday
disabled in the day strip.

No scheduling provider wired — submitting shows the success card. Wire to
Square / Acuity by replacing the submit handler at the bottom of the
`<script>` block.

## Notes / caveats

- The wizard is client-side only — no server persistence yet. Plugging it
  into Square Appointments or Acuity is a ~10-line change in the submit
  handler (post to their API or redirect to their URL with prefill params).
- The old "embed placeholder" iframe block is removed. If you want to keep
  the embed option as a fallback, add it back as a collapsed `<details>`
  under the wizard.
- `StickyMobileCta` still appears at the bottom from the layout — worth
  hiding on `/booking` since the wizard has its own Continue button. One
  line in `StickyMobileCta.astro`: `Astro.url.pathname === "/booking"` →
  return null.
- Day strip shows the next 10 days with Sunday disabled. For real
  availability, swap the `buildDays()` function to pull from your calendar.

## Implementation note (repo)

The booking page wraps the wizard (everything except the success card) in
`[data-booking-wizard-wrap]` and hides that wrapper on submit so the
**confirmation card stays visible** (the original prototype hid `main >
section`, which also hid the success state). The design markup and wizard
behavior otherwise match this folder’s `booking.astro`.

Primary **Book** actions in the live site (`SiteHeader`, `StickyMobileCta`,
service/about/contact CTAs, `ContactCtaBand`) route to **`/booking`** so they
use the same wizard as the hero hand-off. `bookingUrl` in `business.ts` remains
for a future external scheduler link if needed.

This folder’s `.astro` files mirror `src/` (same paths under `handoff/src/`).
`tsconfig.json` **excludes** `handoff/` so `astro check` only type-checks the
app under `src/`.

The booking page passes wizard data through a hidden `#booking-init`
`data-payload` JSON blob so the inline script stays type-clean. There is still **no
server booking API** in this repo; confirm remains a client-side demo until you
POST to Square/Acuity/your backend.
