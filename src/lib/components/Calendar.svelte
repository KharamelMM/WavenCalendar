<script lang="ts">
	import type { Calendar } from '$lib/types/Calendar';
	import { RewardType } from '$lib/types/RewardType';
	import { DAYS } from '$lib/utils/const';
	import { daysInMonth, getDayOfMonth, nbDistinctWeeksOfMonth, offsetInCycle } from '$lib/utils/date';
	import I18n from './I18n.svelte';

	export let year: number;
	export let month: number;

	export let onselectday: (date: Date) => void;

	export let calendar: Calendar;

	export let weekOffset: number = 1;
	const weekDays = DAYS.length;

	const today = new Date();

	function getClass(date: Date) {
		let offset = offsetInCycle(date, calendar.startDate);
		if (calendar.rewards[offset]) {
			const reward = calendar.rewards[offset];
			if (reward.type === RewardType.EQUIPMENT) {
				return reward.rarety.toLowerCase();
			} else {
				return reward.type.toLowerCase();
			}
		}
	}
</script>

<table>
	<thead>
		<tr>
			{#each { length: weekDays } as _, i}
				<th><I18n key={DAYS[(i + weekOffset) % weekDays]} /></th>
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
							<button
								class:today={currentDate.toDateString() === today.toDateString()}
								class={getClass(currentDate)}
								onclick={() => onselectday(currentDate)}
								disabled={currentDate > today}
							>
								{dayOfMonth}
							</button>
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	button {
		--color: transparent;

		width: 100%;
		border-color: transparent;
		color: var(--headline);
		font-family: roboto;
		border-radius: 0.5em;
		border-width: 0.2em;
	}

	button:disabled {
		opacity: 0.5;
	}

	.today {
		--color: var(--headline);
		background-color: var(--color);
		color: var(--bg);
		transform: scale(1.2);
	}

	.gems,
	.kamas,
	.infinite,
	.krosmic,
	.rare,
	.common {
		border-style: solid;
		border-color: var(--color);
	}

	.gems {
		--color: fuchsia;
	}

	.kamas {
		--color: gold;
	}

	.infinite {
		--color: orange;
	}

	.krosmic {
		--color: purple;
	}

	.rare {
		--color: blue;
	}

	.common {
		--color: gray;
	}
</style>
