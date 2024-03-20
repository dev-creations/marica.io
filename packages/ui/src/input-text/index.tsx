import type { PropsWithChildren, InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

export function InputText({
  className,
  children,
  ...props
}: PropsWithChildren<InputTextProps>) {
  return (
    <label className="mio-flex mio-cursor-text mio-items-center mio-gap-2 mio-rounded-lg mio-border mio-border-gray-300 mio-bg-white mio-p-2 mio-text-black mio-shadow-sm mio-ring-offset-2 focus-within:mio-ring-2 dark:mio-border-slate-950 dark:mio-bg-slate-950 dark:mio-text-slate-100 [&>*]:mio-leading-6">
      <input
        {...props}
        className={cn(
          "mio-flex-1 mio-border-0 mio-bg-transparent focus:mio-outline-0",
          className
        )}
      />
      {children}
    </label>
  );
}
