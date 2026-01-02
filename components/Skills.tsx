"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Skills</h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Core stack and tools</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.languages.map((s) => (
              <span key={s} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Frameworks & Libs</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.frameworks.map((s) => (
              <span key={s} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-zinc-200 bg-white p-4 sm:col-span-2 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Tools & Databases</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.tools.map((s) => (
              <span key={s} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
