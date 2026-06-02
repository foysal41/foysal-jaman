'use client'
import Image from "next/image";
import { DiVim } from "react-icons/di";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Skills from "./components/homepage/Skills";
import Projects from "./components/homepage/Projects";
import { motion, scale } from "motion/react"


export default function Home() {

  const sectionAnimation = {
    initial: {opacity: 0, scale: 0.8, y:60},
    whileInView: {opacity: 1, scale: 1, y:0},
    viewport: {once: false, amount: 0.3},
    transition: {duration: 0.8, scale: {type: "spring", visualDuration: 0.5, bounce: 0.3}}
  }
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <motion.div {...sectionAnimation}>
          <About></About>
      </motion.div>

      <motion.div {...sectionAnimation} >
           <Skills></Skills>
      </motion.div>
     

      <motion.div {...sectionAnimation} >
           <Projects></Projects>
      </motion.div>
     
    </div>
  );
}
