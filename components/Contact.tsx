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
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 pb-24 md:py-24 md:pb-32">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Get in Touch</h2>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
          Have a question or want to discuss a project? I'm always open to new opportunities and collaborations.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center gap-3"
      >
        <motion.a
          variants={item}
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </motion.a>
        <motion.a
          variants={item}
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400"
        >
          <Github className="h-4 w-4" /> GitHub
        </motion.a>
        <motion.a
          variants={item}
          href={`mailto:${profile.links.email}`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400"
        >
          <Mail className="h-4 w-4" /> Email
        </motion.a>
        <motion.a
          variants={item}
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg dark:from-indigo-500 dark:to-indigo-600"
        >
          <FileText className="h-4 w-4" /> Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
