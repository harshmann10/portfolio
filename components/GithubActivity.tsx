"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function GithubActivity() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <section id="activity" className="scroll-mt-24 py-12 md:py-24">
                <div className="mb-8">
                    <div className="h-8 w-64 rounded-lg bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                    <div className="mt-2 h-4 w-96 rounded-lg bg-zinc-200/60 dark:bg-zinc-800/60 animate-pulse" />
                </div>
                <div className="h-[180px] rounded-xl border border-zinc-100 dark:border-zinc-900 bg-white/40 dark:bg-zinc-950/10 animate-pulse" />
            </section>
        );
    }

    return (
        <section id="activity" className="scroll-mt-24 py-12 md:py-24">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={item} className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        GitHub Contributions
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                        A glimpse into my coding activity and open-source contributions.
                    </p>
                </motion.div>

                <motion.div
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="flex min-h-[180px] w-full flex-col items-center justify-center rounded-xl border border-zinc-100 dark:border-zinc-900 bg-white/40 dark:bg-zinc-950/10 p-6 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:bg-gradient-to-r hover:from-blue-50/20 hover:to-indigo-50/20 dark:hover:from-blue-950/10 dark:hover:to-indigo-950/10 hover:shadow-md"
                >
                    {mounted ? (
                        <GitHubCalendar
                            username="harshmann10"
                            colorScheme={currentTheme === "dark" ? "dark" : "light"}
                            fontSize={12}
                            blockSize={12}
                            blockMargin={4}
                        />
                    ) : (
                        <div className="h-[140px] w-full max-w-3xl animate-pulse rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50"></div>
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
}
