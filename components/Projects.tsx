"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getSkillIcon } from "@/components/Skills";
import { useState } from "react";

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

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group/card overflow-hidden rounded-xl border border-zinc-100 bg-white/40 dark:border-zinc-900 dark:bg-zinc-950/10 p-0 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:bg-gradient-to-r hover:from-blue-50/20 hover:to-indigo-50/20 dark:hover:from-blue-950/10 dark:hover:to-indigo-950/10 hover:shadow-md"
    >
      {p.image && (
        <div className={`relative aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 ${!imageLoaded ? 'animate-pulse' : ''}`}>
          <Image
            src={p.image}
            alt={`Screenshot of ${p.name} project`}
            fill
            placeholder="blur"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
            className={`object-cover transition-all duration-500 group-hover/card:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      )}
      <div className="p-4 sm:p-5">
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
              className="group inline-flex items-center gap-2 cursor-default rounded-lg border border-zinc-200/50 bg-indigo-50/50 px-3 py-1.5 text-xs font-medium text-indigo-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-indigo-200 hover:bg-indigo-100/60 dark:border-zinc-800/60 dark:bg-indigo-950/30 dark:text-indigo-300 dark:hover:border-indigo-800/80 dark:hover:bg-indigo-900/40 shadow-sm"
            >
              {getSkillIcon(t, 15)}
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

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
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((p, idx) => (
          <ProjectCard key={`${p.name}-${idx}`} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
