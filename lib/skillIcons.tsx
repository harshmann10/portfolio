import { 
  SiJavascript, 
  SiHtml5, 
  SiCss, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiRedux, 
  SiDaisyui, 
  SiSocketdotio, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiAppwrite, 
  SiRazorpay, 
  SiVercel,
  SiTypescript,
  SiPostman,
  SiBruno,
  SiNetlify,
  SiRender,
  SiMongoose,
  SiOpenai,
  SiGooglegemini,
  SiClaude
} from "react-icons/si";
import { FaJava, FaDatabase, FaEdit } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { MdOutlineExtension } from "react-icons/md";

export const getSkillIcon = (skill: string, size: number = 16) => {
  switch (skill) {
    case "JavaScript":
      return <SiJavascript className="text-[#F7DF1E] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "TypeScript":
      return <SiTypescript className="text-[#3178C6] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Java":
      return <FaJava className="text-[#007396] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "HTML":
      return <SiHtml5 className="text-[#E34F26] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "CSS":
      return <SiCss className="text-[#1572B6] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "SQL":
      return <FaDatabase className="text-[#336791] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size - 1} />;
    case "React.js":
      return <SiReact className="text-[#61DAFB] flex-shrink-0 transition-transform duration-700 group-hover:rotate-180" size={size} />;
    case "Next.js":
      return <SiNextdotjs className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Node.js":
      return <SiNodedotjs className="text-[#339933] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Express.js":
      return <SiExpress className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-[#06B6D4] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Redux Toolkit":
      return <SiRedux className="text-[#764ABC] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "DaisyUI":
      return <SiDaisyui className="text-[#FFB800] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Socket.io":
      return <SiSocketdotio className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "MongoDB":
      return <SiMongodb className="text-[#47A248] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Mongoose":
      return <SiMongoose className="text-[#880000] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "MySQL":
      return <SiMysql className="text-[#4479A1] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Git/GitHub":
      return (
        <span className="flex items-center gap-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
          <SiGit className="text-[#F05032]" size={size - 2} />
          <span className="text-zinc-400 dark:text-zinc-600 text-[10px] font-normal">/</span>
          <SiGithub className="text-zinc-900 dark:text-zinc-100" size={size - 2} />
        </span>
      );
    case "VS Code":
      return <DiVisualstudio className="text-[#007ACC] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Postman":
      return <SiPostman className="text-[#FF6C37] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Bruno":
      return <SiBruno className="text-[#fbcd04] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Appwrite":
      return <SiAppwrite className="text-[#FD366E] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Razorpay":
      return <SiRazorpay className="text-[#0A2540] dark:text-[#3399FF] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size - 1} />;
    case "Vercel":
      return <SiVercel className="text-zinc-900 dark:text-zinc-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Netlify":
      return <SiNetlify className="text-[#00AD9F] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Render":
      return <SiRender className="text-[#462AF3] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "OpenAI":
      return <SiOpenai className="text-[#10A37F] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Claude":
      return <SiClaude className="text-[#E0B07A] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "Gemini":
      return <SiGooglegemini className="text-[#8E75C2] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "TinyMCE":
      return <FaEdit className="text-[#007F5F] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    case "WebExtensions API":
      return <MdOutlineExtension className="text-[#F2A900] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={size} />;
    default:
      return null;
  }
};
