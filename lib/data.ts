import devtinderImg from "@/assets/projects/Devtinder.png";
import aiTocImg from "@/assets/projects/AIToc.png";
import pixelBlogImg from "@/assets/projects/PixelBlog.png";
import musicPlayerImg from "@/assets/projects/MusicPlayer.png";
import contextragChatDarkImg from "@/assets/projects/contextrag-chat-dark.png";
import contextragKnowledgeBaseImg from "@/assets/projects/contextrag-knowledge-base.png";
import contextragCitationDrawerImg from "@/assets/projects/contextrag-citation-drawer.png";
import contextragChatLightImg from "@/assets/projects/contextrag-chat-light.png";
import antigravityTelemetryImg from "@/assets/projects/antigravity-dashboard.png";
import { StaticImageData } from "next/image";

export type Profile = {
  name: string;
  role: string;
  bio: string;
  availability: string;
  links: {
    linkedin: string;
    github: string;
    email: string;
    resume: string;
  };
};

export type ExperienceItem = {
  title: string;
  company: string;
  type: "Full-time" | "Internship";
  period: string;
  stack: string[];
  highlights: string[];
};

export type CaseStudyArchitectureStep = {
  title: string;
  detail: string;
};

export type CaseStudy = {
  tagline: string;
  role: string;
  problem: string;
  approach: string;
  architecture: CaseStudyArchitectureStep[];
  stackDecisions?: CaseStudyArchitectureStep[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  gallery: { src: StaticImageData | string; alt: string; caption: string }[];
  learnings: string[];
};

export type ProjectItem = {
  name: string;
  slug?: string;
  featured?: boolean;
  tech: string[];
  description: string;
  github?: string;
  githubBackend?: string;
  live?: string;
  liveLabel?: string;
  image?: StaticImageData | string;
  caseStudy?: CaseStudy;
};

export type SkillTier = {
  title: string;
  caption: string;
  items: string[];
};

export type Skills = {
  tiers: SkillTier[];
};

export const profile: Profile = {
  name: "Harsh Mann",
  role: "Full-Stack AI Engineer",
  bio: "Full-Stack AI Engineer specializing in production RAG systems and MERN applications. At Design Avenue, I build AI agents that automate compliance work — policy generation, evidence review, and repository classification — integrated across AWS, GCP, GitHub, and Jira. I pair hybrid retrieval and vector search with clean API design and modern React frontends to ship context-grounded, scalable products.",
  availability: "Available for Full-Stack & GenAI Roles",
  links: {
    linkedin: "https://www.linkedin.com/in/harsh-mann01/",
    github: "https://github.com/harshmann10",
    email: "harshmann8008@gmail.com",
    resume:
      "https://drive.google.com/file/d/1xgjg8HCSZI-KWEu42u1juT452FmVq8uW/preview",
  },
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Design Avenue",
    type: "Full-time",
    period: "Feb 2026 - Present",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "RAG"],
    highlights: [
      "Develop **full-stack modules for HRMS and GRC platforms** — role-based access control, automated workflows, and compliance risk management features.",
      "Architect **RAG-based AI pipelines** — document ingestion, structural chunking, vector search, and metadata filtering — to deliver **context-grounded LLM responses** across product areas.",
      "Engineer **AI agents for policy generation and compliance automation**, integrating LLMs with external APIs and enterprise platforms (**AWS, GCP, GitHub, Jira**) for automated evidence review and repository classification.",
      "Optimize **backend aggregation pipelines and API routes** to cut latency across high-traffic enterprise modules.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Design Avenue",
    type: "Internship",
    period: "Aug 2025 - Jan 2026",
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Co-engineered core **microservices and database schemas** for ChemDoc and HRMS platforms using the MERN stack.",
      "Developed secure, high-performance **REST APIs** and reusable React.js components styled with Tailwind CSS.",
      "Built **Retrieval-Augmented Generation (RAG)** features utilizing **vector search** to enable automated, intelligent document parsing.",
      "Engineered automated workflows and robust **role-based access protocols** to handle multi-tenant enterprise data securely.",
    ],
  },
  {
    title: "Java Developer Intern",
    company: "Codsoft",
    type: "Internship",
    period: "Sep 2023 - Oct 2023",
    stack: ["Java", "OOP"],
    highlights: [
      "Developed robust, Object-Oriented **Java applications**, including an ATM Interface and a Student Grade Calculator.",
      "Applied core **OOP principles**, custom exception handling, and data structures to ensure code modularity and reliability.",
      "Designed clean, responsive command-line and graphical interfaces focusing on intuitive user workflows.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "The Spark Foundation",
    type: "Internship",
    period: "Nov 2022 - Dec 2022",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Built and launched interactive web projects, including custom **landing pages and portfolio sites**.",
      "Wrote clean, semantic **HTML5, CSS3, and ES6+ JavaScript**, maintaining cross-browser compatibility and responsive layouts.",
      "Followed **mobile-first design** methodologies, reducing page load times and optimizing rendering performance.",
    ],
  },
];

