# Hogaria — custom home automation website

Website for Hogaria, a Colombian home automation (domótica) company serving
houses, apartments, businesses, and offices — from automating a couple of
lights up to a full smart building. The site explains a market people in the
region barely know, helps visitors pick the right option for their budget, and
captures leads through WhatsApp or a form.

See `AGENTS.md` for the code conventions, the layered architecture (Server
Components + `services/` + Route Handlers), the design kit, and the content
rules (all user-facing copy in Spanish, no prices) — they always apply, without
exception.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, custom design kit in `src/styles/`
- Supabase (Postgres, Auth) — see `src/lib/supabaseClient.ts`
- `@base-ui/react` as the accessibility foundation for Modal/Select/Toast/Accordion
- `react-hook-form` + `zod` for forms, `@tanstack/react-query` for data the
  client fetches after the initial load
- Deployed to Cloudflare Workers via `@opennextjs/cloudflare`

## What's in it

- `/` — landing: why home automation, solutions, what can be automated, myths
  vs. reality, a day in a smart space, service levels (no prices), quick
  guide, how we work, FAQ, and contact.
- `/por-que-domotica` — explainer for people new to the topic.
- `/soluciones/[casas|negocios|oficinas]` — one page per type of space.
- `/agendar` — WhatsApp + form (`POST /api/v1/leads`).
- `/admin` — magic-link dashboard to view and manage leads.
- `/creditos` — image credits (Wikimedia Commons, free licenses).

## Local development

```bash
pnpm install
cp .env.local.example .env.local   # then fill in your Supabase project keys
cp .dev.vars.example .dev.vars
pnpm dev
```

The site renders without Supabase configured; the form and the admin
dashboard need a real project with the
`supabase/migrations/0001_create_leads_schema.sql` migration applied. The
first admin user is linked by hand:

```sql
insert into public.staff_members (user_id) values ('<uuid of the user in auth.users>');
```

## To do before launch

- Replace the WhatsApp number and email in
  `src/modules/site/utils/siteConfig.ts` (currently placeholders).
- Create the Supabase project, apply the migration, and regenerate
  `src/lib/database.types.ts`.
- Point `.mcp.json` at the new project's `project_ref`.
