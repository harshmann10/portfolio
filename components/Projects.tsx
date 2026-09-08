"use client";

import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects, archivedProjects, type ProjectItem } from "@/lib/data";
import { Github, ExternalLink, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSkillIcon } from "@/lib/skillIcons";
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

const ghostButton =
  "relative z-20 inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400";

function FeaturedProject({ p, idx }: { p: ProjectItem; idx: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group/card relative rounded-xl border border-zinc-100 bg-white/40 dark:border-zinc-900 dark:bg-zinc-950/10 p-6 md:p-8 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:shadow-md"
    >
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {p.image && (
          <div
            className={`overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 ${idx % 2 === 0 ? "lg:order-2" : ""}`}
          >
            <div
              className={`relative aspect-video w-full bg-zinc-200 dark:bg-zinc-800 ${!imageLoaded ? "animate-pulse" : ""}`}
            >
              <Image
                src={p.image}
                alt={`Screenshot of ${p.name} project`}
                fill
                placeholder="blur"
                priority={idx === 0}
                sizes="(max-width: 640px) 100vw, 50vw"
                onLoad={() => setImageLoaded(true)}
                className={`object-cover transition-all duration-500 group-hover/card:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>
        )}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 transition-colors group-hover/card:text-indigo-600 dark:text-zinc-100 dark:group-hover/card:text-indigo-400">{p.name}</h3>
            <ArrowRight className="h-4 w-4 text-indigo-500 opacity-0 -translate-x-1 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0" />
          </div>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.description}</p>
          {p.caseStudy && (
            <ul className="mt-4 space-y-2">
              {p.caseStudy.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{h}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="group inline-flex items-center gap-2 cursor-default rounded-lg border border-zinc-200/50 bg-indigo-50/50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-zinc-800/60 dark:bg-indigo-950/30 dark:text-indigo-300 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
              >
                {getSkillIcon(t, 15)}
                <span>{t}</span>
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className={ghostButton}
                aria-label="View source on GitHub"
              >
                <Github className="h-4 w-4" /> GitHub (Source)
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className={ghostButton}
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      {p.slug && (
        <Link href={`/projects/${p.slug}`} className="absolute inset-0 z-10 rounded-xl" aria-label={`View ${p.name} details`}>
          <span className="sr-only">View {p.name} details</span>
        </Link>
      )}
    </motion.article>
  );
}

function CompactProjectCard({ p }: { p: ProjectItem }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      className="group/card overflow-hidden rounded-xl border border-zinc-100 bg-white/40 dark:border-zinc-900 dark:bg-zinc-950/10 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:shadow-md"
    >
      {p.image && (
        <div
          className={`relative aspect-video w-full bg-zinc-200 dark:bg-zinc-800 ${!imageLoaded ? "animate-pulse" : ""}`}
        >
          <Image
            src={p.image}
            alt={`Screenshot of ${p.name} project`}
            fill
            placeholder="blur"
            sizes="(max-width: 640px) 100vw, 50vw"
            onLoad={() => setImageLoaded(true)}
            className={`object-cover transition-all duration-500 group-hover/card:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      )}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{p.name}</h3>
          <div className="flex flex-shrink-0 items-center gap-2">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
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
                className="text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                aria-label="View live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="group inline-flex items-center gap-2 cursor-default rounded-lg border border-zinc-200/50 bg-indigo-50/50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-zinc-800/60 dark:bg-indigo-950/30 dark:text-indigo-300 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
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
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="scroll-mt-24 py-12 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Projects</h2>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
          Full-stack systems and AI pipelines I&apos;ve designed end to end — click any featured build to read the full case study: the problem, the architecture, and the takeaways.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-8"
      >
        {featuredProjects.map((p, idx) => (
          <FeaturedProject key={`${p.name}-${idx}`} p={p} idx={idx} />
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <button type="button" onClick={() => setShowMore((s) => !s)} aria-expanded={showMore} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
          {showMore ? "View Less" : "View More"}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showMore && (
          <motion.div
            key="more-projects"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 grid gap-6 pb-2 sm:grid-cols-2"
            >
              {archivedProjects.map((p, idx) => (
                <CompactProjectCard key={`${p.name}-${idx}`} p={p} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
