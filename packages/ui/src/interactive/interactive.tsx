import { type PropsWithChildren } from "react";
import { cn } from "../lib/utils";

export type InteractiveProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Interactive({
  children,
  className,
  ...props
}: PropsWithChildren<InteractiveProps>) {
  return (
    <button
      type="button"
      className={cn("mio:cursor-pointer mio:bg-white mio:text-base", className)}
      {...props}
    >
      {children}
    </button>
  );
}
