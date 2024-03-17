import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "@marica.io/style";
import "./globals.css";
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
      <body className={robotoFlex.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
