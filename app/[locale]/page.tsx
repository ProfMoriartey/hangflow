import About from "@/components/about";
import Contact from "@/components/contact";
import Qualifications from "@/components/qualifications";
import Intro from "@/components/intro";
// import Services from "@/components/services";
import SectionDivider from "@/components/section-divider";
import Reviews from "@/components/reviews";
import CheckEvents from "@/components/check-events";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex flex-col items-center px-2">
      {t("title")}
      <Intro />
      <SectionDivider />
      <About />
      <CheckEvents />
      <Reviews />
      {/* <Qualifications /> */}
      <Contact />
    </main>
  );
}