export const currentExperience = experience.filter(
  (item) => item.company === "Design Avenue",
);
export const earlierExperience = experience.filter(
  (item) => item.company !== "Design Avenue",
);

export const projects: ProjectItem[] = [
  {
    name: "ContextRAG",
    slug: "contextrag",
    featured: true,
    tech: [
      "React.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Vector Search",
      "BM25",
      "Reranking",
      "LLM APIs",
    ],
    description:
      "A production-grade hybrid RAG studio: dense vector search fused with BM25 keyword retrieval, cross-encoder reranking, and an enforced citation contract so every LLM claim is traceable to a source chunk.",
    github: "https://github.com/harshmann10/ContextRAG",
    live: "https://context-rag.vercel.app/",
    image: contextragChatDarkImg,
    caseStudy: {
      tagline:
        "A production-grade universal document RAG engine — grounded answers with enforced citations.",
      role: "Solo full-stack build — Express 5 TypeScript backend, React 19 frontend, MongoDB Atlas data layer.",
      problem:
        "LLMs hallucinate when answering over private documents. Teams need answers traceable to source evidence — not plausible guesses — across messy real-world formats like PDFs, spreadsheets, and slide decks.",
      approach:
        "Two pipelines. An ingestion pipeline turns 15 document formats into parent-child chunk structures with 2048-dim embeddings. A multi-stage query pipeline fuses dense and sparse retrieval, reranks with a cross-encoder, and generates strict-JSON answers whose numbered citations are validated end-to-end by the prompt, the normalizer, and the renderer.",
      architecture: [
        {
          title: "File-first ingestion",
          detail:
            "One unified pipeline ingests 15 formats (PDF, DOCX, XLSX, PPTX, MD, TXT, JSON, CSV, images) via Xberg extraction, with a live 4-stage pipeline visualizer in the UI.",
        },
        {
          title: "Structural chunking",
          detail:
            "A custom AST-like chunker respects markdown headers, tables, and code fences — producing parent sections for LLM context and child chunks for precise retrieval.",
        },
        {
          title: "2048-dim embeddings",
          detail:
            "Child chunks are embedded with NVIDIA NIM (nemotron-3-embed-1b) and stored in MongoDB Atlas with auto-provisioned vector and full-text indexes.",
        },
        {
          title: "Hybrid retrieval",
          detail:
            "Dense vector search (Atlas $vectorSearch, cosine) runs in parallel with sparse BM25 keyword search (Atlas Lucene) to catch both semantic and exact-match signals.",
        },
        {
          title: "Reciprocal Rank Fusion",
          detail:
            "RRF merges dense and sparse ranked lists, then hydration attaches parent context and deduplicates — keeping the best child per parent section.",
        },
        {
          title: "Cross-encoder reranking",
          detail:
            "Cohere Rerank v4.0 Pro rescores fused candidates for fine-grained relevance and prunes weak context before generation.",
        },
        {
          title: "Enforced citation contract",
          detail:
            "Gemma 4 (31B-IT) emits strict JSON answers with numbered evidence IDs — validated by prompt, normalizer, and renderer, so every claim maps to a retrievable source chunk.",
        },
        {
          title: "Offline evaluation harness",
          detail:
            "A 40-question golden dataset drives four ablation variants — BM25, vector, hybrid RRF, and hybrid RRF + rerank. Pure metrics plus an LLM judge score retrieval and generation quality; a committed JSON snapshot is served read-only for transparent demo benchmarks.",
        },
      ],
      highlights: [
        "Hybrid retrieval — 2048-dim Atlas Vector Search fused with BM25 via Reciprocal Rank Fusion",
        "100% Recall@10 across a 40-question golden set; hybrid + rerank lifts MRR to 98.5% with zero false positives",
        "5/5 mean faithfulness & relevancy from an LLM judge, with ~95% citation precision",
        "Cohere Rerank v4.0 Pro cross-encoder prunes irrelevant context before generation",
        "Enforced citation contract with per-answer citation-match score and an interactive evidence drawer",
      ],
      metrics: [
        { label: "Recall@10 · 34 answerable questions", value: "100%" },
        { label: "MRR · hybrid RRF + rerank", value: "98.5%" },
        { label: "Faithfulness & relevancy · 24 judged", value: "5/5" },
        { label: "Citation precision · mean", value: "95%" },
        { label: "False positives · 6 unanswerable", value: "0" },
      ],
      gallery: [
        {
          src: contextragChatDarkImg,
          alt: "ContextRAG chat interface in dark mode with inline citation badges",
          caption:
            "Chat with inline citation badges and a per-answer citation-match score.",
        },
        {
          src: contextragCitationDrawerImg,
          alt: "ContextRAG citation drawer showing source chunk and retrieval scores",
          caption:
            "Evidence drawer — source chunk, heading path, retrieval and rerank scores.",
        },
        {
          src: contextragKnowledgeBaseImg,
          alt: "ContextRAG knowledge base view with file ingestion queue",
          caption:
            "Knowledge Base — drag-and-drop ingestion hub with live pipeline stepper.",
        },
        {
          src: contextragChatLightImg,
          alt: "ContextRAG chat interface in light mode",
          caption: "Dual-theme design system driven by runtime CSS variables.",
        },
      ],
      learnings: [
        "Structured-output contracts turn LLMs from plausible guessers into verifiable systems — validation belongs at every layer, not just the prompt.",
        "RRF + cross-encoder reranking is a pragmatic default: cheap recall from two channels, then expensive precision applied to a small candidate set.",
        "Production hardening matters as much as the pipeline — security headers, rate limiting, gzip, centralized retries with backoff, and soft deletes across the knowledge layer.",
        "A golden set with ablation variants turns 'the RAG works' into evidence: hybrid + rerank won on precision while BM25 stayed roughly 10x faster, so the production default is a measured tradeoff, not a reflex.",
      ],
    },
  },
  {
    name: "DevTinder",
    slug: "devtinder",
    featured: true,
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Razorpay",
    ],
    description:
      "A full-stack developer networking platform: interest-based matching, connection requests, real-time Socket.io chat with presence tracking, and Razorpay-powered premium memberships.",
    github: "https://github.com/harshmann10/DevTinder-frontend",
    githubBackend: "https://github.com/harshmann10/DevTinder-backend",
    live: "https://devtinder01.vercel.app/",
    image: devtinderImg,
    caseStudy: {
      tagline:
        "Real-time developer networking — matching, chat, presence, and payments across a two-repo MERN system.",
      role: "Full-stack build across two repositories — modular Express + MongoDB backend, React + Redux Toolkit frontend, Socket.io realtime layer.",
      problem:
        "Developers looking for collaborators have no focused space to find people with aligned project interests — generic social platforms bury the signal behind feeds and follower counts, and a networking product only works if matching, chat, and presence all feel instant.",
      approach:
        "Split into two deployable apps. A Node.js/Express backend with modular routers (auth, profile, connections, users, chat, payments), JWT auth in secure cookies, and indexed MongoDB schemas. A React + Vite + Redux Toolkit frontend on top. Socket.io carries realtime chat and presence; Razorpay handles premium memberships; a documented AWS EC2 + PM2 + Nginx path covers deployment.",
      architecture: [
        {
          title: "Connection request engine",
          detail:
            "Send/review flows with enum-validated statuses; Mongoose .pre middleware blocks self-requests and MongoDB validation prevents duplicate requests between the same pair of users.",
        },
        {
          title: "Feed API with pagination",
          detail:
            "Suggested developers exclude self, existing connections, ignored users, and pending requests via $nin/$ne operators — skip/limit pagination over compound-indexed fields.",
        },
        {
          title: "Auth & security",
          detail:
            "JWT issued in secure HTTP-only cookies, bcryptjs password hashing, auth middleware protecting private routes, centralized error handling, and email-based password reset.",
        },
        {
          title: "Realtime chat",
          detail:
            "Socket.io with socket-level authentication validating users before messaging; chat history persisted to MongoDB on indexed, timestamped schemas.",
        },
        {
          title: "Presence tracking",
          detail:
            "Online/offline status and last-seen driven by socket connect/disconnect events with online-user broadcasting — kept out of hot database paths.",
        },
        {
          title: "Payments",
          detail:
            "Razorpay premium memberships end to end: order creation, webhook handling, payment verification, and payment history tracking.",
        },
        {
          title: "Deployment path",
          detail:
            "Documented AWS deployment: PM2 process manager, Nginx reverse proxy (SPA try_files routing + /api proxy), and MongoDB Atlas IP allow-listing.",
        },
      ],
      stackDecisions: [
        {
          title: "Two repos, modular routers",
          detail:
            "Auth, profile, connections, users, chat, and payments live as separate Express routers — the backend stays navigable and each concern can scale independently.",
        },
        {
          title: "Socket.io over polling",
          detail:
            "Presence and instant messaging demand persistent connections; broadcast events for online users avoid per-keystroke database reads.",
        },
        {
          title: "Redux Toolkit for shared state",
          detail:
            "The logged-in user, feed, connections, and chat state are read across many routes — slices with a single store beat prop drilling at this size.",
        },
        {
          title: "Vite for the frontend",
          detail:
            "Instant HMR and lean builds for the React client, keeping the edit-test loop tight across two codebases.",
        },
      ],
      highlights: [
        "Socket.io chat with online/offline presence and last-seen — socket-level auth validation, status kept off hot DB paths",
        "Compound-indexed MongoDB: paginated feed via $nin/$ne and duplicate-proof connection requests via .pre middleware",
        "Razorpay payments end to end — order creation, webhook handling, verification, and history",
      ],
      gallery: [
        {
          src: devtinderImg,
          alt: "DevTinder application interface",
          caption:
            "Feed and connection flows across the React + Redux Toolkit frontend.",
        },
      ],
      learnings: [
        "Realtime features are mostly data-modeling problems — presence and last-seen are cheap when sockets carry the state and indexes are designed for the query patterns.",
        "Modular routers and two deployable repos made the growing MERN codebase navigable — and let backend changes ship without touching the frontend.",
        "Writing down the EC2 + PM2 + Nginx deployment path turned ops from a scramble into a checklist — deployment is design, not an afterthought.",
      ],
    },
  },
  {
    name: "AI Chat TOC",
    slug: "ai-chat-toc",
    featured: true,
    tech: ["JavaScript", "WebExtensions API", "HTML", "CSS"],
    description:
      "A browser extension adding an auto-generated, drag-and-drop Table of Contents sidebar to ChatGPT, Claude, Gemini, Perplexity, and Grok — used by 600+ people across three extension stores.",
    github: "https://github.com/harshmann10/AI-Chat-TOC",
    live: "https://chromewebstore.google.com/detail/ai-chat-toc/ainbhafdpkbgbkcomkhkilokelolnnpn",
    liveLabel: "Chrome Web Store",
    image: aiTocImg,
    caseStudy: {
      tagline:
        "A live table of contents for long AI conversations — across five platforms and three add-on stores.",
      role: "Solo build — vanilla JavaScript on the WebExtensions API, dual Manifest V2/V3 targets, zero framework.",
      problem:
        "Long AI chat threads become unnavigable — finding an earlier answer means endless scrolling. Worse, every provider renders conversations with a different DOM structure, and keeps changing it.",
      approach:
        "A single shared source that ships to Chrome/Edge (Manifest V3) and Firefox (Manifest V2) through PowerShell build scripts. A throttled DOM observer rebuilds the outline in near real time, and users get keyword search, AI-answer previews, drag-and-drop positioning, per-site position memory, and export to text or markdown.",
      architecture: [
        {
          title: "Dual-manifest cross-browser core",
          detail:
            "One src/ tree plus two manifests — MV3 for Chrome/Edge, MV2 for Firefox — packaged into store-ready zips, so feature work happens once.",
        },
        {
          title: "Adaptive DOM parsing",
          detail:
            "A per-platform site config tracks conversation structure across ChatGPT, Gemini, Perplexity, Claude, and Grok, with per-platform accent theming.",
        },
        {
          title: "Throttled observation",
          detail:
            "500ms intelligent throttling with idle safety checks — the TOC updates instantly as messages arrive, with near-zero perceptible lag.",
        },
        {
          title: "Navigation tooling",
          detail:
            "Search and filter across queries and AI answer text, toggleable inline answer previews, drag-and-drop repositioning, bidirectional resize, and per-site position memory.",
        },
        {
          title: "Export & shortcuts",
          detail:
            "Copy or download the outline as text or markdown; Ctrl+Shift+F toggles visibility, customizable natively in each browser.",
        },
      ],
      stackDecisions: [
        {
          title: "Zero-framework vanilla JS",
          detail:
            "No build toolchain and no framework runtime — maximum store compatibility and a minimal footprint for a utility extension.",
        },
        {
          title: "Throttle, don't react",
          detail:
            "Naive DOM observation stutters heavy chat pages; 500ms throttling with idle checks makes updates invisible to the user.",
        },
        {
          title: "One source, two manifests",
          detail:
            "MV2/MV3 differences are isolated in the manifests, so the same feature ships to all three stores without forking the codebase.",
        },
      ],
      highlights: [
        "600+ active users across the Chrome Web Store, Firefox, and Edge",
        "Live TOC across ChatGPT, Gemini, Perplexity, Claude, and Grok — with search, answer previews, and markdown export",
        "Near-zero-lag updates via 500ms throttled DOM observation with idle safety checks",
      ],
      gallery: [
        {
          src: aiTocImg,
          alt: "AI Chat TOC extension sidebar in an AI chat interface",
          caption: "The TOC sidebar live inside an AI chat session.",
        },
      ],
      learnings: [
        "Shipping to real users on three extension stores teaches defensive engineering — provider DOMs change without notice, so the parser must fail soft.",
        "Throttling and idle checks turned a laggy prototype into something invisible — the best performance work is the kind users never notice.",
        "Distribution is a feature: store listings, reviews, and versioned releases are part of the product, not an afterthought.",
      ],
    },
  },
  {
    name: "Antigravity Telemetry",
    slug: "antigravity-telemetry",
    featured: true,
    tech: [
      "JavaScript",
      "VS Code",
      "WebExtensions API",
      "SQLite",
      "Protobuf",
      "Tailwind CSS",
      "SVG Charts",
    ],
    description:
      "A zero-dependency VS Code extension that turns Antigravity's local telemetry into a live context/token monitor and visual observability dashboard — published on the VS Marketplace and Open VSX, with 200+ installs and 2k+ downloads.",
    github: "https://github.com/harshmann10/Antigravity-Telemetry",
    live: "https://marketplace.visualstudio.com/items?itemName=HarshMann.antigravity-telemetry",
    liveLabel: "Marketplace",
    image: antigravityTelemetryImg,
    caseStudy: {
      tagline:
        "Real-time LLM context and token intelligence for Antigravity — fully local, zero dependencies, and safe storage hygiene.",
      role: "Solo build and published extension — Node.js built-ins + VS Code Extension API, local SQLite and protobuf decoding, no external packages.",
      problem:
        "Antigravity doesn't show how close a session is to its 256k working ceiling until compaction abruptly cuts history. Its native chat deletion often leaves 20–80 MB of orphaned databases, transcripts, and media behind, background subagents clutter chat lists with generic titles, and telemetry lives in separate stores across the IDE, editor extension, and CLI. Most observability tools also send data off-machine or burn model tokens.",
      approach:
        "Read everything locally — SQLite catalogs and protobuf trajectory records — and surface it in a live status bar plus a webview dashboard. Multi-root discovery merges IDE, editor, and CLI sessions behind an anti-hijacking priority hierarchy. Deletion wipes all seven storage layers with Windows Recycle Bin protection by default, and every path is verified gone before the catalog row is purged. A disk-based cache keeps restarts at ~50 ms with zero bytes of network traffic over Remote SSH.",
      architecture: [
        {
          title: "Zero-dependency telemetry engine",
          detail:
            "Pure Node.js built-ins decode binary protobuf fields and query Antigravity's SQLite stores directly. Zero npm packages, zero network requests, zero model tokens — every number is read from disk.",
        },
        {
          title: "256k-token context intelligence",
          detail:
            "A live status bar item shows the active chat, context tokens, fill % against the calibrated 256,000-token ceiling, and cache hit rate — with proactive compaction notices and a rich hover breakdown.",
        },
        {
          title: "Visual observability dashboard",
          detail:
            "A side-by-side webview with four KPI cards, a dual-layer SVG timeline (context curve, clamped cached area, compaction markers), tri-state context health, segmented allocation, and a searchable files-touched drawer.",
        },
        {
          title: "Subagent role decoding",
          detail:
            "Decodes internal protobuf task records into real roles (e.g. Icon Designer, Research Assistant) with nested collapsible drawers, parent-child cost rollups, and breadcrumb links back to parent sessions.",
        },
        {
          title: "Zero-residue deletion",
          detail:
            "Wipes all seven storage layers — DB/WAL/SHM files, brain transcripts, annotations, browser recordings, implicit data, and the catalog row — with Recycle Bin by default, locked-file detection, and post-delete verification before any row is removed.",
        },
        {
          title: "Multi-root session discovery",
          detail:
            "Host-aware detection unifies the standalone IDE, VS Code/VSCodium/Cursor/Windsurf extension, and antigravity-cli sessions, with IDE/CLI origin badges, workspace scoping, and a 4-tier priority that stops background CLI jobs hijacking the active editor chat.",
        },
        {
          title: "Remote-friendly performance",
          detail:
            "Persistent caches live in globalStorageUri (not globalState), so Remote SSH syncs 0 bytes; inactive timelines are stripped before webview IPC (~88–95% smaller payloads), with visibility guards and signature dirty-checking on the 10-second poll.",
        },
      ],
      stackDecisions: [
        {
          title: "Zero dependencies / zero network",
          detail:
            "Only Node.js built-ins and the VS Code API — a wrong number is a parser bug, never a connectivity issue. The extension stays installable anywhere, offline, with no telemetry of its own.",
        },
        {
          title: "Disk cache over globalState",
          detail:
            "Large caches in globalState would stream megabytes over the Remote SSH RPC tunnel on every tick. File-based storage in globalStorageUri keeps warm starts at ~50 ms and heartbeats at ~6 ms with zero network bytes.",
        },
        {
          title: "Nonce CSP-safe webview",
          detail:
            "A strict script nonce means no inline handlers — all events are bound by element ID in bindEvents(). The precompiled Tailwind stylesheet is committed, so the webview needs no build step at runtime.",
        },
      ],
      highlights: [
        "200+ VS Marketplace installs and 2k+ Open VSX downloads",
        "Live 256k-token context monitor with a dual-layer SVG timeline and compaction warnings",
        "Zero-residue cleanup across all 7 storage layers, with Recycle Bin protection by default",
        "Subagent role decoding with nested drawers and parent-child cost rollups",
        "Unified IDE, editor, and CLI sessions with ~50 ms warm starts and 0-byte Remote SSH syncs",
      ],
      metrics: [
        { label: "VS Marketplace installs", value: "200+" },
        { label: "Open VSX downloads", value: "2k+" },
        { label: "Calibrated token ceiling", value: "256k" },
        { label: "Warm startup", value: "~50 ms" },
        { label: "npm dependencies / network calls", value: "0" },
      ],
      gallery: [
        {
          src: antigravityTelemetryImg,
          alt: "Antigravity Telemetry visual observability dashboard",
          caption:
            "The live dashboard — KPI cards, context timeline, health diagnostics, and conversation list.",
        },
      ],
      learnings: [
        "Local-only tooling earns trust: decoding bytes on disk instead of calling an API makes the extension fast, private, and free to run in air-gapped setups.",
        "Remote SSH changes the performance budget — IPC payload size and where cache bytes live matter more than raw CPU time, so decimation and file-backed state were first-class design constraints.",
        "Shipping to two registries is a product surface: versioned changelogs, marketplace listings, and a packaged .vsix are part of the work, not an afterthought.",
      ],
    },
  },
  {
    name: "Web Music Player",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "An interactive web-based audio player emphasizing custom playback controls, dynamic playlist queues, keyboard shortcuts, and state synchronization. Optimized for fluid visual transitions and DOM performance.",
    github: "https://github.com/harshmann10/music-player",
    live: "https://freemusic1.netlify.app/",
    image: musicPlayerImg,
  },
  {
    name: "Pixel Blog",
    tech: ["React.js", "Appwrite", "TinyMCE", "Redux Toolkit", "Tailwind CSS"],
    description:
      "A responsive content management platform leveraging Appwrite as a Backend-as-a-Service (BaaS). Implements rich-text editing via TinyMCE, secure multi-user authentication, and automated file storage/retrieval.",
    github: "https://github.com/harshmann10/PixelBlog",
    live: "https://pixel-blog-puce.vercel.app/",
    image: pixelBlogImg,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archivedProjects = projects.filter((p) => !p.featured);
export const caseStudySlugs = projects
  .filter((p) => p.slug)
  .map((p) => p.slug as string);

export const skills: Skills = {
  tiers: [
    {
      title: "Frontend",
      caption: "Typed, state-driven UIs",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Systems",
      caption: "APIs, realtime & auth",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.io",
        "JWT",
        "RBAC",
        "Java",
      ],
    },
    {
      title: "Databases & Cloud",
      caption: "Data modeling & infrastructure",
      items: [
        "MongoDB",
        "$vectorSearch",
        "Aggregation Pipelines",
        "MySQL",
        "SQL",
        "AWS",
        "GCP",
        "Git/GitHub",
      ],
    },
    {
      title: "AI / Retrieval",
      caption: "Context-grounded LLM pipelines",
      items: [
        "RAG Systems",
        "Hybrid Retrieval",
        "Vector Search",
        "BM25",
        "Reranking",
        "Embeddings",
        "OpenAI",
        "Claude",
        "Gemini",
      ],
    },
  ],
};
