"use client";
import React from 'react'
import DotGrid from './DotGrid';
import { motion } from 'framer-motion';
import TextType from './TextType';

const Hero = () => {
  return (
    <div className="absolute flex-1 w-full h-full">
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="absolute flex items-center flex-col top-[50%] left-[50%] translate-[-50%]"
      >
        <div className="border border-gray-400 p-2 text-sm mb-4 pointer-events-none font-semibold rounded-xl backdrop-blur-[20px] bg-[rgba(255,255,255,0.1)]">
          <p>Codexstackdev</p>
        </div>
        <TextType
          text={"CodeQuest Online Compiler & Coding Challenges"}
          typingSpeed={75}
          pauseDuration={0}
          showCursor={true}
          cursorCharacter="|"
        />
        <p className="text-center text-xl text-[#A1A1AA] font-semibold">
          CodeQuest is an interactive online coding platform that combines a
          powerful compiler with engaging coding challenges. Practice, test, and
          improve your programming skills directly in your browser from quick
          exercises to complex problem-solving tasks with instant feedback and
          multi-language support.
        </p>
      </motion.div>
    </div>
  );
}

export default Hero