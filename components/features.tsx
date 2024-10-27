"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function Features() {
  
  return (
    <div>
    <div className="bg-[#fbe2e3] absolute top-[175rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4b6d80]"></div>
    <div className="bg-[#fbe2e3] absolute top-[175rem] -z-10 right-[70rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4b6d80]"></div>

    <motion.section
      className="flex flex-col items-center justify-center sm:my-16 pb-16 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="features"
    >
      <SectionHeading>
        <motion.h3
          className="mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-3xl flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          
          <span className="font-medium  flex justify-start">
            Check our{" "}
          </span>
          <span className="font-medium  flex justify-start">
            Main Values!{" "}
          </span>
        </motion.h3>
      </SectionHeading>
      <div className="bg-[#fbe2e3] absolute -z-10  h-[40rem] w-[20rem] rounded-full blur-[10rem] sm:w-[40rem] dark:bg-[#5a61f2]"></div>
      <Image
        src={"/features-en.png"}
        width={1000}
        height={1000}
        alt={"Group Picture"}
      />
    </motion.section>
    </div>
  );
}
