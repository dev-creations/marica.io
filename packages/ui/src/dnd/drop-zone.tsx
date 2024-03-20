import { Slot } from "@radix-ui/react-slot";
import {
  type HTMLAttributes,
  type PropsWithChildren,
  useCallback,
  useRef,
} from "react";
import { useDnD } from "./dnd-provider";

export interface DropZoneProps extends HTMLAttributes<HTMLElement> {
  onItemDropped?: ({
    droppedItemIndex,
    target,
  }: {
    droppedItemIndex: number;
    target:
      | { index: number; position: "before" | "after"; data?: object | null }
      | undefined;
  }) => void;
}

export function DropZone(props: PropsWithChildren<DropZoneProps>) {
  const dropZoneRef = useRef<HTMLElement>(null);
  const { setDropIndicator, dropIndicator, dragging, data } = useDnD();

  const calculateDropPosition = useCallback(
    ({
      nearestElement,
      mousePosition,
    }: {
      nearestElement: HTMLElement;
      mousePosition: number[];
    }) => {
      if (!dropZoneRef.current) {
        setDropIndicator(undefined);
        return;
      }

      const targetTop = nearestElement.getBoundingClientRect().top;
      const targetBottom = nearestElement.getBoundingClientRect().bottom;

      const yDelta = targetBottom - targetTop;
      const threshold = yDelta / 2;

      if (threshold > 0 && yDelta > 0 && nearestElement) {
        const position =
          targetBottom - mousePosition[1] > threshold ? "before" : "after";

        const index = Array.from(dropZoneRef.current.children).findIndex(
          (e) => e === nearestElement
        );

        setDropIndicator({ index, position });
      }
    },
    []
  );

  return (
    <Slot
      {...props}
      ref={dropZoneRef}
      onDrop={(e) => {
        e.preventDefault();
        if (dropIndicator && props.onItemDropped) {
          props.onItemDropped({
            droppedItemIndex: dragging,
            target: {
              index: dropIndicator.index,
              position: dropIndicator.position,
              data,
            },
          });
        }
        setDropIndicator(undefined);
      }}
      onDragOver={(e) => {
        e.preventDefault();

        const { dataTransfer } = e;
        dataTransfer.dropEffect = "move";

        const dropZone = dropZoneRef.current;

        if (!dropZone) {
          setDropIndicator(undefined);
          return;
        }

        const mousePosition = [e.clientX, e.clientY];
        const nearestElement = document.elementFromPoint(
          e.clientX,
          e.clientY
        ) as HTMLElement;

        calculateDropPosition({ mousePosition, nearestElement });
      }}
    />
  );
}
