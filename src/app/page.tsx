import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationLevels from "@/components/EducationLevels";
import Values from "@/components/Values";
import Community from "@/components/Community";
import News from "@/components/News";
import CTA from "@/components/CTA";
import Enrollment from "@/components/Enrollment";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EducationLevels />
      <Values />
      <Community />
      <News />
      <CTA />
      <Enrollment />
      <Contact />
    </>
  );
}
