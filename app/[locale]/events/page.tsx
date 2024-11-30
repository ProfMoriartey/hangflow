// "use client";------1

import EventsAbout from "@/components/events-about";
import EventsCheckout from "@/components/events-checkout";
import EventsGrid from "@/components/events-grid";
import EventsIntro from "@/components/events-intro";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Events() {
    const locale = useLocale();
    const t = useTranslations("Index");
    // const router = useRouter();------1

    // function goToDetailEvents(id: string) {------1
    //     router.push(`/${locale}/events/${id}`);------1
    // }------1


    return (
        <div
            className="flex flex-col items-center justify-center h-full w-full gap-5 mb-6 sm:scroll-m-28"
        >
            <div className="flex flex-col items-center justify-center scroll-smooth">
                <EventsIntro eventsIntro={t("eventsPage.eventsIntro")} events={t("events")}/>
                <EventsAbout  eventTitle={t("eventsPage.eventTitle")} eventsDesc1={t("eventsPage.eventsDesc1")} eventsDesc2={t("eventsPage.eventsDesc2")} eventsDesc3={t("eventsPage.eventsDesc3")} eventsBtn={t("eventsPage.eventsBtn")}/>
                {/* <EventsCheckout/> */}
                <EventsGrid eventsProjects={t("eventsPage.eventsProjects")}/>
            </div>

            {/* <div className="flex flex-row max-sm:flex-col w-full justify-center gap-5">
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
            </div> */}
            
        </div>
    )

}
