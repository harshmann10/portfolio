import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Harsh Mann | Full Stack Developer",
  description:
    "I'm Harsh Mann, a Full Stack Developer specializing in building scalable web applications and high-performance REST APIs.",
  keywords: ["Harsh Mann", "Full Stack Developer", "Portfolio", "Web Developer"],
  authors: [{ name: "Harsh Mann" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshmann.vercel.app",
    title: "Harsh Mann | Full Stack Developer",
    description: "Full Stack Developer specializing in scalable web applications and high-performance REST APIs.",
    siteName: "Harsh Mann Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Mann | Full Stack Developer",
    description: "Full Stack Developer specializing in scalable web applications and high-performance REST APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harsh Mann",
              url: "https://harshmann.vercel.app",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/harshmann10",
                "https://www.linkedin.com/in/harsh-mann01/"
              ]
            })
          }}
        />
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
