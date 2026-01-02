"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Experience</h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Timeline of roles and impact</p>
      </div>

      <div className="relative">
        <div className="absolute left-2 top-0 h-full w-px bg-zinc-200 dark:bg-zinc-800" />
        <ul className="space-y-8">
          {experience.map((item, idx) => (
            <motion.li
              key={`${item.title}-${idx}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative pl-8"
            >
              <span className="absolute left-0 top-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {item.title} <span className="text-zinc-500">@ {item.company}</span>
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
