import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const chipVariants = cva(
  "mio-inline-flex mio-items-center mio-rounded-full mio-border mio-border-slate-200 mio-px-2.5 mio-py-0.5 mio-text-xs mio-font-semibold mio-transition-colors focus:mio-outline-none focus:mio-ring-2 focus:mio-ring-slate-950 focus:mio-ring-offset-2 dark:mio-border-slate-800 dark:focus:mio-ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "mio-border-transparent mio-bg-slate-900 mio-text-slate-50 hover:mio-bg-slate-900/80 dark:mio-bg-slate-50 dark:mio-text-slate-900 dark:hover:mio-bg-slate-50/80",
        secondary:
          "mio-border-transparent mio-bg-slate-100 mio-text-slate-900 hover:mio-bg-slate-100/80 dark:mio-bg-slate-800 dark:mio-text-slate-50 dark:hover:mio-bg-slate-800/80",
        destructive:
          "mio-border-transparent mio-bg-red-500 mio-text-slate-50 hover:mio-bg-red-500/80 dark:mio-bg-red-900 dark:mio-text-slate-50 dark:hover:mio-bg-red-900/80",
        outline: "mio-text-slate-950 dark:mio-text-slate-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

function Chip({ className, variant, ...props }: ChipProps) {
  return (
    <div className={cn(chipVariants({ variant }), className)} {...props} />
  );
}

export { Chip, chipVariants };
