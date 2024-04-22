"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "mio-flex mio-cursor-default mio-select-none mio-items-center mio-rounded-sm mio-px-2 mio-py-1.5 mio-text-sm mio-outline-none focus:mio-bg-slate-100 data-[state=open]:mio-bg-slate-100 dark:focus:mio-bg-slate-800 dark:data-[state=open]:mio-bg-slate-800",
      inset && "mio-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="mio-ml-auto mio-h-4 mio-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "mio-z-50 mio-min-w-[8rem] mio-overflow-hidden mio-rounded-md mio-border mio-border-slate-200 mio-bg-white mio-p-1 mio-text-slate-950 mio-shadow-lg data-[state=open]:mio-animate-in data-[state=closed]:mio-animate-out data-[state=closed]:mio-fade-out-0 data-[state=open]:mio-fade-in-0 data-[state=closed]:mio-zoom-out-95 data-[state=open]:mio-zoom-in-95 data-[side=bottom]:mio-slide-in-from-top-2 data-[side=left]:mio-slide-in-from-right-2 data-[side=right]:mio-slide-in-from-left-2 data-[side=top]:mio-slide-in-from-bottom-2 dark:mio-border-slate-800 dark:mio-bg-slate-950 dark:mio-text-slate-50",
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "mio-z-50 mio-min-w-[8rem] mio-overflow-hidden mio-rounded-md mio-border mio-border-slate-200 mio-bg-white mio-p-1 mio-text-slate-950 mio-shadow-md data-[state=open]:mio-animate-in data-[state=closed]:mio-animate-out data-[state=closed]:mio-fade-out-0 data-[state=open]:mio-fade-in-0 data-[state=closed]:mio-zoom-out-95 data-[state=open]:mio-zoom-in-95 data-[side=bottom]:mio-slide-in-from-top-2 data-[side=left]:mio-slide-in-from-right-2 data-[side=right]:mio-slide-in-from-left-2 data-[side=top]:mio-slide-in-from-bottom-2 dark:mio-border-slate-800 dark:mio-bg-slate-950 dark:mio-text-slate-50",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "mio-relative mio-flex mio-cursor-default mio-select-none mio-items-center mio-rounded-sm mio-px-2 mio-py-1.5 mio-text-sm mio-outline-none mio-transition-colors focus:mio-bg-slate-100 focus:mio-text-slate-900 data-[disabled]:mio-pointer-events-none data-[disabled]:mio-opacity-50 dark:focus:mio-bg-slate-800 dark:focus:mio-text-slate-50",
      inset && "mio-pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "mio-relative mio-flex mio-cursor-default mio-select-none mio-items-center mio-rounded-sm mio-py-1.5 mio-pl-8 mio-pr-2 mio-text-sm mio-outline-none mio-transition-colors focus:mio-bg-slate-100 focus:mio-text-slate-900 data-[disabled]:mio-pointer-events-none data-[disabled]:mio-opacity-50 dark:focus:mio-bg-slate-800 dark:focus:mio-text-slate-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="mio-absolute mio-left-2 mio-flex mio-h-3.5 mio-w-3.5 mio-items-center mio-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="mio-h-4 mio-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "mio-relative mio-flex mio-cursor-default mio-select-none mio-items-center mio-rounded-sm mio-py-1.5 mio-pl-8 mio-pr-2 mio-text-sm mio-outline-none mio-transition-colors focus:mio-bg-slate-100 focus:mio-text-slate-900 data-[disabled]:mio-pointer-events-none data-[disabled]:mio-opacity-50 dark:focus:mio-bg-slate-800 dark:focus:mio-text-slate-50",
      className
    )}
    {...props}
  >
    <span className="mio-absolute mio-left-2 mio-flex mio-h-3.5 mio-w-3.5 mio-items-center mio-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="mio-h-2 mio-w-2 mio-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "mio-px-2 mio-py-1.5 mio-text-sm mio-font-semibold",
      inset && "mio-pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
      "mio--mx-1 mio-my-1 mio-h-px mio-bg-slate-100 dark:mio-bg-slate-800",
      className
    )}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "mio-ml-auto mio-text-xs mio-tracking-widest mio-opacity-60",
        className
      )}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
