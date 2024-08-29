"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLocale } from "next-intl";

export default function Intro({ intro1, intro2 }:{
  intro1: string,
  intro2: string
}) {

  const locale  = useLocale();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-row mt-4 mb-28 max-w-[50rem] text-center sm:-mb-10 scroll-mt-[100rem]"
    >
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div className="max-w-sm flex flex-col">
        <div className="flex flex-row">
        <motion.h1
          className="sm:mb-10 sm:mt-4 sm:px-4 text-2xl  -ml-9 flex-auto font-medium !leading-[1] sm:text-5xl flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-semibold text-right w-28  font-body flex justify-start">
            {intro1}{" "}
          </span>
          <span className="font-semibold text-right w-28 font-body flex justify-start">
            {intro2}{" "}
          </span>
          
        </motion.h1>
        <Image
            src="/logo6.png"
            alt="Ricardo portrait"
            width={80}
            height="2000"
            quality="95"
            priority={true}
            className="mb-5 sm:mb-20 sm:mr-10 ml-20 visible sm:invisible"
          />
        </div>

        <motion.h1
          className="mb-10 mt-4 sm:px-4 text-xs font-medium !leading-[1.5] sm:text-sm flex flex-col justify-start invisible absolute sm:static sm:visible"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="flex justify-start">
            Check out our new events and all that we have{" "}
          </span>
          <span className="flex justify-start">done! </span>
        </motion.h1>

        <motion.div
          className="flex flex-col -ml-7 sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href={"/"+ locale +"/events"}
            className="group bg-black text-white mr-2.5 px-12 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Events");
              setTimeOfLastClick(Date.now());
            }}
          >
            EVENTS
            <MdOutlineEmojiEvents className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <div className="flex gap-2">
            <a
              className=" p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-solid border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60"
              href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA=="
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60"
              href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA=="
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a
              className=" p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60"
              href="https://www.facebook.com/HangFlow"
              target="_blank"
            >
              <FaFacebookF />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-reverse -mr-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/logo6.png"
            alt="Ricardo portrait"
            width={260}
            height="2000"
            quality="95"
            priority={true}
            className="mb-0 sm:mb-20 sm:mr-10 z-10 invisible absolute sm:visible"
          />
          
        </motion.div>
      </div>
    </section>
  );
}
