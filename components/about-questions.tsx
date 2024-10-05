"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { memberData } from "@/lib/data";
import Member from "./member";
import { useLocale } from "next-intl";
import router from "next/router";

import AboutMember from "./about-member";
import Accordeon from "./accordeon";

export default function AboutQuestions() {
    const locale = useLocale();
    const router = useRouter();

    function goToDetailEvents(id: string) {
        router.push(`/${locale}/events/${id}`);
    }

  return (
    <motion.section
     
      className="w-full flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
   
    >
    <div className="flex flex-col justify-center w-3/5 max-sm:w-full">
        <div className="flex flex-col my-16 sm:mb-0 left-0 w-3/5">
            <motion.h3
                className="-mb-4 sm:mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-4xl flex flex-col "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-extrabold flex text-left justify-start">
                Frequently Asked Questions{" "}
                </span>
            </motion.h3>
        </div>
        <div className="content-center align-middle">
            <Accordeon/>
        </div>
                
        
    
    </div>
      
    </motion.section>
  );
}
