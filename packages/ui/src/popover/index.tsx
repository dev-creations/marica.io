"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      {...props}
      className={cn(
        "mio-bg-popover mio-text-popover-foreground data-[state=open]:mio-animate-in data-[state=closed]:mio-animate-out data-[state=closed]:mio-fade-out-0 data-[state=open]:mio-fade-in-0 data-[state=closed]:mio-zoom-out-95 data-[state=open]:mio-zoom-in-95 data-[side=bottom]:mio-slide-in-from-top-2 data-[side=left]:mio-slide-in-from-right-2 data-[side=right]:mio-slide-in-from-left-2 data-[side=top]:mio-slide-in-from-bottom-2 mio-z-50 mio-w-72 mio-rounded-md mio-border mio-p-4 mio-shadow-md mio-outline-none",
        className
      )}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
