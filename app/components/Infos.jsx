"use client";
import { motion } from 'framer-motion'
import React from 'react'
import Feautures from './Feautures';

const Infos = () => {

  return (
    <motion.div initial="hidden" whileInView="visible">
      <motion.h1
        className="relative text-4xl text-center font-semibold mt-20"
        initial={{ bottom: -20, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        Key <motion.span className="text-[#FF4D9E]">feautures</motion.span>
      </motion.h1>

      <motion.div className="flex justify-center flex-wrap mt-20 items-center gap-10">
        <Feautures />
      </motion.div>
      <motion.div className="flex justify-center w-full mt-20  items-center">
        <motion.div className="flex flex-col items-center w-[900px] shadow-md shadow-gray-200  rounded-md h-[1000px] backdrop-blur-[8px] bg-[rgba(255,255,255,0.19)]">
          <motion.h1
            initial={{ bottom: -20, opacity: 0 }}
            whileInView={{ bottom: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.8 }}
            className="relative mt-20 blackPop text-4xl uppercase"
          >
            Choose your{" "}
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-300 via-purple-300 to-purple-400">
              experience
            </span>
          </motion.h1>
          <motion.span className='w-1 bg-white'
          initial={{height:0}}
          whileInView={{height: 1000}}
          transition={{duration: 0.8, delay:1}}
          ></motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Infos