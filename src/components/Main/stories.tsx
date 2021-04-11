import { Story, Meta } from '@storybook/react/types-6-0';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'test title default',
    description: 'test description default'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

// Basic.args = {
//   title: 'test title',
//   description: 'test description'
// };
