"use client"
import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='h-screen flex flex-col justify-center text-center items-center gap-12'>
            <div className='absolute opacity-10 h-full w-full pointer-events-none'>
                <Image priority src={"/bg.jpg"} alt='climate' width={500} height={600} className='-z-10 h-full w-full object-cover none' />
            </div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className='text-[#2d5016] text-6xl font-bold'>The Climate Note</motion.h1>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className='text-[#5a7a4a] flex flex-col gap-1 text-xl'>
                <p>Daily climate action, delivered to your inbox</p>
                <p>Environmental issues and solutions — written by <span className='font-semibold'>the youth, for the youth</span></p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} >
                <Link href="#join" className='text-white bg-[#5a7a4a] rounded-full hover:bg-[#2d5016] transition-colors duration-400 py-6 px-8 '>Join our Newsletter</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 border-2 border-[#5a7a4a] rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-[#5a7a4a] rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero