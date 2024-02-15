"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed invisible md:visible md:top-3 md:left-20 "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <Image
          src="/icon.png"
          alt="Hangflow Logo"
          width={75}
          height="2000"
          quality="95"
          priority={true}
          className="mb-0 sm:mb-20 sm:mr-10"
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          <div className="flex flex-row m-3 gap-1 sm:invisible sm:absolute">
            <div>
              <Link href={"/en"}>EN</Link>
            </div>

            <div>
              <Link href={"/fi"}>FI</Link>
            </div>
          </div>
        </ul>
      </nav>
      <motion.div
        className="fixed invisible lg:visible lg:top-6 lg:-right-20 flex flex-row items-center justify-center sm:-mt-2.5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className="flex flex-row gap-3 m-3 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3rem] sm:w-[4rem]  sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 justify-center items-center">
          <div>
            <Link href={"/en"}>EN</Link>
          </div>
          <div>
            <Link href={"/fi"}>FI</Link>
          </div>
        </div>
        <a
          className="group bg-[#54ADFF] px-4 py-2.5 text-white flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA=="
          target="_blank"
        >
          Documents{" "}
          <BsArrowRight className="opacity-100 group-hover:translate-x-1 transition" />
        </a>
      </motion.div>
    </header>
  );
}
