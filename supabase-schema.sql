create table if not exists public.reports_state (
  id text primary key,
  owner_id uuid not null default auth.uid(),
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.reports_state enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update on table public.reports_state to authenticated;

drop policy if exists "reports_state_select" on public.reports_state;
drop policy if exists "reports_state_insert" on public.reports_state;
drop policy if exists "reports_state_update" on public.reports_state;

create policy "reports_state_select"
on public.reports_state
for select
to authenticated
using (owner_id = auth.uid());

create policy "reports_state_insert"
on public.reports_state
for insert
to authenticated
with check (owner_id = auth.uid());

create policy "reports_state_update"
on public.reports_state
for update
to authenticated
using (owner_id = auth.uid())
with check (owner_id = auth.uid());
