<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import NuiButton from '/src/components/NuiButton/NuiButton.svelte';

  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

<Meta title="Button" component={NuiButton}/>

<Template let:args>
  <NuiButton {...args} on:click={handleClick}>
    You clicked: {count}
  </NuiButton>
</Template>

<Story name="Rounded" args={{background: '#333'}}/>

<!-- Dynamic snippet should be disabled for this story -->
<Story name="Button No Args">
  <NuiButton>Label</NuiButton>
</Story>