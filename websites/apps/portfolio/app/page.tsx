import { Hero } from "@/sections/hero";
import { Stats } from "@/sections/stats";
import { Services } from "@/sections/services";
import { FeaturedProjects } from "@/sections/featured-projects";
import { TechStack } from "@/sections/tech-stack";
import { Process } from "@/sections/process";
import { Testimonials } from "@/sections/testimonials";
import { FAQ } from "@/sections/faq";
import { CTA } from "@/sections/cta";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <FeaturedProjects />
        <TechStack />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}