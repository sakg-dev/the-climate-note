"use client"
import { statType } from '@/lib/types'
import React, { useMemo } from 'react'
import { motion } from "motion/react"

const Stats = () => {
    const stats: Array<statType> = useMemo(() => [
        {
            name: "Active Readers",
            value: "15K+"
        },
        {
            name: "Weekly Issues",
            value: "52+"
        },
        {
            name: "Satisfaction Rate",
            value: "98%"
        },
        {
            name: "Countries",
            value: "40+"
        },
    ], [])
    return (
        <div className='flex justify-around text-center py-16'>
            {stats.map((stat, idx) => {
                return <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} key={idx} className='flex flex-col gap-1'>
                    <p className='font-semibold text-4xl text-[#2d5016]'>{stat.value}</p>
                    <p className='text-[#5a7a4a]'>{stat.name}</p>
                </motion.div>
            })}
        </div>
    )
}

export default Stats