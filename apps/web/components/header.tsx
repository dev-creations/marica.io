import { EvenFlow } from "@marica.io/ui/layouts";
import Link from "next/link";
import { Logo } from "./logo";
import { Laila } from "next/font/google";

const laila = Laila({ weight: ["500", "600", "700"], subsets: ["latin"] });

export default function Header() {
  return (
    <header className="p-3">
      <EvenFlow className="items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl">
          <Logo width={32} className="text-purple-600 drop-shadow-md" />
          <span className={laila.className}>marica.io</span>
        </Link>
      </EvenFlow>
    </header>
  );
}
