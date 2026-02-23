"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

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
    <section id="hero" className="relative flex min-h-[60vh] items-center pt-24 pb-12 md:pt-32 md:pb-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col gap-6"
      >
        <motion.div variants={item}>
          <h1 className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">{profile.role}</p>
        </motion.div>

        <motion.p variants={item} className="max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
          {profile.bio}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <motion.a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </motion.a>
          <motion.a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <Github className="h-4 w-4" /> GitHub
          </motion.a>
          <motion.a
            href={`mailto:${profile.links.email}`}
            aria-label="Send Email"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <Mail className="h-4 w-4" /> Email
          </motion.a>
          <motion.a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download or View Resume"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg dark:from-indigo-500 dark:to-indigo-600"
          >
            <FileText className="h-4 w-4" /> Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
