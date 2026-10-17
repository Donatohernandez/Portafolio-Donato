import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Work } from "@/sections/Work";
import { Values } from "@/sections/Values";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Values />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
