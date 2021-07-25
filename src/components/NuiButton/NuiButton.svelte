<script>
  import cssVar from '../../utils/cssVar.js';

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

	const style =[
    cssVar('height', height),
    cssVar('width', width),
    cssVar('padding', padding),
    cssVar('borderWidth', borderWidth),
    cssVar('borderStyle', borderStyle),
    cssVar('gap', gap),
    cssVar('fontSize', fontSize),
    cssVar('background', background),
    cssVar('backgroundHover', backgroundHover),
    cssVar('color', color),
    cssVar('colorHover', colorHover),
    cssVar('borderColor', borderColor),
    cssVar('borderColorHover', borderColorHover)
  ];
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
