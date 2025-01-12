<script lang="ts">
	import type { Reward } from '$lib/types/Reward';

	import EQUIPMENT_COMMON from '$lib/ressources/equipment_common.png';
	import EQUIPMENT_RARE from '$lib/ressources/equipment_rare.png';
	import EQUIPMENT_KROSMIC from '$lib/ressources/equipment_krosmic.png';
	import EQUIPMENT_INFINITE from '$lib/ressources/equipment_infinite.png';
	import COMPANION_COMMON from '$lib/ressources/companion_common.png';
	import COMPANION_RARE from '$lib/ressources/companion_rare.png';
	import COMPANION_KROSMIC from '$lib/ressources/companion_krosmic.png';
	import COMPANION_INFINITE from '$lib/ressources/companion_infinite.png';

	import GEMS from '$lib/ressources/gems.png';
	import WAKFU from '$lib/ressources/wakfu.png';
	import KAMA from '$lib/ressources/kama.png';

	import SPELL_RUNE from '$lib/ressources/spell_rune.png';
	import EQUIPMENT_RUNE from '$lib/ressources/equipment_rune.png';
	import COMPANION_RUNE from '$lib/ressources/companion_rune.png';

	import SPELL_CHEST from '$lib/ressources/spell_chest.png';
	import EQUIPMENT_CHEST from '$lib/ressources/equipment_chest.png';
	import COMPANION_CHEST from '$lib/ressources/companion_chest.png';

	import { RewardType } from '$lib/types/RewardType';
	import { RaretyType } from '$lib/types/RaretyType';
	import { EquipmentType } from '$lib/types/EquipmentType';
	import { format } from 'svelte-i18n';

	export let reward: Reward;
	let img = '';

	$: {
		switch (reward.type) {
			case RewardType.GEMS:
				img = GEMS;
				break;
			case RewardType.WAKFU:
				img = WAKFU;
				break;
			case RewardType.KAMAS:
				img = KAMA;
				break;
			case RewardType.RUNES:
				switch (reward.equipment) {
					case EquipmentType.SPELLS:
						img = SPELL_RUNE;
						break;
					case EquipmentType.EQUIPMENTS:
						img = EQUIPMENT_RUNE;
						break;
					case EquipmentType.COMPANIONS:
						img = COMPANION_RUNE;
						break;
				}
				break;
			case RewardType.EQUIPMENT:
				switch (reward.rarety) {
					case RaretyType.COMMON:
						img = EQUIPMENT_COMMON;
						break;
					case RaretyType.RARE:
						img = EQUIPMENT_RARE;
						break;
					case RaretyType.KROSMIC:
						img = EQUIPMENT_KROSMIC;
						break;
					case RaretyType.INFINITE:
						img = EQUIPMENT_INFINITE;
						break;
				}
				break;
			case RewardType.COMPANION:
				switch (reward.rarety) {
					case RaretyType.COMMON:
						img = COMPANION_COMMON;
						break;
					case RaretyType.RARE:
						img = COMPANION_RARE;
						break;
					case RaretyType.KROSMIC:
						img = COMPANION_KROSMIC;
						break;
					case RaretyType.INFINITE:
						img = COMPANION_INFINITE;
						break;
				}
				break;
			case RewardType.CHEST:
				switch (reward.equipment) {
					case EquipmentType.SPELLS:
						img = SPELL_CHEST;
						break;
					case EquipmentType.EQUIPMENTS:
						img = EQUIPMENT_CHEST;
						break;
					case EquipmentType.COMPANIONS:
						img = COMPANION_CHEST;
						break;
				}
		}
	}
</script>

<section>
	<img src={img} alt={reward.toString()} />
	<div class="quantity">
		x{reward.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}
	</div>
	{#if reward.type === RewardType.EQUIPMENT || reward.type === RewardType.COMPANION}
		<div class="unknown">?</div>
	{/if}
</section>

<style>
	section {
		width: 60%;
		height: auto;
		position: relative;
	}
	img {
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		object-fit: contain;
	}
	.quantity {
		position: absolute;
		bottom: -0.1em;
		left: 1.75em;
		color: white !important;
		font-size: 2em;
		font-weight: bolder;
		filter: drop-shadow(0 0 0.1em black);
		z-index: 1;
		font-family: Arial, Helvetica, sans-serif;
		text-shadow:
			1px 1px 1px #000,
			-1px 1px 1px #000,
			-1px -1px 1px #000,
			1px -1px 1px #000,
			1px 0 1px #000,
			-1px 0 1px #000,
			0 1px 1px #000,
			0 -1px 1px #000;
	}

	.unknown {
		position: absolute;
		width: 100%;
		top: 0.1em;
		left: 0;
		text-align: center;
		color: white !important;
		font-size: 4em;
		font-weight: bolder;
		filter: drop-shadow(0 0 0.1em black);
		opacity: 0.5;
		font-family: Arial, Helvetica, sans-serif;
		text-shadow:
			1px 1px 1px #000,
			-1px 1px 1px #000,
			-1px -1px 1px #000,
			1px -1px 1px #000,
			1px 0 1px #000,
			-1px 0 1px #000,
			0 1px 1px #000,
			0 -1px 1px #000;
	}
</style>
