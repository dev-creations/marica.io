import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";
import { type ButtonProps, buttonVariants } from "../button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn(
        "mio:mx-auto mio:flex mio:w-full mio:justify-center",
        className
      )}
      {...props}
    />
  );
}
Pagination.displayName = "Pagination";

function PaginationContent({
  ref,
  className,
  ...props
}: React.ComponentProps<"ul"> & {
  ref?: React.RefObject<HTMLUListElement>;
}) {
  return (
    <ul
      ref={ref}
      className={cn(
        "mio:flex mio:flex-row mio:items-center mio:gap-1",
        className
      )}
      {...props}
    />
  );
}
PaginationContent.displayName = "PaginationContent";

function PaginationItem({
  ref,
  className,
  ...props
}: React.ComponentProps<"li"> & {
  ref?: React.RefObject<HTMLLIElement>;
}) {
  return <li ref={ref} className={cn("mio-", className)} {...props} />;
}
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  );
}
PaginationLink.displayName = "PaginationLink";

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("mio:gap-1 mio:pl-2.5", className)}
      {...props}
    >
      <ChevronLeft className="mio:h-4 mio:w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}
PaginationPrevious.displayName = "PaginationPrevious";

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("mio:gap-1 mio:pr-2.5", className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="mio:h-4 mio:w-4" />
    </PaginationLink>
  );
}
PaginationNext.displayName = "PaginationNext";

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn(
        "mio:flex mio:h-9 mio:w-9 mio:items-center mio:justify-center",
        className
      )}
      {...props}
    >
      <MoreHorizontal className="mio:h-4 mio:w-4" />
      <span className="mio:sr-only">More pages</span>
    </span>
  );
}
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
