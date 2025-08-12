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
        <Feautures/>
      </motion.div>
    </motion.div>
  );
}

export default Infos