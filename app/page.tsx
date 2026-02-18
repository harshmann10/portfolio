import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GithubActivity from "@/components/GithubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <GithubActivity />
      <Contact />
      <Footer />
    </div>
  );
}
