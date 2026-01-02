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
    "Hi, I'm Harsh Mann. I build scalable web applications with the MERN stack, bridging complex backend logic with clean, user-centric UIs.",
  links: {
    linkedin: "https://www.linkedin.com/in/harsh-mann01/",
    github: "https://github.com/harshmann10",
    email: "Eharshmann8008@gmail.com",
    resume: "https://drive.google.com/drive/folders/placeholder",
  },
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Developer Intern",
    company: "Design Avenue",
    period: "July 2025 - Present",
    highlights: [
      "Developed modules for ChemDoc and HRMS. Built reusable UI components and secure REST APIs using React, Node.js, Express, and MongoDB.",
      "Enhanced a GRC platform with role-based access control (RBAC), workflow automation, and RAG features.",
    ],
  },
  {
    title: "Java Developer Intern",
    company: "Codsoft",
    period: "2023",
    highlights: [
      "Designed robust Java applications including a student-grade calculator and ATM interface.",
      "Focus on core Java concepts and problem-solving.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "The Spark Foundation",
    period: "2022",
    highlights: [
      "Designed and deployed multiple web applications including a personal portfolio and homepage using HTML, CSS, and JS.",
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
    ],
    description:
      "A platform for developers to match and collaborate. Features real-time chat (Socket.io) and secure payments (Razorpay).",
    github: "https://github.com/harshmann10/DevTinder-frontend",
    live: "https://devtinder01.vercel.app/",
  },
  {
    name: "Pixel Blog",
    tech: ["React.js", "Appwrite", "TinyMCE", "Redux"],
    description:
      "A feature-rich blogging app with authentication, rich-text editing, and CRUD capabilities powered by Appwrite.",
    github: "https://github.com/harshmann10/PixelBlog",
    live: "https://pixel-blog-puce.vercel.app/",
  },
  {
    name: "Web Music Player",
    tech: ["HTML", "CSS", "Vanilla JavaScript"],
    description:
      "An interactive audio player with playlists, shuffle/repeat logic, and dynamic DOM manipulation.",
    github: "https://github.com/harshmann10/music-player",
    live: "https://freemusic1.netlify.app/",
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
  ],
  tools: ["MongoDB", "MySQL", "Git/GitHub", "VS Code"],
};
