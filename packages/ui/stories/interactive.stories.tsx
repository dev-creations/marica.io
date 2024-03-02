import type { Meta, StoryObj } from "@storybook/react";
import { Interactive } from "../src/interactive";

type Story = StoryObj<typeof Interactive>;

const meta: Meta<typeof Interactive> = {
  title: "Primitives/Interactive",
  component: Interactive,
  argTypes: {
    type: {},
  },
};

export default meta;

export const Primary: Story = {
  name: "Interactive",
  args: {
    children: "Hello",
  },
};
