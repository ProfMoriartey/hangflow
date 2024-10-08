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

export default function BoardMembers() {
  const { ref } = useSectionInView("Board");

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
        <span className="font-medium flex justify-start">
          2024{" "}
        </span>
        <span className="font-medium flex justify-start">
          Board Members{" "}
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
