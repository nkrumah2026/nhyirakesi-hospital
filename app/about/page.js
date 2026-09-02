import Image from "next/image";
import Link from "next/link";
import { hospitalInfo, coreValues, careTeam } from "@/content/hospitalData";
import { Gallery } from "@/components/Gallery";

export const metadata = {
  title: "About Us | Nhyirakesi Wellness Hospital",
  description: "Learn about Nhyirakesi Wellness Hospital's mission, patient care approach, and healthcare facility in Takoradi, Ghana.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 border-b border-slate-800 text-left">
        <div className="max-w-7xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800 text-blue-300 text-xs font-semibold border border-slate-700 font-sans">
            About Nhyirakesi Hospital
          </div>
          <h1 className="page-title text-white">
            Our Healthcare Facility & Patient Care
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Providing accessible medical consultations, non-surgical physical rehabilitation, and natural healthcare in Takoradi.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 text-left">
            <h2 className="section-title text-slate-900">
              Natural Remedies & Modern Clinical Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Located on Adientem Road in Takoradi, <strong className="text-slate-900">Nhyirakesi Wellness Hospital</strong> provides patient-focused healthcare that combines standard clinical evaluations with safe, supportive natural medicine.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Our clinical practitioners perform thorough patient evaluations, assist in managing ongoing conditions, and provide targeted non-surgical rehabilitation for back, joint, and nerve pain.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <p className="font-serif text-slate-900 font-semibold text-sm sm:text-base">
                "{hospitalInfo.slogan}"
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Adientem Road, Takoradi • Open 24/7
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xs border border-slate-200 h-80 sm:h-96">
              <Image
                src={hospitalInfo.doctorPhotoPath}
                alt="Nhyirakesi Hospital Physician Consultation Office"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Healthcare Practitioners */}
        <div className="space-y-6 pt-4 border-t border-slate-200 text-left">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Our Healthcare Practitioners
            </h3>
            <p className="text-slate-600 text-sm mt-1 font-sans">
              Experienced physicians and physical therapy specialists serving our Takoradi facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careTeam.map((member, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-300 bg-slate-200">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 font-sans text-left">
                  <span className="text-[11px] font-semibold text-medical-blue">
                    {member.role}
                  </span>
                  <h4 className="font-serif font-bold text-slate-900 text-lg">
                    {member.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="bg-slate-50 rounded-xl p-6 sm:p-10 border border-slate-200 space-y-6 font-sans">
          <div className="text-left max-w-2xl">
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Principles of Our Practice
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Built on patient safety, attentive consultations, and clear communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2 text-left">
                <div className="w-8 h-8 rounded-md bg-blue-50 text-medical-blue border border-blue-200 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-serif font-semibold text-slate-900 text-base">{val.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Gallery */}
        <Gallery />

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-4 border-t border-slate-200 font-sans">
          <h3 className="font-serif text-2xl font-bold text-slate-900">
            Need a Medical Consultation or Information?
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-medical-red hover:bg-medical-red-hover text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-2xs transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${hospitalInfo.phones[0].value}`}
              className="bg-medical-blue hover:bg-medical-blue-dark text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-2xs transition-colors"
            >
              Call Hotline: {hospitalInfo.phones[0].display}
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
