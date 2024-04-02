import type { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "lucide-react";
import { InputText, type InputTextProps } from "../src/input-text";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src";

type Story = StoryObj<typeof InputText>;

const meta: Meta<typeof InputText> = {
  title: "Form/InputText",
  component: InputText,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    children: <SearchIcon className="h-4" />,
    placeholder: "Lorem ipsum dolor sit amet",
  },
};

export const WithIcon: Story = {
  args: {
    children: <SearchIcon className="h-4" />,
  },
};

export const WithIconLeft: Story = {
  args: {
    className: "order-2",
    children: <SearchIcon className="h-4" />,
  },
};

export const WithMultipleChildren: Story = {
  render: function Render(args: InputTextProps) {
    return (
      <InputText {...args}>
        <SearchIcon className="h-4" />
        <Select>
          <SelectTrigger className="w-fit gap-2">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </InputText>
    );
  },
};
