import { statType } from '@/lib/types'
import React, { useMemo } from 'react'

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
                return <div key={idx} className='flex flex-col gap-1'>
                    <p className='font-semibold text-4xl text-[#2d5016]'>{stat.value}</p>
                    <p className='text-[#5a7a4a]'>{stat.name}</p>
                </div>
            })}
        </div>
    )
}

export default Stats