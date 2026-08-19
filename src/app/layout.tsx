import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vserve Media | Mobile Scroll-Driven Visual Sequence",
  description:
    "High-performance, 0-rerender scroll-driven image sequence engineered for mobile with seamless bidirectional choreography.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full bg-black text-white selection:bg-indigo-500 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
