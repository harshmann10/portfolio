import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://harshmann.vercel.app"),
  title: "Harsh Mann | Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer building production RAG pipelines, AI agents, and distributed backends — hybrid retrieval, vector search, and context-grounded LLM interfaces on the MERN stack.",
  keywords: ["Harsh Mann", "Full-Stack AI Engineer", "RAG", "GenAI", "Vector Search", "Hybrid Retrieval", "MERN", "Next.js", "Portfolio"],
  authors: [{ name: "Harsh Mann" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshmann.vercel.app",
    title: "Harsh Mann | Full-Stack AI Engineer",
    description: "Full-Stack AI Engineer building production RAG pipelines, AI agents, and distributed backends — hybrid retrieval, vector search, and context-grounded LLM interfaces on the MERN stack.",
    siteName: "Harsh Mann Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Mann | Full-Stack AI Engineer",
    description: "Full-Stack AI Engineer building production RAG pipelines, AI agents, and distributed backends — hybrid retrieval, vector search, and context-grounded LLM interfaces on the MERN stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${geistSans.variable} font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harsh Mann",
              url: "https://harshmann.vercel.app",
              jobTitle: "Full-Stack AI Engineer",
              knowsAbout: ["RAG", "Hybrid Retrieval", "Vector Search", "BM25", "Reranking", "LLM APIs", "MERN Stack", "Node.js", "React", "MongoDB"],
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
          <ScrollProgressBar />
          <Navbar />
          <ScrollToTop />
          <main id="main-content" className="mx-auto max-w-5xl px-4">
            {children}
          </main>
        </ClientThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
