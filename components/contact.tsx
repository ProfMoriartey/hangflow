"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useLocale } from "next-intl";

export default function Contact({ contactTitle, contactEmail, contactMessage }: {
  contactTitle: string,
  contactEmail: string,
  contactMessage: string,
  
}) {
  const { ref } = useSectionInView("Events");
  const locale = useLocale();
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mt-8 sm:scroll-m-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{contactTitle}</SectionHeading>

      {/* <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hangflow@gmail.com">
          hangflow@gmail.com
        </a>{" "}
        or through this form.
      </p> */}

      <form
        className="mt-10 flex flex-col dark:text-black"
        action="https://formsubmit.co/danielpenam97@gmail.com"
        method="POST"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name={contactMessage}
          type="email"
          required
          maxLength={500}
          placeholder={contactEmail}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={contactMessage}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
