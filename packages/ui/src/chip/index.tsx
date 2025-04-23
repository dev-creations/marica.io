import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const chipVariants = cva(
  "mio:inline-flex mio:items-center mio:rounded-full mio:border mio:border-slate-200 mio:px-2.5 mio:py-0.5 mio:text-xs mio:font-semibold mio:transition-colors mio:focus:outline-hidden mio:focus:ring-2 mio:focus:ring-slate-950 mio:focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "mio:border-transparent mio:bg-slate-900 mio:text-slate-50 mio:hover:bg-slate-900/80",
        secondary:
          "mio:border-transparent mio:bg-slate-100 mio:text-slate-900 mio:hover:bg-slate-100/80",
        destructive:
          "mio:border-transparent mio:bg-red-500 mio:text-slate-50 mio:hover:bg-red-500/80",
        outline: "mio:text-slate-950",
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
