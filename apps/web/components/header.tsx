import { EvenFlow } from "@marica.io/ui/layouts";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-3 dark:bg-slate-900 dark:text-slate-200">
      <EvenFlow className="items-center">
        <Link href="/">marica.io</Link>
        <nav className="text-right">
          <Link href="/">Storybook</Link>
        </nav>
      </EvenFlow>
    </header>
  );
}
