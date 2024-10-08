import AboutAbout from "@/components/about-about";
import AboutGrid from "@/components/about-grid";
import AboutIntro from "@/components/about-intro";
import AboutQuestions from "@/components/about-questions";
import Accordeon from "@/components/accordeon";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function AboutUs() {
    const t = useTranslations("Index");
    return (
        <div className="sm:scroll-m-28">

        
        <div
            className="flex flex-col items-center justify-center h-full w-full gap-5 mb-6"
        >
            <div className="flex flex-col items-center justify-center scroll-smooth">
                <AboutIntro aboutIntro1={t("aboutIntro.aboutIntro1")} aboutIntro2={t("aboutIntro.aboutIntro2")}/>
                <AboutAbout aboutTitle={t("aboutAbout.aboutTitle")} aboutDesc1={t("aboutAbout.aboutDesc1")} aboutDesc2={t("aboutAbout.aboutDesc2")} aboutDesc3={t("aboutAbout.aboutDesc3")} aboutDesc4={t("aboutAbout.aboutDesc4")} aboutDesc5={t("aboutAbout.aboutDesc5")} />
                <AboutGrid/>
                <AboutQuestions/>
            </div>
        </div>

        {/* <div className="flex w-full flex-col items-center justify-center mb-5">
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
        </div> */}
        </div>
    )
}