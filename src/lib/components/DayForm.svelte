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

	export let oncancel: () => void;
	export let onsave: (reward: Reward) => void;

	export let reward: Reward | undefined = undefined;

	// Set default values
	let rewardType: RewardType = reward?.type ?? RewardType.EQUIPMENT;
	let raretyType: RaretyType = reward?.type === RewardType.EQUIPMENT ? reward.rarety : RaretyType.COMMON;
	let equipmentType: EquipmentType =
		reward?.type === RewardType.RUNES || reward?.type === RewardType.CHEST ? reward.kind : EquipmentType.EQUIPMENTS;
	let itemType: ItemType = reward?.type === RewardType.EQUIPMENT ? reward.kind : ItemType.RING;
	let amount: number = reward?.amount ?? 1;
	let description: string | undefined = reward?.type === RewardType.EQUIPMENT ? reward.description : undefined;

	function save() {
		let reward: Reward;
		switch (rewardType) {
			case RewardType.GEMS:
				reward = { type: rewardType, amount: amount as 100 | 150 | 200 | 250 };
				break;
			case RewardType.EQUIPMENT:
				reward = { type: rewardType, rarety: raretyType, kind: itemType, amount, description };
				break;
			case RewardType.CHEST:
				reward = { type: rewardType, kind: equipmentType, amount };
				break;
			case RewardType.RUNES:
				reward = { type: rewardType, kind: equipmentType, amount };
				break;
			case RewardType.KAMAS:
			case RewardType.WAKFU:
				reward = { type: rewardType, amount };
				break;
		}
		onsave(reward);
	}
</script>

<section>
	<ComboBox title={$_(t.REWARD_LABEL_TYPE)} values={enumKeys(RewardType)} bind:value={rewardType} />
	{#if rewardType === RewardType.EQUIPMENT}
		<ComboBox title={$_(t.REWARD_LABEL_RARETY)} values={Object.keys(RaretyType)} bind:value={raretyType} />
		<ComboBox title={$_(t.REWARD_LABEL_ITEM_TYPE)} values={Object.keys(ItemType)} bind:value={itemType} />
	{:else if rewardType === RewardType.CHEST || rewardType === RewardType.RUNES}
		<ComboBox
			title={$_(t.REWARD_LABEL_EQUIPMENT_TYPE)}
			values={Object.keys(EquipmentType)}
			bind:value={equipmentType}
		/>
	{/if}

	<Field title={$_(t.REWARD_LABEL_AMOUNT)}>
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
</style>
