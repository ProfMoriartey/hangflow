"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function About({ aboutTitle, aboutDesc, aboutHeader, ReadMore }: {
  aboutTitle: string,
  aboutDesc: string,
  aboutHeader: string,
  ReadMore: string
}) {
  const { ref } = useSectionInView("About");
  const locale = useLocale();
  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center py-16 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="w-full">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">{aboutTitle}</h2>
      </div>
      
      <div className="flex flex-row justify-center items-center w-3/5 max-sm:w-full">
        <div className="flex flex-col w-2/5 max-sm:hidden">
          <motion.h3
            className="-mb-4 sm:mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-3xl flex flex-col max-sm:hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-medium flex text-left justify-start">
              {aboutHeader}{" "}
            </span>
            
          </motion.h3>

          <motion.h3
            className="mb-10 mt-0 ml-5 px-4 text-xs font-medium !leading-[1.5] sm:text-xs flex flex-col justify-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="-mx-4 w-52 -mb-20 sm:mb-0 invisible sm:visible"><Link
            href={'/' + locale + '/about'}
            className=" group text-sm text-black border borderBlack mr-2.5 px-6 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-400 active:scale-105 transition dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 dark:border-white"
          
          >
            {ReadMore}
           
          </Link></div>
            
            {/* <span className="flex justify-start font-semibold"><a href="https://www.instagram.com/hangfloww/?igsh=MWNoajYwdDc4am9tZA%3D%3D" target="_blank">CHECK IT </a></span> */}
          </motion.h3>
        </div>

        <p className="basis-1/2 mx-4 mt-0 sm:mt-5 mb-6 sm:mb-12 text-sm text-left">
          {aboutDesc}
        </p>

      </div>
     
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
    </motion.section>
  );
}
