"use client";

import {
  type ComponentRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
} from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";
import { Dialog, DialogContent } from "../dialog";

function Command({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive> & {
  ref?: React.Ref<ComponentRef<typeof CommandPrimitive>>;
}) {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        "mio:flex mio:h-full mio:w-full mio:flex-col mio:overflow-hidden mio:rounded-md mio:bg-white mio:text-slate-950",
        className
      )}
      {...props}
    />
  );
}
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = DialogProps;

function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="mio:overflow-hidden mio:p-0 mio:shadow-lg">
        <Command className="mio:[&_[cmdk-group-heading]]:px-2 mio:[&_[cmdk-group-heading]]:font-medium mio:[&_[cmdk-group-heading]]:text-slate-500 mio:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 mio:[&_[cmdk-group]]:px-2 mio:[&_[cmdk-input-wrapper]_svg]:h-5 mio:[&_[cmdk-input-wrapper]_svg]:w-5 mio:[&_[cmdk-input]]:h-12 mio:[&_[cmdk-item]]:px-2 mio:[&_[cmdk-item]]:py-3 mio:[&_[cmdk-item]_svg]:h-5 mio:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
  ref?: React.Ref<ComponentRef<typeof CommandPrimitive.Input>>;
}) {
  return (
    <div
      className="mio:flex mio:items-center mio:border-b mio:px-3"
      cmdk-input-wrapper=""
    >
      <Search className="mio:mr-2 mio:h-4 mio:w-4 mio:shrink-0 mio:opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          "mio:flex mio:h-11 mio:w-full mio:rounded-md mio:bg-transparent mio:py-3 mio:text-sm mio:outline-hidden mio:placeholder:text-slate-500 mio:disabled:cursor-not-allowed mio:disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

CommandInput.displayName = CommandPrimitive.Input.displayName;

function CommandList({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive.List> & {
  ref?: React.Ref<ComponentRef<typeof CommandPrimitive.List>>;
}) {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn(
        "mio:max-h-[300px] mio:overflow-y-auto mio:overflow-x-hidden",
        className
      )}
      {...props}
    />
  );
}

CommandList.displayName = CommandPrimitive.List.displayName;

function CommandEmpty({
  ref,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & {
  ref?: React.Ref<ComponentRef<typeof CommandPrimitive.Empty>>;
}) {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="mio:py-6 mio:text-center mio:text-sm"
      {...props}
    />
  );
}

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

function CommandGroup({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & {
  ref?: React.Ref<ComponentRef<typeof CommandPrimitive.Group>>;
}) {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        "mio:overflow-hidden mio:p-1 mio:text-slate-950 mio:[&_[cmdk-group-heading]]:px-2 mio:[&_[cmdk-group-heading]]:py-1.5 mio:[&_[cmdk-group-heading]]:text-xs mio:[&_[cmdk-group-heading]]:font-medium mio:[&_[cmdk-group-heading]]:text-slate-500",
        className
      )}
      {...props}
    />
  );
}

CommandGroup.displayName = CommandPrimitive.Group.displayName;

function CommandSeparator({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & {
  ref?: React.Ref<ComponentRef<typeof CommandPrimitive.Separator>>;
}) {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn("mio:-mx-1 mio:h-px mio:bg-slate-200", className)}
      {...props}
    />
  );
}
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

function CommandItem({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
  ref?: React.Ref<ComponentRef<typeof CommandPrimitive.Item>>;
}) {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        "mio:relative mio:flex mio:cursor-default mio:select-none mio:items-center mio:rounded-sm mio:px-2 mio:py-1.5 mio:text-sm mio:outline-hidden mio:aria-selected:bg-slate-100 mio:aria-selected:text-slate-900 mio:data-[disabled=true]:pointer-events-none mio:data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

CommandItem.displayName = CommandPrimitive.Item.displayName;

function CommandShortcut({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "mio:ml-auto mio:text-xs mio:tracking-widest mio:text-slate-500",
        className
      )}
      {...props}
    />
  );
}
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
