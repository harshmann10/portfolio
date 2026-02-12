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
  image?: string;
};

export type Skills = {
  languages: string[];
  frameworks: string[];
  tools: string[];
};

export const profile: Profile = {
  name: "Harsh Mann",
  role: "Full Stack Developer (MERN)",
  bio:
    "I am a Full Stack Developer (MERN) with a passion for building scalable, high-performance web applications. Currently at Design Avenue, I've engineered complex GRC and HRMS solutions, focusing on robust REST APIs and RAG features. From real-time platforms like DevTinder to feature-rich content systems, I combine efficient backend logic with clean, modern UI/UX to create seamless digital products.",
  links: {
    linkedin: "https://www.linkedin.com/in/harsh-mann01/",
    github: "https://github.com/harshmann10",
    email: "harshmann8008@gmail.com",
    resume: "/resume.pdf",
  },
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Developer Intern",
    company: "Design Avenue",
    period: "Aug 2025 - Present",
    highlights: [
      "Architecting and scaling core modules for ChemDoc and HRMS using the MERN stack.",
      "Developing high-performance, secure REST APIs and reusable frontend components with React.js and Tailwind CSS.",
      "Engineered a comprehensive GRC platform integrated with Role-Based Access Control (RBAC) and automated workflows.",
      "Implementing Retrieval-Augmented Generation (RAG) features to enhance platform intelligence and data retrieval.",
    ],
  },
  {
    title: "Java Developer Intern",
    company: "Codsoft",
    period: "Sep 2023 - Oct 2023",
    highlights: [
      "Successfully designed and developed robust Java projects including a student-grade calculator and an ATM Interface.",
      "Demonstrated proficiency in core Java concepts, object-oriented programming, and complex problem-solving.",
      "Applied critical thinking to create practical solutions for real-world challenges, improving overall analytical abilities.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "The Spark Foundation",
    period: "Nov 2022 - Dec 2022",
    highlights: [
      "Designed, built, and deployed multiple engaging web experiences, including a personal portfolio and a redesigned homepage.",
      "Demonstrated proficiency in modern web standards including HTML5, CSS3, and JavaScript.",
      "Implemented innovative design solutions to enhance website aesthetics and usability, resulting in more modern and user-friendly platforms.",
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
      "A sophisticated full-stack developer matching platform featuring real-time communication via Socket.io and a secure payment ecosystem integrated with Razorpay. Implements complex state management and responsive design.",
    github: "https://github.com/harshmann10/DevTinder-frontend",
    live: "https://devtinder01.vercel.app/",
    image: "/projects/Devtinder.png",
  },
  {
    name: "Pixel Blog",
    tech: ["React.js", "Appwrite", "TinyMCE", "Redux Toolkit", "Tailwind CSS"],
    description:
      "A high-performance blogging engine leveraging Appwrite as a backend-as-a-service. Features a custom rich-text editor integration (TinyMCE), secure user authentication, and dynamic media handling.",
    github: "https://github.com/harshmann10/PixelBlog",
    live: "https://pixel-blog-puce.vercel.app/",
    image: "/projects/PixelBlog.png",
  },
  {
    name: "Web Music Player",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A custom-built audio streaming interface focused on advanced DOM manipulation and state synchronization. Features dynamic playlist management, intuitive keyboard controls, and responsive UI feedback.",
    github: "https://github.com/harshmann10/music-player",
    live: "https://freemusic1.netlify.app/",
    image: "/projects/MusicPlayer.png",
  },
  {
    name: "AI Chat TOC",
    tech: ["JavaScript", "WebExtensions API", "HTML", "CSS"],
    description:
      "A productivity-enhancing browser extension that adds a dynamic Table of Contents sidebar to major AI chat interfaces (ChatGPT, Claude, Gemini, Perplexity). Features include auto-generated navigation, drag-and-drop organization, and export functionality.",
    github: "https://github.com/harshmann10/AI-Chat-TOC",
    live: "https://addons.mozilla.org/en-US/firefox/addon/ai-chat-toc/",
    image: "/projects/AIToc.png",
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
  tools: ["MongoDB", "MySQL", "Git/GitHub", "VS Code", "Appwrite", "Razorpay","Vercel"],
};
