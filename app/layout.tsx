import type { Metadata } from "next";
import localFont from "next/font/local";
import { Quicksand, Fredericka_the_Great } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Story-Story: Once upon a time, Time-Time",
  description:
    "Brings Nigerian history to life! Explore engaging, child-friendly stories of African heroes and heroines, designed to educate and inspire.",
  creator: "Dahiru Ibrahim",
  icons: {
    icon: "./images/thumbnail.png",
  },
};

const quicksand = Quicksand({ subsets: ["latin"] });
export const fredericka = Fredericka_the_Great({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} flex flex-col min-h-screen grainy-light`}
      >
        <Header />
        {children}
        <Toaster duration={8000} position="bottom-left" />
      </body>
    </html>
  );
}
