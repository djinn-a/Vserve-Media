import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

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

// The RootLayout component is the top-level layout for the entire Next.js application.
// It wraps all pages and components, defining the base HTML structure.
export default function RootLayout({
  children,
}: Readonly<{
  // We mark the props as 'Readonly' because React component props should be immutable.
  // Mutating props inside a component causes unpredictable bugs and won't trigger re-renders.
  // This TypeScript rule enforces best practices and resolves linter warnings.
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-black text-white selection:bg-indigo-500 selection:text-white flex flex-col font-sans">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
