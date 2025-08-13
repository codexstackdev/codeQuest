"use client"
import { motion } from "framer-motion"
import React from "react"

const cardData = [
  {
    title: "Select Your Language",
    size: "text-2xl",
    delay: 0,
    text: "Choose from a variety of supported programming languages to start coding in your preferred environment",
    direction: -30
  },
  {
    title: "Pick a Challenge or Start Fresh",
    size: "text-xl",
    delay: 0.5,
    text: "Work on a curated challenge to test your skills, or write your own code from scratch in the embedded compiler",
    direction: 30
  },
  {
    title: "Code and Run Instantly",
    size: "text-xl",
    delay: 0,
    text: "Type your solution, run it directly in your browser, and get instant feedback without leaving the page",
    direction: -30
  },
  {
    title: "Learn and Improve",
    size: "text-xl",
    delay: 0.5,
    text: "Review your results, refine your approach, and keep building your coding expertise one problem at a time",
    direction: 30
  },
  {
    title: "Your Code Our Playground",
    size: "text-xl",
    delay: 0,
    text: "Write, run, and experiment instantly no setup, no hassle. Just focus on your ideas and let the compiler handle the rest",
    direction: -30
  },
  {
    title: "Build Without Boundaries",
    size: "text-xl",
    delay: 0.5,
    text: "From quick tests to full projects, craft your code in a fast, flexible, and distraction-free environment",
    direction: 30
  }
]

const ExpCard = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="ExpCard"
          initial={{ x: card.direction, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: card.delay }}
        >
          <motion.h1 className={`text-[rgba(255,255,255,0.95)] ${card.size} font-semibold mb-5`}>
            {card.title}
          </motion.h1>
          <motion.p className="text-center text-[rgba(255,255,255,0.7)] leading-relaxed">
            {card.text}
          </motion.p>
        </motion.div>
      ))}
    </>
  )
}

export default ExpCard
