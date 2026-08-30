"use client";

import Image from "next/image";
import { ShieldCheck, HeartPulse, Clock, Users, CheckCircle, Sparkles } from "lucide-react";
import { hospitalInfo, coreValues } from "@/content/hospitalData";

const iconMap = {
  ShieldCheck: ShieldCheck,
  HeartPulse: HeartPulse,
  Clock: Clock,
  Users: Users,
};

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <div className="relative h-96 w-full">
                <Image
                  src={hospitalInfo.receptionPhotoPath}
                  alt="Nhyirakesi Wellness Hospital Reception Lounge"
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              {/* Overlay Stat Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-medical-blue text-white flex items-center justify-center font-bold text-lg">
                    24/7
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Always Open For You</h4>
                    <p className="text-xs text-slate-600">Takoradi, Ghana • Adientem Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-medical-blue text-xs font-bold uppercase tracking-wider">
              About Nhyirakesi Hospital
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medical-dark leading-tight">
              Bridging Natural Healing & Medical Science
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded on the principle that true health stems from harmony between modern medical science and nature's restorative power, <strong className="text-medical-dark font-semibold">Nhyirakesi Wellness Hospital</strong> provides holistic care to patients across Ghana and beyond.
            </p>

            <blockquote className="border-l-4 border-medical-red pl-4 py-2 bg-white rounded-r-xl italic text-slate-700 text-sm sm:text-base font-serif shadow-xs">
              "{hospitalInfo.slogan}"
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Natural Phytotherapy
                </div>
                <p className="text-xs text-slate-600">
                  Targeted plant-based treatments verified for physiological efficacy.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Spine & Joint Alignment
                </div>
                <p className="text-xs text-slate-600">
                  Non-invasive therapy protocols for disc, knee, and nerve restoration.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-medical-dark">
              Our Core Principles of Care
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              How we deliver patient-first medical excellence every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = iconMap[val.iconName] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-medical-blue flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">{val.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
