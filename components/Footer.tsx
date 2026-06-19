"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200/60 py-10 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-950/20 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row text-center sm:text-left"
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
                <div className="text-xs text-zinc-400 dark:text-zinc-600 font-medium">
                    Built with Next.js, Tailwind CSS, & Framer Motion
                </div>
            </motion.div>
        </footer>
    );
}
