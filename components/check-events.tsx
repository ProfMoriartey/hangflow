"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function CheckEvents({ checkEvents, ReadMore, eventsDesc }: {
  checkEvents: string,
  ReadMore: string,
  eventsDesc: string
}) {
  const { ref } = useSectionInView("Events");
  const locale = useLocale();
  return (
    <motion.section ref={ref} id="events" className="w-full py-16 my-6 flex justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
       
      <SectionHeading> </SectionHeading>
      <div className="flex flex-row mb-16">
        <div className="absolute invisible sm:static sm:visible ">
        <div className="bg-[#dbd7fb] absolute -z-10 h-[42rem] w-[50rem] rounded-full blur-[10rem] sm:w-[75.75rem] dark:bg-[#946387]"></div>
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
              <span className="font-medium flex justify-start">
                {checkEvents}{" "}
              </span>

            </motion.h1>
            <p className="mb-5 mt-2 px-4 max-w-sm absolute sm:static invisible sm:visible">
              {eventsDesc}
            </p>
            <div className="ml-4 w-52 absolute invisible sm:static sm:visible"> <Link
              href={"/" + locale + "/events"}
              className="group text-black text-sm border border-black mr-2.5 px-6 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-400 active:scale-105 transition dark:bg-gray-900 dark:border-gray-50 dark:text-gray-50 dark:text-opacity-90 "

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
            className="group text-black text-sm border border-black mr-2.5 px-6 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-400 active:scale-105 transition dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
          >
            {ReadMore}
          </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
