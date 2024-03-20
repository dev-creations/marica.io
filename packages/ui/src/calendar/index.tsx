"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "../lib/utils";
import { buttonVariants } from "../button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function IconLeft() {
  return <ChevronLeft className="mio-h-4 mio-w-4" />;
}

function IconRight() {
  return <ChevronRight className="mio-h-4 mio-w-4" />;
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cn("mio-p-3 dark:mio-text-slate-100", className)}
      classNames={{
        months:
          "mio-flex mio-flex-col sm:mio-flex-row mio-space-y-4 sm:mio-space-x-4 sm:mio-space-y-0",
        month: "mio-space-y-4",
        caption:
          "mio-flex mio-justify-center mio-pt-1 mio-relative mio-items-center",
        caption_label: "mio-text-sm mio-font-medium",
        nav: "mio-space-x-1 mio-flex mio-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "mio-h-7 mio-w-7 mio-bg-transparent mio-p-0 mio-opacity-50 hover:mio-opacity-100"
        ),
        nav_button_previous: "mio-absolute mio-left-1",
        nav_button_next: "mio-absolute mio-right-1",
        table: "mio-w-full mio-border-collapse mio-space-y-1",
        head_row: "mio-flex",
        head_cell:
          "mio-text-slate-500 mio-rounded-md mio-w-9 mio-font-normal mio-text-[0.8rem] dark:mio-text-slate-400",
        row: "mio-flex mio-w-full mio-mt-2",
        cell: "mio-h-9 mio-w-9 mio-text-center mio-text-sm mio-p-0 mio-relative [&:has([aria-selected].day-range-end)]:mio-rounded-r-md [&:has([aria-selected].day-outside)]:mio-bg-slate-100/50 [&:has([aria-selected])]:mio-bg-slate-100 first:[&:has([aria-selected])]:mio-rounded-l-md last:[&:has([aria-selected])]:mio-rounded-r-md focus-within:mio-relative focus-within:mio-z-20 dark:[&:has([aria-selected].day-outside)]:mio-bg-slate-800/50 dark:[&:has([aria-selected])]:mio-bg-slate-800",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "mio-h-9 mio-w-9 mio-p-0 mio-font-normal aria-selected:mio-opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "mio-bg-slate-900 mio-text-slate-50 hover:mio-bg-slate-900 hover:mio-text-slate-50 focus:mio-bg-slate-900 focus:mio-text-slate-50 dark:mio-bg-slate-800 dark:mio-text-slate-200 dark:hover:mio-bg-slate-50 dark:hover:mio-text-slate-200 dark:focus:mio-bg-slate-50 dark:focus:mio-text-slate-900",
        day_today:
          "mio-bg-slate-100 dark:mio-bg-slate-800 dark:mio-text-slate-50",
        day_outside:
          "day-outside mio-text-slate-500 mio-opacity-50 aria-selected:mio-bg-slate-100/50 aria-selected:mio-text-slate-500 aria-selected:mio-opacity-30 dark:mio-text-slate-400 dark:aria-selected:mio-bg-slate-800/50 dark:aria-selected:mio-text-slate-400",
        day_disabled:
          "mio-text-slate-500 mio-opacity-50 dark:mio-text-slate-400",
        day_range_middle:
          "aria-selected:mio-bg-slate-100 aria-selected:mio-text-slate-900 dark:aria-selected:mio-bg-slate-800 dark:aria-selected:mio-text-slate-50",
        day_hidden: "mio-invisible",
        ...classNames,
      }}
      components={{
        IconLeft,
        IconRight,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
