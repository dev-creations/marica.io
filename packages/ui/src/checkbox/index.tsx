"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

function Checkbox({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  ref?: React.RefObject<React.ElementRef<typeof CheckboxPrimitive.Root>>;
}) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "mio:peer mio:h-4 mio:w-4 mio:shrink-0 mio:rounded-sm mio:border mio:border-slate-900 mio:ring-offset-white mio:hover:border-slate-200 mio:focus-visible:outline-hidden mio:focus-visible:ring-2 mio:focus-visible:ring-slate-950 mio:focus-visible:ring-offset-2 mio:disabled:cursor-not-allowed mio:disabled:opacity-50 mio:data-[state=checked]:bg-slate-900 mio:data-[state=checked]:text-slate-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "mio:flex mio:items-center mio:justify-center mio:text-current"
        )}
      >
        <Check className="mio:size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
