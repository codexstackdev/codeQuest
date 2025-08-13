"use client"
import { Github} from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    const router = useRouter();

  return (
    <footer className='w-full h-[200px] bg-gradient-to-b from-[rgba(82,39,255,0.14)] to-[rgba(39,30,55,0.12)]'>
        <div className='flex flex-col justify-evenly items-center h-full'>
            <h1 id='footer' className='font-[900] text-2xl bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent'>CodeQuest</h1>
            <p className='text-center'>Copyright&copy;{date} <span className='font-semibold'>codexstackdev</span> all rights reserved</p>
            <div className='flex gap-2'>
                <Github onClick={() => router.push("https://github.com/codexstackdev")} className={'border rounded-full w-10 h-10 p-2 hover:scale-[1.1] hover:shadow-md shadow-white transition-all duration-400 cursor-pointer'}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer