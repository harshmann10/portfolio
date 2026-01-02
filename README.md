## Harsh Mann — Portfolio (Next.js + TypeScript + Tailwind + Framer Motion)

A single-page portfolio with a clean, corporate vibe and light/dark theming. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

### Stack
- Next.js 16 (App Router), TypeScript
- Tailwind CSS v4 (neutral monochrome design + indigo accents)
- Framer Motion (subtle fade-ins on scroll)
- next-themes (system + manual theme toggle)
- lucide-react (icons)

### Project Structure
- Sections: Hero → Experience → Projects → Skills → Contact
- Shared data: see lib/data.ts
- Components: components/Hero.tsx, components/Experience.tsx, components/Projects.tsx, components/ThemeToggle.tsx, components/Navbar.tsx

### Run Locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

### Customize
- Update profile, experience, projects, and skills in lib/data.ts.
- Accent color can be adjusted via class names (e.g., `text-indigo-600`).

### Notes
- Smooth scroll is enabled; navbar anchors jump to sections.
- Dark mode respects system preference and manual toggle.
