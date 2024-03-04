"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function CheckEvents() {
  const { ref } = useSectionInView("Events");

  return (
    <section ref={ref} id="events" className="py-20">
      <SectionHeading> </SectionHeading>
      <div className="flex flex-row mb-16">
        <div className=" ">
          <Image
            src="/group-pic1.png"
            width={800}
            height={800}
            alt={"Group Image"}
            className="rounded-lg -ml-16"
          />
        </div>
        <div>
          <div>
            <motion.h1
              className="mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-3xl flex flex-col"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="font-medium font-body flex justify-start">
                Check our{" "}
              </span>
              <span className="font-medium font-body flex justify-start">
                events out!{" "}
              </span>
            </motion.h1>
            <p className="mb-5 mt-2 px-4 max-w-sm">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex pt-20 ">
            <Image
              src={"/group-pic2.png"}
              width={300}
              height={500}
              alt={"Group Picture"}
              className="-ml-36 rounded-lg border-8 border-white"
            />
          </div>
        </div>
      </div>

      {/* <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">Check our events out!</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <Image
            src="/group-pic2.png"
            width={1000}
            height={500}
            alt="Group Image"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </motion.div> */}
    </section>
  );
}
