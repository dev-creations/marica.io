import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "@marica.io/ui/styles";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "marica.io",
  description: "marica.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col bg-gray-100 dark:bg-slate-800 dark:text-gray-50 ${robotoFlex.className}`}
      >
        <div className="grid min-h-screen grid-rows-[auto_minmax(0,1fr)_auto]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
