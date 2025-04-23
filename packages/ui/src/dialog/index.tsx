"use client";

import {
  type ElementRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

function DialogOverlay({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {
  ref?: React.RefObject<ElementRef<typeof DialogPrimitive.Overlay>>;
}) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "mio:data-[state=open]:animate-in mio:data-[state=closed]:animate-out mio:data-[state=closed]:fade-out-0 mio:data-[state=open]:fade-in-0  mio:fixed mio:inset-0 mio:z-50 mio:bg-black/80",
        className
      )}
      {...props}
    />
  );
}
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

function DialogContent({
  ref,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  ref?: React.RefObject<ElementRef<typeof DialogPrimitive.Content>>;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "mio:data-[state=open]:animate-in mio:data-[state=closed]:animate-out mio:data-[state=closed]:fade-out-0 mio:data-[state=open]:fade-in-0 mio:data-[state=closed]:zoom-out-95 mio:data-[state=open]:zoom-in-95 mio:data-[state=closed]:slide-out-to-left-1/2 mio:data-[state=closed]:slide-out-to-top-[48%] mio:data-[state=open]:slide-in-from-left-1/2 mio:data-[state=open]:slide-in-from-top-[48%] mio:fixed mio:left-[50%] mio:top-[50%] mio:z-50 mio:grid mio:w-full mio:max-w-lg mio:translate-x-[-50%] mio:translate-y-[-50%] mio:gap-4 mio:border mio:bg-white mio:p-6 mio:shadow-lg mio:duration-200 mio:sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="mio:ring-offset-background mio:focus:ring-ring mio:data-[state=open]:bg-accent mio:data-[state=open]:text-muted-foreground mio:absolute mio:right-4 mio:top-4 mio:rounded-sm mio:opacity-70 mio:transition-opacity mio:hover:opacity-100 mio:focus:outline-hidden mio:focus:ring-2 mio:focus:ring-offset-2 mio:disabled:pointer-events-none">
          <X className="mio:h-4 mio:w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
DialogContent.displayName = DialogPrimitive.Content.displayName;

function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mio:flex mio:flex-col mio:space-y-1.5 mio:text-center mio:sm:text-left",
        className
      )}
      {...props}
    />
  );
}
DialogHeader.displayName = "DialogHeader";

function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mio:flex mio:flex-col-reverse mio:sm:flex-row mio:sm:justify-end mio:sm:space-x-2",
        className
      )}
      {...props}
    />
  );
}
DialogFooter.displayName = "DialogFooter";

function DialogTitle({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & {
  ref?: React.RefObject<ElementRef<typeof DialogPrimitive.Title>>;
}) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        "mio:text-lg mio:font-semibold mio:leading-none mio:tracking-tight",
        className
      )}
      {...props}
    />
  );
}
DialogTitle.displayName = DialogPrimitive.Title.displayName;

function DialogDescription({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & {
  ref?: React.RefObject<ElementRef<typeof DialogPrimitive.Description>>;
}) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("mio:text-muted-foreground mio:text-sm", className)}
      {...props}
    />
  );
}
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
