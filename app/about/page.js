import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartPulse, Clock, Users, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { hospitalInfo, coreValues } from "@/content/hospitalData";
import { Gallery } from "@/components/Gallery";

export const metadata = {
  title: "About Us | Nhyirakesi Wellness Hospital",
  description: "Learn about Nhyirakesi Wellness Hospital's mission, natural & scientific health philosophy, and patient-centered clinical care in Takoradi, Ghana.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-medical-dark via-slate-900 to-medical-blue-dark text-white py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
            About Nhyirakesi Hospital
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Mission & Healthcare Philosophy
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Providing holistic, scientific, and natural medical solutions to restore lifelong health, energy, and freedom from pain.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-medical-dark">
              Where Natural Healing Meets Scientific Medicine
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Located on Adientem Road in Takoradi, <strong className="text-slate-900">Nhyirakesi Wellness Hospital</strong> was established to offer patients an advanced alternative to purely symptom-masking care.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              By combining thorough clinical diagnostic assessments with targeted botanical medicine, nutritional therapy, and non-surgical musculoskeletal rehabilitation, we help our patients overcome chronic illness and live vibrant lives.
            </p>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <h3 className="font-serif text-lg font-bold text-medical-blue">
                "{hospitalInfo.slogan}"
              </h3>
              <p className="text-xs text-slate-600">
                Our motto guides every doctor consultation, therapy session, and patient interaction at our Takoradi facility.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 h-96">
              <Image
                src={hospitalInfo.doctorPhotoPath}
                alt="Nhyirakesi Hospital Lead Physician & Consultation Office"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-medical-dark">
              Four Pillars of Our Clinical Practice
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Built on patient safety, scientific evidence, and compassionate service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-medical-blue flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{val.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Gallery */}
        <Gallery />

        {/* Call to Action */}
        <div className="text-center space-y-6 pt-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-medical-dark">
            Ready to Experience Holistic Healthcare?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-medical-red hover:bg-medical-red-hover text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-md transition-all"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${hospitalInfo.phones[0].value}`}
              className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-md transition-all"
            >
              Call Hotline: {hospitalInfo.phones[0].display}
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
