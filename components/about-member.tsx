"use client";

import { memberData } from "@/lib/data";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type ReviewProps = (typeof memberData)[number];

export default function AboutMember({ name, position, image }: ReviewProps) { 
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative mt-28 hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col  h-full sm:group-even:ml-[18rem]">
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="sm:ml-5 sm:mt-2">
                    <h3 className="text-sm font-semibold text-left">{name}</h3>
                    <p className="text-gray-700 dark:text-white/70 text-left text-xs">
                      {position}
                    </p>
                </div>
                <span>-------------------</span>
                <p className="text-sm pb-2 text-justify leading-relaxed text-gray-700 dark:text-white/70">
                  "{image}"
                </p>
                <div className="m-3 ml-0"></div>
          </div>
        </section>

        {/* <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="m-3 ml-0">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="mt-1 text-gray-700 dark:text-white/70">{country}</p>
            </div>
            <p className=" pb-2 leading-relaxed text-gray-700 dark:text-white/70">
              "{description}"
            </p>
            
          </div>
        </section> */}
      </motion.div>
    </div>
  );
}
