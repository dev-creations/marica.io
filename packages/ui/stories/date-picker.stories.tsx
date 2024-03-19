import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../src/date-picker";

type Story = StoryObj<typeof DatePicker>;

const meta: Meta<typeof DatePicker> = {
  title: "Form/DatePicker",
  component: DatePicker,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  args: {
    value: new Date(),
  },
};
