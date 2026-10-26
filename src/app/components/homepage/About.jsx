import Image from 'next/image'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import { RiSchoolLine } from 'react-icons/ri'
import aboutImage from "@/app/assets/aboutMe.webp"
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <div  className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center px-3  py-20 gap-8' id='about'>
  <div className='z-10'>
    <Image src={aboutImage} alt='about_image' className='rounded-md '></Image>
    
  </div>

  <div className='z-10 space-y-6 '>
    <SectionHeading title={"Introduction"}></SectionHeading>
    <h2 className='text-5xl font-normal'>About Us</h2>
    <p className="text-base"> As a Full-Stack Developer with hands-on experience in WordPress, React, Next.js, TypeScript, and Node.js. I enjoy building responsive, user-friendly web applications and working across frontend and backend systems. Beyond coding, I actively research software development fundamentals, performance optimization, and modern web technologies to write better, more maintainable code and solve real-world problems.</p>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      <div className='border border-black/20 rounded-md  px-5 py-4 space-y-3'>
        <FaCode size={30}/>
        <h3 className='text-md font-semibold'>Languages & Skills</h3>
        <p className='text-base text-black/70 uppercase'> HTML, CSS, Tailwind, Typescript, JavaScript, DSA, React, Next.js, Node.js, Express, MongoDB, Better Auth </p>
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
