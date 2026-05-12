import Image from 'next/image'
import React from 'react'
import projectOne from "@/app/assets/projectOne.png"
import { IoArrowForward } from 'react-icons/io5'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  return (
   <div className='px-4 ' id='projects'>

    <div className='text-center z-10 mb-10'>
  <h2 className='text-5xl'>Projects</h2>
  <p className='text-base'>View my all projects here.</p>
</div>

<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
  <div className='border border-black/10 ' >
  <div className=' '>
    <Image src={projectOne} alt='project_one'></Image>
  </div>

  <div className='flex flex-row gap-3 justify-center items-center my-3 '>
    <span className='border border-purple-500 rounded-full px-2 py-1 text-purple-500 text-sm'>Next.Js</span>
    <span className='border border-purple-500 rounded-full px-2 py-1 text-purple-500 text-sm' >React.Js</span>
    <span className='border border-purple-500 rounded-full px-2 py-1 text-purple-500 text-sm'>Better Auth</span>
  </div>

    <div className='px-4'>
        <h3>KeenKeeper-Social App</h3>
  <p>KeenKeeper is a modern web application designed to help users maintain meaningful connections with their friends and family. By tracking interactions and setting communication goals, it ensures you never lose touch with the people who matter most.</p>

    </div>

  <div className='flex items-center justify-between px-4 py-3'> 
    <h4 className='flex items-center gap-2'>Live Demo <IoArrowForward /></h4>
    <p className='flex items-center gap-2 text-sm text-black/50'> <FaGithub /> Github</p>
  </div>

</div>



</div>

<div className='flex justify-center '>
  <button className='  border inline-auto border-purple-500 px-3 py-2 text-purple-500  rounded-full'>See All Projects</button>
</div>




</div>
  )
}
