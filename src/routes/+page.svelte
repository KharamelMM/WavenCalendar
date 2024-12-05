<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
	import Card from '$lib/components/Card.svelte';
	import DayForm from '$lib/components/DayForm.svelte';
	import FlyingSection from '$lib/components/FlyingSection.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { Reward } from '$lib/types/Reward';
	import { MONTHS } from '$lib/utils/const';
	import type { Calendar as CalendarType } from '$lib/types/Calendar';
	import { offsetInCycle } from '$lib/utils/date';

	const calendar: CalendarType = { startDate: new Date(), rewards: [] };

	let year = new Date().getFullYear();
	let selectedDay: Date | undefined;

	function onselectday(date: Date) {
		selectedDay = date;
	}

	function onsave(reward: Reward) {
		if (!selectedDay) {
			throw new Error('No selected day');
		}

		calendar.rewards[offsetInCycle(selectedDay, calendar.startDate)] = reward;
		selectedDay = undefined;
	}

	function getSelectedOffset() {
		if (!selectedDay) {
			throw new Error('No selected day');
		}
		// number of days between start date and selected date
		return offsetInCycle(selectedDay, calendar.startDate);
	}
</script>

{#if !selectedDay}
	<FlyingSection>
		<header>
			<button onclick={() => year--}><Icon>arrow_back_ios</Icon></button>
			<h2>{year}</h2>
			<button onclick={() => year++}><Icon>arrow_forward_ios</Icon></button>
		</header>
		<div class="months">
			{#each MONTHS as month, i}
				<Card i18nTitleKey={month}>
					<Calendar {...{ month: i, year, onselectday, calendar }} />
				</Card>
			{/each}
		</div>
	</FlyingSection>
{:else}
	<FlyingSection>
		<Card title={selectedDay.toDateString()}>
			<DayForm
				reward={calendar.rewards[getSelectedOffset()]}
				oncancel={() => {
					selectedDay = undefined;
				}}
				{onsave}
			/>
		</Card>
	</FlyingSection>
{/if}

<style>
	:root {
		overflow-y: scroll;
	}
	header {
		display: flex;
		justify-content: center;
		gap: 0.5em;
	}

	header > button {
		background-color: transparent;
		box-shadow: none !important;
		border: none;
		color: var(--text);
	}

	header > button:hover {
		color: var(--headline);
	}

	h2 {
		text-align: center;
		font-size: 3em;
		margin: 0;
	}
	.months {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		justify-content: center;
	}
</style>
