import { action } from '@storybook/addon-actions';
import NuiButton from '../index';

export default {
  title: 'NuiButton',
  component: NuiButton,
};

export const Text = () => ({
  Component: NuiButton,
  props: { name: 'World', buttonText: 'Hello Button' },
  on: { click: action('clicked') },
  template: `
    <NuiButton>Loooool</NuiButton>
  `
});

export const Emoji = () => ({
  Component: NuiButton,
  props: { name: '😀 😎', buttonText: '👍 💯' },
  on: { click: action('clicked') },
});
