"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { currentExperience, earlierExperience, type ExperienceItem } from "@/lib/data";
import { getSkillIcon } from "@/lib/skillIcons";

function renderBold(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-zinc-900 dark:text-zinc-100">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function ExperienceEntry({
  item,
  showPing,
}: {
  item: ExperienceItem;
  showPing?: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="list-none"
    >
      <div className="rounded-xl border border-zinc-100 bg-white/40 dark:border-zinc-900 dark:bg-zinc-950/10 p-5 md:p-6 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:shadow-md">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {showPing && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
          )}
          {item.type} · {item.period}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {item.title}
          <span className="font-normal text-zinc-400 dark:text-zinc-600"> — </span>
          <span className="text-indigo-600 dark:text-indigo-400">{item.company}</span>
        </h3>

        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          {item.highlights.map((h, i) => (
            <li
              key={i}
              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-indigo-400/80 dark:before:bg-indigo-600/80"
            >
              {renderBold(h)}
            </li>
          ))}
        </ul>

        {item.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400"
              >
                {getSkillIcon(s, 12)}
                <span>{s}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="scroll-mt-24 py-12 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Professional Experience</h2>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
          Enterprise RAG pipelines, AI agents, and compliance automation at Design Avenue — plus the earlier roles that built my engineering foundations.
        </p>
      </div>

      <div className="space-y-4">
        <ul className="space-y-4">
          {currentExperience.map((item, idx) => (
            <ExperienceEntry key={`${item.title}-${idx}`} item={item} showPing={idx === 0} />
          ))}
        </ul>

        <div className="flex justify-center py-2">
          <button
            type="button"
            onClick={() => setShowEarlier((s) => !s)}
            aria-expanded={showEarlier}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
          >
            {showEarlier ? "Hide Earlier Experience" : `Earlier Experience (${earlierExperience.length} roles)`}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showEarlier ? "rotate-180" : ""}`} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {showEarlier && (
            <motion.div
              key="earlier-experience"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="space-y-4 pb-2">
                {earlierExperience.map((item, idx) => (
                  <ExperienceEntry key={`${item.title}-${idx}`} item={item} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
