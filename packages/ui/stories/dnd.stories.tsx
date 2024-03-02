import type { Meta, StoryObj } from "@storybook/react";
import { DraggableItem, DropZone, useDnD, DnDProvider } from "../src/dnd";

type Story = StoryObj<typeof DraggableItem>;

const meta: Meta<typeof DraggableItem> = {
  title: "Interactive/Drag n Drop",
  component: DraggableItem,
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <DnDProvider>
          <Story />
        </DnDProvider>
      );
    },
  ],
};

export default meta;

export const Primary: Story = {
  name: "Simple DnD",
  args: {
    children: (
      <DropZone>
        <ul>
          <DraggableItem>
            <li>1</li>
          </DraggableItem>
          <DraggableItem>
            <li>2</li>
          </DraggableItem>
          <DraggableItem>
            <li>3</li>
          </DraggableItem>
        </ul>
      </DropZone>
    ),
  },
};
