import type { Meta, StoryObj } from "@storybook/react";
import { InputElement } from "./InputElement";

const meta: Meta<typeof InputElement> = {
  title: "App/InputElement",
  component: InputElement,
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
    type: "text",
    label: "Email",
    placeholder: "Enter your email here",
  },
};
