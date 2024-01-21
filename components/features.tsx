"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { featureData } from "@/lib/data";
import Feature from "./feature";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Greetings! My name is Aramis Soto, from Mexico, and I am an{" "}
        <span className="font-medium">English and Spanish educator</span> with 8
        years of experience in the field of teaching, both{" "}
        <span className="font-medium">online and face-to-face</span>, and with a
        B.A. in English Language Teaching. I have been a Spanish Tutor in HUFS
        (Hankuk University Of Foreign Studies) in Seoul,{" "}
        <span className="italic">South Korea</span>, an English and Spanish
        teacher at an AIESEC Internship in Bursa,{" "}
        <span className="italic">Turkey</span>, and I am currently working
        online with students from{" "}
        <span className="font-medium">
          Latin America, The U.S.A., The Netherlands, Japan
        </span>
        , and other areas of our wide, interesting world. Experienced in all
        educational levels from elementary school to university, in local and
        international contexts. Willing to work and learn something new every
        day, as well as responsible and respectful towards{" "}
        <span className="italic">people, culture, and education</span>.
      </p>
    </motion.section>
  );
}
