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
    <div className={cn("mio:grid mio:gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "mio:w-[300px] mio:justify-start mio:text-left mio:font-normal",
              !range && "mio:text-muted-foreground"
            )}
            id="date"
            variant="outline"
          >
            <CalendarIcon className="mio:mr-2 mio:h-4 mio:w-4" />
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
          className="mio:w-auto mio:bg-white mio:p-0"
        >
          <Calendar
            defaultMonth={range?.from ?? new Date()}
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
