import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";

type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: "Form/Switch",
  component: Switch,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  args: {},
};
