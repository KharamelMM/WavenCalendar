<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
	import Card from '$lib/components/Card.svelte';
	import DayForm from '$lib/components/DayForm.svelte';
	import FlyingSection from '$lib/components/FlyingSection.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { Reward } from '$lib/types/Reward';
	import { CYCLE_START, DEFAULT_PROFILE_NAME, MONTHS } from '$lib/utils/const';
	import type { Calendar as CalendarType } from '$lib/types/Calendar';
	import { offsetInCycle } from '$lib/utils/date';
	import Modal from '$lib/components/Modal.svelte';
	import { deleteReward, getCalendar, setReward } from '$lib/supabase/calendar';
	import { onDestroy, onMount } from 'svelte';
	import { currentProfile } from '$lib/utils/profile.store';
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import ProfileModal from '$lib/components/ProfileModal.svelte';
	import { get } from 'svelte/store';
	import { momentStore } from '$lib/utils/moment.store';
	import Filters from '$lib/components/Filters.svelte';

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

		reward.validated = false;
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
		title={$momentStore(selectedDay).format('dddd D MMMM yyyy')}
		onclose={() => {
			selectedDay = undefined;
		}}
	>
		<div>{$_(t.REWARDS_FORM_INFO)}</div>
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
		<button class="profile" onclick={() => (openProfileModal = true)}>
			{$currentProfile !== DEFAULT_PROFILE_NAME ? `${$_(t.PROFILE)} : ${$currentProfile}` : $_(t.PROFILE_DEFAULT)}
		</button>
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
		<div>
			<Filters />
		</div>
	</header>
	<div class="calendar">
		{#key year}
			<div class="year">
				<FlyingSection leftToRight={animateMonthsSwipeLeftToRight}>
					<div class="months">
						{#each MONTHS as month, i}
							<Card
								title={$momentStore(new Date(0, i)).format('MMMM')}
								outline={i === new Date().getMonth() && year === new Date().getFullYear()}
							>
								<Calendar {...{ month: i, year, onselectday: selectDay, calendar }} />
							</Card>
						{/each}
					</div>
				</FlyingSection>
			</div>
		{/key}
	</div>
</FlyingSection>

<style>
	:root {
		overflow-y: scroll;
	}

	header {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
		padding: 0.25em 2em 0.5em 2em;
	}
	.profile {
		height: 1em;
		text-align: left;
		box-shadow: none !important;
	}
	.year-controls {
		flex: 1;
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
		font-size: 2.5em;
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
