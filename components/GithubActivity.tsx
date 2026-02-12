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

    if (!mounted) return null;

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
                    className="flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-indigo-700"
                >
                    <GitHubCalendar
                        username="harshmann10"
                        colorScheme={currentTheme === "dark" ? "dark" : "light"}
                        fontSize={12}
                        blockSize={12}
                        blockMargin={4}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
