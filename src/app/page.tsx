import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Industries from "@/components/home/Industries";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import GlobalReach from "@/components/home/GlobalReach";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Industries />
      <About />
      <Process />
      <Testimonials />
      <GlobalReach />
      <CTA />
    </>
  );
}
