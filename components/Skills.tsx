"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { getSkillIcon } from "@/lib/skillIcons";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

type SkillCategoryProps = {
  title: string;
  items: string[];
  delay?: number;
  className?: string;
  badgeTheme: string;
};

function SkillCategoryCard({ title, items, delay = 0, className = "", badgeTheme }: SkillCategoryProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl border border-zinc-100 bg-white/40 dark:border-zinc-900 dark:bg-zinc-950/10 p-5 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:bg-gradient-to-r hover:from-blue-50/20 hover:to-indigo-50/20 dark:hover:from-blue-950/10 dark:hover:to-indigo-950/10 hover:shadow-md ${className}`}
    >
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 flex flex-wrap gap-2.5"
      >
        {items.map((s) => (
          <motion.span
            key={s}
            variants={skillVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group inline-flex items-center gap-2 cursor-default rounded-xl border px-3.5 py-2 text-xs font-medium transition-all shadow-sm ${badgeTheme}`}
          >
            {getSkillIcon(s)}
            <span>{s}</span>
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

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
        <SkillCategoryCard
          title="Languages"
          items={skills.languages}
          badgeTheme="border-blue-100/80 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 text-blue-700 hover:from-blue-100/60 hover:to-indigo-100/60 hover:border-blue-200 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-indigo-950/40 dark:text-blue-300 dark:hover:from-blue-900/50 dark:hover:to-indigo-900/50 dark:hover:border-blue-800/40"
        />
        <SkillCategoryCard
          title="Frameworks & Libs"
          items={skills.frameworks}
          delay={0.1}
          badgeTheme="border-purple-100/80 bg-gradient-to-r from-purple-50/50 to-pink-50/50 text-purple-700 hover:from-purple-100/60 hover:to-pink-100/60 hover:border-purple-200 dark:border-purple-900/30 dark:from-purple-950/40 dark:to-pink-950/40 dark:text-purple-300 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 dark:hover:border-purple-800/40"
        />
        <SkillCategoryCard
          title="Tools & Databases"
          items={skills.tools}
          delay={0.2}
          className="sm:col-span-2"
          badgeTheme="border-emerald-100/80 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 text-emerald-700 hover:from-emerald-100/60 hover:to-teal-100/60 hover:border-emerald-200 dark:border-emerald-900/30 dark:from-emerald-950/40 dark:to-teal-950/40 dark:text-emerald-300 dark:hover:from-emerald-900/50 dark:hover:to-teal-900/50 dark:hover:border-emerald-800/40"
        />
      </div>
    </section>
  );
}
