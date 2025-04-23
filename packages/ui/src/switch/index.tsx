"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../lib/utils";

function Switch({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
  ref?: React.RefObject<React.ElementRef<typeof SwitchPrimitives.Root>>;
}) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "mio:peer mio:inline-flex mio:h-6 mio:w-11 mio:shrink-0 mio:cursor-pointer mio:items-center mio:rounded-full mio:border-2 mio:border-transparent mio:transition-colors mio:focus-visible:outline-hidden mio:focus-visible:ring-2 mio:focus-visible:ring-slate-950 mio:focus-visible:ring-offset-2 mio:focus-visible:ring-offset-white mio:disabled:cursor-not-allowed mio:disabled:opacity-50 mio:data-[state=checked]:bg-slate-900 mio:data-[state=unchecked]:bg-slate-200",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "mio:pointer-events-none mio:block mio:h-5 mio:w-5 mio:rounded-full mio:bg-white mio:shadow-lg mio:ring-0 mio:transition-transform mio:data-[state=checked]:translate-x-5 mio:data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  );
}
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
