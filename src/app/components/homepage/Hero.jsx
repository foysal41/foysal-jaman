import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { MdOutlineDownload } from 'react-icons/md'
import heroImage from "../../assets/foysal-upgrade.png"
import Link from 'next/link'

export default function Hero() {
  return (
        <div className='min-h-[60vh] flex items-center justify-center relative inset-0 -z-10 overflow-hidden px-5'> 
        <div className='absolute top-0 left-1/3 w-[500px] h-[500px] bg-pink-100 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute top-20 right-1/3 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-20'></div>
        <div className='absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-yellow-50 rounded-full blur-3xl opacity-40'></div>
          <div className='text-center z-100 space-y-4 md:space-y-8'> 
            <Image src={heroImage} alt='foysal jaman' className='h-30 w-30 rounded-full mx-auto border-3 border-b-purple-500 border-r-purple-500  border-l-purple-500 '></Image>
            <p className='text-2xl font-normal'>Hi! Im Foysal Jaman</p>
            <h1 className='text-3xl md:text-5xl font-bold ' >Full Stack Web Developer</h1>
            <p >I build fast, modern web apps with React, Next.js & Node.js — with 15+ projects deployed on Vercel, Netlify & GitHub.</p>
            
            <div className='space-x-4 flex items-center justify-center'>
              <a href="#projects" className='cursor-pointer  '><button className='bg-black rounded-full px-4 py-3 text-white flex items-center gap-2 text-sm'>View My Work<FaLongArrowAltRight /> </button></a>

              <Link  href="https://drive.google.com/file/d/1So85OW5B_1o6QXOtyJGR1b_f__LH5piR/view?usp=sharing" className='border rounded-full cursor-pointer  px-4 py-3 flex items-center gap-2 text-sm' >Resume <MdOutlineDownload /></Link>
             
            </div>

          </div>
    </div>
  )
}
