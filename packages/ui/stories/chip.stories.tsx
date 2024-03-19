import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../src/chip";

type Story = StoryObj<typeof Chip>;

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};
