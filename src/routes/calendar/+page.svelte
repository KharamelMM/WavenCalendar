<script lang="ts">
	import FlyingSection from '$lib/components/FlyingSection.svelte';
	import calendar from '$lib/data/calendar.json';
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import type { Reward } from '$lib/types/Reward';
	import { CYCLE_LENGTH, CYCLE_START } from '$lib/utils/const';
	import Filters from '$lib/components/Filters.svelte';
	import ProfileModal from '$lib/components/ProfileModal.svelte';
	import { currentProfile } from '$lib/utils/profile.store';
	import CycleDay from './CycleDay.svelte';
	import type { Calendar } from '$lib/types/Calendar';
	import { onDestroy, onMount } from 'svelte';
	import { getCalendar } from '$lib/supabase/calendar';
	import { get } from 'svelte/store';
	import { getOffset } from '$lib/utils/rewards';
	import { offsetInCycle } from '$lib/utils/date';

	const cycle: Calendar = [];
	let personalCalendar: Calendar = [];
	let offset = -1;

	let currentDay = -1;

	$: {
		offset = getOffset(personalCalendar, cycle);
		currentDay = getCurrentDay(offset);
		const el = document.querySelector(`#reward-${currentDay}`);
		if (el) {
			el.scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			});
		}
	}

	let openProfileModal = false;

	for (const reward of calendar) {
		cycle[reward.cycle_index] = reward as Reward;
	}

	function getCurrentDay(offset: number) {
		if (offset < 0) {
			return -1;
		}
		const numberOfDaySinceStart = offsetInCycle(new Date(), CYCLE_START);
		return (numberOfDaySinceStart - offset + CYCLE_LENGTH) % CYCLE_LENGTH;
	}

	const unsubscribe = currentProfile.subscribe(async (profile) => {
		personalCalendar = await getCalendar(profile);
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

{#if openProfileModal}
	<ProfileModal onclose={() => (openProfileModal = false)} />
{/if}

<FlyingSection>
	<div class="body">
		<div class="info">
			<h2>{$_(t.CALENDAR_TITLE)}</h2>
			<div>
				{$_(t.CALENDAR_INFO)}
			</div>
		</div>
		<button class="profile" onclick={() => (openProfileModal = true)}>
			{$currentProfile ? `${$_(t.PROFILE)} : ${$currentProfile}` : $_(t.PROFILE_DEFAULT)}
		</button>
		<Filters />
		<section>
			{#each { length: CYCLE_LENGTH } as _, i}
				<div class="reward" id={`reward-${i}`}>
					<CycleDay reward={cycle[i]} index={i} primary={i === getCurrentDay(offset)} />
				</div>
			{/each}
		</section>
	</div>
</FlyingSection>

<style>
	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
	}
	.info {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 1em;
	}
	.info div {
		max-width: 40em;
	}

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5em;
		font-size: 0.75em;
	}
</style>
