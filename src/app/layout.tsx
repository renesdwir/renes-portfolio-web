import CursorEffect from "@/components/cursorEffect.component";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renes Dwi Riwanto",
  description: "Renes Dwi Riwanto Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-cstmblack text-slate-200 relative"}>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
