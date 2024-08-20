import type { Meta, StoryObj } from '@storybook/react';

import { SignUpPage } from './SignUpPage';

const meta: Meta<typeof SignUpPage> = {
  title: 'App/SignUpPage',
  component: SignUpPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  
} 
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};