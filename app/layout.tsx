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
  title: "Aneri Raval — Software Engineer | Applied AI & Backend Engineering",
  description:
    "Portfolio of Aneri Raval, a software engineer at TCS building scalable, production-ready AI applications and exploring practical GenAI integration.",
  keywords: [
    "Aneri Raval",
    "Software Engineer",
    "Applied AI",
    "GenAI",
    "Backend Engineering",
    "Machine Learning",
  ],
  openGraph: {
    title: "Aneri Raval — Software Engineer | Applied AI & Backend Engineering",
    description:
      "Engineering portfolio for Aneri Raval, focused on applied AI, GenAI integration, backend engineering, and machine learning.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#070b10] text-zinc-100">{children}</body>
    </html>
  );
}
