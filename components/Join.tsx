"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from '@/public/ui/button'
import { motion } from "motion/react"
import { validate } from "email-validator"
import Loading from './Loading'
import { joinResType } from '@/lib/types'
import { toast } from "sonner"

const Join = () => {
    const [loading, setLoading] = useState(false)
    const [emailId, setEmailId] = useState("")
    const handleJoin = async (e: React.MouseEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (validate(emailId)) {
                const req = await fetch("/api/join", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ emailId })
                })
                const res = (await req.json()) as joinResType
                if (!res.success) throw new Error(res?.errorMessage || "Something went wrong")
                // Email addedd successfully
                toast.success("Email has been added", { position: "top-center" })
                setEmailId("")
            } else {
                throw new Error("Invalid Email Address")
            }
        } catch (error) {
            if (error instanceof Error) toast.error(error.message, { position: "top-center" })
            else toast.error("Something went wrong", { position: "top-center" })
        }
        setLoading(false)
    }
    return (
        <div id='join' className='bg-linear-to-br from-[#e8f4f8] to-[#d4e5d4] flex flex-col justify-center items-center text-center min-h-[70vh] gap-4'>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className='flex flex-col gap-4'>
                <h2 className='text-[#2d5016] text-4xl font-semibold'>Join Our Newsletter</h2>
                <p className='text-[#5a7a4a]'>Discover untold environmental stories and turn reading into action through personalized sustainability notes.</p>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className='flex h-16 gap-2'>
                <Input value={emailId} onChange={(e) => { setEmailId(e.target.value) }} placeholder='Enter Your Email Id' type='email' className='bg-white shadow-lg h-full rounded-full w-[20vw] px-8 text-[16px]!' />
                <Button disabled={loading} onClick={(e) => { handleJoin(e) }} className='bg-[#5a7a4a] text-white font-bold rounded-full h-full px-8 text-[16px]!'>{loading && <Loading />}Subscribe</Button>
            </motion.form>
            <p className='text-[#5a7a4a] text-sm'>We respect your privacy. Unsubscribe anytime.</p>
        </div>
    )
}

export default Join