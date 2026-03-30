import { profile } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Harsh Mann",
  description: "View and download Harsh Mann's resume.",
};

export default function ResumePage() {
    return (
        <div className="flex flex-col gap-6 py-12 md:py-20">
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
            </div>

            {/* Resume Embed */}
            <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 h-[80vh] min-h-[600px]">
                {/* The iframe holding the resume preview */}
                <iframe
                    src={profile.links.resume}
                    className="absolute inset-0 h-full w-full border-none"
                    title="Harsh Mann - Resume"
                    allow="autoplay"
                />
            </div>
        </div>
    );
}
