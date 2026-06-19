import devtinderImg from "@/assets/projects/Devtinder.png";
import aiTocImg from "@/assets/projects/AIToc.png";
import pixelBlogImg from "@/assets/projects/PixelBlog.png";
import musicPlayerImg from "@/assets/projects/MusicPlayer.png";
import { StaticImageData } from "next/image";

export type Profile = {
  name: string;
  role: string;
  bio: string;
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
  period: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
  image?: StaticImageData | string;
};

export type Skills = {
  languages: string[];
  frameworks: string[];
  tools: string[];
};

export const profile: Profile = {
  name: "Harsh Mann",
  role: "Full Stack Developer",
  bio:
    "I am a Full Stack Developer specializing in building high-performance, scalable web applications. Currently at Design Avenue, I architect and build enterprise GRC and HRMS platforms, focusing on robust REST API design and intelligent AI-driven integrations. I combine secure, efficient backend logic with clean, modern UI/UX to deliver seamless digital products.",
  links: {
    linkedin: "https://www.linkedin.com/in/harsh-mann01/",
    github: "https://github.com/harshmann10",
    email: "harshmann8008@gmail.com",
    resume: "https://drive.google.com/file/d/1xgjg8HCSZI-KWEu42u1juT452FmVq8uW/preview",
  },
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Design Avenue",
    period: "Feb 2026 - Present",
    highlights: [
      "Architect and scale core modules for high-traffic GRC (Governance, Risk, and Compliance) and HRMS enterprise platforms.",
      "Developed and deployed specialized cybersecurity platforms, engineering automated repository vulnerability scanners, pentest submission workflows, and dynamic security report generation systems.",
      "Lead backend optimization efforts, streamlining database aggregation pipelines and API routes to reduce latency.",
      "Design and deploy secure third-party integrations and complex role-based access control (RBAC) permission systems.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Design Avenue",
    period: "Aug 2025 - Jan 2026",
    highlights: [
      "Co-engineered core microservices and database schemas for ChemDoc and HRMS platforms using the MERN stack.",
      "Developed secure, high-performance REST APIs and reusable React.js components styled with Tailwind CSS.",
      "Built Retrieval-Augmented Generation (RAG) features utilizing vector search to enable automated, intelligent document parsing.",
      "Engineered automated workflows and robust role-based access protocols to handle multi-tenant enterprise data securely.",
    ],
  },
  {
    title: "Java Developer Intern",
    company: "Codsoft",
    period: "Sep 2023 - Oct 2023",
    highlights: [
      "Developed robust, Object-Oriented Java applications, including an ATM Interface and a Student Grade Calculator.",
      "Applied core OOP principles, custom exception handling, and data structures to ensure code modularity and reliability.",
      "Designed clean, responsive command-line and graphical interfaces focusing on intuitive user workflows.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "The Spark Foundation",
    period: "Nov 2022 - Dec 2022",
    highlights: [
      "Built and launched interactive web projects, including custom landing pages and personal portfolio sites.",
      "Wrote clean, semantic HTML5, CSS3, and ES6+ JavaScript, maintaining cross-browser compatibility and responsive layouts.",
      "Followed mobile-first design methodologies, reducing page load times and optimizing rendering performance.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "DevTinder",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Razorpay",
      "Express.js",
      "Tailwind CSS",
      "DaisyUI",
    ],
    description:
      "A developer connection platform featuring real-time chat via Socket.io, mutual matching mechanics, and premium subscriptions integrated with Razorpay. Built with a responsive design, secure authentication, and global state management.",
    github: "https://github.com/harshmann10/DevTinder-frontend",
    live: "https://devtinder01.vercel.app/",
    image: devtinderImg,
  },
  {
    name: "AI Chat TOC",
    tech: ["HTML", "CSS", "JavaScript", "WebExtensions API"],
    description:
      "A highly successful productivity extension actively used by over 500+ users across three major extension stores (Chrome, Edge, Firefox). It adds a dynamic Table of Contents sidebar to major AI chat interfaces (ChatGPT, Claude, Gemini, Perplexity, Grok), featuring auto-generated navigation and drag-and-drop organization.",
    github: "https://github.com/harshmann10/AI-Chat-TOC",
    live: "https://chromewebstore.google.com/detail/ai-chat-toc/ainbhafdpkbgbkcomkhkilokelolnnpn",
    image: aiTocImg,
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

export const skills: Skills = {
  languages: ["JavaScript", "Java", "HTML", "CSS", "SQL"],
  frameworks: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "DaisyUI",
    "Socket.io",
  ],
  tools: ["MongoDB", "MySQL", "Git/GitHub", "VS Code", "Appwrite", "Razorpay", "Vercel"],
};
