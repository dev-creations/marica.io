import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "mio-inline-flex mio-items-center mio-justify-center mio-whitespace-nowrap mio-rounded-md mio-text-sm mio-font-medium mio-ring-offset-white mio-transition-colors mio-focus-visible:outline-none focus-visible:mio-ring-2 focus-visible:mio-ring-slate-950 focus-visible:mio-ring-offset-2 disabled:mio-pointer-events-none disabled:mio-opacity-50 dark:mio-ring-offset-slate-950 dark:focus-visible:mio-ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "mio-bg-slate-900 mio-text-slate-50 hover:mio-bg-slate-900/90 dark:mio-bg-slate-50 dark:mio-text-slate-900 dark:hover:mio-bg-slate-50/90",
        destructive:
          "mio-bg-red-500 mio-text-slate-50 hover:mio-bg-red-500/90 dark:mio-bg-red-900 dark:mio-text-slate-50 dark:hover:mio-bg-red-900/90",
        outline:
          "mio-border mio-border-slate-200 mio-bg-white hover:mio-bg-slate-100 hover:mio-text-slate-900 dark:mio-border-slate-800 dark:mio-bg-slate-950 dark:hover:mio-bg-slate-800 dark:mio-text-slate-100 dark:hover:mio-text-slate-50",
        secondary:
          "mio-bg-slate-100 mio-text-slate-900 hover:mio-bg-slate-100/80 dark:mio-bg-slate-800 dark:mio-text-slate-50 dark:hover:mio-bg-slate-800/80",
        ghost:
          "hover:mio-bg-slate-100 hover:mio-text-slate-900 dark:hover:mio-bg-slate-800 dark:hover:mio-text-slate-50 dark:mio-text-slate-100",
        link: "mio-text-slate-900 mio-underline-offset-4 hover:mio-underline dark:mio-text-slate-50",
      },
      size: {
        default: "mio-h-10 mio-px-4 mio-py-2",
        sm: "mio-h-9 mio-rounded-md mio-px-3",
        lg: "mio-h-11 mio-rounded-md mio-px-8",
        icon: "mio-h-10 mio-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
