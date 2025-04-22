import type { Meta, StoryObj } from "@storybook/react";
import { RichText } from "../rich-text";

type Story = StoryObj<typeof RichText>;

const meta: Meta<typeof RichText> = {
  title: "Form/RichText",
  component: RichText,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  args: {},
};
