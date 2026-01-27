import type { Metadata } from "next";
import { Azeret_Mono, Roboto  } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const azeret = Azeret_Mono({ subsets: ["latin"], weight: ["900"], variable: "--font-display" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "IMPACT Boston",
  description: "IMPACT Boston website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en"  className={`${azeret.variable} ${roboto.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
