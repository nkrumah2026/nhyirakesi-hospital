"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Activity, Sparkles, Clock, CheckCircle2, ArrowRight, Calendar, Info } from "lucide-react";
import { servicesList } from "@/content/hospitalData";
import { BookingModal } from "./BookingModal";

const iconMap = {
  Stethoscope: Stethoscope,
  Activity: Activity,
  Sparkles: Sparkles,
  Clock: Clock,
};

export function Services() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-medical-blue text-xs font-bold uppercase tracking-wider border border-blue-100">
            Clinical Excellence & Natural Care
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medical-dark tracking-tight">
            Our Healthcare & Wellness Specialties
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We combine natural botanical medicine with scientific diagnostic tools to restore vital energy, relieve chronic pain, and foster overall health and longevity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesList.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;
            
            return (
              <div
                key={service.id}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-medical-blue/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Service Card Image Banner */}
                {service.imagePath && (
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.imagePath}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        0{idx + 1} Specialty
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Title & Short Description */}
                  <h3 className="font-serif text-2xl font-bold text-medical-dark group-hover:text-medical-blue transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Highlight Badge */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60 text-xs font-semibold text-medical-dark mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{service.highlight}</span>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Offerings:</div>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-8 pb-8 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-medical-red hover:bg-medical-red-hover px-4 py-2.5 rounded-xl shadow-xs transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Service
                  </button>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-medical-blue hover:text-medical-blue-dark group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-medical-dark to-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" /> Open 24/7 Everyday
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Need Immediate Consultation or Have Pain Symptoms?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Our clinical doctors and natural healthcare therapists are ready to assist you right now at our Takoradi facility.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-medical-red hover:bg-medical-red-hover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                Schedule Consultation
              </button>
              <a
                href="tel:0505888327"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm transition-all"
              >
                Call Hotline: 050 588 8327
              </a>
            </div>
          </div>
        </div>

      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
