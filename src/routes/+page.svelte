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
	import { deleteReward, getCalendar, setReward } from '$lib/supabase/calendar';
	import { onDestroy, onMount } from 'svelte';
	import { currentProfile } from '$lib/utils/profile.store';
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import ProfileModal from '$lib/components/ProfileModal.svelte';
	import { get } from 'svelte/store';

	let calendar: CalendarType = [];

	let year = new Date().getFullYear();
	let selectedDay: Date | undefined;
	let openProfileModal = false;
	let animateMonthsSwipeLeftToRight: boolean = true;

	function selectDay(date: Date) {
		selectedDay = date;
	}

	function saveReward(reward: Reward) {
		if (!selectedDay) {
			throw new Error('No selected day');
		}

		calendar[offsetInCycle(selectedDay, CYCLE_START)] = reward;
		selectedDay = undefined;

		setReward(get(currentProfile), reward);
	}

	function getSelectedOffset() {
		if (!selectedDay) {
			throw new Error('No selected day');
		}
		// number of days between start date and selected date
		return offsetInCycle(selectedDay, CYCLE_START);
	}

	function deleteSelectedReward() {
		if (!selectedDay) {
			throw new Error('No selected day');
		}
		const offset = getSelectedOffset();
		deleteReward(get(currentProfile), offset);
		calendar[offset] = undefined;
		selectedDay = undefined;
	}

	const unsubscribe = currentProfile.subscribe(async (profile) => {
		calendar = await getCalendar(profile);
	});

	onMount(async () => {
		calendar = await getCalendar(get(currentProfile));
	});
	onDestroy(() => {
		unsubscribe();
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
			{...{
				onsave: saveReward,
				date: selectedDay,
				ondelete: deleteSelectedReward
			}}
		/>
	</Modal>
{/if}

{#if openProfileModal}
	<ProfileModal onclose={() => (openProfileModal = false)} />
{/if}

<FlyingSection>
	<header>
		<button class="profile" onclick={() => (openProfileModal = true)}>{$currentProfile ?? $_(t.PROFILE_DEFAULT)}</button
		>
		<div class="year-controls">
			<button
				onclick={() => {
					animateMonthsSwipeLeftToRight = true;
					year--;
				}}
			>
				<Icon>arrow_back_ios</Icon>
			</button>
			<h2>{year}</h2>
			<button
				onclick={() => {
					animateMonthsSwipeLeftToRight = false;
					year++;
				}}
			>
				<Icon>arrow_forward_ios</Icon>
			</button>
		</div>
		<div class="filters"></div>
	</header>
	<div class="calendar">
		{#key year}
			<div class="year">
				<FlyingSection leftToRight={animateMonthsSwipeLeftToRight}>
					<div class="months">
						{#each MONTHS as month, i}
							<Card i18nTitleKey={month}>
								<Calendar {...{ month: i, year, onselectday: selectDay, calendar }} />
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
		justify-content: space-around;
		width: 100%;
		align-items: center;
	}

	.profile {
		flex: 1;
		height: 1em;
	}
	.filters {
		flex: 1;
	}

	.year-controls {
		flex: 2;
		display: flex;
		justify-content: center;
		gap: 0.5em;
	}

	.year-controls > button {
		box-shadow: none !important;
		border: none;
		color: var(--text);
	}

	.year-controls > button:hover {
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
