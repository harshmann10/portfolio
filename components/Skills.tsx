"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiRedux, 
  SiDaisyui, 
  SiSocketdotio, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiAppwrite, 
  SiRazorpay, 
  SiVercel 
} from "react-icons/si";
import { FaJava, FaDatabase, FaEdit } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { MdOutlineExtension } from "react-icons/md";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export const getSkillIcon = (skill: string, size: number = 16) => {
  switch (skill) {
    case "JavaScript":
      return <SiJavascript className="text-[#F7DF1E] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Java":
      return <FaJava className="text-[#007396] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "HTML":
      return <SiHtml5 className="text-[#E34F26] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "CSS":
      return <SiCss className="text-[#1572B6] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "SQL":
      return <FaDatabase className="text-[#336791] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size - 1} />;
    case "React.js":
      return <SiReact className="text-[#61DAFB] flex-shrink-0 transition-transform duration-700 group-hover:rotate-180" size={size} />;
    case "Next.js":
      return <SiNextdotjs className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Node.js":
      return <SiNodedotjs className="text-[#339933] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Express.js":
      return <SiExpress className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-[#06B6D4] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Redux Toolkit":
      return <SiRedux className="text-[#764ABC] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "DaisyUI":
      return <SiDaisyui className="text-[#FFB800] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Socket.io":
      return <SiSocketdotio className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "MongoDB":
      return <SiMongodb className="text-[#47A248] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "MySQL":
      return <SiMysql className="text-[#4479A1] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Git/GitHub":
      return (
        <span className="flex items-center gap-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
          <SiGit className="text-[#F05032]" size={size - 2} />
          <span className="text-zinc-400 dark:text-zinc-600 text-[10px] font-normal">/</span>
          <SiGithub className="text-zinc-900 dark:text-zinc-100" size={size - 2} />
        </span>
      );
    case "VS Code":
      return <DiVisualstudio className="text-[#007ACC] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Appwrite":
      return <SiAppwrite className="text-[#FD366E] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Razorpay":
      return <SiRazorpay className="text-[#0A2540] dark:text-[#3399FF] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size - 1} />;
    case "Vercel":
      return <SiVercel className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "TinyMCE":
      return <FaEdit className="text-[#007F5F] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "WebExtensions API":
      return <MdOutlineExtension className="text-[#F2A900] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    default:
      return null;
  }
};

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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Languages</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 flex flex-wrap gap-2.5"
          >
            {skills.languages.map((s) => (
              <motion.span
                key={s}
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 cursor-default rounded-xl border border-blue-100/80 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 px-3.5 py-2 text-xs font-medium text-blue-700 transition-all hover:from-blue-100/60 hover:to-indigo-100/60 hover:border-blue-200 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-indigo-950/40 dark:text-blue-300 dark:hover:from-blue-900/50 dark:hover:to-indigo-900/50 dark:hover:border-blue-800/40 shadow-sm"
              >
                {getSkillIcon(s)}
                <span>{s}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-5 shadow-sm dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Frameworks & Libs</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 flex flex-wrap gap-2.5"
          >
            {skills.frameworks.map((s) => (
              <motion.span
                key={s}
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 cursor-default rounded-xl border border-purple-100/80 bg-gradient-to-r from-purple-50/50 to-pink-50/50 px-3.5 py-2 text-xs font-medium text-purple-700 transition-all hover:from-purple-100/60 hover:to-pink-100/60 hover:border-purple-200 dark:border-purple-900/30 dark:from-purple-950/40 dark:to-pink-950/40 dark:text-purple-300 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 dark:hover:border-purple-800/40 shadow-sm"
              >
                {getSkillIcon(s)}
                <span>{s}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-5 shadow-sm sm:col-span-2 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tools & Databases</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 flex flex-wrap gap-2.5"
          >
            {skills.tools.map((s) => (
              <motion.span
                key={s}
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 cursor-default rounded-xl border border-emerald-100/80 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 px-3.5 py-2 text-xs font-medium text-emerald-700 transition-all hover:from-emerald-100/60 hover:to-teal-100/60 hover:border-emerald-200 dark:border-emerald-900/30 dark:from-emerald-950/40 dark:to-teal-950/40 dark:text-emerald-300 dark:hover:from-emerald-900/50 dark:hover:to-teal-900/50 dark:hover:border-emerald-800/40 shadow-sm"
              >
                {getSkillIcon(s)}
                <span>{s}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
