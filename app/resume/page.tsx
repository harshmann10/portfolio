import { profile } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Harsh Mann",
  description: "View and download Harsh Mann's resume.",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-6 py-12 md:py-20">
      {/* Back to Home navigation */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Header section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Resume
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            A detailed overview of my experience, skills, and education.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 transition-all dark:from-indigo-500 dark:to-indigo-600 w-full sm:w-auto"
          >
            <ExternalLink className="h-4 w-4" />
            Open in New Tab
          </a>
        </div>
      </div>

      {/* Resume Embed */}
      <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-white/60 p-1.5 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/40 h-[80vh] min-h-[600px]">
        {/* The iframe holding the resume preview */}
        <iframe
          src={profile.links.resume}
          className="absolute inset-1.5 h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-lg border-none"
          title="Harsh Mann - Resume"
          allow="autoplay"
        />
      </div>

      {/* Fallback note for mobile / cookie-blocked users */}
      <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
        Trouble viewing the document?{" "}
        <a
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Click here to open directly in Google Drive
        </a>
      </p>
    </div>
  );
}
