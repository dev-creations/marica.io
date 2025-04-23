"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { type Ref } from "react";
import { cn } from "../lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

function DropdownMenuSubTrigger({
  ref,
  className,
  inset,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
  ref?: Ref<React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>>;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "mio:flex mio:cursor-default mio:select-none mio:items-center mio:rounded-sm mio:px-2 mio:py-1.5 mio:text-sm mio:outline-hidden mio:focus:bg-slate-100 mio:data-[state=open]:bg-slate-100 mio:dark:focus:bg-slate-800 mio:dark:data-[state=open]:bg-slate-800",
        inset && "mio:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="mio:ml-auto mio:h-4 mio:w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

function DropdownMenuSubContent({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & {
  ref?: React.RefObject<
    React.ElementRef<typeof DropdownMenuPrimitive.SubContent>
  >;
}) {
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "mio:z-50 mio:min-w-[8rem] mio:overflow-hidden mio:rounded-md mio:border mio:border-slate-200 mio:bg-white mio:p-1 mio:text-slate-950 mio:shadow-lg mio:data-[state=open]:animate-in mio:data-[state=closed]:animate-out mio:data-[state=closed]:fade-out-0 mio:data-[state=open]:fade-in-0 mio:data-[state=closed]:zoom-out-95 mio:data-[state=open]:zoom-in-95 mio:data-[side=bottom]:slide-in-from-top-2 mio:data-[side=left]:slide-in-from-right-2 mio:data-[side=right]:slide-in-from-left-2 mio:data-[side=top]:slide-in-from-bottom-2 mio:dark:border-slate-800 mio:dark:bg-slate-950 mio:dark:text-slate-50",
        className
      )}
      {...props}
    />
  );
}
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

function DropdownMenuContent({
  ref,
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
  ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Content>>;
}) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "mio:z-50 mio:min-w-[8rem] mio:overflow-hidden mio:rounded-md mio:border mio:border-slate-200 mio:bg-white mio:p-1 mio:text-slate-950 mio:shadow-md mio:data-[state=open]:animate-in mio:data-[state=closed]:animate-out mio:data-[state=closed]:fade-out-0 mio:data-[state=open]:fade-in-0 mio:data-[state=closed]:zoom-out-95 mio:data-[state=open]:zoom-in-95 mio:data-[side=bottom]:slide-in-from-top-2 mio:data-[side=left]:slide-in-from-right-2 mio:data-[side=right]:slide-in-from-left-2 mio:data-[side=top]:slide-in-from-bottom-2 mio:dark:border-slate-800 mio:dark:bg-slate-950 mio:dark:text-slate-50",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

function DropdownMenuItem({
  ref,
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  ref?: Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Item>>;
}) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        "mio:relative mio:flex mio:cursor-default mio:select-none mio:items-center mio:rounded-sm mio:px-2 mio:py-1.5 mio:text-sm mio:outline-hidden mio:transition-colors mio:focus:bg-slate-100 mio:focus:text-slate-900 mio:data-disabled:pointer-events-none mio:data-disabled:opacity-50 mio:dark:focus:bg-slate-800 mio:dark:focus:text-slate-50",
        inset && "mio:pl-8",
        className
      )}
      {...props}
    />
  );
}
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

function DropdownMenuCheckboxItem({
  ref,
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
  ref?: React.RefObject<
    React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>
  >;
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "mio:relative mio:flex mio:cursor-default mio:select-none mio:items-center mio:rounded-sm mio:py-1.5 mio:pl-8 mio:pr-2 mio:text-sm mio:outline-hidden mio:transition-colors mio:focus:bg-slate-100 mio:focus:text-slate-900 mio:data-disabled:pointer-events-none mio:data-disabled:opacity-50 mio:dark:focus:bg-slate-800 mio:dark:focus:text-slate-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="mio:absolute mio:left-2 mio:flex mio:h-3.5 mio:w-3.5 mio:items-center mio:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="mio:h-4 mio:w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

function DropdownMenuRadioItem({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
  ref?: React.RefObject<
    React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>
  >;
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        "mio:relative mio:flex mio:cursor-default mio:select-none mio:items-center mio:rounded-sm mio:py-1.5 mio:pl-8 mio:pr-2 mio:text-sm mio:outline-hidden mio:transition-colors mio:focus:bg-slate-100 mio:focus:text-slate-900 mio:data-disabled:pointer-events-none mio:data-disabled:opacity-50 mio:dark:focus:bg-slate-800 mio:dark:focus:text-slate-50",
        className
      )}
      {...props}
    >
      <span className="mio:absolute mio:left-2 mio:flex mio:h-3.5 mio:w-3.5 mio:items-center mio:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="mio:h-2 mio:w-2 mio:fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

function DropdownMenuLabel({
  ref,
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
  ref?: Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Label>>;
}) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(
        "mio:px-2 mio:py-1.5 mio:text-sm mio:font-semibold",
        inset && "mio:pl-8",
        className
      )}
      {...props}
    />
  );
}
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

function DropdownMenuSeparator({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & {
  ref?: React.RefObject<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>
  >;
}) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(
        "mio:-mx-1 mio:my-1 mio:h-px mio:bg-slate-100 mio:dark:bg-slate-800",
        className
      )}
      {...props}
    />
  );
}
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "mio:ml-auto mio:text-xs mio:tracking-widest mio:opacity-60",
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
