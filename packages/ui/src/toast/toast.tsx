"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

const ToastProvider = ToastPrimitives.Provider;

function ToastViewport({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & {
  ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Viewport>>;
}) {
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        "mio:fixed mio:top-0 mio:z-100 mio:flex mio:max-h-screen mio:w-full mio:flex-col-reverse mio:p-4 mio:sm:bottom-0 mio:sm:right-0 mio:sm:top-auto mio:sm:flex-col mio:md:max-w-[420px]",
        className
      )}
      {...props}
    />
  );
}
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "mio:group mio:pointer-events-auto mio:relative mio:flex mio:w-full mio:items-center mio:justify-between mio:space-x-4 mio:overflow-hidden mio:rounded-md mio:border mio:p-6 mio:pr-8 mio:shadow-lg mio:transition-all mio:data-[swipe=cancel]:translate-x-0 mio:data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) mio:data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) mio:data-[swipe=move]:transition-none mio:data-[state=open]:animate-in mio:data-[state=closed]:animate-out mio:data-[swipe=end]:animate-out mio:data-[state=closed]:fade-out-80 mio:data-[state=closed]:slide-out-to-right-full mio:data-[state=open]:slide-in-from-top-full mio:sm:data-[state=open]:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "mio:border mio:bg-background mio:text-foreground",
        destructive:
          "mio-destructive mio:group mio:border-destructive mio:bg-destructive mio:text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Toast({
  ref,
  className,
  variant,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants> & {
    ref?: React.Ref<React.ComponentRef<typeof ToastPrimitives.Root>>;
  }) {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
}
Toast.displayName = ToastPrimitives.Root.displayName;

function ToastAction({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> & {
  ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Action>>;
}) {
  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(
        "mio:ring-offset-background mio:hover:bg-secondary mio:focus:ring-ring mio:group-[.destructive]:border-muted/40 mio:hover:group-[.destructive]:border-destructive/30 mio:hover:group-[.destructive]:bg-destructive mio:hover:group-[.destructive]:text-destructive-foreground mio:focus:group-[.destructive]:ring-destructive mio:inline-flex mio:h-8 mio:shrink-0 mio:items-center mio:justify-center mio:rounded-md mio:border mio:bg-transparent mio:px-3 mio:text-sm mio:font-medium mio:transition-colors mio:focus:outline-hidden mio:focus:ring-2 mio:focus:ring-offset-2 mio:disabled:pointer-events-none mio:disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
ToastAction.displayName = ToastPrimitives.Action.displayName;

function ToastClose({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> & {
  ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Close>>;
}) {
  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(
        "mio:text-foreground/50 mio:hover:text-foreground mio:absolute mio:right-2 mio:top-2 mio:rounded-md mio:p-1 mio:opacity-0 mio:transition-opacity mio:focus:opacity-100 mio:focus:outline-hidden mio:focus:ring-2 mio:group-hover:opacity-100 mio:group-[.destructive]:text-red-300 mio:hover:group-[.destructive]:text-red-50 mio:focus:group-[.destructive]:ring-red-400 mio:focus:group-[.destructive]:ring-offset-red-600",
        className
      )}
      toast-close=""
      {...props}
    >
      <X className="mio:h-4 mio:w-4" />
    </ToastPrimitives.Close>
  );
}
ToastClose.displayName = ToastPrimitives.Close.displayName;

function ToastTitle({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> & {
  ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Title>>;
}) {
  return (
    <ToastPrimitives.Title
      ref={ref}
      className={cn("mio:text-sm mio:font-semibold", className)}
      {...props}
    />
  );
}
ToastTitle.displayName = ToastPrimitives.Title.displayName;

function ToastDescription({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> & {
  ref?: React.RefObject<React.ElementRef<typeof ToastPrimitives.Description>>;
}) {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("mio:text-sm mio:opacity-90", className)}
      {...props}
    />
  );
}
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
