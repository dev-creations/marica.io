import type { PropsWithChildren, InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

export function InputText({
  className,
  children,
  ...props
}: PropsWithChildren<InputTextProps>) {
  return (
    <label className="flex cursor-text items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-black shadow-sm ring-offset-2 focus-within:ring-2 [&>*]:leading-6">
      <input
        {...props}
        className={cn("flex-1 border-0 focus:outline-0", className)}
      />
      {children}
    </label>
  );
}
