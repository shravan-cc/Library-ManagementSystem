import type { Meta, StoryObj } from "@storybook/react";
import { RegistrationActions } from "./RegistrationActions";

const meta: Meta<typeof RegistrationActions> = {
  title: "App/RegistrationActions",
  component: RegistrationActions,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const NormalButton: Story = {
  args: {
    registerButtonLabel: "Register",
    accountPrompt: "Already have an account?",
  },
};
