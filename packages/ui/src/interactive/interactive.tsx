import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

export interface InteractiveProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Interactive({
  children,
  className,
  ...props
}: PropsWithChildren<InteractiveProps>) {
  return (
    <button
      type="button"
      className={cn("cursor-pointer bg-white text-base", className)}
      {...props}
    >
      {children}
    </button>
  );
}
