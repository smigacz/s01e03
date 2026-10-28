<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import notes from '#lib/data/desk-notes.json';
  import { groupByCause, readAs, uniqueById, type Cause, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';

  let { ticket }: { ticket: number } = $props();

  const merged = $derived(uniqueById(reports as Report[]).filter((r) => r.mergedInto === ticket));
  const groups = $derived(groupByCause(merged, tenantOf));
  const label: Record<Cause, string> = {
    parser: 'Shared date parser ignores day-first tenant locale',
    hint: 'booking-v3 date hint contradicts day-first tenant locale',
  };

  function tenantCounts(rs: Report[]): [string, number][] {
    const counts = new Map<string, number>();
    for (const report of rs) counts.set(report.tenant, (counts.get(report.tenant) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }

  function tagSummary(tags: Record<string, number>): string {
    return Object.entries(tags)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => `${tag} ×${count}`)
      .join(' · ');
  }
</script>

<p class="sum">
  <strong>{merged.length}</strong> unique reports merged into #{ticket} ·
  <strong>{groups.length}</strong> distinct causes
</p>

<table>
  <thead>
    <tr><th>problem</th><th>reports</th><th>tenants</th><th>channels</th><th>intake tag</th></tr>
  </thead>
  <tbody>
    {#each groups as group (group.cause)}
      <tr>
        <td>{group.cause === 'unplaced' ? 'Unplaced reports' : label[group.cause]}</td>
        <td><strong>{group.reports.length}</strong></td>
        <td>
          {#each tenantCounts(group.reports) as [tenant, count], i (tenant)}
            {#if i > 0}<br />{/if}<code>{tenant}</code> ×{count}
          {/each}
        </td>
        <td>
          {#each [...new Set(group.reports.map((r) => r.channel))].sort() as channel, i (channel)}
            {#if i > 0} · {/if}{channel}
          {/each}
        </td>
        <td>{tagSummary(group.taggedAs)}</td>
      </tr>
    {/each}
  </tbody>
</table>

{#each groups as group (group.cause)}
  {@const moved = readAs(group, notes.oneDayMove)}
  {#if moved}
    <p class="note">{moved} reports describe a one-day move; tenant and form configuration still place them under <code>{group.cause}</code>.</p>
  {/if}
{/each}

<style>
  .sum { font-size: 1.1rem; }
  .note { color: var(--muted); font-size: 0.9rem; }
</style>
