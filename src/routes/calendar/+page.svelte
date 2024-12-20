<script lang="ts">
	import FlyingSection from '$lib/components/FlyingSection.svelte';
	import calendar from '$lib/data/calendar.json';
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import type { Reward } from '$lib/types/Reward';
	import { CYCLE_LENGTH } from '$lib/utils/const';
	import Filters from '$lib/components/Filters.svelte';
	import ProfileModal from '$lib/components/ProfileModal.svelte';
	import { currentProfile } from '$lib/utils/profile.store';
	import CycleDay from './CycleDay.svelte';

	const cycle: Reward[] = [];
	let openProfileModal = false;

	for (const reward of calendar) {
		cycle[reward.cycle_index] = reward as Reward;
	}
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
				<div class="reward">
					<CycleDay reward={cycle[i]} index={i} />
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
