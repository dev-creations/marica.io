import {
  type PropsWithChildren,
  type InputHTMLAttributes,
  Children,
  type ElementRef,
} from "react";
import { cn } from "../lib/utils";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

function InputText({
  ref,
  className,
  children,
  ...props
}: PropsWithChildren<InputTextProps> & {
  ref?: React.RefObject<ElementRef<"input">>;
}) {
  const childArray = Children.toArray(children);
  return (
    <label className="mio:flex mio:cursor-text mio:items-center mio:gap-2 mio:rounded-lg mio:border mio:border-gray-300 mio:bg-white mio:p-2 mio:text-black mio:shadow-sm mio:ring-offset-2 mio:focus-within:ring-2 mio:*:leading-6">
      {childArray.length > 1 && childArray[0]}
      <input
        ref={ref}
        {...props}
        className={cn(
          "mio:flex-1 mio:border-0 mio:bg-transparent mio:focus:outline-0",
          className
        )}
      />
      {childArray.length > 1 ? childArray[1] : childArray[0]}
    </label>
  );
}

InputText.displayName = "InputText";

export { InputText };
