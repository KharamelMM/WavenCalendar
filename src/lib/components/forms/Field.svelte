<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section>
	{#if title}
		<span>{title}:</span>
	{/if}
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
	}
</style>
