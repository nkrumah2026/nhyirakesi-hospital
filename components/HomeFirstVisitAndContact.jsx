"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, ExternalLink, Calendar } from "lucide-react";
import { hospitalInfo, firstVisitSteps } from "@/content/hospitalData";
import { BookingModal } from "./BookingModal";

export function HomeFirstVisitAndContact() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Patient First Visit Guide */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-2xs">
          <div className="text-left max-w-2xl space-y-1 font-sans">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              What to Expect on Your First Visit
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We ensure every patient receives clear, comfortable, and attentive medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-left">
            {firstVisitSteps.map((stepItem, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-medical-blue bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    Step {stepItem.step}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-slate-900 text-base">{stepItem.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{stepItem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Contact CTA Block */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-sm space-y-6 font-sans">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6 text-left">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-semibold text-emerald-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                Open 24 Hours a Day • Takoradi Facility
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white pt-1">
                Have Questions or Ready to Visit?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Nhyirakesi Wellness Hospital is located on Adientem Road, Takoradi (Opposite Ponty International School).
              </p>
            </div>

            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-medical-red hover:bg-medical-red-hover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-2xs transition-colors shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Quick Action Contact Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Primary Phone */}
            <a
              href={`tel:${hospitalInfo.phones[0].value}`}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] text-slate-400 font-semibold uppercase block">Primary Call Line</span>
                <span className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                  {hospitalInfo.phones[0].display}
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${hospitalInfo.whatsappNumber}?text=Hello%20Nhyirakesi%20Hospital,%20I%20want%20to%20inquire%20about%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] text-slate-400 font-semibold uppercase block">WhatsApp Consultation</span>
                <span className="text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  Message Online
                </span>
              </div>
            </a>

            {/* Get Directions */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalInfo.address.fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden flex-1">
                <span className="text-[11px] text-slate-400 font-semibold uppercase block">Takoradi Location</span>
                <span className="text-sm font-bold text-blue-300 group-hover:text-blue-200 transition-colors flex items-center gap-1">
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </span>
              </div>
            </a>

          </div>
        </div>

      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
