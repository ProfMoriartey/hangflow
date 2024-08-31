"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function events() {


    return (
        <div
            className="flex flex-col items-center justify-center h-full w-full gap-5 mb-6"
        >
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-[0]">
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
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-1">
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
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white z-1">
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
    )

}
