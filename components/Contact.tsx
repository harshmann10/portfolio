"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Github, Linkedin, Mail, FileText, Send, Loader2 } from "lucide-react";
import { useState } from "react";

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
    // Add your Web3Forms Access Key here
    formData.append("access_key", "db0db5f8-4618-4563-82b9-fa4da1c33b24");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-12 pb-24 md:py-24 md:pb-32">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Get in Touch</h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Have a question or want to discuss a project? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <motion.div variants={item} className="rounded-2xl border border-zinc-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="subject" value="New Submission from Portfolio" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Harsh Mann"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="harsh@example.com"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}
              {isSuccess && <p className="text-sm text-green-500">Message sent successfully!</p>}

              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : isSuccess ? (
                  "Sent!"
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.div variants={item} className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Connect with me</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Feel free to reach out via email or connect on social media. I'm typically active on LinkedIn and GitHub.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-zinc-600 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
              >
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">LinkedIn</div>
                  <div className="text-xs">Connect professionally</div>
                </div>
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-zinc-600 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
              >
                <div className="rounded-lg bg-zinc-100 p-2 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">GitHub</div>
                  <div className="text-xs">Check out my code</div>
                </div>
              </a>

              <a
                href={`mailto:${profile.links.email}`}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-zinc-600 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
              >
                <div className="rounded-lg bg-orange-50 p-2 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">Email</div>
                  <div className="text-xs">{profile.links.email}</div>
                </div>
              </a>

              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-zinc-600 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
              >
                <div className="rounded-lg bg-purple-50 p-2 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">Resume</div>
                  <div className="text-xs">View my CV</div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
