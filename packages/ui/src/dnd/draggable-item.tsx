import { Slot } from "@radix-ui/react-slot";
import {
  useRef,
  type HTMLAttributes,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useDnD } from "./dnd-provider";

export interface DraggableItemProps<T> extends HTMLAttributes<HTMLElement> {
  data?: T;
}

export function DraggableItem<T>(
  props: PropsWithChildren<DraggableItemProps<T>>
) {
  const { setDragging, dragging, dropIndicator, setDropIndicator, setData } =
    useDnD();
  const draggableItemRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (draggableItemRef.current) {
      const i = Array.from(
        draggableItemRef.current.parentElement?.children || []
      ).findIndex((e) => e === draggableItemRef.current);
      setIndex(i);
    }
  }, [draggableItemRef]);

  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.stopPropagation();
    setData(props.data || null);
    setDragging(index);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    e.stopPropagation();
    setDropIndicator(undefined);
    setData(null);
    setDragging(-1);
  };

  const displayIndicator = dragging !== index && dropIndicator?.index === index;

  return (
    <>
      {displayIndicator && dropIndicator.position === "before" ? (
        <div>here</div>
      ) : null}
      <Slot
        {...props}
        ref={draggableItemRef}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
      {displayIndicator && dropIndicator.position === "after" ? (
        <div>here</div>
      ) : null}
    </>
  );
}
