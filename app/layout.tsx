import type { Metadata } from "next";
import { Black_Ops One } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Durjoy Ghosh | Photographer",
  description: "With a deep passion for visual storytelling, I specialize in creating photographs that capture the essence of people, places, and moments. I approach every",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
