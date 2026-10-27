
import Image from "next/image";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Skills from "./components/homepage/Skills";

import ProfessionalTimeline from "./components/homepage/ProfessionalTimeline";
import Projects from "./components/homepage/Projects";
import ContactCTA from "./components/homepage/ContactCTA";


export default function Home() {

  return (
    <div className="">
        <Hero  ></Hero>
        <About></About>
        <Skills></Skills>
        <ProfessionalTimeline></ProfessionalTimeline>
        <Projects></Projects>
        <ContactCTA></ContactCTA>

    </div>
  );
}
