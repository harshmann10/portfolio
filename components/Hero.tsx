"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[60vh] items-center pt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col gap-6"
      >
        <div>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
            {profile.name}
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">{profile.role}</p>
        </div>

        <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">{profile.bio}</p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
