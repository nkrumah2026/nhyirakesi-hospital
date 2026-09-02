"use client";

import Image from "next/image";
import { Clock, HeartPulse, ShieldCheck } from "lucide-react";
import { hospitalInfo } from "@/content/hospitalData";

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Trust & Differentiator Strip (3 Key Points) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-medical-blue border border-blue-100 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
              Integrated Natural & Clinical Care
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Medical consultations paired with safe, supportive botanical remedies guided by clinical assessment.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 text-left">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-medical-red border border-red-100 flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
              Non-Surgical Spine & Joint Care
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Specialized alignment therapies and physical rehabilitation for back pain, sciatica, and joint strain.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
              Open 24/7 in Takoradi
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Round-the-clock outpatient consultation and care on Adientem Road, Takoradi.
            </p>
          </div>
        </div>

        {/* Single Photo Facility Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-slate-200 pt-10">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs font-bold text-medical-blue uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Welcome to Nhyirakesi
            </span>
            <h2 className="section-title text-slate-900 leading-tight">
              Patient-Focused Healthcare in Takoradi
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Located on Adientem Road, <strong className="text-slate-900 font-semibold">Nhyirakesi Wellness Hospital</strong> provides general medical consultations, non-surgical spine rehabilitation, and supportive wellness therapies for individuals and families across the Western Region.
            </p>

            <div className="p-4 bg-slate-50 border-l-4 border-medical-blue rounded-r-lg space-y-1">
              <p className="font-serif text-slate-800 text-sm sm:text-base font-semibold">
                "{hospitalInfo.slogan}"
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Hospital Philosophy • Adientem Road, Takoradi
              </p>
            </div>
          </div>

          {/* Right Single Photo Showcase Card */}
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

              <div className="p-2 space-y-1 text-left">
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

      </div>
    </section>
  );
}
