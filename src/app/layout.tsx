import type { Metadata, Viewport } from "next";
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
  title: "BHIMTAL Taxi Service | 24/7 Taxi Booking & Airport Cab Service",
  description: "Book reliable fixed-rate city cabs, executive sedans, and airport taxi transfers. Instant online taxi booking with 24/7 dispatch, live GPS tracking, and zero surge pricing.",
  keywords: ["taxi booking", "cab service", "airport taxi", "city cabs", "chauffeur cab", "24/7 taxi", "fixed fare cab", "BHIMTAL Taxi Service"],
  openGraph: {
    title: "BHIMTAL Taxi Service | 24/7 Taxi Booking & Airport Cab Service",
    description: "Book reliable fixed-rate city cabs, executive sedans, and airport taxi transfers with zero surge pricing.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-amber-400 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
