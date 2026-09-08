"use client";

import { motion } from "framer-motion";
import { skills, type SkillTier } from "@/lib/data";
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

const badgeThemes = [
  "border-indigo-100/80 bg-gradient-to-r from-indigo-50/50 to-violet-50/50 text-indigo-700 hover:from-indigo-100/60 hover:to-violet-100/60 hover:border-indigo-200 dark:border-indigo-900/30 dark:from-indigo-950/40 dark:to-violet-950/40 dark:text-indigo-300 dark:hover:from-indigo-900/50 dark:hover:to-violet-900/50 dark:hover:border-indigo-800/40",
  "border-blue-100/80 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 text-blue-700 hover:from-blue-100/60 hover:to-cyan-100/60 hover:border-blue-200 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-cyan-950/40 dark:text-blue-300 dark:hover:from-blue-900/50 dark:hover:to-cyan-900/50 dark:hover:border-blue-800/40",
  "border-emerald-100/80 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 text-emerald-700 hover:from-emerald-100/60 hover:to-teal-100/60 hover:border-emerald-200 dark:border-emerald-900/30 dark:from-emerald-950/40 dark:to-teal-950/40 dark:text-emerald-300 dark:hover:from-emerald-900/50 dark:hover:to-teal-900/50 dark:hover:border-emerald-800/40",
  "border-purple-100/80 bg-gradient-to-r from-purple-50/50 to-fuchsia-50/50 text-purple-700 hover:from-purple-100/60 hover:to-fuchsia-100/60 hover:border-purple-200 dark:border-purple-900/30 dark:from-purple-950/40 dark:to-fuchsia-950/40 dark:text-purple-300 dark:hover:from-purple-900/50 dark:hover:to-fuchsia-900/50 dark:hover:border-purple-800/40",
];

const cardDelays = [0, 0.1, 0.1, 0.2];

const cardSpans = ["sm:col-span-2", "", "", "sm:col-span-2"];

type TierCardProps = {
  tier: SkillTier;
  index: number;
};

function TierCard({ tier, index }: TierCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      transition={{ duration: 0.5, delay: cardDelays[index] ?? 0 }}
      className={`rounded-xl border border-zinc-100 bg-white/40 dark:border-zinc-900 dark:bg-zinc-950/10 p-5 md:p-6 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:bg-gradient-to-r hover:from-blue-50/20 hover:to-indigo-50/20 dark:hover:from-blue-950/10 dark:hover:to-indigo-950/10 hover:shadow-md ${cardSpans[index] ?? ""}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          {`0${index + 1} / ${tier.title.replace(" / ", " & ")}`}
        </span>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{tier.caption}</span>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 flex flex-wrap gap-2.5"
      >
        {tier.items.map((s) => (
          <motion.span
            key={s}
            variants={skillVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group inline-flex items-center gap-2 cursor-default rounded-xl border px-3.5 py-2 text-xs font-medium transition-all shadow-sm ${badgeThemes[index] ?? badgeThemes[0]}`}
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
          Skills organized the way I architect systems — typed frontend state, backend services, data infrastructure, and retrieval pipelines.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.tiers.map((tier, i) => (
          <TierCard key={tier.title} tier={tier} index={i} />
        ))}
      </div>
    </section>
  );
}
