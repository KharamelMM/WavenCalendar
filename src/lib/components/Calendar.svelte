<script lang="ts">
	import type { Calendar } from '$lib/types/Calendar';
	import { CYCLE_START, DAYS } from '$lib/utils/const';
	import { daysInMonth, getDayOfMonth, nbDistinctWeeksOfMonth, offsetInCycle } from '$lib/utils/date';
	import { momentStore } from '$lib/utils/moment.store';
	import CalendarDay from './CalendarDay.svelte';
	import I18n from './I18n.svelte';
	import moment from 'moment/min/moment-with-locales';

	export let year: number;
	export let month: number;

	export let onselectday: (date: Date) => void;

	export let calendar: Calendar;

	export let weekOffset: number = 1;
	const weekDays = DAYS.length;

	function getReward(date: Date) {
		let offset = offsetInCycle(date, CYCLE_START);
		return calendar[offset];
	}
</script>

<table>
	<thead>
		<tr>
			{#each { length: weekDays } as _, i}
				<th>
					{$momentStore()
						.weekday(i % weekDays)
						.format('dd')}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each { length: nbDistinctWeeksOfMonth(month, year, weekOffset) } as _, row}
			{@const maxDayOfMonth = daysInMonth(month, year)}
			<tr>
				{#each DAYS as _, i}
					{@const dayOfMonth = getDayOfMonth(month, year, i, row, weekOffset)}
					<td>
						{#if dayOfMonth > 0 && dayOfMonth <= maxDayOfMonth}
							{@const currentDate = new Date(year, month, dayOfMonth)}
							{@const reward = getReward(currentDate)}
							<CalendarDay {currentDate} {dayOfMonth} {reward} onclick={() => onselectday(currentDate)} />
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th {
		text-transform: capitalize;
	}
</style>
