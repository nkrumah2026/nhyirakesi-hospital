"use client";

import Link from "next/link";
import { Stethoscope, Activity, Sparkles, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesList, cardServicesList } from "@/content/hospitalData";

const iconMap = {
  Stethoscope: Stethoscope,
  Activity: Activity,
  Sparkles: Sparkles,
  Clock: Clock,
};

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 text-left">
          <h2 className="section-title text-slate-900">
            Specialized Care & Official Treatments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            We offer comprehensive medical consultations, non-surgical physical rehabilitation, traditional herbal care, and specialized wellness treatments tailored to your health goals.
          </p>
        </div>

        {/* All Official Card Services List */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Our Full Range of Card Services ({cardServicesList.length})
            </h3>
            <span className="text-xs text-slate-500 font-medium">Available at Nhyirakesi Wellness Hospital</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {cardServicesList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-medical-blue transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-medical-blue shrink-0" />
                <span className="text-xs font-semibold text-slate-800 line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesList.map((service) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Visual Icon Identifier */}
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-medical-blue flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Single Concise CTA Link */}
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-medical-blue hover:text-medical-blue-dark transition-colors group font-sans"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
