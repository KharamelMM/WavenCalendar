<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FlyingSection from '$lib/components/FlyingSection.svelte';
	import I18n from '$lib/components/I18n.svelte';
	import calendar from '$lib/data/calendar.json';
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import { CYCLE_LENGTH } from '$lib/utils/const';

	const cycle: Reward[] = [];

	for (const reward of calendar) {
		cycle[reward.cycle_index] = reward as Reward;
	}
</script>

<FlyingSection>
	<div class="info">
		<h2>{$_(t.CALENDAR_TITLE)}</h2>
		<div>
			{$_(t.CALENDAR_INFO)}
		</div>
	</div>
	<section>
		{#each { length: CYCLE_LENGTH } as _, i}
			<div class="reward">
				<Card classes={cycle[i]?.type.toLowerCase()} title={`${i} `} width="10em" height="3.5em">
					{#if cycle[i]}
						{cycle[i].amount}x <I18n key={cycle[i].type} />
						{#if cycle[i].type === RewardType.EQUIPMENT || cycle[i].type === RewardType.COMPANION}
							<I18n key={cycle[i].rarety} />
						{:else if cycle[i].type === RewardType.RUNES || cycle[i].type === RewardType.CHEST}
							<I18n key={cycle[i].equipment} />
						{/if}
					{:else}
						?
					{/if}
				</Card>
			</div>
		{/each}
	</section>
</FlyingSection>

<style>
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
		margin: 1em 0;
	}
</style>
