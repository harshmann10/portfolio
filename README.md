# Harsh Mann — Portfolio

Portfolio of a **Full-Stack AI Engineer** — production RAG systems, AI agents, and distributed MERN backends. Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Case-Study Pages**: Deep dives per flagship project at `/projects/[slug]` — problem, approach, architecture, stack & trade-offs, screenshots, and learnings. Statically generated via `generateStaticParams`.
- **Per-Page OG Images**: Dynamic OpenGraph cards (1200×630) via the `opengraph-image.tsx` file convention and `ImageResponse` — clean previews when links are shared on LinkedIn/X.
- **Centralized Content**: All profile, experience, project, and skills data lives in `lib/data.ts` — the UI is fully data-driven.
- **Skill Tiers as Bento Grid**: Skills grouped architecturally (AI/Retrieval, Backend, Databases & Cloud, Frontend), not as a flat list.
- **Advanced Navigation**:
  - **Scroll Spy**: Route-aware — highlights the active section on the home page only.
  - **Floating Pill UI**: Animated navigation indicator via Framer Motion `layoutId`.
  - **Smooth Scrolling**: Instant section navigation on all devices.
- **Contact**: Server action + **Web3Forms** form delivery, direct social badges, and 1-click copy-email with clipboard feedback.
- **Monospace Metadata**: `Geist Mono` for dates, badges, kickers, and technical metadata; `Geist Sans` for body copy.
- **GitHub Activity**: Contribution calendar with a contrast-safe indigo/zinc palette (light + dark).
- **Theming**: Dark/light mode with system detection (`next-themes`), custom theme-aware scrollbar.
- **SEO**: Full metadata, JSON-LD `Person` schema, sitemap including case-study routes, robots.txt.
- **Responsive**: Mobile-first layout; navbar collapses to an animated drawer.

## 🛠️ Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Compiler)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Geist Sans + Geist Mono (via `next/font`)
- **Icons**: [Lucide React](https://lucide.dev/) + react-icons
- **Forms**: [Web3Forms](https://web3forms.com/)
- **GitHub Calendar**: react-github-calendar
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📂 Project Structure

```
├── app/
│   ├── page.tsx                # Home (Hero → Experience → Projects → Skills → Activity → Contact)
│   ├── projects/[slug]/        # Case-study pages (SSG) + opengraph-image.tsx
│   ├── resume/                 # Resume viewer page
│   └── ...
├── components/                 # Hero, Navbar, Projects, Skills, Contact, etc.
├── lib/
│   ├── data.ts                 # Profile, experience, projects + case studies, skill tiers
│   └── skillIcons.tsx          # Skill → brand icon mapping
├── assets/projects/            # Project screenshots (static imports)
└── docs/                       # Resumes, notes, planning artifacts
```

## 🚀 Run Locally

1. **Clone the repository:**

    ```bash
    git clone https://github.com/harshmann10/portfolio.git
    cd portfolio
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

4. **Open in browser:** [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

- **Content**: Edit `lib/data.ts` — profile, experience, projects, case studies, and skill tiers. Adding a `slug` + `caseStudy` to a project automatically generates its case-study page and OG image.
- **Theme**: The primary accent is `indigo-600`; find-and-replace `indigo` to re-brand.
- **Contact Form**: Add your [Web3Forms](https://web3forms.com/) key to `.env` as `WEB3FORMS_ACCESS_KEY=your_key_here`.
- **Metadata/SEO**: `app/layout.tsx` (metadata + JSON-LD) and per-route `opengraph-image.tsx` files.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
