import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import About from "@/components/home/About";
import SaaSImpact from "@/components/home/SaaSImpact";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import GlobalReach from "@/components/home/GlobalReach";
import Portfolio from "@/components/home/Portfolio";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <About />
      <SaaSImpact />
      <Process />
      <Testimonials />
      <GlobalReach />
      <Portfolio />
      <CTA />
    </>
  );
}
