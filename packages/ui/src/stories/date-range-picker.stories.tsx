import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "../date-range-picker";

type Story = StoryObj<typeof DateRangePicker>;

const meta: Meta<typeof DateRangePicker> = {
  title: "Form/DateRangePicker",
  component: DateRangePicker,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  args: {
    range: {
      from: new Date(),
      to: new Date(Date.now() + 48 * 60 * 60 * 1000),
    },
  },
};
