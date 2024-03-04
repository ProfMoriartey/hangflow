"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function Features() {
  const { ref } = useSectionInView("Features");

  return (
    <motion.section
      ref={ref}
      className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 pt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="features"
    >
      <SectionHeading>
        <motion.h1
          className="mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-3xl flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-medium font-body flex justify-start">
            Check our{" "}
          </span>
          <span className="font-medium font-body flex justify-start">
            Main Features!{" "}
          </span>
        </motion.h1>
      </SectionHeading>

      <Image
        src={"/activities-eng.png"}
        width={1000}
        height={1000}
        alt={"Group Picture"}
        className="mt-20"
      />
    </motion.section>
  );
}
