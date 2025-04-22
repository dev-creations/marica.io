import type { Meta, StoryObj } from "@storybook/react";
import { DraggableItem, DropZone, DnDProvider } from "../dnd";

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
      <DropZone onItemDropped={console.log}>
        <ul>
          <DraggableItem>
            <li>1</li>
          </DraggableItem>
          <DraggableItem data={{ foo: "bar" }}>
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

export const DifferentDropzone: Story = {
  name: "With different Dropzone",
  args: {
    children: (
      <>
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

        <DropZone>
          <ul
            style={{
              width: 96,
              height: 96,
              background: "red",
            }}
          >
            <li>Drop here</li>
          </ul>
        </DropZone>
      </>
    ),
  },
};
