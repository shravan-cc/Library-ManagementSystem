import type { Meta, StoryObj } from "@storybook/react";
import { UserDetailsForm } from "./UserDetailsForm";

const meta: Meta<typeof UserDetailsForm> = {
  title: "App/UserDetailsForm",
  component: UserDetailsForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {},
};
