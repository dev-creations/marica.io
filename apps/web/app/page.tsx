import { Laila } from "next/font/google";

const laila = Laila({ weight: ["500", "600", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-1">
      <section className="relative mx-auto grid max-w-[1280px] flex-1 place-content-center px-8 py-12 text-center after:absolute after:right-36 after:top-72 after:-z-10 after:h-36 after:w-96 after:-rotate-45 after:bg-blue-400 after:blur-[128px] lg:before:absolute lg:before:left-36 lg:before:top-36 lg:before:-z-10 lg:before:h-36 lg:before:w-72 lg:before:rotate-45 lg:before:bg-purple-400 lg:before:blur-[128px] after:dark:bg-sky-800 lg:before:dark:bg-purple-800">
        <p className={laila.className}>marica helps building complex UIs.</p>
        <h1 className="text-3xl font-bold drop-shadow-sm md:text-4xl">
          complex{" "}
          <span className="bg-gradient-to-r from-purple-500 to-sky-600 bg-clip-text text-transparent">
            components
          </span>{" "}
          made simple
        </h1>
        <p className="mt-12">coming soon.</p>
      </section>
    </main>
  );
}
