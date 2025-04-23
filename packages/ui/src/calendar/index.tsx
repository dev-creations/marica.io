"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "../lib/utils";
import { buttonVariants } from "../button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function PreviousMonthButton() {
  return <ChevronLeft className="mio:h-4 mio:w-4" />;
}

function NextMonthButton() {
  return <ChevronRight className="mio:h-4 mio:w-4" />;
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cn("mio:p-3", className)}
      classNames={{
        months:
          "mio:flex mio:flex-col mio:sm:flex-row mio:space-y-4 mio:sm:space-x-4 mio:sm:space-y-0",
        month: "mio:space-y-4",
        caption:
          "mio:flex mio:justify-center mio:pt-1 mio:relative mio:items-center",
        caption_label: "mio:text-sm mio:font-medium",
        nav: "mio:space-x-1 mio:flex mio:items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "mio:h-7 mio:w-7 mio:bg-transparent mio:p-0 mio:opacity-50 mio:hover:opacity-100"
        ),
        nav_button_previous: "mio:absolute mio:left-1",
        nav_button_next: "mio:absolute mio:right-1",
        table: "mio:w-full mio:border-collapse mio:space-y-1",
        head_row: "mio:flex",
        head_cell:
          "mio:text-slate-500 mio:rounded-md mio:w-9 mio:font-normal mio:text-[0.8rem]",
        row: "mio:flex mio:w-full mio:mt-2",
        cell: "mio:h-9 mio:w-9 mio:text-center mio:text-sm mio:p-0 mio:relative mio:[&:has([aria-selected].day-range-end)]:rounded-r-md mio:[&:has([aria-selected].day-outside)]:bg-slate-100/50 mio:[&:has([aria-selected])]:bg-slate-100 mio:first:[&:has([aria-selected])]:rounded-l-md mio:last:[&:has([aria-selected])]:rounded-r-md mio:focus-within:relative mio:focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "mio:h-9 mio:w-9 mio:p-0 mio:font-normal mio:aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "mio:bg-slate-900 mio:text-slate-50 mio:hover:bg-slate-900 mio:hover:text-slate-50 mio:focus:bg-slate-900 mio:focus:text-slate-50",
        day_today: "mio:bg-slate-100",
        day_outside:
          "day-outside mio:text-slate-500 mio:opacity-50 mio:aria-selected:bg-slate-100/50 mio:aria-selected:text-slate-500 mio:aria-selected:opacity-30",
        day_disabled: "mio:text-slate-500 mio:opacity-50",
        day_range_middle:
          "mio:aria-selected:bg-slate-100 mio:aria-selected:text-slate-900",
        day_hidden: "mio:invisible",
        ...classNames,
      }}
      components={{
        NextMonthButton,
        PreviousMonthButton,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
