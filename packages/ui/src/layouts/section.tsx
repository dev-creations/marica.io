import type { HTMLAttributes, PropsWithChildren } from "react";

export function Section(props: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return <section {...props} />;
}
