import Link from "next/link";
import { Services } from "@/components/Services";

export const metadata = {
  title: "Healthcare Services & Specialties | Nhyirakesi Wellness Hospital",
  description: "Explore our medical specialties: Natural & Scientific Medicine, Spine & Joint Pain Rehabilitation, Wellness & Longevity, and 24/7 Consultations in Takoradi.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-medical-dark via-slate-900 to-medical-blue-dark text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
            Nhyirakesi Medical Specialties
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Healthcare & Wellness Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Combining modern medical diagnostics with evidence-backed natural therapies for complete restoration and vital health.
          </p>
        </div>
      </section>

      {/* Services Component Wrapper */}
      <Services />
    </div>
  );
}
