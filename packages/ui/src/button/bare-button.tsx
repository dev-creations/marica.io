import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

export interface BareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function BareButton({
  children,
  className,
  ...props
}: PropsWithChildren<BareButtonProps>) {
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
