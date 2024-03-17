import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";
import { Interactive, type InteractiveProps } from "../interactive";

export interface ButtonProps extends InteractiveProps {}

export function Button({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <Interactive
      className={cn(
        "bg-gray-800 px-4 py-1 text-white disabled:bg-gray-200 disabled:text-black",
        className
      )}
      {...props}
    >
      {children}
    </Interactive>
  );
}
