"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import type { DateRange, SelectRangeEventHandler } from "react-day-picker";
import type { HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

interface DateRangePickerProps {
  range?: DateRange;
  onSelect: SelectRangeEventHandler;
}

export function DateRangePicker({
  className,
  range,
  onSelect,
}: DateRangePickerProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !range && "text-muted-foreground"
            )}
            id="date"
            variant="outline"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "LLL dd, y")} -{" "}
                  {format(range.to, "LLL dd, y")}
                </>
              ) : (
                format(range.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-auto bg-white p-0 dark:border-slate-950 dark:bg-slate-950"
        >
          <Calendar
            defaultMonth={range?.from || new Date()}
            initialFocus
            mode="range"
            numberOfMonths={2}
            onSelect={onSelect}
            selected={range}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
