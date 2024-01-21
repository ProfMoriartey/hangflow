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

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col sm:flex-row -mt-2 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="max-w-sm flex flex-col">
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1] sm:text-5xl flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-semibold font-body flex justify-start">
            Safe place for{" "}
          </span>
          <span className="font-semibold font-body flex justify-start">
            everybody to{" "}
          </span>
          <span className="font-semibold font-body flex justify-start">
            {""}join
          </span>
        </motion.h1>

        <motion.h1
          className="mb-10 mt-4 px-4 text-xs font-medium !leading-[1.5] sm:text-sm flex flex-col justify-start"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="flex justify-start">
            Check out our new events and what we have{" "}
          </span>
          <span className="flex justify-start">done! </span>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-black text-white mr-2.5 px-12 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            EVENTS
            <MdOutlineEmojiEvents className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <div className="flex gap-2">
            <a
              className=" p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-solid border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/aramis-soto-494b57272/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/aramis-soto-494b57272/"
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a
              className=" p-4 text-black hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-2 border-black dark:border-transparent dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/aramis-soto-494b57272/"
              target="_blank"
            >
              <FaFacebookF />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-reverse">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/hangflow.png"
            alt="Ricardo portrait"
            width={250}
            height="2000"
            quality="95"
            priority={true}
            className="mb-0 sm:mb-20 sm:mr-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
