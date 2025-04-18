"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../lib/utils";

function Sheet({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  );
}
Sheet.displayName = "Sheet";

const SheetTrigger = DrawerPrimitive.Trigger;

const SheetPortal = DrawerPrimitive.Portal;

const SheetClose = DrawerPrimitive.Close;

function SheetOverlay({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & {
  ref?: React.RefObject<React.ElementRef<typeof DrawerPrimitive.Overlay>>;
}) {
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn(
        "mio:fixed mio:inset-0 mio:z-50 mio:bg-black/80",
        className
      )}
      {...props}
    />
  );
}
SheetOverlay.displayName = DrawerPrimitive.Overlay.displayName;

function SheetContent({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
  ref?: React.RefObject<React.ElementRef<typeof DrawerPrimitive.Content>>;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "mio:fixed mio:inset-x-0 mio:bottom-0 mio:z-50 mio:mt-24 mio:flex mio:h-auto mio:flex-col mio:rounded-t-[10px] mio:border mio:border-slate-200 mio:bg-white",
          className
        )}
        {...props}
      >
        <div className="mio:mx-auto mio:mt-4 mio:h-2 mio:w-[100px] mio:rounded-full mio:bg-slate-100" />
        {children}
      </DrawerPrimitive.Content>
    </SheetPortal>
  );
}
SheetContent.displayName = "SheetContent";

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mio:grid mio:gap-1.5 mio:p-4 mio:text-center mio:sm:text-left",
        className
      )}
      {...props}
    />
  );
}
SheetHeader.displayName = "SheetHeader";

function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mio:mt-auto mio:flex mio:flex-col mio:gap-2 mio:p-4",
        className
      )}
      {...props}
    />
  );
}
SheetFooter.displayName = "SheetFooter";

function SheetTitle({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & {
  ref?: React.RefObject<React.ElementRef<typeof DrawerPrimitive.Title>>;
}) {
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        "mio:text-lg mio:font-semibold mio:leading-none mio:tracking-tight",
        className
      )}
      {...props}
    />
  );
}
SheetTitle.displayName = DrawerPrimitive.Title.displayName;

function SheetDescription({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> & {
  ref?: React.RefObject<React.ElementRef<typeof DrawerPrimitive.Description>>;
}) {
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn("mio:text-sm mio:text-slate-500", className)}
      {...props}
    />
  );
}
SheetDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
