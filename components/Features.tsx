"use client"
import { featureType } from '@/lib/types'
import { Sprout, Sun, Waves, Wind } from 'lucide-react'
import React, { useMemo } from 'react'
import FeatureCard from './FeatureCard'


const Features = () => {
    const features: Array<featureType> = useMemo(() => [
        {
            icon: <Sprout size={32} />,
            title: "Stories of Growth",
            description: "Discover how communities around the world are regenerating ecosystems and building sustainable futures.",
            imageUrl: "/feature1.png"
        },
        {
            icon: <Waves size={32} />,
            title: "Ocean Stories",
            description: "Dive into the latest marine conservation efforts and innovative solutions protecting our oceans.",
            imageUrl: "/feature2.png"
        },
        {
            icon: <Wind size={32} />,
            title: "Renewable Energy",
            description: "Explore breakthrough clean energy technologies and the transition to a carbon-neutral future.",
            imageUrl: "/feature3.png"
        },
        {
            icon: <Sun size={32} />,
            title: "Hope & Action",
            description: "Find inspiration in practical climate solutions and simple actions that create meaningful change.",
            imageUrl: "/feature4.png"
        }
    ], [])
    return (
        <div className='flex flex-col items-center px-4 py-32 gap-16 bg-linear-to-b from-white to-[#f4f1e8]'>
            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-[#2d5016] text-4xl font-bold'>What We Cover</h2>
                <p className='text-lg text-[#5a7a4a]'>Daily stories that empower youth to understand climate challenges and take meaningful action. Every note brings you closer to making a real difference.</p>
            </div>
            <div className='grid grid-cols-2 gap-16'>
                {features.map((feature, idx) => {
                    return <FeatureCard key={idx} delay={idx * 0.1} feature={feature} />
                })}
            </div>
        </div >
    )
}

export default Features