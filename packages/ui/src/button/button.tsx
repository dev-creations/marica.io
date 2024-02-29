import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";
import { BareButton, type BareButtonProps } from "./bare-button";

export interface ButtonProps extends BareButtonProps {}

export function Button({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <BareButton
      className={cn("bg-blue-900 px-4 py-1 text-white", className)}
      {...props}
    >
      {children}
    </BareButton>
  );
}
