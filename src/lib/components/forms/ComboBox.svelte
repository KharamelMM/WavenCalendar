<script lang="ts" generics="T extends string">
	import Field from './Field.svelte';
	import { _ } from 'svelte-i18n';

	export let title: string | undefined = undefined;

	export let values: T[] = [];
	export let value: T;
	export let required = false;
</script>

<Field {...{ title, required }}>
	<select bind:value>
		{#each values as v}
			<option value={v}>{$_(v)}</option>
		{/each}
	</select>
</Field>
