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

  import { cssVar } from '../../utils/cssVar.js';

	const styleVariables =[
    cssVar('height', height),
    cssVar('width', width),
    cssVar('padding', padding),
    cssVar('borderWidth', borderWidth),
    cssVar('borderStyle', borderStyle),
    cssVar('borderStyle', borderRadius),
    cssVar('gap', gap),
    cssVar('fontSize', fontSize),
    cssVar('background', background),
    cssVar('backgroundHover', backgroundHover),
    cssVar('color', color),
    cssVar('colorHover', colorHover),
    cssVar('borderColor', borderColor),
    cssVar('borderColorHover', borderColorHover)
  ];

  const style = styleVariables.join(' ');
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

<style lang="scss">
@import 'sxcss';

.nui-button {
  @include flex($place: center);
  appearance: none;
  cursor: pointer;
  padding: var(--padding);
  height: var(--height);
  width: var(--width);
  font-size: var(--fontSize, 16px);
  border: var(--borderWidth) var(--borderStyle, solid) var(--borderColor, var(--color));
  border-radius: var(--borderRadius);

  /** CONTENT **/

  /// Text & icons color

  &__text,
  &__icon {
    @include flex($place: center);
    svg {
      fill: var(--color) !important;
    }
  }

  /// Icons

  &__icon {
    &--left {
      margin-right: var(--gap);
    }
    &--right {
      margin-left: var(--gap);
    }
  }

  /** STATES **/

  &:not([disabled='disabled']),
  &[busy='true'] {
    background: var(--background);
    border-color: var(--borderColor);
    color: var(--color);


    &:hover {
      background: var(--backgroundHover, var(--background));
      color: var(--colorHover, var(--color));
      border-color: var(--borderColorHover, var(--borderColor));
    }
  }

  &[disabled='disabled'] {
    cursor: not-allowed;
  }
}
</style>
