import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { caseStudySlugs, projects, type ProjectItem } from "@/lib/data";
import { getSkillIcon } from "@/lib/skillIcons";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project?.caseStudy) {
    return { title: "Case Study | Harsh Mann" };
  }
  return {
    title: `${project.name} — Case Study | Harsh Mann`,
    description: project.caseStudy.tagline,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project?.caseStudy) notFound();

  const caseStudy = project.caseStudy;

  const sluggedProjects = projects.filter(
    (p): p is ProjectItem & { slug: string } => Boolean(p.slug)
  );
  const currentIndex = sluggedProjects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? sluggedProjects[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < sluggedProjects.length - 1
      ? sluggedProjects[currentIndex + 1]
      : null;

  const cardClass =
    "rounded-xl border border-zinc-100 bg-white/40 dark:border-zinc-900 dark:bg-zinc-950/10 p-6 shadow-sm backdrop-blur-[2px]";
  const kickerClass =
    "font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400";
  const navLinkClass =
    "inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400";

  return (
    <section className="scroll-mt-24 pt-28 pb-24 md:pt-36">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
      >
        <ArrowLeft className="h-4 w-4" />
        All Projects
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-100">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          {caseStudy.tagline}
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {caseStudy.role}
        </p>
      </header>

      {(project.github || project.live) && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 dark:from-indigo-500 dark:to-indigo-600"
            >
              <Github className="h-4 w-4" />
              View Source
            </a>
          )}
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <Github className="h-4 w-4" />
              Source (Backend)
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/50 bg-indigo-50/50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-zinc-800/60 dark:bg-indigo-950/30 dark:text-indigo-300"
          >
            {getSkillIcon(t, 15)}
            {t}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-10">
        <div className={cardClass}>
          <h2 className={kickerClass}>The Problem</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
            {caseStudy.problem}
          </p>
        </div>

        <div className={cardClass}>
          <h2 className={kickerClass}>The Approach</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
            {caseStudy.approach}
          </p>
        </div>

        <div className={cardClass}>
          <h2 className={kickerClass}>Architecture</h2>
          <ol className="mt-5 space-y-5">
            {caseStudy.architecture.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-mono text-sm text-indigo-600 dark:text-indigo-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {caseStudy.stackDecisions && caseStudy.stackDecisions.length > 0 && (
          <div className={cardClass}>
            <h2 className={kickerClass}>Stack &amp; Trade-offs</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {caseStudy.stackDecisions.map((decision) => (
                <div key={decision.title}>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {decision.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {decision.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={cardClass}>
          <h2 className={kickerClass}>Key Highlights</h2>
          <ul className="mt-5 space-y-3">
            {caseStudy.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm text-zinc-700 sm:text-base dark:text-zinc-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-[160px] flex-1 rounded-xl border border-zinc-100 bg-white/40 p-6 shadow-sm backdrop-blur-[2px] dark:border-zinc-900 dark:bg-zinc-950/10"
              >
                <div className="font-mono text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div>
          <h2 className={kickerClass}>Screenshots</h2>
          <div className="mt-5 space-y-10">
            {caseStudy.gallery.map((gal) => (
              <figure
                key={gal.alt}
                className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <Image
                  src={gal.src}
                  alt={gal.alt}
                  className="h-auto w-full"
                  {...(typeof gal.src !== "string"
                    ? { placeholder: "blur" as const }
                    : {})}
                />
                <figcaption className="mt-2 px-3 pb-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {gal.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={cardClass}>
          <h2 className={kickerClass}>What I Learned</h2>
          <ul className="mt-5 space-y-3">
            {caseStudy.learnings.map((learning) => (
              <li
                key={learning}
                className="flex items-start gap-3 text-sm text-zinc-700 sm:text-base dark:text-zinc-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav className="mt-16 flex items-center justify-between gap-4 border-t border-zinc-100 pt-8 dark:border-zinc-900">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className={navLinkClass}>
            <ArrowLeft className="h-4 w-4" />
            {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}`} className={navLinkClass}>
            {next.name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </section>
  );
}
