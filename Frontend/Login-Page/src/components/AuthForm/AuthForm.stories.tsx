import type { Meta, StoryObj } from "@storybook/react";
import { AuthForm } from "./AuthForm";

const meta: Meta<typeof AuthForm> = {
  title: "App/AuthForm",
  component: AuthForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
