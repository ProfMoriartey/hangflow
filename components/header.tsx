"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLocale } from 'next-intl';
import styles from '../styles/header.module.css';
import { BiWorld } from "react-icons/bi";

import { TiThMenu } from "react-icons/ti";
import { useRouter } from 'next/navigation';

export default function Header({ headerHome, headerAbout, headerEvents, headerBoard, headerContact, headerLanguage }: {
  headerHome: string,
  headerAbout: string,
  headerEvents: string,
  headerBoard: string,
  headerContact: string,
  headerLanguage: string
}) {
  const router = useRouter();
  const locale = useLocale();
  let pathName;
  
console.log(locale)

  function handleLanguage(lang:string){
    pathName = window.location.pathname;
    let newPathName = pathName;
    if(locale === 'fi' && lang === 'en'){
      newPathName = pathName.replace("/fi",'/en/')
      
    }
    if(locale === 'en' && lang === 'fi'){
      newPathName = pathName.replace("/en",'/fi/')
      
    }
    if(newPathName != pathName)
      console.log(newPathName)
      router.push(newPathName);
  }
  
  return (
    <header className="w-full h-24 sm:flex flex-row z-[999]">
      <motion.div
        className="fixed max-sm:hidden ml-20 md:inline md:top-3 md:left-20 z-[999]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ><Link href={'/' + locale}>
        <Image
          src="/logo.png"
          alt="Hangflow Logo"
          width={110}
          height="2000"
          quality="95"
          priority={true}
          className="mb-0 -mt-2"
        />
      </Link> 
      </motion.div>
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:flex sm:flex-row sm:justify-center sm:items-center sm:h-[3.25rem] sm:w-[100vh] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 z-[999]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex px-10 fixed sm:left-1/2 h-full sm:-translate-x-1/2 sm:h-full sm:py-0 sm:w-full sm:flex sm:flex-row sm:justify-center sm:items-center max-sm:hidden">
          <ul className="flex flex-wrap sm:items-center h-full sm:justify-around gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-full sm:flex-nowrap sm:gap-7">
            <li ><Link href={'/' + locale}>{headerHome}</Link></li>
            <li ><Link href={'/' + locale + '/about'}>{headerAbout}</Link></li>
            <li ><Link href={'/' + locale + '/events'}>{headerEvents}</Link></li>
            {/* <li ><Link href={'/' + locale }>{headerBoard}</Link></li> */}
            <li ><Link href={'/' + locale + '#contact'}>{headerContact}</Link></li>
            <li>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>{headerLanguage}</button>
                <div className={styles.dropdownContent}>
                  <button className="w-full text-left" onClick={() => handleLanguage('en')}>EN</button>
                  <button className="w-full text-left" onClick={() => handleLanguage('fi')}>FI</button>
                </div>
              </div>
            </li> 
          </ul>
        </nav>
        <div className="max-sm:flex flex-row justify-between hidden">
        <Link href={'/' + locale}>
          <Image
            src="/logo.png"
            alt="Hangflow Logo"
            width={70}
            height={70}
            quality="95"
            priority={true}
          />
          </Link>
          <div className="flex flex-row gap-8 w-3/5 justify-end pr-4">
            <div className={styles.dropdownMobile}>
              <button className={styles.dropbtnMobile}><BiWorld className="w-full h-full" /></button>
              <div className={styles.dropdownContentMobile}>
                <button className="w-full text-left" onClick={() => handleLanguage('en')}>EN</button>
                <button className="w-full text-left" onClick={() => handleLanguage('fi')}>FI</button>
              </div>
            </div>
            <div className={styles.menu}>
              <button className={styles.menubtn}><TiThMenu className="w-full h-full" /></button>
              <div className={styles.menuContent}>
                <Link href={'/' + locale}>{headerHome}</Link>
                <Link href={'/' + locale + '/about'}>{headerAbout}</Link>
                <Link href={'/' + locale + '/events'}>{headerEvents}</Link>
                <Link href={'/' + locale + '/about#boardMembers'}>{headerBoard}</Link>
                <Link href={'/' + locale + '#contact'}>{headerContact}</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
