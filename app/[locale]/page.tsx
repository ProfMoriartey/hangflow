import About from "@/components/about";
import Contact from "@/components/contact";
import Qualifications from "@/components/qualifications";
import Intro from "@/components/intro";
// import Services from "@/components/services";
import SectionDivider from "@/components/section-divider";
// import Reviews from "@/components/reviews";
import CheckEvents from "@/components/check-events";
import { useTranslations } from "next-intl";
import BoardMembers from "@/components/board-members";
import Features from "@/components/features";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex flex-col items-center justify-center scroll-smooth">
      {/* {t("title")} */}
      <Intro events={t("events")} intro2={t("intro2")}/>
      <About aboutTitle={t("aboutTitle")} aboutDesc={t("aboutDesc")} aboutHeader1={t("aboutHeader1")} aboutHeader2={t("aboutHeader2")} ReadMore={t("ReadMore")} aboutBtn1={t("aboutBtn1")} aboutBtn2={t("aboutBtn2")} aboutBtn3={t("aboutBtn3")}/>
      <CheckEvents checkEvents={t("checkEvents")} ReadMore={t("ReadMore")} eventsDesc={t("eventsDesc")} />
      <Features valuesTitle1={t("valuesTitle1")} valuesTitle2={t("valuesTitle2")}/>
      <BoardMembers boardTitle1={t("boardTitle1")} boardTitle2={t("boardTitle2")} />
      {/* <Reviews /> */}
      {/* <Qualifications /> */}
      <Contact contactTitle={t("contactTitle")} contactEmail={t("contactEmail")} contactMessage={t("contactMessage")}/>
    </main>
  );
}
