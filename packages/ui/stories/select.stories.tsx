import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/select";

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  name: "Select",
  args: {
    children: (
      <>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </>
    ),
  },
};
