import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Mann | Full Stack Developer",
  description:
    "I'm Harsh Mann, a Full Stack Developer (MERN) specializing in building scalable web applications and high-performance REST APIs.",
  keywords: ["Harsh Mann", "Full Stack Developer", "MERN Stack", "Portfolio", "Web Developer"],
  authors: [{ name: "Harsh Mann" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshmann.vercel.app",
    title: "Harsh Mann | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack and scalable web solutions.",
    siteName: "Harsh Mann Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Mann | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack and scalable web solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-indigo-600 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:bg-zinc-900 dark:focus:text-indigo-400"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="mx-auto max-w-5xl px-4">
            {children}
          </main>
        </ClientThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
