"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function AboutApply({ }: {
  // aboutTitle: string,
  // aboutDesc: string,
  // aboutHeader: string,
  // ReadMore: string  aboutTitle, aboutDesc, aboutHeader, ReadMore 
}) {
 
  const locale = useLocale();
  return (
    <motion.section
 
      className="flex flex-col mt-10 items-center justify-center py-16 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
  
    >
      {/* <div className="w-full">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">{aboutTitle}</h2>
      </div> */}
      
      <div className="flex flex-row justify-center mb-14 w-3/5 max-sm:w-full">
        <div className="flex flex-col mb-8 sm:mb-0 left-0 w-2/5 ">
          <motion.h3
            className="-mb-4 sm:mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:mr-3 sm:text-xl flex flex-col "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-extrabold flex text-left justify-start">
            Did you get interested {" "}
            </span>
            <span className="font-extrabold flex text-left justify-start">
            in being a volunteer in{" "}
            </span>
            <span className="font-extrabold flex text-left justify-start">
            HangFlow ry?{" "}
            </span>
            
          </motion.h3>

          
        </div>
        
        <div className=" w-52 mt-5 sm:static sm:visible"> 
          <Link
              href="https://www.eventbrite.fi/o/hangflow-ry-83120236073"
              target="_blank"
              className="group text-gray-50 text-sm border bg-black border-black mr-2.5 px-6 py-3 flex align-middle items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-400 active:scale-105 transition dark:bg-gray-900 dark:border-gray-50 dark:text-gray-50 dark:text-opacity-90 "

            >
              Apply From Here

            </Link>

            </div>
            <Image
          src="/apply_flow.png"
          alt="Ricardo portrait"
          width={200}
          height={200}
          sizes="90vw"
          style={{ width: '10%', height: 'auto', textAlign: 'center' }}
          quality="95"
          priority={true}
          className="z-5 sm:ml-3 -mt-4 w-40 invisible sm:visible"
        />
      </div>
      
      
     
      
    </motion.section>
  );
}
