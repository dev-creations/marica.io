import type { HTMLAttributes, PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

interface EvenFlowProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export default function EvenFlow({
  className,
  asChild,
  ...props
}: PropsWithChildren<EvenFlowProps>) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...props}
      className={cn(
        "flex justify-between items-center [&>*]:basis-0 [&>*]:w-0",
        className
      )}
    />
  );
}
