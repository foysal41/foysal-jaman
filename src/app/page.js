import Image from "next/image";
import { DiVim } from "react-icons/di";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Skills from "./components/homepage/Skills";
import Projects from "./components/homepage/Projects";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}
