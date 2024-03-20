"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    className={cn(
      "mio-peer mio-h-4 mio-w-4 mio-shrink-0 mio-rounded-sm mio-border mio-border-slate-900 mio-ring-offset-white hover:mio-border-slate-200 focus-visible:mio-outline-none focus-visible:mio-ring-2 focus-visible:mio-ring-slate-950 focus-visible:mio-ring-offset-2 disabled:mio-cursor-not-allowed disabled:mio-opacity-50 data-[state=checked]:mio-bg-slate-900 data-[state=checked]:mio-text-slate-50 dark:mio-border-slate-50 dark:mio-ring-offset-slate-950 dark:hover:mio-border-slate-800 dark:focus-visible:mio-ring-slate-300 dark:data-[state=checked]:mio-bg-slate-50 dark:data-[state=checked]:mio-text-slate-900",
      className
    )}
    ref={ref}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "mio-flex mio-items-center mio-justify-center mio-text-current"
      )}
    >
      <Check className="mio-size-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
