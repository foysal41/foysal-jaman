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
    <SectionHeading title={"About"}></SectionHeading>
    <h2 className='text-3xl font-normal'>Building modern ideas into ; 
powerful digital experiences.</h2>
    <p className=" text-md md:text-lg text-[#717171]"> I’m Foysal Jaman, a Full-Stack Web Developer specializing in React, Next.js, TypeScript, and Node.js. I graduated in 2023 with a BBA in Management and have <strong className='text-black'>3 years of experience</strong> working with WordPress. I’m passionate about coding, problem-solving, and building modern web experiences. <br></br><br></br>

I build scalable web applications, including e-commerce and learning management platforms, with features like AI-powered product descriptions, marketing captions, lead generation tools, AI shopping assistants, and visual product search.  My goal is to <strong className='text-black'>identify gaps  in existing e-commerce systems </strong> and LMS platforms, then build innovative features that solve real-world problems.<br></br><br></br>

I believe great engineering starts with strong fundamentals. While optimizing our e-commerce project, I identified a countdown timer causing over 1,000 re-renders in the DealsOfTheDay section. I addressed the root cause by separating the component, reducing re-renders from over <strong className='text-black'>1,000 to just 2</strong>. This experience strengthened my approach to debugging. I also explore technical SEO and AI automation using OpenAI APIs, webhooks, and n8n.</p>

    
  </div>
</div>
  )
}
