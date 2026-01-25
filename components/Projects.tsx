"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

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

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Projects</h2>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
          A showcase of full-stack applications and experimental frontend projects, highlighting my focus on performance, scalability, and seamless user experiences.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, idx) => (
          <motion.article
            key={`${p.name}-${idx}`}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-xl border border-zinc-200 bg-white/50 p-4 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-300 hover:shadow-lg sm:p-5 dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-indigo-700"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{p.name}</h3>
              <div className="flex gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-all hover:scale-110 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    aria-label="View source on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-all hover:scale-110 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="inline-block rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-950/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
