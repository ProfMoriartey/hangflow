import Accordeon from "@/components/accordeon";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function AboutUs() {
    const t = useTranslations("Index");
    return (
        <div className="flex w-full flex-col items-center justify-center mb-5">
            <div className=" flex-col w-9/12">
                <div className="flex lg:flex-row-reverse max-sm:flex-col w-full mb-14">
                    <div className="lg:w-6/12 max-sm:w-full flex flex-col pl-5 max-sm:mb-10">
                        <strong className="text-5xl mb-4">{t("aboutPage.ourStory")}</strong>
                        <p>
                            {t("aboutDesc")}
                        </p>
                    </div>
                    <div>
                        <Image src="/team-about.png"
                            alt="Hangflow Logo"
                            width={500}
                            height="600"
                            quality="95"
                            priority={true}
                            className="mb-0 -mt-2 rounded-3xl">
                        </Image>
                    </div>
                </div>
                <div className="flex lg:flex-row max-sm:flex-col w-full mb-10">
                    <div className="lg:w-6/12 max-sm:w-full flex flex-col pr-5 max-sm:mb-10">
                        <strong className="text-5xl mb-4">{t("aboutPage.ourMission")}</strong>
                        <p>
                            {t("aboutDesc")}
                        </p>
                    </div>
                    <div>
                        <Image src="/group-pic1.png"
                            alt="Hangflow Logo"
                            width={500}
                            height="600"
                            quality="95"
                            priority={true}
                            className="mb-0 -mt-2 rounded-3xl">
                        </Image>
                    </div>
                </div>
            </div>
            <Accordeon></Accordeon>
        </div>
    )
}