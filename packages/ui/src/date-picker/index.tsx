"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { type SelectSingleEventHandler } from "react-day-picker";
import { cn } from "../lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

export function DatePicker({
  onSelect,
  value,
}: {
  value?: Date;
  onSelect: SelectSingleEventHandler;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "mio-w-[280px] mio-justify-start mio-text-left mio-font-normal",
            !value && "mio-text-slate-700"
          )}
          variant="outline"
        >
          <CalendarIcon className="mio-mr-2 mio-h-4 mio-w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mio-w-auto mio-bg-white mio-p-0">
        <Calendar
          initialFocus
          mode="single"
          onSelect={onSelect}
          selected={value}
        />
      </PopoverContent>
    </Popover>
  );
}
