"use client";

import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
} from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";
import { Dialog, DialogContent } from "../dialog";

const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "mio-bg-popover mio-text-popover-foreground mio-flex mio-h-full mio-w-full mio-flex-col mio-overflow-hidden mio-rounded-md",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = DialogProps;

function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="mio-overflow-hidden mio-p-0 mio-hadow-lg">
        <Command className="[&_[cmdk-group-heading]]:mio-text-muted-foreground [&_[cmdk-group-heading]]:mio-px-2 [&_[cmdk-group-heading]]:mio-font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:mio-pt-0 [&_[cmdk-group]]:mio-px-2 [&_[cmdk-input-wrapper]_svg]:mio-h-5 [&_[cmdk-input-wrapper]_svg]:mio-w-5 [&_[cmdk-input]]:mio-h-12 [&_[cmdk-item]]:mio-px-2 [&_[cmdk-item]]:mio-py-3 [&_[cmdk-item]_svg]:mio-h-5 [&_[cmdk-item]_svg]:mio-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="mio-flex mio-items-center mio-border-b mio-px-3"
    cmdk-input-wrapper=""
  >
    <Search className="mio-mr-2 mio-h-4 mio-w-4 mio-shrink-0 mio-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "placeholder:mio-text-muted-foreground mio-flex mio-h-11 mio-w-full mio-rounded-md mio-bg-transparent mio-py-3 mio-text-sm mio-outline-none disabled:mio-cursor-not-allowed disabled:mio-opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "mio-max-h-[300px] mio-overflow-y-auto mio-overflow-x-hidden",
      className
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="mio-py-6 mio-text-center mio-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "mio-text-foreground [&_[cmdk-group-heading]]:mio-text-muted-foreground mio-overflow-hidden mio-p-1 [&_[cmdk-group-heading]]:mio-px-2 [&_[cmdk-group-heading]]:mio-py-1.5 [&_[cmdk-group-heading]]:mio-text-xs [&_[cmdk-group-heading]]:mio-font-medium",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("mio-bg-border mio--mx-1 mio-h-px", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "aria-selected:mio-bg-accent aria-selected:mio-text-accent-foreground mio-relative mio-flex mio-cursor-default mio-select-none mio-items-center mio-rounded-sm mio-px-2 mio-py-1.5 mio-text-sm mio-outline-none data-[disabled]:mio-pointer-events-none data-[disabled]:mio-opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

function CommandShortcut({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "mio-text-muted-foreground mio-ml-auto mio-text-xs mio-tracking-widest",
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
