"use client";

import { skills } from "@/lib/data";
import { getSkillIcon } from "@/lib/skillIcons";

// Static — skills never change, so compute once at module load, not per render
const all = [...skills.languages, ...skills.frameworks, ...skills.tools];
const half = Math.ceil(all.length / 2);
const ROW1 = all.slice(0, half);
const ROW2 = all.slice(half);

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const duplicated = [...items, ...items];
  return (
    <div className={`flex w-max gap-4 pr-4 ${direction === "left" ? "animate-marquee" : "animate-marquee-reverse"}`}>
      {duplicated.map((skill, i) => (
        <div
          key={`${skill}-${i}`}
          className="group flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white/40 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-300 backdrop-blur-[2px] shadow-sm hover:border-indigo-300 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 cursor-default"
        >
          {getSkillIcon(skill, 18)}
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 flex flex-col gap-4">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
      <MarqueeRow items={ROW1} direction="left" />
      <MarqueeRow items={ROW2} direction="right" />
    </div>
  );
}
