import { ServicesClient } from "./ServicesClient";

export const metadata = {
  title: "Healthcare Services & Specialties | Nhyirakesi Wellness Hospital",
  description: "Explore our medical specialties: Natural & Scientific Medicine, Spine & Joint Care, Beauty & Wellness, and 24/7 Consultations in Takoradi.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 border-b border-slate-800 text-left">
        <div className="max-w-7xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800 text-blue-300 text-xs font-semibold border border-slate-700 font-sans">
            Nhyirakesi Medical Specialties
          </div>
          <h1 className="page-title text-white">
            Our Healthcare & Wellness Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Combining modern diagnostic care with supportive natural therapies for patient recovery and well-being in Takoradi.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <ServicesClient />
      </main>
    </div>
  );
}
