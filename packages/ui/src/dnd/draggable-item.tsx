import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { useDnD } from "./dnd-provider";

export interface DraggableItemProps extends HTMLAttributes<HTMLElement> {}

export const DraggableItem = (props: PropsWithChildren<DraggableItemProps>) => {
  const { setDragging } = useDnD();

  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    e.stopPropagation();
    setDragging(false);
    console.log((e.target as HTMLElement).getBoundingClientRect());
  };

  return (
    <Slot
      {...props}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  );
};
