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
import { SiBento } from "react-icons/si";

export default function EventsIntro({ }: {
  // intro1: string,
  // intro2: string intro1, intro2 
}) {

  const locale = useLocale();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-row-reverse sm:flex-row justify-center items-center w-full py-16 gap-14 sm:gap-28"
    >
      <div className="flex flex-col w-1/3 items-center">
        <motion.h1
          className="sm:px-4 text-4xl m-3 -ml-5 sm:-ml-80 flex-auto font-medium !leading-[1] sm:text-9xl flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
           <span className="font-bold text-right -ml-8 w-28 flex justify-start">
            HANGFLOW
          </span>
          <span className="font-bold text-right w-28 flex justify-start">
            EVENTS
          </span>
          {/* <span className="font-semibold text-right w-28 flex justify-start">
            {intro1}{" "}
          </span>
          <span className="font-semibold text-right w-28 flex justify-start">
            {intro2}{" "}
          </span> */}
        </motion.h1>


        {/* <motion.h1
          className="mb-10 mt-4 sm:px-4 text-xs font-medium !leading-[1.5] sm:text-sm flex flex-col justify-start invisible absolute sm:static sm:visible"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="flex sm:-mb-6 justify-start">
            Take a look at who we are, our journey and our mission{" "}
          </span>
        </motion.h1> */}

        <motion.div
          className="flex flex-col sm:flex-row items-center mt-2 justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="https://www.eventbrite.fi/o/hangflow-ry-83120236073"
            target="_blank"
            className="group bg-black text-white mr-2.5 px-8 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("About");
              setTimeOfLastClick(Date.now());
            }}
          >
            Events
          </Link>
          <div className="flex gap-2">
          <a
              className=" p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-solid border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60"
              href="https://bento.me/hangflow"
              target="_blank"
            >
              <SiBento/>
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
      <motion.div
        className="flex-col sm:flex w-1/3 justify-center items-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src="/events_try2.png"
          alt="Ricardo portrait"
          width={0}
          height={0}
          sizes="2500vw"
          style={{ width: '90%',  textAlign: 'center' }}
          quality="95"
          priority={true}
          className="z-5 sm:-ml-16"
        />

      </motion.div>
    </section>
  );
}
