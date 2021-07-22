import NuiButton from '../index';

export default {
  title: 'NuiButton',
  component: NuiButton,
  argTypes: {
    href: {
      control: 'text'
    },
    background: {
      control: 'color'
    }
  }
};

const DefaultTemplate = (args, { argTypes }) => ({
  components: { NuiButton },
  props: Object.keys(argTypes),
  template: `
    <NuiButton>
      Lalalal
    </NuiButton>
  `,
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  href: 'https://naked-ui.org',
  background: '#333',
  // color: '#fff',
  // padding: '12px',
  // height: '48px'
}