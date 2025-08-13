"use client"
import { motion } from 'framer-motion';
import { PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import React, { useState } from 'react'
import Image from "next/image";
import python from "../images/python.png";
import java from "../images/java.png"
import javascript from "../images/javascript.png"
import csharp from "../logos/csharp.png"

import { useRouter } from 'next/navigation';

const Menu = () => {
    let [isClick, setClick] = useState(false);

    const handleClick = ()=>{
        setClick(isClick = !isClick);
    }

    const router = useRouter();

    const languages = [
        {
            icon: python,
            name: 'Python',
        },
        {
            icon: java,
            name: 'Java'
        },
        {
            icon: javascript,
            name: 'Javascript'
        },
        {
            icon: csharp,
            name: 'Csharp'
        }
    ]

  return (
    <>
    <div onClick={() => handleClick()} className='fixed bg-black z-20 hover:scale-[1.1] transition-all duration-500 cursor-pointer rounded-full border-2 p-2 top-0 right-0 m-2'>
            {!isClick ? <PanelRightOpen className='w-7 h-7'/> : <PanelLeftOpen className='w-7 h-7'/>}
    </div>
    <motion.div
    initial={{display: 'none'}}
    animate={{width: isClick ? 300 : 0, display: isClick ? 'flex' : 'none'}}
    className='fixed flex-col max-w-[200px] items-center hidden justify-center top-0 right-0 z-2 h-full bg-black'>
        <h1 className='whitespace-nowrap blackPop mb-10 text-transparent text-3xl bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text'>Pick a Language</h1>
        <motion.div className="flex flex-wrap gap-2 w-full items-center justify-center">
            {languages.map((program, index) =>{
         return <div key={index} onClick={() => router.push(`${program.name}`)} className='flex items-center gap-2 border mt-4 p-2 rounded-md hover:scale-[1.1] cursor-pointer transition-all duration-500'>
            <Image loading="lazy" src={program.icon} alt="python" className='w-7 h-7 object-cover'/>
            <h1 className='blackPop text-xl'>{program.name}</h1>
            </div>
            })}
        </motion.div>
    </motion.div>
    </>
  )
}

export default Menu