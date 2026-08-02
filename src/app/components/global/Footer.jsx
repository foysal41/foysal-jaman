import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import Link from 'next/link';




export default function Footer() {
  return (
    <div className=' bg-black px-5 py-5 text-white mt-5'>
      <div className=' container mx-auto flex flex-col md:flex-row md:items-center justify-between  gap-5'>
        <div>
           <h2 className='text-3xl'>Foysal Jaman<span className='text-purple-600 text-5xl'>.</span></h2>
           <p className='md:w-[50%]'>I build fast, modern web apps with React, Next.js & Node.js — with 15+ projects deployed on Vercel, Netlify & GitHub.</p>
        </div>

        <div>
          <h3 className='text-2xl font-bold'>Social links</h3>
          <ul>
            <Link href={'https://www.facebook.com/md.nirjon.96/'}><li className='flex items-center gap-2'><CiFacebook />Facebook</li></Link>
            <Link href={'https://www.linkedin.com/in/foysaljaman007/'}><li className='flex items-center gap-2'><CiLinkedin />Linkedin</li></Link>
            <Link href={'https://github.com/foysal41'}><li className='flex items-center gap-2'><CiYoutube />Github</li></Link>
          </ul>
        </div>


        <div>
          <h3 className='text-2xl font-bold'>Get In Touch </h3>
             <ul>
            <li className='flex items-center gap-2'><FaRegEnvelope />mdfoysal.mf33@gmail.com</li>
            <li className='flex items-center gap-2'><MdOutlinePhone />+8801701035894</li>
            <li className='flex items-center gap-2'><FiMapPin />Khulna, Bangladesh</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

