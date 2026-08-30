import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartPulse, Clock, Users } from "lucide-react";
import { hospitalInfo, coreValues, careTeam } from "@/content/hospitalData";
import { Gallery } from "@/components/Gallery";

export const metadata = {
  title: "About Us | Nhyirakesi Wellness Hospital",
  description: "Learn about Nhyirakesi Wellness Hospital's mission, healthcare philosophy, and patient-centered clinical care in Takoradi, Ghana.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 border-b border-slate-800 text-left">
        <div className="max-w-7xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800 text-blue-300 text-xs font-semibold border border-slate-700">
            About Nhyirakesi Hospital
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Our Healthcare Mission & Philosophy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Providing holistic, scientific, and natural medical solutions to restore health, relieve chronic pain, and improve patient wellbeing in Takoradi.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Natural Therapies & Modern Medical Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Located on Adientem Road in Takoradi, <strong className="text-slate-900">Nhyirakesi Wellness Hospital</strong> provides patient-focused health care that combines clinical diagnostic evaluations with evidence-informed natural medicine.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our team works closely with each patient to evaluate underlying health factors, manage chronic conditions, and provide non-surgical physical rehabilitation for joint and spine pain.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <p className="font-serif text-slate-900 font-bold text-sm sm:text-base">
                "{hospitalInfo.slogan}"
              </p>
              <p className="text-xs text-slate-500">
                Guiding every consultation, therapy session, and treatment plan at our Takoradi facility.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 h-80 sm:h-96">
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
        <div className="bg-slate-50 rounded-xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="text-left max-w-2xl">
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Pillars of Our Practice
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Built on patient safety, scientific evidence, and attentive care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-md bg-blue-50 text-medical-blue border border-blue-200 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Gallery */}
        <Gallery />

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-4 border-t border-slate-200">
          <h3 className="font-serif text-2xl font-bold text-slate-900">
            Have Questions or Need a Medical Evaluation?
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-medical-red hover:bg-medical-red-hover text-white px-6 py-3 rounded-lg font-bold text-sm shadow-2xs transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${hospitalInfo.phones[0].value}`}
              className="bg-medical-blue hover:bg-medical-blue-dark text-white px-6 py-3 rounded-lg font-bold text-sm shadow-2xs transition-colors"
            >
              Call Hotline: {hospitalInfo.phones[0].display}
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}

