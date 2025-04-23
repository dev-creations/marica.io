"use client";

import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    className={cn(
      "mio:flex mio:h-10 mio:w-full mio:items-center mio:justify-between mio:rounded-md mio:border mio:border-gray-300 mio:bg-white mio:px-3 mio:py-2 mio:text-sm mio:shadow-sm mio:focus:outline-hidden mio:focus:ring-2 mio:focus:ring-offset-2 mio:disabled:cursor-not-allowed mio:disabled:opacity-50 mio:[&>span]:line-clamp-1",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="mio:h-4 mio:w-4 mio:opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      "mio:flex mio:cursor-default mio:items-center mio:justify-center mio:py-1",
      className
    )}
    ref={ref}
    {...props}
  >
    <ChevronUp className="mio:h-4 mio:w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    className={cn(
      "mio:flex mio:cursor-default mio:items-center mio:justify-center mio:py-1",
      className
    )}
    ref={ref}
    {...props}
  >
    <ChevronDown className="mio:h-4 mio:w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        "mio:data-[state=open]:animate-in mio:data-[state=closed]:animate-out mio:data-[state=closed]:fade-out-0 mio:data-[state=open]:fade-in-0 mio:data-[state=closed]:zoom-out-95 mio:data-[state=open]:zoom-in-95 mio:data-[side=bottom]:slide-in-from-top-2 mio:data-[side=left]:slide-in-from-right-2 mio:data-[side=right]:slide-in-from-left-2 mio:data-[side=top]:slide-in-from-bottom-2 mio:relative mio:z-50 mio:max-h-96 mio:min-w-[8rem] mio:overflow-hidden mio:rounded-md mio:border mio:border-gray-300 mio:bg-white mio:text-black mio:shadow-md",
        position === "popper" &&
          "mio:data-[side=bottom]:translate-y-1 mio:data-[side=left]:-translate-x-1 mio:data-[side=right]:translate-x-1 mio:data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          position === "popper" &&
            "mio:h-(--radix-select-trigger-height) mio:w-full mio:min-w-(--radix-select-trigger-width)"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    className={cn(
      "mio:p-1.5 mio:pl-3 mio:text-sm mio:font-semibold",
      className
    )}
    ref={ref}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    className={cn(
      "mio:focus:bg-accent mio:focus:text-accent-foreground mio:relative mio:flex mio:w-full mio:cursor-pointer mio:select-none mio:items-center mio:gap-2 mio:rounded-sm mio:p-1.5 mio:pl-3 mio:text-sm mio:outline-hidden mio:hover:bg-blue-100 mio:data-disabled:pointer-events-none mio:data-disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="mio:flex mio:h-3.5 mio:w-3.5 mio:items-center mio:justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="mio:h-4 mio:w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    className={cn("mio:-mx-1 mio:my-1 mio:h-px mio:bg-gray-300", className)}
    ref={ref}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
