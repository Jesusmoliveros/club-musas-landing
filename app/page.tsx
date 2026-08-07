import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Membership } from "@/components/sections/membership";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Membership />
      </main>
    </>
  );
}