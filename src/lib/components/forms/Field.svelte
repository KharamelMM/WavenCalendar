<script lang="ts">
	export let title: string | undefined = undefined;
	export let required = false;
</script>

<section>
	{#if title}
		<span
			>{title}:
			{#if required}
				<span class="required">*</span>
			{/if}</span
		>
	{/if}
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
	}
	.required {
		color: var(--alizarin);
	}
</style>
