"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaFilter } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <div className="flex flex-row">
        <div className="basis-1/2 flex flex-col">
          <motion.h1
            className="mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-3xl flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-medium font-body flex justify-start">
              What is{" "}
            </span>
            <span className="font-medium font-body flex justify-start">
              HangFlow ry{" "}
            </span>
          </motion.h1>

          <motion.h1
            className="mb-10 mt-0 ml-5 px-4 text-xs font-medium !leading-[1.5] sm:text-xs flex flex-col justify-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="flex justify-start font-semibold">CHECK IT </span>
          </motion.h1>
        </div>

        <p className="basis-1/2 mt-5 mb-12 text-sm text-left">
          HangFlow ry is a non-profit youth organization located in Turku,
          founded by the passion and drive of young activists in the summer of
          2020. Our unwavering commitment revolves around championing the voices
          of the youth and propelling the cause of equity and equality. Our
          fundamental objective is to create a safe space for every young
          individual, built upon the guiding principle of "by youth, for youth.
        </p>
      </div>

      <div className="flex flex-row">
        <div className="pt-4 pb-7 px-2 sm:pl-10 sm:pr-2 sm:pt-10 h-full sm:group-even:ml-[18rem]">
          <Image
            src="/filter.png"
            alt="Ricardo portrait"
            width={65}
            height="100"
            quality="100"
            priority={true}
            className="mb-0  ml-5 sm:mb-5 sm:mr-5"
          />
          <h3 className="text-lg font-semibold">Equity</h3>
          <p className="text-xs px-0 pb-2 leading-relaxed text-gray-700 dark:text-white/70">
            ensuring fairness and impartiality in providing opportunities,
            resources, and support to young people, regardless of their
            background, gender, ethnicity, or socioeconomic status.
          </p>
        </div>

        <div>
          <div className="p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60">
            <FaFilter />
          </div>
          <h3 className="text-lg font-semibold">Equity</h3>
          <p className="text-xs px-0 pb-2 leading-relaxed text-gray-700 dark:text-white/70">
            ensuring fairness and impartiality in providing opportunities,
            resources, and support to young people, regardless of their
            background, gender, ethnicity, or socioeconomic status.
          </p>
        </div>
        <div>
          <div className="p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60">
            <FaFilter />
          </div>
          <h3 className="text-lg font-semibold">Equity</h3>
          <p className="text-xs px-0 pb-2 leading-relaxed text-gray-700 dark:text-white/70">
            ensuring fairness and impartiality in providing opportunities,
            resources, and support to young people, regardless of their
            background, gender, ethnicity, or socioeconomic status.
          </p>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 gap-3">
        <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
          <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-4 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-4 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7 px-2 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full sm:group-even:ml-[18rem]">
              <div className="p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60">
                <FaFilter />
              </div>
              <h3 className="text-lg font-semibold">Equity</h3>
              <p className="text-xs px-0 pb-2 leading-relaxed text-gray-700 dark:text-white/70">
                ensuring fairness and impartiality in providing opportunities,
                resources, and support to young people, regardless of their
                background, gender, ethnicity, or socioeconomic status.
              </p>
            </div>
          </section>
        </motion.div>
        <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
          <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col h-full sm:group-even:ml-[18rem]">
              <p className=" pb-2 leading-relaxed text-gray-700 dark:text-white/70">
                environment that prioritizes the emotional and physical
                well-being of young individuals, encouraging them to express
                themselves authentically without fear of judgment or harm.
              </p>
              <div className="m-3 ml-0">
                <h3 className="text-2xl font-semibold">Safer & braver space</h3>
                <p className="mt-1 text-gray-700 dark:text-white/70"></p>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
          <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col h-full sm:group-even:ml-[18rem]">
              <p className=" pb-2 leading-relaxed text-gray-700 dark:text-white/70">
                providing young individuals with the tools, skills, and
                confidence needed to take control of their lives, make informed
                decisions, and actively participate in their communities.
              </p>
              <div className="m-3 ml-0">
                <h3 className="text-2xl font-semibold">Empowerment</h3>
                <p className="mt-1 text-gray-700 dark:text-white/70"></p>
              </div>
            </div>
          </section>
        </motion.div>
      </div> */}
    </motion.section>
  );
}
