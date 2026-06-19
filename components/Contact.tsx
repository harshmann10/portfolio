"use client";

import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const data = await submitContactForm(formData);

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(data.message || "Something went wrong. Please try again later.");
      }
    } catch {
      setError("Failed to send message. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-12 pb-24 md:py-24 md:pb-32 overflow-hidden">
      {/* Ambient glowing blurs */}
      <div className="pointer-events-none absolute -right-20 top-20 z-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5" />
      <div className="pointer-events-none absolute -left-20 bottom-10 z-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Get in Touch</h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Have a question or want to discuss a project? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          {/* Contact Form */}
          <motion.div variants={item} className="rounded-2xl border border-zinc-200/80 bg-white/60 p-6 sm:p-8 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="subject" value="New Submission from Portfolio" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Harsh Mann"
                  className="w-full rounded-lg border border-zinc-200 bg-white/80 px-4 py-2.5 text-zinc-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-zinc-900 dark:focus:ring-indigo-400/20 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="harsh@example.com"
                  className="w-full rounded-lg border border-zinc-200 bg-white/80 px-4 py-2.5 text-zinc-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-zinc-900 dark:focus:ring-indigo-400/20 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-lg border border-zinc-200 bg-white/80 px-4 py-2.5 text-zinc-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-zinc-900 dark:focus:ring-indigo-400/20 shadow-sm"
                />
              </div>

              <div aria-live="polite">
                {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
                {isSuccess && <p className="text-sm text-green-600 dark:text-green-400 font-semibold">Message sent successfully!</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || isSuccess}
                aria-busy={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:from-blue-600 disabled:to-indigo-600 dark:from-blue-500 dark:to-indigo-500 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...
                  </>
                ) : isSuccess ? (
                  "Sent!"
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
