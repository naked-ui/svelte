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

	const style =
    '--height:' + height + ';' +
    '--width:' + width + ';' +
    '--padding:' + padding + ';' +
    '--borderWidth:' + borderWidth + ';' +
    '--borderStyle:' + borderStyle + ';' +
    '--gap:' + gap + ';' +
    '--fontSize:' + fontSize + ';' +
    '--background:' + background + ';' +
    '--backgroundHover:' + backgroundHover + ';' +
    '--color:' + color + ';' +
    '--colorHover:' + colorHover + ';' +
    '--borderColor:' + borderColor + ';' +
    '--borderColorHover:' + borderColorHover + ';'
  ;
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
