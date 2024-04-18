"use client";

import { ChevronsUpDown } from "lucide-react";
import { forwardRef, type ForwardedRef } from "react";
import { cn } from "../lib/utils";
import { Button } from "../button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandItem,
} from "../command";
import { FormControl } from "../form";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

interface ComboboxProps<T extends { key: string; label: string }> {
  items: T[];
  multiselect?: boolean;
  onChange?: (...event: any[]) => void;
  value?: T[];
}

function InnerCombobox<T extends { key: string; label: string }>(
  { items, onChange, value, multiselect }: ComboboxProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const selectedItems = items.filter((i) =>
    value?.find((e) => e.key === i.key)
  );

  if (!multiselect && selectedItems.length > 1) {
    throw new Error(
      "Combobox: Only one item is allowed as value when mulitselect is false"
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "mio-w-[200px] mio-justify-between",
              selectedItems.length === 0 && "mio-text-slate-400"
            )}
          >
            {selectedItems.length > 0
              ? selectedItems.map((i) => i.label).join(", ")
              : "Select item"}
            <ChevronsUpDown className="mio-ml-2 mio-h-4 mio-w-4 mio-shrink-0 mio-opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="mio-w-[200px] mio-p-0 mio-bg-white">
        <Command ref={ref}>
          <CommandInput placeholder="Search items..." />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandList>
            {items.map((c) => (
              <CommandItem
                key={c.key}
                value={c.key}
                onSelect={(e) => {
                  if (selectedItems.find((i) => i.key === e)) {
                    onChange?.(selectedItems.filter((i) => i.key !== e));
                    return;
                  }

                  const values = [items.find((i) => i.key === e)];
                  if (multiselect) {
                    values.push(...selectedItems);
                  }

                  onChange?.(values);
                }}
              >
                {c.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const Combobox = forwardRef(InnerCombobox) as <
  T extends { key: string; label: string },
>(
  props: ComboboxProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => ReturnType<typeof InnerCombobox>;

export { Combobox, type ComboboxProps };
