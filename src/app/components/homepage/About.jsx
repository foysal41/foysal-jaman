import Image from 'next/image'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import { RiSchoolLine } from 'react-icons/ri'
import aboutImage from "@/app/assets/aboutMe.webp"

export default function About() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 py-20 gap-8'>
  <div className='z-10'>
    <Image src={aboutImage} alt='about_image' className='rounded-md '></Image>
  </div>

  <div className='z-10 space-y-6 '>
    <h4 className='text-xl '>Introduction</h4>
    <h2 className='text-5xl font-normal'>About Us</h2>
    <p className="text-base">I am a Full Stack Developer specialized in building high-performance web applications. My journey started with a curiosity for how things work on the internet, which evolved into a career of crafting digital experiences using React, Next.js, and Node.js. I dont just write code; I build solutions that are scalable, accessible, and user-centric. Whether its a pixel-perfect frontend or a robust backend architecture, I focus on quality and performance.</p>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      <div className='border border-black/20 rounded-md  px-5 py-4 space-y-3'>
        <FaCode size={30}/>
        <h3 className='text-md font-semibold'>Languages & Skills</h3>
        <p className='text-base text-black/70 uppercase'> HTML, CSS, Tailwind, JavaScript, DSA, React, Next.js, Node.js, Express, MongoDB, Better Auth </p>
      </div>

  <div className='border border-black/20 rounded-md  px-5 py-4 space-y-3'>
        <RiSchoolLine size={30}/>
        <h3 className='text-md font-semibold'>Education</h3>
        <p className='text-base text-black/70 uppercase'> Rupsha Collage Khulna - BBA of Management 2019-2024 </p>
      </div>

      
    </div>
  </div>
</div>
  )
}
