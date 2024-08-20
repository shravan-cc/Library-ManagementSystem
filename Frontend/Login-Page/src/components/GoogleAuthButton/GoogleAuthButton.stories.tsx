import type { Meta, StoryObj } from "@storybook/react";
import { GoogleAuthButton } from "./GoogleAuthButton";

const meta: Meta<typeof GoogleAuthButton> = {
  title: "App/GoogleLogin",
  component: GoogleAuthButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const LoginForGoogle: Story = {
  args: {
    buttonLabel: "Sign up with google",
  },
};
