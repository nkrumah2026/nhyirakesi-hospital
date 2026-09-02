import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { HomeFirstVisitAndContact } from "@/components/HomeFirstVisitAndContact";

export const metadata = {
  title: "Nhyirakesi Wellness Hospital | Takoradi, Ghana",
  description: "Natural & scientific healthcare, spine rehabilitation, and 24/7 medical consultations on Adientem Road, Takoradi.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <HomeFirstVisitAndContact />
    </>
  );
}
