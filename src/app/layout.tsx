import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Totes Move Co.",
  description:
    "Reuable moving boxes delivered to your door. Save time, money, and the planet. Durham, NC. Raleigh, NC. Chapel Hill, NC. Cary, NC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className} text-lg text-zinc-800 bg-zinc-50`}>
        <Banner />
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
