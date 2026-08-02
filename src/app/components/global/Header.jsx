import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='container mx-auto px-4 md:py-4 relative inset-0  overflow-hidden'>
      <div className='absolute top-0 left-1/3 w-125 h-125 bg-pink-100 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute top-20 right-1/3 w-100 h-100 bg-purple-100 rounded-full blur-3xl opacity-20'></div>
        <div className='absolute bottom-0 left-1/4 w-112.5 h-112.5 bg-yellow-50 rounded-full blur-3xl opacity-40'></div>
        <div className='flex items-center justify-between '>
            <h2 className='text-xl md:text-3xl'>Foysal Jaman<span className='text-purple-600 '>.</span></h2>
            
             <ul className='flex items-center gap-4 justify-between'>
                    <li> <Link className='cursor-pointer' href={'/'}>Home</Link></li>
                    <Link href={'#about'} className='cursor-pointer' > <li> About</li> </Link>
                     <Link className='cursor-pointer' href={'#projects'}> <li> Projects</li> </Link>
              </ul>
            
        </div>
    </div>
  )
}
