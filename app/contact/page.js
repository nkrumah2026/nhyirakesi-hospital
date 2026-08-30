import { LocationContact } from "@/components/LocationContact";

export const metadata = {
  title: "Location & Contact Us | Nhyirakesi Wellness Hospital",
  description: "Contact Nhyirakesi Wellness Hospital on Adientem Road, Takoradi, Ghana. Phone: 050 588 8327. Open 24/7 for appointments and clinical care.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 border-b border-slate-800 text-left">
        <div className="max-w-7xl mx-auto space-y-2 font-sans">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800 text-emerald-400 text-xs font-semibold border border-slate-700 font-sans">
            Open 24/7 in Takoradi, Ghana
          </div>
          <h1 className="page-title text-white">
            Contact & Visit Nhyirakesi Hospital
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Call our phone hotlines, send a direct WhatsApp message, or visit our hospital facility on Adientem Road.
          </p>
        </div>
      </section>

      {/* Location and Contact Component */}
      <LocationContact />
    </div>
  );
}
