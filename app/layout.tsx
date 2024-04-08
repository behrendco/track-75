import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const maison = localFont({
  src: "../public/fonts/MaisonNeueExtendedBold.ttf",
  variable: "--font-maison",
  preload: true,
  display: "swap"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${maison.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
