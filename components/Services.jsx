"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Activity, Sparkles, Clock, CheckCircle2, ArrowRight, Calendar } from "lucide-react";
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

  return (
    <section id="services" className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Left Aligned */}
        <div className="max-w-3xl space-y-2 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-medical-blue">
            Our Healthcare Services
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Specialized Clinical & Rehabilitation Practices
          </h3>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We provide evidence-informed natural medicine, non-surgical physical rehabilitation, and 24/7 consultations tailored to your individual health needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;
            
            // Contextual CTA button copy
            const ctaText = service.id === "spine-joint-rehab"
              ? "Book Pain Assessment"
              : service.id === "24-7-consultation-emergency"
              ? "Speak to Reception"
              : "Consult a Practitioner";

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                {/* Service Card Image Banner */}
                {service.imagePath && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                    <Image
                      src={service.imagePath}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white border border-slate-200 p-2 rounded-lg shadow-2xs text-medical-blue">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold text-slate-800 bg-white/95 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                        {service.categoryName || "Specialty"}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4">
                  {/* Title & Short Description */}
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlight Box */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{service.highlight}</span>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Clinical Focus Areas:</div>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-medical-red hover:bg-medical-red-hover px-4 py-2.5 rounded-lg transition-colors shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {ctaText}
                  </button>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-medical-blue hover:text-medical-blue-dark transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Hospital Banner */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" /> Open 24/7 in Takoradi, Ghana
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold">
              Have Specific Symptoms or Require Immediate Guidance?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Call our main hospital phone lines or visit our clinic directly on Adientem Road. Walk-in consultations are welcome.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-medical-red hover:bg-medical-red-hover text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-2xs transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:0505888327"
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-5 py-2.5 rounded-lg font-bold text-xs transition-colors"
            >
              Call 050 588 8327
            </a>
          </div>
        </div>

      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}

