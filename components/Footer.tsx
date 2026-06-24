"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200/60 py-10 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/20 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row text-center sm:text-left"
            >
                <div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Designed & Developed by{" "}
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            Harsh Mann
                        </span>
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                        © {currentYear}. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4 justify-center">
                    <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-all hover:scale-110 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                        aria-label="GitHub Profile"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-all hover:scale-110 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href={`mailto:${profile.links.email}`}
                        className="text-zinc-500 transition-all hover:scale-110 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                        aria-label="Send Email"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                </div>

                <div className="text-xs text-zinc-400 dark:text-zinc-600 font-medium">
                    Built with Next.js, Tailwind CSS, & Framer Motion
                </div>
            </motion.div>
        </footer>
    );
}
