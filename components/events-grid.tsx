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


export default function EventsGrid({eventsProjects }: {
    eventsProjects: string,
   
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
    <div className="flex flex-col justify-center  w-3/5 max-sm:w-full">
    <div className="flex flex-col mb-8 sm:mb-0 left-0 w-3/5 ">
      <motion.h3
        className="-mb-4 sm:mb-5 mt-2 px-4 text-2xl font-medium !leading-[1] sm:text-4xl flex flex-col "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-extrabold flex text-left mb-5 justify-start">
        {eventsProjects}{" "}
        </span>
        
      </motion.h3>

      
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div><div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="h-48 overflow-hidden relative">
                        <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
                            rel="noopener noreferrer">
                            
                        <Image
                            src="/coming_event.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-gray-700 dark:text-white/70">Coming Soon...</div>
                        {/* <p className="text-xs my-1">
                            General Manager
                        </p> */}
                        <p className="text-gray-700 dark:text-white/70 text-left text-l ">
                        Read More
                        </p>
                    </div>
                </div>
         
                

</div>
    
  </div>
      
    </motion.section>
  );
}


// <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-[0]">
//                     <div className="h-48 overflow-hidden relative">
//                         <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
//                             rel="noopener noreferrer">
                            
//                         <Image
//                             src="/coming_event.png"
//                             alt="Hangflow Logo"
//                             fill
//                             objectFit="cover"
//                             quality="95"
//                             className="z-0"
//                             priority={true} />
//                         </a>
//                     </div>
//                     {/* <div className="px-6 py-4">
//                         <div className="font-bold text-xl mb-2 text-black">Nombre del evento</div>
//                         <p className="text-gray-700 text-base">
//                             Esta es una breve descripción del evento. Aquí puedes añadir algunos detalles o información relevante.
//                         </p>
//                     </div> */}
//                 </div>
//                 <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-[0]" onClick={() => goToDetailEvents('2')}>
//                     <div className="h-48 overflow-hidden relative">
//                         <Image
//                             src="/group-pic1.png"
//                             alt="Hangflow Logo"
//                             fill
//                             objectFit="cover"
//                             quality="95"
//                             className="z-0"
//                             priority={true} />
//                     </div>
//                     {/* <div className="px-6 py-4">
//                         <div className="font-bold text-xl mb-2 text-black">Nombre del evento</div>
//                         <p className="text-gray-700 text-base">
//                             Esta es una breve descripción del evento. Aquí puedes añadir algunos detalles o información relevante.
//                         </p>
//                     </div> */}
//                 </div>
//                 <div className="max-w-md rounded overflow-hidden shadow-lg z-[0] bg-gray-100 border border-black/5 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
//                     <div className="h-48 overflow-hidden relative">
//                         <a href="https://www.instagram.com/hangfloww?igsh=MWNoajYwdDc4am9tZA==" target="_blank"
//                             rel="noopener noreferrer">
                            
//                         <Image
//                             src="/group-pic1.png"
//                             alt="Hangflow Logo"
//                             fill
//                             objectFit="cover"
//                             quality="95"
//                             className="z-0"
//                             priority={true} />
//                         </a>
//                     </div>
//                     <div className="px-6 py-4">
//                         <div className="font-bold text-xl text-gray-700 dark:text-white/70">John</div>
//                         <p className="text-xs my-1">
//                             General Manager
//                         </p>
//                         <p className="text-gray-700 dark:text-white/70 text-left text-l ">
//                         General Manager
//                         </p>
//                     </div>
//                 </div>