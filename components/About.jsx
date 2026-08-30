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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Story Grid - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-medical-blue">
              About Nhyirakesi Hospital
            </h2>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Bridging Natural Therapies & Clinical Medicine
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Located on Adientem Road in Takoradi, <strong className="text-slate-900 font-semibold">Nhyirakesi Wellness Hospital</strong> provides holistic medical care, specialized spine rehabilitation, and preventive health guidance to patients across Takoradi and surrounding communities.
            </p>

            <div className="p-4 bg-slate-50 border-l-4 border-medical-blue rounded-r-lg space-y-1">
              <p className="font-serif italic text-slate-800 text-sm sm:text-base font-semibold">
                "{hospitalInfo.slogan}"
              </p>
              <p className="text-xs text-slate-500">
                Hospital Philosophy • Adientem Road, Takoradi
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  Evidence-Informed Phytotherapy
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Botanical medicine integrated with clinical diagnostic evaluations.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  Spine & Joint Alignment
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Non-surgical physical rehabilitation for sciatica, back, and joint pain.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 shadow-sm space-y-3">
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={hospitalInfo.receptionPhotoPath}
                  alt="Nhyirakesi Wellness Hospital Reception Lounge in Takoradi"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-2 space-y-1">
                <h4 className="font-serif font-bold text-slate-900 text-base">
                  Hospital Reception & Patient Care Center
                </h4>
                <p className="text-xs text-slate-600">
                  Located at BU211 Polo Street, Adientem Road (Opposite Ponty Int. School). Open 24/7.
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
            <p className="text-slate-600 text-sm mt-1">
              Dedicated clinical physicians and physical therapy specialists serving our Takoradi facility.
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
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-medical-blue uppercase tracking-wider">
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
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="text-left max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Our Principles of Medical Care
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Guiding how we consult, treat, and support every patient who visits us.
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
                  <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
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

