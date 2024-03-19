import type { PropsWithChildren, InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

export function InputText({
  className,
  children,
  ...props
}: PropsWithChildren<InputTextProps>) {
  return (
    <label className="flex cursor-text items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-black shadow-sm ring-offset-2 focus-within:ring-2 dark:border-slate-950 dark:bg-slate-950 dark:text-slate-100 [&>*]:leading-6">
      <input
        {...props}
        className={cn(
          "flex-1 border-0 bg-transparent focus:outline-0",
          className
        )}
      />
      {children}
    </label>
  );
}
