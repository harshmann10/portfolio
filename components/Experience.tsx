"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-12 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Professional Experience</h2>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
          A chronicle of my journey in software engineering, from architectural design at scale to foundational web development.
        </p>
      </div>

      <div className="relative">
        {/* Background Track Line */}
        <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-zinc-200 dark:bg-zinc-800/60" />
        {/* Glow/Gradient Timeline Line */}
        <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent dark:from-indigo-500/80 dark:via-purple-500/80 dark:to-transparent" />

        <ul className="space-y-8 md:space-y-10">
          {experience.map((item, idx) => (
            <motion.li
              key={`${item.title}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative pl-10"
            >
              {/* Timeline Indicator Dot */}
              <span className="absolute left-[5px] top-6 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-500 ring-4 ring-indigo-50 dark:ring-indigo-950/50 transition-all duration-300 group-hover:scale-125 group-hover:border-purple-500 group-hover:ring-purple-100 dark:group-hover:ring-purple-950/40">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:bg-purple-500 transition-colors duration-300" />
                {idx === 0 && (
                  <span className="absolute inset-0 -m-1 animate-ping rounded-full bg-indigo-400/50 opacity-75"></span>
                )}
              </span>

              {/* Experience Card */}
              <div className="rounded-xl border border-zinc-100 dark:border-zinc-900 bg-white/40 dark:bg-zinc-950/10 p-4 sm:p-5 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:bg-gradient-to-r hover:from-blue-50/20 hover:to-indigo-50/20 dark:hover:from-blue-950/10 dark:hover:to-indigo-950/10 hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 flex-wrap">
                    <span>{item.title}</span>
                    <span className="text-zinc-300 dark:text-zinc-700 font-normal">|</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">{item.company}</span>
                  </h3>
                  <span className="self-start sm:self-center text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/60 px-2.5 py-1 rounded-full border border-zinc-200/50 dark:border-zinc-800/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    {item.period}
                  </span>
                </div>
                
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-none pl-0">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-indigo-400/80 dark:before:bg-indigo-600/80 text-zinc-600 dark:text-zinc-300">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
