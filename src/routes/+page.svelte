<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
	import Card from '$lib/components/Card.svelte';
	import DayForm from '$lib/components/DayForm.svelte';
	import FlyingSection from '$lib/components/FlyingSection.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { Reward } from '$lib/types/Reward';
	import { CYCLE_START, MONTHS } from '$lib/utils/const';
	import type { Calendar as CalendarType } from '$lib/types/Calendar';
	import { offsetInCycle } from '$lib/utils/date';
	import Modal from '$lib/components/Modal.svelte';
	import LogOut from '$lib/components/LogOut.svelte';
	import { getCalendar, setReward } from '$lib/supabase/calendar';
	import { onMount } from 'svelte';

	let calendar: CalendarType = [];

	let year = new Date().getFullYear();
	let selectedDay: Date | undefined;
	let animateMonthsSwipeLeftToRight: boolean = true;

	function onselectday(date: Date) {
		selectedDay = date;
	}

	function onsave(reward: Reward) {
		if (!selectedDay) {
			throw new Error('No selected day');
		}

		calendar[offsetInCycle(selectedDay, CYCLE_START)] = reward;
		selectedDay = undefined;

		setReward(reward);
	}

	function getSelectedOffset() {
		if (!selectedDay) {
			throw new Error('No selected day');
		}
		// number of days between start date and selected date
		return offsetInCycle(selectedDay, CYCLE_START);
	}

	onMount(async () => {
		calendar = await getCalendar();
	});
</script>

{#if selectedDay}
	<Modal
		title={selectedDay.toDateString()}
		onclose={() => {
			selectedDay = undefined;
		}}
	>
		<DayForm
			reward={calendar[getSelectedOffset()]}
			oncancel={() => {
				selectedDay = undefined;
			}}
			{...{ onsave, date: selectedDay }}
		/>
	</Modal>
{/if}
<FlyingSection>
	<header>
		<button
			onclick={() => {
				animateMonthsSwipeLeftToRight = true;
				year--;
			}}><Icon>arrow_back_ios</Icon></button
		>
		<h2>{year}</h2>
		<button
			onclick={() => {
				animateMonthsSwipeLeftToRight = false;
				year++;
			}}><Icon>arrow_forward_ios</Icon></button
		>
	</header>
	<div class="calendar">
		{#key year}
			<div class="year">
				<FlyingSection leftToRight={animateMonthsSwipeLeftToRight}>
					<div class="months">
						{#each MONTHS as month, i}
							<Card i18nTitleKey={month}>
								<Calendar {...{ month: i, year, onselectday, calendar }} />
							</Card>
						{/each}
					</div>
				</FlyingSection>
			</div>
		{/key}
	</div>
</FlyingSection>

<LogOut />

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
		padding-bottom: 1em;
	}

	.calendar {
		position: relative;
		width: 100%;
	}

	.year {
		position: absolute;
	}
</style>
