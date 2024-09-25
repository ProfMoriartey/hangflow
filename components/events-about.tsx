"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function EventsAbout({ }: {
  // aboutTitle: string,
  // aboutDesc: string,
  // aboutHeader: string,
  // ReadMore: string  aboutTitle, aboutDesc, aboutHeader, ReadMore 
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
            What are HangFlow ry events?{" "}
            </span>
            
          </motion.h3>

          
        </div>

        <p className="basis-1/2 mx-4 mt-0 sm:mt-5 mb-6 sm:mb-12 text-sm text-left">
        HangFlow ry is a non-profit youth organization located in Turku, founded by the passion and drive of young activists in the summer of 2020. Our unwavering commitment revolves around championing the voices of the youth and propelling the cause of equity and equality. Our fundamental objective is to create a safe space for every young individual, built upon the guiding principle of "by youth, for youth."

        Our mission at HangFlow ry is to establish safe environments for young people, places where everyone can be their authentic selves and grow at their own pace and on their unique journey. We firmly believe that every young person deserves to be heard, respected, and cherished as an indispensable part of their community, irrespective of their background or identity.
        </p>

      </div>
     
      
    </motion.section>
  );
}