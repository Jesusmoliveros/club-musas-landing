import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Membership } from "@/components/sections/membership";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Membership />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
