import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../src/checkbox";

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  args: {},
};
