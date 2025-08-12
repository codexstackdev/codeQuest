"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';
import languages from "../images/languages.png"
import challenges from "../images/challenges.png"
import compile from "../images/compile.png"
import setup from "../images/setup.png"

const Feautures = () => {
    
  return (
    <>
      <motion.div
        initial={{ bottom: -20, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.8 }}
        className="box hover:scale-[1.1] hover:rgba(83,83,83,0.3) transition-all hover:shadow-[0px_0px_10px_gray] duration-500"
      >
         <Image src={languages} alt="programming" className='w-10 h-10 bg-[#5227FF] rounded-md mb-4 p-1' />
        <h1 className="nocursor uppercase font-semibold text-[#E4E4E7] mb-4">
          Multi-Language Support
        </h1>
        <p className="nocursor text-center text-[#A1A1AA] text-[13px]">
          Write and run code in multiple programming languages directly from
          your browser no setup, no installations
        </p>
      </motion.div>

      <motion.div
        initial={{ bottom: -20, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.8 }}
        className="box hover:scale-[1.1] hover:rgba(83,83,83,0.3) transition-all hover:shadow-[0px_0px_10px_gray] duration-500"
      >
        <Image src={challenges} alt="challenges" className='w-10 h-10 bg-[#5227FF] rounded-md mb-4 p-1' />
        <h1 className="nocursor uppercase  font-semibold text-[#E4E4E7] mb-4 text-[15px]">
          Interactive Coding Challenges
        </h1>
        <p className="nocursor text-center text-[#A1A1AA] text-sm">
          Tackle beginner to advanced problems with instant feedback to sharpen your problem solving skills.
        </p>
      </motion.div>

      <motion.div
        initial={{ bottom: -20, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.8 }}
        className="box hover:scale-[1.1] hover:rgba(83,83,83,0.3) transition-all hover:shadow-[0px_0px_10px_gray] duration-500"
      >
        <Image src={compile} alt="compile" className='w-10 h-10 bg-[#5227FF] rounded-md mb-4 p-1' />
        <h1 className="nocursor uppercase font-semibold text-[#E4E4E7] mb-4 text-[15px]">
          Real-Time Compilation
        </h1>
        <p className="nocursor text-center text-[#A1A1AA] text-sm">
          See your code compile and execute in real time with fast and reliable output results.
        </p>
      </motion.div>

      <motion.div
        initial={{ bottom: -20, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.8 }}
       className="box hover:scale-[1.1] hover:rgba(83,83,83,0.3) transition-all hover:shadow-[0px_0px_10px_gray] duration-500"
      >
        <Image src={setup} alt="setup" className='w-10 h-10 bg-[#5227FF] rounded-md mb-4 p-1' />
        <h1 className="nocursor uppercase font-semibold text-[#E4E4E7] mb-4 text-[15px]">
           No Local Setup Required
        </h1>
        <p className="nocursor text-center text-[#A1A1AA] text-sm">
          Code anywhere, anytime all you need is a browser and an internet connection
        </p>
      </motion.div>
    </>
  );
}

export default Feautures