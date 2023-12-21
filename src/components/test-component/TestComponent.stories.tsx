
import type { Meta, StoryObj } from '@storybook/react';
import TestComponent from './TestComponent';

const meta = {
    title: 'Example/Test Component',
    component: TestComponent,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof TestComponent>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    args: {}
  };
  
  export const LoggedOut: Story = {};
