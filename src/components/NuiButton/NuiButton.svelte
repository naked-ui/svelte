<script>
	export let href, background, backgroundHover;

	const style = `
    --background: ${background};
    --background-hover: ${backgroundHover};
  `;
</script>

{#if !href}
	<button {style}><slot>Button text</slot></button>
{:else}
	<a {href} {style}><slot>Button text</slot></a>
{/if}

<style>
	button,
	a {
		background: var(--background);
		appearance: none;
		text-decoration: none;
		color: var(--color, #fff);
		transition: var(--transition-1);
	}
</style>
