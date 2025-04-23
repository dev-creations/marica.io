import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

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
  args: {
    children: "Hello",
  },
};

export const Destructive: Story = {
  args: {
    children: "Hello",
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    children: "Hello",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Hello",
    variant: "link",
  },
};

export const Outline: Story = {
  args: {
    children: "Hello",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Hello",
    variant: "secondary",
  },
};
