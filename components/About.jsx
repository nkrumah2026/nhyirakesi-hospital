"use client";

import Image from "next/image";
import { ShieldCheck, HeartPulse, Clock, Users, CheckCircle } from "lucide-react";
import { hospitalInfo, coreValues, careTeam } from "@/content/hospitalData";

const iconMap = {
  ShieldCheck: ShieldCheck,
  HeartPulse: HeartPulse,
  Clock: Clock,
  Users: Users,
};

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Top Story Grid - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h2 className="section-title text-slate-900 leading-tight">
              Patient Care Dedicated to Community Health
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Located on Adientem Road in Takoradi, <strong className="text-slate-900 font-semibold">Nhyirakesi Wellness Hospital</strong> provides general medical consultations, non-surgical spine rehabilitation, and supportive wellness therapies for individuals and families across the Western Region.
            </p>

            <div className="p-4 bg-slate-50 border-l-4 border-medical-blue rounded-r-lg space-y-1">
              <p className="font-serif text-slate-800 text-sm sm:text-base font-semibold">
                "{hospitalInfo.slogan}"
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Hospital Philosophy • Adientem Road, Takoradi
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-sans">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  Natural & Medical Guidance
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Botanical remedies integrated safely with medical evaluations.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 font-sans">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  Spine & Joint Alignment
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Non-surgical physical rehabilitation for sciatica and back pain.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 shadow-2xs space-y-3">
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={hospitalInfo.receptionPhotoPath}
                  alt="Nhyirakesi Wellness Hospital Reception Lounge in Takoradi"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-2 space-y-1">
                <h4 className="font-serif font-semibold text-slate-900 text-base">
                  Hospital Reception & Patient Lounge
                </h4>
                <p className="text-xs text-slate-600 font-sans">
                  BU211 Polo Street, Adientem Road (Opposite Ponty Int. School). Open 24/7.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Medical & Care Team Spotlight */}
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="text-left max-w-2xl">
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
                <div className="space-y-1 font-sans">
                  <span className="text-[11px] font-semibold text-medical-blue">
                    {member.role}
                  </span>
                  <h4 className="font-serif font-bold text-slate-900 text-lg">
                    {member.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="text-left max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Our Principles of Care
            </h3>
            <p className="text-slate-600 text-sm mt-1 font-sans">
              Guiding how we consult, treat, and support every patient who visits our hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((val, idx) => {
              const IconComp = iconMap[val.iconName] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-medical-blue flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-semibold text-slate-900 text-base">{val.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
