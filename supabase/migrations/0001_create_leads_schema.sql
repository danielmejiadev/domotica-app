-- Hogaria: leads del formulario de agendamiento + miembros del staff que
-- pueden verlos y gestionarlos desde /admin. Ver AGENTS.md.

-- ---------------------------------------------------------------------------
-- Schema no expuesto para funciones helper de RLS (security definer).
-- No aparece en api.schemas (config.toml), así que no es alcanzable via
-- Data API sin importar los GRANTs.
-- ---------------------------------------------------------------------------
create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to authenticated;

create or replace function private.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- staff_members: quién puede entrar al panel. Sin policy de escritura: el
-- primer miembro se vincula a mano (rol postgres) tras su primer login por
-- magic link.
-- ---------------------------------------------------------------------------
create table public.staff_members (
  id bigint generated always as identity primary key,
  user_id uuid not null unique references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.staff_members enable row level security;

create policy "staff_members_select_own"
on public.staff_members
for select
to authenticated
using (user_id = (select auth.uid()));

create function private.is_staff()
returns boolean
language sql
security definer
set search_path = ''
stable
as $$
  select exists (
    select 1
    from public.staff_members
    where user_id = (select auth.uid())
  );
$$;

revoke execute on function private.is_staff() from public;
grant execute on function private.is_staff() to authenticated;

-- ---------------------------------------------------------------------------
-- leads
-- ---------------------------------------------------------------------------
create table public.leads (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 2 and 120),
  phone text not null check (phone ~ '^[0-9+()\s-]{7,20}$'),
  email text check (email is null or char_length(email) <= 254),
  city text check (city is null or char_length(city) <= 80),
  space_type text not null
    check (space_type in ('casa', 'apartamento', 'negocio', 'oficina', 'otro')),
  budget_hint text not null default 'conversar'
    check (budget_hint in ('conversar', 'pequeno', 'mediano', 'grande')),
  message text check (message is null or char_length(message) <= 2000),
  status text not null default 'nuevo'
    check (status in ('nuevo', 'contactado', 'descartado')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on column public.leads.budget_hint is 'Orientación, no una cifra: el presupuesto real se conversa con la persona.';

create index leads_created_at_idx on public.leads (created_at desc);

create trigger leads_set_updated_at
before update on public.leads
for each row execute function private.set_updated_at();

alter table public.leads enable row level security;

-- Cualquiera puede dejar sus datos; el CHECK sobre status evita que un
-- visitante se cree un lead ya "contactado". Insert sin RETURNING: no hay
-- policy de SELECT para anon.
create policy "leads_insert_public"
on public.leads
for insert
to anon, authenticated
with check (status = 'nuevo');

create policy "leads_select_staff"
on public.leads
for select
to authenticated
using (private.is_staff());

create policy "leads_update_staff"
on public.leads
for update
to authenticated
using (private.is_staff())
with check (private.is_staff());
