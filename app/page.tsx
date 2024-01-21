import About from "@/components/about";
import Contact from "@/components/contact";
import Qualifications from "@/components/qualifications";
import Intro from "@/components/intro";
import Services from "@/components/services";
import SectionDivider from "@/components/section-divider";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-2">
      <Intro />
      <SectionDivider />
      <About />
      <Services />
      <Reviews />
      <Qualifications />
      <Contact />
    </main>
  );
}
