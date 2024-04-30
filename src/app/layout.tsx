import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "../components/Providers";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Canteen App",
  description: "Food served ready to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="mx-auto max-w-4xl p-4">
          <Providers>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
