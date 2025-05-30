import type { HTMLAttributes, PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

interface EvenFlowProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export function EvenFlow({
  className,
  asChild,
  ...props
}: PropsWithChildren<EvenFlowProps>) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...props}
      className={cn(
        "mio:flex mio:items-center mio:justify-between mio:*:flex-1",
        className
      )}
    />
  );
}
