"use client";

import {
  forwardRef,
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

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "data-[state=open]:mio-animate-in data-[state=closed]:mio-animate-out data-[state=closed]:mio-fade-out-0 data-[state=open]:mio-fade-in-0  mio-fixed mio-inset-0 mio-z-50 mio-bg-black/80",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "data-[state=open]:mio-animate-in data-[state=closed]:mio-animate-out data-[state=closed]:mio-fade-out-0 data-[state=open]:mio-fade-in-0 data-[state=closed]:mio-zoom-out-95 data-[state=open]:mio-zoom-in-95 data-[state=closed]:mio-slide-out-to-left-1/2 data-[state=closed]:mio-slide-out-to-top-[48%] data-[state=open]:mio-slide-in-from-left-1/2 data-[state=open]:mio-slide-in-from-top-[48%] mio-fixed mio-left-[50%] mio-top-[50%] mio-z-50 mio-grid mio-w-full mio-max-w-lg mio-translate-x-[-50%] mio-translate-y-[-50%] mio-gap-4 mio-border mio-bg-white mio-p-6 mio-shadow-lg mio-duration-200 sm:mio-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="mio-ring-offset-background focus:mio-ring-ring data-[state=open]:mio-bg-accent data-[state=open]:mio-text-muted-foreground mio-absolute mio-right-4 mio-top-4 mio-rounded-sm mio-opacity-70 mio-transition-opacity hover:mio-opacity-100 focus:mio-outline-none focus:mio-ring-2 focus:mio-ring-offset-2 disabled:mio-pointer-events-none">
        <X className="mio-h-4 mio-w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mio-flex mio-flex-col mio-space-y-1.5 mio-text-center sm:mio-text-left",
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
        "mio-flex mio-flex-col-reverse sm:mio-flex-row sm:mio-justify-end sm:mio-space-x-2",
        className
      )}
      {...props}
    />
  );
}
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "mio-text-lg mio-font-semibold mio-leading-none mio-tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("mio-text-muted-foreground mio-text-sm", className)}
    {...props}
  />
));
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
