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
	@import 'sxcss';
	button,
	a {
		/* padding: space(4) space(6); */
		background: var(--background);
		appearance: none;
		text-decoration: none;
		color: var(--color, #fff);
		transition: var(--transition-1);
		/* border-radius: space(12); */
		/* @include font(17px, 500); */

		/* &:hover {
			@media (min-width: 768px) {
				background: var(--background-hover, var(--background));
				transform: translate(0, space(-1));
			}
		} */
	}
</style>
