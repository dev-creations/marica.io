"use client";

import { type ComponentPropsWithoutRef, type ElementRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

function PopoverContent({
  ref,
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
  ref?: React.RefObject<ElementRef<typeof PopoverPrimitive.Content>>;
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        {...props}
        className={cn(
          "mio:bg-popover mio:text-popover-foreground mio:data-[state=open]:animate-in mio:data-[state=closed]:animate-out mio:data-[state=closed]:fade-out-0 mio:data-[state=open]:fade-in-0 mio:data-[state=closed]:zoom-out-95 mio:data-[state=open]:zoom-in-95 mio:data-[side=bottom]:slide-in-from-top-2 mio:data-[side=left]:slide-in-from-right-2 mio:data-[side=right]:slide-in-from-left-2 mio:data-[side=top]:slide-in-from-bottom-2 mio:z-50 mio:w-72 mio:rounded-md mio:border mio:p-4 mio:shadow-md mio:outline-hidden",
          className
        )}
      />
    </PopoverPrimitive.Portal>
  );
}
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
