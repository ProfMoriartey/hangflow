"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { memberData } from "@/lib/data";
import Member from "./member";
import { useLocale } from "next-intl";
import router from "next/router";

import AboutMember from "./about-member";

export default function AboutGrid({
  boardTitle1,
  boardTitle2,
}: {
  boardTitle1: string;
  boardTitle2: string;
}) {
  const locale = useLocale();
  const router = useRouter();

  function goToDetailEvents(id: string) {
    router.push(`/${locale}/events/${id}`);
  }
  const { ref } = useSectionInView("Events");
  return (
    <motion.section
      id="boardMembers"
      ref={ref}
      className="w-full flex flex-col justify-center items-center scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex flex-col justify-center w-3/5 max-sm:w-full">
        <div className="flex flex-col mb-2 sm:mb-0 left-0 w-3/5 ">
          <motion.h3
            className="-mb-4 sm:mb-2 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-4xl flex flex-col "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-extrabold flex text-left justify-start">
              {boardTitle1}{" "}
            </span>
            <span className="font-extrabold flex text-left justify-start">
              {boardTitle2}{" "}
            </span>
          </motion.h3>
        </div>

        {/* <section className="scroll-mt-28 mb-28">
      <div className="grid grid-rows-4 grid-cols-4 max-w-4xl gap-5">
        {memberData.map((member, index) => (
          <React.Fragment key={index}>
            <AboutMember {...member} />
          </React.Fragment>
        ))}
      </div>
         </section> */}

        <div className="grid grid-cols-2 mt-10 sm:grid-cols-4 gap-4">
          <div className="max-w-md rounded-xl overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/shahin.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0 "
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Shahin
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                President
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/hannaneh.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0 "
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Hannaneh
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Vice President
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/nora.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Nora
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Secretary
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/morad.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Morad
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Treasurer
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/victoria.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Victoria
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Coordinator
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/dandy.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Dandy
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Coordinator
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/sanah.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Sanah
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Coordinator
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/saara.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Saara
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Coordinator
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/sania.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Sania
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Coordinator
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/najib.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Najib
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Assistant
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/dayo.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Dayo
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Assistant
              </p>
            </div>
          </div>
          <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/board/vilma.png"
                alt="Hangflow Logo"
                fill
                objectFit="cover"
                quality="95"
                className="z-0"
                priority={true}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-white/70">
                Vilma
              </div>
              <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                Assistant
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
