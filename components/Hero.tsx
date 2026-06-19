"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[60vh] items-center pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 z-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/5" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 z-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/5" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full flex-col gap-6"
      >
        {/* Status Badge */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h1 className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-indigo-600 dark:text-indigo-400 sm:text-xl">{profile.role}</p>
        </motion.div>

        <motion.p variants={item} className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
          {profile.bio}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3 mt-2">
          <Link href="/resume" className="w-full sm:w-auto">
            <motion.div
              aria-label="Download or View Resume"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all dark:from-blue-500 dark:to-indigo-500 cursor-pointer"
            >
              <FileText className="h-4 w-4" /> Resume
            </motion.div>
          </Link>
          <motion.a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400 w-full sm:w-auto"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </motion.a>
          <motion.a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400 w-full sm:w-auto"
          >
            <Github className="h-4 w-4" /> GitHub
          </motion.a>
          <motion.a
            href={`mailto:${profile.links.email}`}
            aria-label="Send Email"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400 w-full sm:w-auto"
          >
            <Mail className="h-4 w-4" /> Email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
