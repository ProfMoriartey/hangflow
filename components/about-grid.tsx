"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { memberData } from "@/lib/data";
import Member from "./member";
import { useLocale } from "next-intl";
import router from "next/router";

import AboutMember from "./about-member";

export default function AboutGrid({ boardTitle1, boardTitle2 }: {
    boardTitle1: string,
    boardTitle2: string
  }) {
    const locale = useLocale();
    const router = useRouter();

    function goToDetailEvents(id: string) {
        router.push(`/${locale}/events/${id}`);
    }

  return (
    <motion.section
     
      className="w-full flex flex-col justify-center items-center"
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
                            src="/hannaneh.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0 "
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Hannaneh</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        President
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/shahin.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0 "
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Shahin</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Vice President
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/nora.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Nora</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Secretary
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/taru.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Taru</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Treasurer
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/victoria.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Victoria</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Deputy member
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/saara.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Saara</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Deputy member
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/dandy.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Dandy</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Deputy member
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/helmi.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Helmi</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Deputy member
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/vilma.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Vilma</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Deputy member
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded-xl  overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/dung.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Dung</div>
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Deputy member
                        </p>
                    </div>
                </div>
        </div>
    
    </div>
      
    </motion.section>
  );
}
