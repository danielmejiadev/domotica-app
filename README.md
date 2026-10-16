# Hogaria — sitio de domótica a la medida

Sitio web de Hogaria: servicio de domótica (casas inteligentes) en Colombia
para casas, apartamentos, negocios y oficinas — desde automatizar un par de
luces hasta un inmueble completo. El sitio explica un mercado que la gente
aún no conoce, guía a elegir según el presupuesto y capta solicitudes por
WhatsApp o por formulario.

Ver `AGENTS.md` para las convenciones de código, la arquitectura de capas
(Server Components + `services/` + Route Handlers), el design kit y las
reglas de contenido (todo en español, sin precios) — aplican siempre, sin
excepción.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, design kit propio en `src/styles/`
- Supabase (Postgres, Auth) — ver `src/lib/supabaseClient.ts`
- `@base-ui/react` como base de accesibilidad para Modal/Select/Toast/Accordion
- `react-hook-form` + `zod` para formularios, `@tanstack/react-query` para
  datos que el cliente pide después de la carga inicial
- Despliegue en Cloudflare Workers vía `@opennextjs/cloudflare`

## Qué hay

- `/` — landing: por qué domótica, soluciones, qué se puede automatizar,
  mitos vs. realidad, un día en un espacio inteligente, niveles (sin
  precios), guía rápida, cómo trabajamos, preguntas frecuentes y contacto.
- `/por-que-domotica` — explicación para quien no conoce el tema.
- `/soluciones/[casas|negocios|oficinas]` — una página por tipo de espacio.
- `/agendar` — WhatsApp + formulario (`POST /api/v1/leads`).
- `/admin` — panel (magic link) para ver y gestionar las solicitudes.
- `/creditos` — créditos de las imágenes (Wikimedia Commons, licencia libre).

## Desarrollo local

```bash
pnpm install
cp .env.local.example .env.local   # y llenar con las keys de tu proyecto Supabase
cp .dev.vars.example .dev.vars
pnpm dev
```

El sitio se ve sin Supabase configurado; el formulario y el panel
necesitan un proyecto real con la migración
`supabase/migrations/0001_create_leads_schema.sql` aplicada. El primer
usuario del panel se vincula a mano:

```sql
insert into public.staff_members (user_id) values ('<uuid del usuario en auth.users>');
```

## Pendiente antes de publicar

- Reemplazar en `src/modules/site/utils/siteConfig.ts` el número de WhatsApp
  y el correo (hoy son placeholders).
- Crear el proyecto Supabase, aplicar la migración y regenerar
  `src/lib/database.types.ts`.
- Apuntar `.mcp.json` al `project_ref` del nuevo proyecto.
