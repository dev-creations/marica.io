import type { Meta, StoryObj } from "@storybook/react";
import { EvenFlow } from "../layouts";

type Story = StoryObj<typeof EvenFlow>;

const meta: Meta<typeof EvenFlow> = {
  title: "Layouts/EvenFlow",
  component: EvenFlow,
  argTypes: {},
};

export default meta;

export const Primary: Story = {
  args: {
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </>
    ),
  },
};
