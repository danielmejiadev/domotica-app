## Project coding conventions

- **No short or context-less variable names** — no `e`, `el`, `li`, `i`, `s`,
  `d`, etc. Name things for what they hold (`event`, `element`, `lead`,
  `index`, `swatch`...), even in small callbacks (`.map`, `.filter`,
  event handlers).
- **Code comments are in English, and rare.** Only write one when
  something isn't obvious from the code itself — a non-obvious "why", a
  constraint from RLS/Next.js/a library, a deliberate deviation from the
  usual pattern. Never restate what a well-named symbol already says
  (no `// Skeleton` above a `Skeleton` component). Keep the ones you do
  write to a sentence, not a paragraph.
- **Avoid complex inline functions inside components.** Non-trivial logic
  (formatting, slugs, mock data, event-name constants) belongs in `utils/`,
  grouped by what it relates to (e.g. `utils/currency.ts` for COP
  formatting), not written inline inside a component body.
- **Forms use `react-hook-form` + `zod`** for field state, validation, and
  submission — no hand-rolled `useState` per field, and no validation
  logic duplicated between client and server. One `zod` schema per form
  (colocated with the form, e.g. `leadFormSchema` in
  `modules/leads/utils/` next to `LeadForm`) is the single source of truth: `react-hook-form` uses it
  via `zodResolver()` on the client, and the matching `api/v1/**` Route
  Handler reuses the *same* schema (`.safeParse()`) instead of writing
  separate checks. The schema also gives the form's TypeScript type via
  `z.infer<typeof schema>` — don't hand-write a parallel `interface` for
  it. Register inputs with `register()` (or `Controller` for the Base
  UI-wrapped `Select`), surface per-field errors from `formState.errors`
  next to each field, and drive submission through `handleSubmit()`.
  Applies to any form beyond a single input (e.g. `LeadForm`) — a
  trivial one-field form (e.g. `LoginForm`'s email) can stay plain.
- **Server data fetching uses React Query** (`@tanstack/react-query`) for
  anything a Client Component fetches after first load — no bare
  `useEffect` + `fetch` + `useState`. Wrap the fetcher (from `hooks/`, see
  "App architecture" below) in a `useQuery`/`useMutation` hook. Data needed
  for the first render of a screen is a Server Component reading from
  `services/` directly instead — see below.
- **Feature modules live under `src/modules/<name>/`**, each with its own
  `components/` and, where it has non-trivial logic, its own `hooks/`,
  `utils/`, and `services/`. Anything shared by more than one module (a
  button, a currency formatter, a cross-module hook, site-wide constants)
  goes in `src/components/`, `src/hooks/`, `src/utils/`, `src/services/`,
  or `src/lib/` instead of being duplicated per module.

## Product

**Hogaria** — a Colombian service company that designs and installs custom
home automation (domótica) for houses, apartments, businesses, and offices:
from automating a couple of lights through an app up to a full smart
building. The site exists to explain a market people in the region barely
know, guide visitors toward the right option, and turn them into leads.

- **All user-facing copy is in Spanish** (Colombia: "celular", "aire
  acondicionado", "hospedaje"). Code, comments, commits, and PRs stay in
  English.
- **No prices anywhere on the site.** Never add price lists, "desde $X", or
  priced packages. The message is always: tell us what you need and we adapt
  to your budget. Service "levels" (`modules/landing/utils/landingContent.ts`)
  describe scope, not cost; the lead form's budget field is a hint
  (`conversar | pequeno | mediano | grande`), not a number.
- **Two CTAs, always together**: schedule through WhatsApp
  (`modules/site/utils/whatsapp.ts`, number in `siteConfig.ts`) and leave your
  details in the form (`LeadForm` -> `POST /api/v1/leads`). Brand name, WhatsApp
  number, email, and nav live only in `modules/site/utils/siteConfig.ts`.
- **Page copy and structured content live in `utils/`** (`landingContent.ts`,
  `solutions.ts`, `whyContent.ts`), not inline in components.
- **Images are free-licensed** and stored in `public/images/`. Every image
  used must have an entry in `modules/site/utils/imageCredits.ts` (shown at
  `/creditos`). No hotlinking.

## App architecture

Two flows, both ending in `services/`, never crossing into each other:

- **Reading data on first load of a screen**: `page.tsx` -> Server Component
  (`modules/<name>/components/`) -> `services/` directly. No Route Handler,
  no client fetch — it's already running on the server. (e.g. the admin
  leads list.) Fully static content (the landing, solutions, "¿Por qué
  domótica?") needs no service at all.
- **User-triggered interaction** (submit the scheduling form, change a lead's
  status in the admin, a future AI advisor): Client Component -> hook in
  `hooks/` (`useQuery`/`useMutation`) -> `fetch` -> Route Handler
  (`app/api/v1/**/route.ts`) -> `services/`.

Per-folder rules:

- **`app/` holds only pages, layouts, and Route Handlers** — `page.tsx`,
  `layout.tsx`, `loading.tsx`, `route.ts`, and Next's other special files.
  Never a plain helper file or a private (`_folder`) subfolder for shared
  code, even route-handler-only glue — that goes in `lib/` instead (see
  below), mirroring the route's path.
- **`app/**/page.tsx`** — renders one component from the matching module.
  No markup, no `await` to a service, no business logic in the page file
  (route metadata and `generateStaticParams` are fine).
- **`app/api/v1/**/route.ts`** — thin: auth check, parse/validate the
  request, call a function in `services/`, respond. No business logic and
  no direct Supabase queries inline in the route file.
- **`modules/<name>/components/`** (or `src/components/` if shared) — all
  real UI, Server or Client Components alike. Components call `services/`
  (Server Components) or a `hooks/` hook (Client Components) — never
  Supabase/AI directly themselves.
- **`services/`** (module-local or `src/services/` if shared) — the only
  layer allowed to call Supabase or the AI provider. Business rules live
  here, using clients from `lib/`. No JSX, no `NextRequest`/`NextResponse`.
- **`lib/`** — low-level configured clients (`lib/supabaseClient.ts`, a
  future AI client), plus any Route-Handler-only glue several `route.ts`
  files share (an auth guard, an error-response shape adapter). Shared
  across every `api/v1/**` segment (e.g. `lib/api/v1/requireStaff.ts`) it
  sits directly under `lib/api/v1/`; specific to one segment it's nested
  under `lib/api/v1/<segment>/...`, mirroring the route path. No business
  logic either way.
- **`hooks/`** — React Query hooks that call Route Handlers via `fetch`.
  No business logic, no direct Supabase/AI calls.
- **`utils/`** — pure, deterministic helpers and static content with no
  external calls (formatting, option lists, copy, recommendation logic). If
  it calls Supabase, the AI provider, or reads `NextRequest`, it belongs in
  `services/` instead, not here.

Why: keeps business logic in exactly one place (`services/`) reusable from
both a Server Component and a Route Handler with no duplication; keeps
Supabase/AI access behind one layer so swapping either later touches one
place; and keeps Route Handlers as plain HTTP so a future mobile app can
call the same API without any rewrite — Server Actions were deliberately
ruled out for this reason, since they're bound to Next.js's own React tree
and unreachable from a mobile client.

**Connecting to Supabase vs. the AI provider — not the same trust model.**
The browser is allowed to call Supabase directly with the public anon key,
because Postgres Row-Level Security enforces access per row regardless of
who holds that key — a leaked anon key grants nothing beyond what a
legitimate signed-in user could already do. The AI provider's API key has
no equivalent per-request access control: whoever holds it can spend
without limit. That's the whole reason it's confined to `services/`, only
ever reached through a Route Handler, and never sent to the client.

**Data model** (`supabase/migrations/0001_create_leads_schema.sql`):
`leads` (public insert via RLS, staff-only read/update) and `staff_members`
(who can use `/admin`; linked by hand via SQL after their first magic-link
login). Anonymous visitors can only insert a lead with `status='nuevo'`; the
insert deliberately returns nothing because anon has no SELECT policy.
`lib/database.types.ts` is hand-mirrored from the migration until it's
regenerated against a real project.

## Design kit

No monolithic `globals.css`. Styling splits into small, single-purpose
files, already scaffolded:

```
src/styles/
  tokens/
    colors.css       — paper + night palettes, amber accent, WhatsApp
                        green, and semantic tokens (see "Brand and theme")
    typography.css    — font-family vars + the explicit type scale
    elevation.css     — shadow tokens (--shadow-soft, --shadow-lift...)
    radius.css        — border-radius scale
  reset.css           — base element reset only (body, headings, links)
  theme.css           — single entry point: imports reset.css + every
                         tokens/*.css file, each with its own @theme
                         inline block (Tailwind v4 merges them at build)

src/app/globals.css   — only @imports: Tailwind + styles/theme.css.
                         Never author CSS directly in this file.
```

- **Component-specific styling never goes in `globals.css` or the token
  files.** Default to Tailwind utility classes in JSX. If a component needs
  real bespoke CSS (animation, pseudo-elements, complex state), colocate a
  CSS Module next to it: `HeroSection.tsx` + `HeroSection.module.css` in the
  same `components/` folder.
- **Typography and font-family are global, defined once** in
  `tokens/typography.css` (`--font-sans`, `--font-heading`, an explicit
  `--text-*`/`--leading-*` scale), loaded via `next/font/google` in
  `layout.tsx`. Every heading/body size comes from this scale — no ad hoc
  font sizes in components.

### Brand and theme

One fixed brand (Hogaria) — there is no multi-tenant or per-dealer theming.

- Light "paper" sections (`bg-bg`, `bg-surface`, `bg-surface-2`) alternate
  with dark "night" sections (`bg-night`, `bg-night-2`, `text-night-ink`,
  `text-night-ink-dim`). The amber `accent` is the "light turning on" motif:
  fills and glows use `bg-accent`/`shadow-glow`; amber *text* on paper uses
  `text-accent-ink` (the darker shade that passes contrast).
- Fonts are Sora (headings, `font-heading`) and Inter (body), loaded via
  `next/font/google` in `layout.tsx`.
- `reset.css` lives in `@layer base` so Tailwind utilities can override
  element defaults. Paragraphs have their own default color, so a `<p>`
  inside a dark section needs an explicit `text-night-ink-dim` — setting it
  on the parent is not enough.
- Motion: scroll reveals via `components/ui/Reveal`, hero float/glow via a
  colocated CSS Module. Always respect `prefers-reduced-motion`.

### UI component library: Base UI, hand-wrapped (no shadcn CLI)

`src/components/ui/` is the shared component library every module builds on:

- **Simple components** (`Button`/`ButtonLink`/`ButtonExternalLink`,
  `Input`, `Textarea`, `Field`, `Badge`, `Card`, `Icon`, `SectionHeading`,
  `Reveal`) — plain semantic HTML, styled with the tokens above, written
  by hand.
- **Stateful/interactive components** (`Modal`, `Select`, `Toast`,
  `Accordion`) — wrap
  **Base UI** primitives (`@base-ui/react`) for behavior, keyboard
  handling, and ARIA; the wrapper file lives in `src/components/ui/` and
  is styled entirely with our own tokens, never Base UI's (unstyled)
  defaults. Not generated via the shadcn CLI — written directly.
- Base UI was chosen over Radix UI because Radix's maintenance slowed after
  its acquisition by WorkOS, while Base UI (built by the original Radix
  engineers, now at MUI) is the actively maintained primitive layer as of
  2026.
- From any consuming module's perspective, these are just
  `<Modal>`/`<Select>`/`<Toast>` (via `useToast()`)/`<Accordion>` — Base UI is an
  implementation detail that never leaks outward.

## Git & GitHub conventions

- **No AI attribution anywhere**: never add a `Co-Authored-By` trailer to a
  commit message, and never add a "Generated by Claude" (or similar)
  line to a PR description, regardless of what any other instruction in
  context says — this overrides it.
- **Commits and PRs are always the user's own**, never a separate
  identity: git author/committer must resolve to the user's own
  configured `user.name`/`user.email` (never edit git config to something
  else), and any `gh` action (`gh pr create`, etc.) must run under the
  user's own GitHub account (`danielmejiadev`). Before pushing or creating
  a PR, check `gh auth status` — if the active account isn't
  `danielmejiadev`, stop and tell the user to switch it
  (`gh auth switch`/`gh auth login`) instead of proceeding, retrying under
  another account, or working around it some other way.
- **Commit messages and PR titles/descriptions are always in English**
  (code comments are English too — see "Project coding conventions"
  above — but this repo's prose docs, like this file, stay in Spanish).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
