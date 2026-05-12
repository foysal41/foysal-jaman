import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiBetterauth } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



export default function Skills() {
  return (
    <div className='px-4  py-20'>

<div className='text-center z-10 pb-5'>
  <h2 className='text-5xl'>Technical Stack </h2>
  <p className='text-base'>A list of my preferred technologies for building high-quality web applications.</p>
</div>


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 items-center justify-center'>
  <div className='border border-black/20  rounded-md px-5 py-5 space-y-6' >
    <div className='flex flex-row gap-6 items-center justify-start z-10'>
        <FaReact style={{ color: "#51A2FF" }} className='bg-[#271C54] px-2 py-2 rounded-lg text-5xl ' />
          <h3 className='text-2xl'>Frontend Development</h3>
    </div>

    <div className='grid grid-cols-12 gap-4 mt-4 '>
      <div className='border col-span-6 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center  z-10'> <FaHtml5 style={{color: "#FD6800"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>HTML5</p></div>
      <div className='border col-span-6 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center ' z-10> <FaCss3Alt style={{color: "#2B7FFF"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>CSS 3</p></div>
      <div className='border col-span-8 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center  z-10'> <DiJavascript style={{color: "#FD6800"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>JavaScript</p></div>
      <div className='border col-span-4 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center z-10 '> <FaReact style={{color: "#11A9C4"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>React</p></div>
       <div className='border col-span-4 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center  z-10'> <RiNextjsFill style={{color: "#000000"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>Next Js</p></div>
        <div className='border col-span-8 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center  z-10'> <RiTailwindCssFill style={{color: "#00BCFF"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>Tailwind CSS</p></div>
    </div>
  </div>

   <div className='border border-black/20  rounded-md px-5  py-5 h-full flex items-start flex-col justify-stretch' >
    <div className='flex flex-row gap-6 items-center justify-center z-10'>
        <FaReact style={{ color: "#2FC850" }} className='bg-[#271C54] px-2 py-2 rounded-lg text-5xl ' />
          <h3 className='text-2xl'>Backend and Database</h3>
    </div>

    <div className='grid grid-cols-12 gap-4 mt-4  '>
      <div className='border col-span-6 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center  z-10'> <FaNodeJs style={{color: "#271C54"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>Node Js</p></div>
      <div className='border col-span-6 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center ' z-10> <DiMongodb style={{color: "#26A63E"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>MongoDB</p></div>
      <div className='border col-span-8 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center  z-10'> <SiBetterauth style={{color: "#F5830B"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>BetterAuth</p></div>
    
    </div>
  </div>

   <div className='border border-black/20  rounded-md px-5 py-5 h-full flex items-start flex-col justify-stretch' >
    <div className='flex flex-row gap-6 items-center justify-start z-10'>
        <FaGitAlt  style={{ color: "#FB2C36" }} className='bg-[#271C54] px-2 py-2 rounded-lg text-5xl ' />
          <h3 className='text-2xl'>Version Control & Tools</h3>
    </div>

    <div className='grid grid-cols-12 gap-4 mt-4 '>
      <div className='border col-span-6 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center  z-10'> <FaGitAlt  style={{color: "#FB2C36"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p>Git</p></div>
      <div className='border col-span-6 border-black/20 rounded-full py-1 px-2 flex flex-row items-center justify-center ' z-10> <FaGithub style={{color: "#000000"}}  className=' px-2 py-2 rounded-lg text-4xl '  /> <p> GitHub</p></div>
     
    </div>
  </div>
</div>

</div>
  )
}
