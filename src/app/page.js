
import Image from "next/image";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Skills from "./components/homepage/Skills";
import Projects from "./components/homepage/Projects";
import ProfessionalTimeline from "./components/ui/ProfessionalTimeline";

export default function Home() {

  return (
    <div className="">
        <Hero  ></Hero>
        <About></About>
        <Skills></Skills>
        <ProfessionalTimeline></ProfessionalTimeline>
        <Projects></Projects>

    </div>
  );
}
