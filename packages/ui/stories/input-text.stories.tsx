import type { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "lucide-react";
import { InputText } from "../src/input-text";

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

export const WithIcon: Story = {
  args: {
    children: <SearchIcon className="h-4" />,
  },
};
