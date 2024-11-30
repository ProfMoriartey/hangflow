"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function AboutAbout({ aboutTitle, aboutDesc1, aboutDesc2, aboutDesc3, aboutDesc4, aboutDesc5, aboutDesc6, aboutDesc7 }: {
  aboutTitle: string,
  aboutDesc1: string,
  aboutDesc2: string,
  aboutDesc3: string,
  aboutDesc4: string, 
  aboutDesc5: string,
  aboutDesc6: string,
  aboutDesc7: string
}) {
 
  const locale = useLocale();
  return (
    <motion.section
 
      className="flex flex-col items-center justify-center py-16 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
  
    >
      {/* <div className="w-full">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">{aboutTitle}</h2>
      </div> */}
      
      <div className="flex flex-col justify-center  w-3/5 max-sm:w-full">
        <div className="flex flex-col mb-8 sm:mb-0 left-0 w-3/5 ">
          <motion.h3
            className="-mb-4 sm:mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-3xl flex flex-col "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-extrabold flex text-left justify-start">
            {aboutTitle}{" "}
            </span>
            
          </motion.h3>

          
        </div>

        <p className="basis-1/2 flex flex-col gap-4  mx-4 mt-0 sm:mt-5 mb-6 sm:mb-12 text-sm text-left">
        <div>{aboutDesc1}{""}</div>
        <div>{aboutDesc2}{""}</div>
        <div>{aboutDesc3}{""}</div>
        <div>{aboutDesc4}{""}</div>
        <div>{aboutDesc5}{""}</div>
        <div>{aboutDesc6}{""}</div>
        <div>{aboutDesc7}{""}</div>
        </p>

      </div>
     
      
    </motion.section>
  );
}
