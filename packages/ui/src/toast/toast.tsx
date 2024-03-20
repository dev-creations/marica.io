"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "mio-fixed mio-top-0 mio-z-[100] mio-flex mio-max-h-screen mio-w-full mio-flex-col-reverse mio-p-4 sm:mio-bottom-0 sm:mio-right-0 sm:mio-top-auto sm:mio-flex-col md:mio-max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "mio-group mio-pointer-events-auto mio-relative mio-flex mio-w-full mio-items-center mio-justify-between mio-space-x-4 mio-overflow-hidden mio-rounded-md mio-border mio-p-6 mio-pr-8 mio-shadow-lg mio-transition-all data-[swipe=cancel]:mio-translate-x-0 data-[swipe=end]:mio-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:mio-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:mio-transition-none data-[state=open]:mio-animate-in data-[state=closed]:mio-animate-out data-[swipe=end]:mio-animate-out data-[state=closed]:mio-fade-out-80 data-[state=closed]:mio-slide-out-to-right-full data-[state=open]:mio-slide-in-from-top-full data-[state=open]:sm:mio-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "mio-border mio-bg-background mio-text-foreground",
        destructive:
          "mio-destructive mio-group mio-border-destructive mio-bg-destructive mio-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "mio-ring-offset-background hover:mio-bg-secondary focus:mio-ring-ring group-[.destructive]:mio-border-muted/40 group-[.destructive]:hover:mio-border-destructive/30 group-[.destructive]:hover:mio-bg-destructive group-[.destructive]:hover:mio-text-destructive-foreground group-[.destructive]:focus:mio-ring-destructive mio-inline-flex mio-h-8 mio-shrink-0 mio-items-center mio-justify-center mio-rounded-md mio-border mio-bg-transparent mio-px-3 mio-text-sm mio-font-medium mio-transition-colors focus:mio-outline-none focus:mio-ring-2 focus:mio-ring-offset-2 disabled:mio-pointer-events-none disabled:mio-opacity-50",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "mio-text-foreground/50 hover:mio-text-foreground mio-absolute mio-right-2 mio-top-2 mio-rounded-md mio-p-1 mio-opacity-0 mio-transition-opacity focus:mio-opacity-100 focus:mio-outline-none focus:mio-ring-2 group-hover:mio-opacity-100 group-[.destructive]:mio-text-red-300 group-[.destructive]:hover:mio-text-red-50 group-[.destructive]:focus:mio-ring-red-400 group-[.destructive]:focus:mio-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="mio-h-4 mio-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("mio-text-sm mio-font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("mio-text-sm mio-opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
