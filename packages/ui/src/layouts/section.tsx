import type { HTMLAttributes, PropsWithChildren } from "react";

export default function Section(
  props: PropsWithChildren<HTMLAttributes<HTMLElement>>
) {
  return <section {...props} />;
}
