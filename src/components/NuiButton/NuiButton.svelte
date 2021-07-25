<script>
  export let namespace = 'nui-button';
  export let classes;
  export let href, target, rel;
  export let disabled, busy;
  export let 
    // Structure
    height,
    width,
    padding,
    borderWidth,
    borderStyle,
    gap,
    // Typography
    fontSize,
    //Skin
    background,
    backgroundHover,
    color,
    colorHover,
    borderColor,
    borderColorHover;

  let componentClasses = `${namespace} ${classes ? classes : ''}`

	const style = `
    ${height ? `--height: ${height};` : ''}
    ${width ? `--width: ${width};` : ''}
    ${padding ? `--padding: ${padding};` : ''}
    ${borderWidth ? `--borderWidth: ${borderWidth};` : ''}
    ${borderStyle ? `--borderStyle: ${borderStyle};` : ''}
    ${gap ? `--gap: ${gap};` : ''}
    ${fontSize ? `--fontSize: ${fontSize};` : ''}
    ${background ? `--background: ${background};` : ''}
    ${backgroundHover ? `--backgroundHover: ${backgroundHover};` : ''}
    ${color ? `--color: ${color};` : ''}
    ${colorHover ? `--colorHover: ${colorHover};` : ''}
    ${borderColor ? `--borderColor: ${borderColor};` : ''}
    ${borderColorHover ? `--borderColorHover: ${borderColorHover};` : ''}
  `;
</script>

{#if !href}
	<button
    class="{componentClasses}"
    {disabled}
    {busy}
    {style}
    on:click
  >
  <div class="{namespace}__icon {namespace}__icon--left">
    <slot name="iconLeft"></slot>
  </div>
  <slot />
  <slot name="busy-text" />
  <div class="{namespace}__icon {namespace}__icon--right">
    <slot name="iconRight"></slot>
  </div>
</button>
{:else}
  <a
    {href}
    {target}
    {rel}
    class="{componentClasses}"
    {disabled}
    {busy}
    {style}
    on:click
  >
    <div class="{namespace}__icon {namespace}__icon--left">
      <slot name="iconLeft"></slot>
    </div>
    <slot />
    <slot name="busy-text" />
    <div class="{namespace}__icon {namespace}__icon--right">
      <slot name="iconRight"></slot>
    </div>
  </a>
{/if}
