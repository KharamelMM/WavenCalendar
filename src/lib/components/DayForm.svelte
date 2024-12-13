<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import { EquipmentType } from '$lib/types/EquipmentType';
	import { ItemType } from '$lib/types/ItemType';
	import { RaretyType } from '$lib/types/RaretyType';
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import ComboBox from './forms/ComboBox.svelte';
	import Field from './forms/Field.svelte';
	import { enumKeys } from '$lib/utils/enum';
	import { offsetInCycle } from '$lib/utils/date';
	import { CYCLE_START } from '$lib/utils/const';

	export let oncancel: () => void;
	export let onsave: (reward: Reward) => void;
	export let ondelete: (() => void) | undefined = undefined;

	export let reward: Reward | undefined = undefined;
	export let date: Date;

	// Set default values
	let rewardType = reward?.type ?? RewardType.EQUIPMENT;
	let raretyType = reward?.type === RewardType.EQUIPMENT ? reward.rarety : RaretyType.COMMON;
	let equipmentType =
		reward?.type === RewardType.RUNES || reward?.type === RewardType.CHEST
			? reward.equipment
			: EquipmentType.EQUIPMENTS;
	let itemType = reward?.type === RewardType.EQUIPMENT ? reward.item : ItemType.RING;
	let amount = reward?.amount ?? 1;
	let description = reward?.type === RewardType.EQUIPMENT ? reward.description : undefined;

	function save() {
		let reward: Reward;
		const base = { cycle_index: offsetInCycle(date, CYCLE_START), amount };
		switch (rewardType) {
			case RewardType.GEMS:
				reward = { ...base, type: rewardType, amount: amount as 100 | 150 | 200 | 250 };
				break;
			case RewardType.EQUIPMENT:
				reward = { ...base, type: rewardType, rarety: raretyType, item: itemType, description };
				break;
			case RewardType.CHEST:
				reward = { ...base, type: rewardType, equipment: equipmentType };
				break;
			case RewardType.RUNES:
				reward = { ...base, type: rewardType, equipment: equipmentType };
				break;
			case RewardType.KAMAS:
			case RewardType.WAKFU:
				reward = { ...base, type: rewardType };
				break;
		}
		onsave(reward);
	}
</script>

<section>
	<ComboBox title={$_(t.REWARD_LABEL_TYPE)} values={enumKeys(RewardType)} bind:value={rewardType} required />
	{#if rewardType === RewardType.EQUIPMENT}
		<ComboBox title={$_(t.REWARD_LABEL_RARITY)} values={Object.keys(RaretyType)} bind:value={raretyType} required />
		<ComboBox title={$_(t.REWARD_LABEL_ITEM_TYPE)} values={Object.keys(ItemType)} bind:value={itemType} required />
	{:else if rewardType === RewardType.CHEST || rewardType === RewardType.RUNES}
		<ComboBox
			title={$_(t.REWARD_LABEL_EQUIPMENT_TYPE)}
			values={Object.keys(EquipmentType)}
			bind:value={equipmentType}
			required
		/>
	{/if}

	<Field title={$_(t.REWARD_LABEL_AMOUNT)} required>
		{#if rewardType === RewardType.GEMS}
			<input type="number" min="100" max="250" step="50" bind:value={amount} />
		{:else}
			<input type="number" min="1" max="5000" bind:value={amount} />
		{/if}
	</Field>

	{#if rewardType === RewardType.EQUIPMENT}
		<Field title={$_(t.REWARD_LABEL_EQUIPMENT_MORE)}>
			<input type="text" placeholder={$_(t.EQUIPMENT_MORE_PLACEHOLDER)} bind:value={description} />
		</Field>
	{/if}

	<div class="controls">
		<button class="secondary" onclick={() => oncancel()}>{$_(t.CANCEL)}</button>
		<button class="primary" onclick={save}>{$_(t.SAVE)}</button>
		{#if ondelete}
			<button
				class="delete material-icon"
				onclick={() => {
					if (confirm($_(t.REWARD_DELETE_CONFIRM))) {
						ondelete();
					}
				}}>delete</button
			>
		{/if}
	</div>
</section>

<style>
	section {
		margin-top: 1em;
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}

	.controls {
		display: flex;
		justify-content: end;
		gap: 0.5em;
	}

	button {
		font-size: 1.25em;
		padding: 0.25em 1em;
	}

	button.delete {
		background-color: var(--pomegranate);
		width: 2em;
		height: 2em;
		padding: 0;
	}
</style>
