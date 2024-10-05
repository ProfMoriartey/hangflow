"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import Link from "next/link";

export default function EventsCheckout() {
  
  return (
    <motion.section
      className="flex flex-col items-center justify-center pb-16 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="features"
    >
      <SectionHeading>
        <motion.h3
          className="mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-5xl flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-medium  flex justify-start">
            Check our{" "}
          </span>
          <span className="font-medium  flex justify-start">
            Upcoming Events!{" "}
          </span>
        </motion.h3>
      </SectionHeading>
      <div>

      <Link
            href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA=="
            target="_blank"
            className="group bg-opacity-20 text-8xl border border-black text-gray-900 dark:border-white dark:text-white  mr-2.5 p-4 flex justify-center items-center gap-4 rounded-md outline-none focus:scale-105 hover:scale-105 hover:bg-slate-50 dark:hover:bg-slate-600 active:scale-102 transition"
            onClick={() => {
            }}
          >
            EVENTS
            
          </Link>
      {/* <a
          href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA=="
          className="group  bg-slate-500 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-8xl font-semibold text-center`}>
            EVENTS{" "}
          
          </h2>
       
        
        </a> */}
      </div>
      
    </motion.section>
  );
}
