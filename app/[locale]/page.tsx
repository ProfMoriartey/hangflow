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
      <Intro intro1={t("intro1")} intro2={t("intro2")}/>
      <About aboutTitle={t("aboutTitle")} aboutDesc={t("aboutDesc")} aboutHeader={t("aboutHeader")} ReadMore={t("ReadMore")}/>
      <CheckEvents checkEvents={t("checkEvents")} ReadMore={t("ReadMore")}/>
      <Features />
      <BoardMembers />
      {/* <Reviews /> */}
      {/* <Qualifications /> */}
      <Contact />
    </main>
  );
}
