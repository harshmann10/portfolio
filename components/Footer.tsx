"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200/60 py-8 dark:border-zinc-800/60">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto max-w-5xl px-4 text-center"
            >
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Design & Developed by{" "}
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        Harsh
                    </span>
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                    © {currentYear}. All rights reserved.
                </p>
            </motion.div>
        </footer>
    );
}
