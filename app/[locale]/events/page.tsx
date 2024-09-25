"use client";

import EventsAbout from "@/components/events-about";
import EventsCheckout from "@/components/events-checkout";
import EventsIntro from "@/components/events-intro";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Events() {
    const locale = useLocale();
    const router = useRouter();

    function goToDetailEvents(id: string) {
        router.push(`/${locale}/events/${id}`);
    }


    return (
        <div
            className="flex flex-col items-center justify-center h-full w-full gap-5 mb-6"
        >
            <div className="flex flex-col items-center justify-center scroll-smooth">
    
      <EventsIntro/>
      <EventsAbout/>
      <EventsCheckout/>
  
            </div>
            <div className="flex flex-row max-sm:flex-col w-full justify-center gap-5">
                <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-[0]" onClick={() => goToDetailEvents('1')}>
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/group-pic1.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            className="z-0"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Nombre del evento</div>
                        <p className="text-gray-700 text-base">
                            Esta es una breve descripción del evento. Aquí puedes añadir algunos detalles o información relevante.
                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-1 " onClick={() => goToDetailEvents('2')}>
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="/group-pic1.png"
                            alt="Hangflow Logo"
                            fill
                            objectFit="cover"
                            quality="95"
                            priority={true} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Nombre del evento</div>
                        <p className="text-gray-700 text-base">
                            Esta es una breve descripción del evento. Aquí puedes añadir algunos detalles o información relevante.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full justify-center gap-5">
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-1" onClick={() => goToDetailEvents('3')}>
                <div className="h-48 overflow-hidden relative">
                    <Image
                        src="/group-pic1.png"
                        alt="Hangflow Logo"
                        fill
                        objectFit="cover"
                        quality="95"
                        priority={true} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">Nombre del evento</div>
                    <p className="text-gray-700 text-base">
                        Esta es una breve descripción del evento. Aquí puedes añadir algunos detalles o información relevante.
                    </p>
                </div>
            </div>
            </div>
            
        </div>
    )

}
