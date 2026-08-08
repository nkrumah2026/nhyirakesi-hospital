import { LocationContact } from "@/components/LocationContact";

export const metadata = {
  title: "Location & Contact Us | Nhyirakesi Wellness Hospital",
  description: "Contact Nhyirakesi Wellness Hospital on Adientem Road, Takoradi, Ghana. Phone: 050 588 8327. Open 24/7 for appointments and emergency care.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-medical-dark via-slate-900 to-medical-blue-dark text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
            Open 24/7 in Takoradi, Ghana
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Visit Nhyirakesi Hospital
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            We are always here to serve you. Call our phone numbers, message us on WhatsApp, or visit our facility on Adientem Road.
          </p>
        </div>
      </section>

      {/* Location and Contact Component */}
      <LocationContact />
    </div>
  );
}
