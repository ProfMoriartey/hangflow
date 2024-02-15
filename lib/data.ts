import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import languaTalk from "@/public/languaTalk.png";
import hotAramis from "@/public/hotAramis.png";
import openEnglish from "@/public/openEnglish.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Events",
    hash: "#events",
  },
  {
    name: "Features",
    hash: "#features",
  },
  {
    name: "Board",
    hash: "#board",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const qualificationsData = [
  {
    title: "Arizona State University",
    location: "TESOL Certificate",
    description:
      "Focused on teaching approaches and methodologies of English to Speakers of Other Languages.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "AIESEC Global Teacher Internship",
    location: "English and Spanish Language Teaching",
    description:
      "International Teaching Internship located in Bursa, Turkey, focused on the teaching of English and Spanish, intercultural communication, and language development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Hankuk University of Foreign Studies",
    location: "ESL Language Instructor - Mobility Programme",
    description:
      "One-semester long Mobility Programme at HUFS in Seoul, South Korea, focused on Linguistics, Materials Development, Intercultural Communication, and English Presentation and Public Speaking.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Universidad Juárez del Estado de Durango",
    location: "Bachelor of Arts - English Language Teaching",
    description:
      "4 year university program focused on linguistics, Pedagogy, Didactics, and ELT Methadologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
] as const;

// export const servicesData = [
//   {
//     title: "Personal Lessons",
//     description:
//       "1-on-1 tutoring sessions customizable to the students needs, English and Spanish lessons for all levels and ages.",
//     imageUrl: hotAramis,
//   },
//   {
//     title: "Open English",
//     description:
//       "English Language Teacher for Latin American students at one of the largest online English learning platforms in the American continent.",
//     imageUrl: openEnglish,
//   },
//   {
//     title: "LanguaTalk",
//     description:
//       "1-on-1 sessions with learners from a wide variety of countries, creating study plans and adapting materials according to their learning objectives and linguistic competence.",
//     imageUrl: languaTalk,
//   },
// ] as const;

export const memberData = [
  {
    name: "Lindsey",
    country: "Finland",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar",
  },
  {
    name: "Lyn",
    country: "Finland",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar",
  },
  {
    name: "Jordan",
    country: "Finland",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar",
  },
  {
    name: "Starr",
    country: "Finland",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar",
  },
  {
    name: "Starr",
    country: "Finland",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar",
  },
  {
    name: "Starr",
    country: "Finland",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar",
  },
] as const;

export const featureData = [
  {
    name: "Equity",
    icon: "<FaFilter />",
    import: "import { FaFilter } from 'react-icons/fa6';",
    description:
      "ensuring fairness and impartiality in providing opportunities, resources, and support to young people, regardless of their background, gender, ethnicity, or socioeconomic status.",
  },
  {
    name: "Safer & braver space",
    icon: "<FaRegBookmark />",
    import: "import { FaRegBookmark } from 'react-icons/fa';",
    description:
      "environment that prioritizes the emotional and physical well-being of young individuals, encouraging them to express themselves authentically without fear of judgment or harm.",
  },
  {
    name: "Empowerment",
    icon: "<IoDiamond />",
    import: "import { IoDiamond } from 'react-icons/io5';",
    description:
      "providing young individuals with the tools, skills, and confidence needed to take control of their lives, make informed decisions, and actively participate in their communities.",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
