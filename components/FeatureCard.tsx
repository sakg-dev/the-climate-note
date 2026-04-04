import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { featureType } from '@/lib/types'

const FeatureCard = ({ feature, delay }: { delay: number, feature: featureType }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }} className='w-[35vw] h-[60vh] rounded-4xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl'>
                <div className='h-[50%] pointer-events-none bg-grad relative'>
                    <Image width={500} height={600} src={feature.imageUrl} alt="img" className="h-full w-full object-cover" priority />
                    <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
                <div className='p-6 flex flex-col gap-4'>
                    <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.8, ease: "easeOut" }} className='text-[#2d5016] h-16 w-16 flex items-center justify-center rounded-full bg-[#d4e5d4]'>
                        {feature.icon}
                    </motion.div>
                    <h3 className='text-[#2d5016] font-semibold text-xl'>{feature.title}</h3>
                    <p className='text-[#5a7a4a] text-sm'>{feature.description}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default FeatureCard