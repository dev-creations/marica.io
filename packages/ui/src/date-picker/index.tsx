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
            "w-[280px] justify-start text-left font-normal",
            !value && "text-slate-700 dark:bg-slate-950 dark:text-slate-100"
          )}
          variant="outline"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white p-0 dark:border-slate-950 dark:bg-slate-950">
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
