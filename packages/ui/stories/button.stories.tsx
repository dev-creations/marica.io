import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

export const Primary: Story = {
  name: "Button",
  args: {
    children: "Hello",
  },
};
