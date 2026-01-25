"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-12 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Technical Expertise</h2>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
          A curated collection of technologies and tools I leverage to build modern, scalable, and user-centric digital solutions.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Languages</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 flex flex-wrap gap-2"
          >
            {skills.languages.map((s) => (
              <motion.span
                key={s}
                variants={skillVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-default rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition-all hover:from-blue-100 hover:to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 dark:text-blue-300 dark:hover:from-blue-900/70 dark:hover:to-indigo-900/70"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-5 shadow-sm dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Frameworks & Libs</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 flex flex-wrap gap-2"
          >
            {skills.frameworks.map((s) => (
              <motion.span
                key={s}
                variants={skillVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-default rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 text-xs font-medium text-purple-700 transition-all hover:from-purple-100 hover:to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 dark:text-purple-300 dark:hover:from-purple-900/70 dark:hover:to-pink-900/70"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-5 shadow-sm sm:col-span-2 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tools & Databases</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 flex flex-wrap gap-2"
          >
            {skills.tools.map((s) => (
              <motion.span
                key={s}
                variants={skillVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-default rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1.5 text-xs font-medium text-emerald-700 transition-all hover:from-emerald-100 hover:to-teal-100 dark:from-emerald-950/50 dark:to-teal-950/50 dark:text-emerald-300 dark:hover:from-emerald-900/70 dark:hover:to-teal-900/70"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
