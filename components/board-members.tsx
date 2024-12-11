"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { memberData } from "@/lib/data";
import Member from "./member";
import { useLocale } from "next-intl";

export default function BoardMembers({ boardTitle1, boardTitle2 }: {
  boardTitle1: string,
  boardTitle2: string
  
}) {
  const { ref } = useSectionInView("Board");
  const locale = useLocale();
  return (
    <motion.section
      ref={ref}
      className="w-full flex flex-col mt-24 justify-center items-center sm:mb-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="board"
    >

      <motion.h1
        className="-mb-4 px-4 items-center text-2xl font-medium !leading-[1] sm:text-3xl flex flex-col "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
         {/* <div className="bg-[#fbe2e3] absolute -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4b6d80]"></div> */}

        <span className="font-medium flex justify-start">
          {boardTitle1}{" "}
        </span>
        <span className="font-medium flex justify-start">
          {boardTitle2}{" "}
        </span>
      </motion.h1>


    <motion.div className="w-4/5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
          
    <Carousel>
        <CarouselContent>
          {memberData.map((member, index) => (
            <React.Fragment key={index}>
              <CarouselItem className="basis-1/2 lg:basis-1/3">
                <Member {...member} />
              </CarouselItem>
            </React.Fragment>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
      
    </motion.section>
  );
}
