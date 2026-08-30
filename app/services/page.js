import Link from "next/link";
import { Services } from "@/components/Services";

export const metadata = {
  title: "Healthcare Services & Specialties | Nhyirakesi Wellness Hospital",
  description: "Explore our medical specialties: Natural & Scientific Medicine, Spine & Joint Pain Rehabilitation, Wellness & Rejuvenation, and 24/7 Consultations in Takoradi.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 border-b border-slate-800 text-left">
        <div className="max-w-7xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800 text-blue-300 text-xs font-semibold border border-slate-700">
            Nhyirakesi Medical Specialties
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Our Healthcare & Wellness Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Combining modern diagnostic care with evidence-informed natural therapies for complete restoration and patient wellness.
          </p>
        </div>
      </section>

      {/* Services Component Wrapper */}
      <Services />
    </div>
  );
}

