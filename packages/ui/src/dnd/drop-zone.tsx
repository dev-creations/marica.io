import { Slot } from "@radix-ui/react-slot";
import { HTMLAttributes, PropsWithChildren } from "react";

export interface DropZoneProps extends HTMLAttributes<HTMLElement> {}

export const DropZone = (props: PropsWithChildren<DropZoneProps>) => {
  return (
    <Slot
      {...props}
      onDrop={(e) => {
        e.preventDefault();
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    />
  );
};
