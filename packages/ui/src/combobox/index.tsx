"use client";

import { ChevronsUpDown } from "lucide-react";
import { type ElementRef, forwardRef } from "react";
import { type Command as CommandPrimitive } from "cmdk";
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

const Combobox = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  {
    items: { key: string; label: string }[];
    onChange: (...event: any[]) => void;
    value: string;
  }
>(({ items, onChange, value }, ref) => {
  const selectedItem = items.find((i) => i.key === value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "mio-w-[200px] mio-justify-between",
              !selectedItem && "mio-text-slate-400"
            )}
          >
            {selectedItem ? selectedItem.label : "Select item"}
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
              <CommandItem key={c.key} value={c.key} onSelect={onChange}>
                {c.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

Combobox.displayName = "Combobox";

export { Combobox };
