import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='container mx-auto px-4 md:py-4 relative inset-0 -z-10 overflow-hidden'>
      <div className='absolute top-0 left-1/3 w-[500px] h-[500px] bg-pink-100 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute top-20 right-1/3 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-20'></div>
        <div className='absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-yellow-50 rounded-full blur-3xl opacity-40'></div>
        <div className='flex items-center justify-between '>
            <h2 className='text-3xl'>Foysal Jaman<span className='text-purple-600 text-5xl'>.</span></h2>
            
             <ul className='flex items-center gap-4 justify-between'>
                    <li> <Link href={'/'}>Home</Link></li>
                     <li> <Link href={'/'}>About</Link></li>
                      <li> <Link href={'/'}>Projects</Link></li>
              </ul>
            
        </div>
    </div>
  )
}
