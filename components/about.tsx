"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

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
            <div className="-mx-4 w-52"><Link
            href="https://www.eventbrite.fi/o/hangflow-ry-83120236073"
            target="_blank"
            className=" group text-sm text-black border borderBlack mr-2.5 px-6 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-400 active:scale-105 transition dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 dark:border-white"
          
          >
            READ MORE
           
          </Link></div>
            
            {/* <span className="flex justify-start font-semibold"><a href="https://www.instagram.com/hangfloww/?igsh=MWNoajYwdDc4am9tZA%3D%3D" target="_blank">CHECK IT </a></span> */}
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
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-6">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>
            Equity{" "}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>
            Safer & Braver Space{" "}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>
            Empowerment{" "}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance text-center`}
          >
          
          </p>
        </a>
      </div>

      {/* new */}
      {/* <div className="flex flex-row">
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
      </div> */}
      {/* old */}
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
