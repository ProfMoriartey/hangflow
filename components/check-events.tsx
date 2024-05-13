"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Link from "next/link";

export default function CheckEvents({checkEvents, ReadMore}:{
  checkEvents: string,
  ReadMore: string
}) {
  const { ref } = useSectionInView("Events");

  return (
    <section ref={ref} id="events" className="py-5 sm:py-20">
      <SectionHeading> </SectionHeading>
      <div className="flex flex-row mb-16">
        <div className="absolute invisible sm:static sm:visible ">
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
                {checkEvents}{" "}
              </span>
              {/* <span className="font-medium font-body flex justify-start">
                events out!{" "}
              </span> */}
              
            </motion.h1>
            <p className="mb-5 mt-2 px-4 max-w-sm absolute invisible sm:static sm:visible">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="ml-4 w-52 absolute invisible sm:static sm:visible"> <Link
            href="https://www.eventbrite.fi/o/hangflow-ry-83120236073"
            target="_blank"
            className="group text-black text-sm border-4 borderBlack mr-2.5 px-6 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-400 active:scale-105 transition dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 dark:border-white"
        
          >
            {ReadMore}
           
          </Link>

              </div>
             
          </div>
          <div className="sm:absolute sm:invisible static visible ">
          <Image
            src="/group-pic1.png"
            width={800}
            height={800}
            alt={"Group Image"}
            className="rounded-lg sm:-ml-16"
          />
        </div>
          <div className="flex sm:pt-20 ">
            <Image
              src={"/group-pic2.png"}
              width={300}
              height={500}
              alt={"Group Picture"}
              className="-mt-10 sm:-ml-36 rounded-lg border-8 border-white"
            />
          </div>
          
        <div className="mt-4 ml-4 w-52 sm:absolute sm:invisible static visible"> <Link
            href="https://www.eventbrite.fi/o/hangflow-ry-83120236073"
            target="_blank"
            className="group text-black text-sm border-4 borderBlack mr-2.5 px-6 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-400 active:scale-105 transition dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 dark:border-white"
          
          >
            DISCOVER MORE
           
          </Link>

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
