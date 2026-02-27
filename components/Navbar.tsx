"use client";

import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#activity", label: "Activity" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Close menu when clicking a link or resizing or pressing escape
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEvents = (e: KeyboardEvent | UIEvent) => {
      if (e instanceof KeyboardEvent && e.key === "Escape") closeMenu();
      if (e instanceof UIEvent && window.innerWidth >= 768) closeMenu();
    };
    window.addEventListener("resize", handleEvents);
    window.addEventListener("keydown", handleEvents as any);
    return () => {
      window.removeEventListener("resize", handleEvents);
      window.removeEventListener("keydown", handleEvents as any);
    };
  }, []);

  // Scroll Spy logic
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust these values to change trigger point
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/90 shadow-sm backdrop-blur-md dark:border-zinc-800/60 dark:bg-black/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3" aria-label="Main navigation">
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            aria-label="Harsh Mann - Portfolio Home"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#hero")?.scrollIntoView({
                behavior: "smooth",
              });
              setActiveSection("hero");
            }}
            className="font-semibold text-zinc-900 transition-colors hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
          >
            Harsh Mann
          </a>
          <ul className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setActiveSection(item.href.slice(1));
                    }}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 -z-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download/View Resume (PDF)"
            className="hidden rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md md:inline-block dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-zinc-200/60 bg-white md:hidden dark:border-zinc-800/60 dark:bg-black"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setActiveSection(item.href.slice(1));
                    }}
                    className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-600 dark:text-zinc-400"
                      }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-block rounded-lg border border-zinc-300 px-3 py-2 text-center text-sm font-medium text-zinc-800 transition-all dark:border-zinc-700 dark:text-zinc-200"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
