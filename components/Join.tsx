import React from 'react'
import { Input } from './ui/input'
import { Button } from '@/public/ui/button'

const Join = () => {
    return (
        <div id='join' className='bg-linear-to-br from-[#e8f4f8] to-[#d4e5d4] flex flex-col justify-center items-center text-center min-h-[70vh] gap-4'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[#2d5016] text-4xl font-semibold'>Join Our Newsletter</h2>
                <p className='text-[#5a7a4a]'>Discover untold environmental stories and turn reading into action through personalized sustainability notes.</p>
            </div>
            <div className='flex h-16 gap-2'>
                <Input className='bg-white shadow-lg h-full rounded-full w-[20vw] px-8 text-[17px]!'/>
                <Button className='bg-[#5a7a4a] text-white font-bold rounded-full h-full px-8'>Subscribe</Button>
            </div>
            <p className='text-[#5a7a4a] text-sm'>We respect your privacy. Unsubscribe anytime.</p>
        </div>
    )
}

export default Join