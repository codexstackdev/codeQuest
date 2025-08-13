"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Feautures from "./Feautures";
import ExpCard from "./ExpCard";

const Infos = () => {
  const containerRef  = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div>
      <motion.h1
        className="relative text-4xl text-center font-semibold mt-20"
        initial={{ bottom: -20, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        Key <motion.span className="text-[#FF4D9E]">feautures</motion.span>
      </motion.h1>

      <motion.div
        initial={{ bottom: -20, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.8 }}
        className="flex relative justify-center flex-wrap mt-20 items-center gap-10"
      >
        <Feautures />
      </motion.div>

      <motion.div className="flex justify-center w-full mt-20  items-center">
        <motion.div
          ref={containerRef}
          id="infoMainBox"
          className="flex relative max-h-[900px] overflow-y-scroll flex-col mb-4 items-center w-[1000px] rounded-md h-[900px] backdrop-blur-[8px] bg-gradient-to-br from-[rgba(82,39,255,0.14)] to-[rgba(39,30,55,0.12)]"
        >
          <motion.h1
            initial={{ bottom: -20, opacity: 0 }}
            whileInView={{ bottom: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.8 }}
            className="relative mt-20 blackPop text-4xl uppercase"
          >
            How it{" "}
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-300 via-purple-300 to-purple-400">
              works
            </span>
          </motion.h1>

          <motion.span
            className="w-1 bg-gradient-to-b border-0 from-gray-500 via-gray-700 to-white shadow-xs shadow-white absolute origin-top top-0 left-1/2 -translate-x-1/2 bottom-0"
            style={{ scaleY: scrollYProgress }}
          ></motion.span>

          <motion.div id="infoBox" className="flex flex-wrap justify-evenly w-[800px] gap-10 items-center mt-20">
          <ExpCard/>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Infos;
