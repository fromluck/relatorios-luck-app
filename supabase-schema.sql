create table if not exists public.reports_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.reports_state enable row level security;

drop policy if exists "reports_state_select" on public.reports_state;
drop policy if exists "reports_state_insert" on public.reports_state;
drop policy if exists "reports_state_update" on public.reports_state;

create policy "reports_state_select"
on public.reports_state
for select
using (true);

create policy "reports_state_insert"
on public.reports_state
for insert
with check (true);

create policy "reports_state_update"
on public.reports_state
for update
using (true)
with check (true);
