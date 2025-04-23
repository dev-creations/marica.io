import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

function Breadcrumb({ ref, ...props }: { ref?: React.RefObject<HTMLElement> }) {
  return <nav ref={ref} aria-label="breadcrumb" {...props} />;
}
Breadcrumb.displayName = "Breadcrumb";

function BreadcrumbList({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol"> & {
  ref?: React.RefObject<HTMLOListElement>;
}) {
  return (
    <ol
      ref={ref}
      className={cn(
        "mio:flex mio:flex-wrap mio:items-center mio:gap-1.5 mio:break-words mio:text-sm mio:text-slate-500 mio:sm:gap-2.5 mio:dark:text-slate-400",
        className
      )}
      {...props}
    />
  );
}
BreadcrumbList.displayName = "BreadcrumbList";

function BreadcrumbItem({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  ref?: React.RefObject<HTMLLIElement>;
}) {
  return (
    <li
      ref={ref}
      className={cn("mio:inline-flex mio:items-center mio:gap-1.5", className)}
      {...props}
    />
  );
}
BreadcrumbItem.displayName = "BreadcrumbItem";

function BreadcrumbLink({
  ref,
  asChild,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  ref?: React.RefObject<HTMLAnchorElement>;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn(
        "mio:transition-colors mio:hover:text-slate-950 mio:dark:hover:text-slate-50",
        className
      )}
      {...props}
    />
  );
}
BreadcrumbLink.displayName = "BreadcrumbLink";

function BreadcrumbPage({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span"> & {
  ref?: React.RefObject<HTMLSpanElement>;
}) {
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "mio:font-normal mio:text-slate-950 mio:dark:text-slate-50",
        className
      )}
      {...props}
    />
  );
}
BreadcrumbPage.displayName = "BreadcrumbPage";

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("mio:[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        "mio:flex mio:h-9 mio:w-9 mio:items-center mio:justify-center",
        className
      )}
      {...props}
    >
      <MoreHorizontal className="mio:h-4 mio:w-4" />
      <span className="mio:sr-only">More</span>
    </span>
  );
}
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
