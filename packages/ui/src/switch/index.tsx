"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "mio-peer mio-inline-flex mio-h-6 mio-w-11 mio-shrink-0 mio-cursor-pointer mio-items-center mio-rounded-full mio-border-2 mio-border-transparent mio-transition-colors focus-visible:mio-outline-none focus-visible:mio-ring-2 focus-visible:mio-ring-slate-950 focus-visible:mio-ring-offset-2 focus-visible:mio-ring-offset-white disabled:mio-cursor-not-allowed disabled:mio-opacity-50 data-[state=checked]:mio-bg-slate-900 data-[state=unchecked]:mio-bg-slate-200",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "mio-pointer-events-none mio-block mio-h-5 mio-w-5 mio-rounded-full mio-bg-white mio-shadow-lg mio-ring-0 mio-transition-transform data-[state=checked]:mio-translate-x-5 data-[state=unchecked]:mio-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
