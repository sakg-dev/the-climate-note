import { Leaf } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#f4f1e8] flex flex-col items-center py-8 gap-6'>
        <div className='flex gap-2'>
            <Leaf className="text-[#5a7a4a]" size={32}/>
            <p className='text-2xl text-[#2d5016] font-semibold'>The Climate Note</p>
        </div>
        <p className='text-[#5a7a4a]'>Daily climate action, written by the youth, for the youth.</p>
        <ul className='flex gap-12 text-[#5a7a4a]'>
            <li><Link href={"mailto:support@email.com"} target="_blank">Contact</Link></li>
            <li><Link href={"/privacy"} target="_blank">Privacy</Link></li>
        </ul>
        <p className='text-sm text-[#5a7a4a]'>&copy; {new Date().getFullYear()} The Climate Note. Made with care for the planet.</p>
    </div>
  )
}

export default Footer