import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { LocationContact } from "@/components/LocationContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <LocationContact />
    </>
  );
}
