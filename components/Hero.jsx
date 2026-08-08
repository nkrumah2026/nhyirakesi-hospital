"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Calendar, ShieldCheck, HeartPulse, Sparkles, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { hospitalInfo } from "@/content/hospitalData";
import { BookingModal } from "./BookingModal";

export function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-medical-light via-white to-slate-50 py-12 md:py-20 lg:py-24 border-b border-slate-100">
      {/* Background Decorative Glow Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-medical-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-medical-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Hospital Badge Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-medical-blue text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Nhyirakesi Wellness Hospital • Open 24/7</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-6xl text-medical-dark leading-[1.15] tracking-tight">
              HOME of Natural, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue via-blue-700 to-medical-blue-dark">
                Scientific Health
              </span>{" "}
              & Wellness
            </h1>

            {/* Subheading / Slogan */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Merging modern medical diagnostics with evidence-backed holistic therapies to restore root-cause health, pain relief, beauty, and longevity in Takoradi, Ghana.
            </p>

            {/* Key Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-medical-blue shrink-0" />
                <span>Natural & Scientific</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <HeartPulse className="w-4 h-4 text-medical-red shrink-0" />
                <span>Spine & Joint Care</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Open Emergency</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-medical-red hover:bg-medical-red-hover text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${hospitalInfo.phones[0].value}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-medical-dark border-2 border-slate-200 hover:border-medical-blue px-6 py-3.5 rounded-xl font-bold text-base shadow-sm transition-all"
              >
                <Phone className="w-5 h-5 text-medical-blue animate-pulse" />
                <span>Call {hospitalInfo.phones[0].display}</span>
              </a>
            </div>

            {/* Quick Contact & Landmark Note */}
            <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
              <span className="font-semibold text-slate-700">📍 Adientem Road:</span>
              <span>Opposite Ponty International School, Takoradi</span>
            </div>
          </motion.div>

          {/* Right Column Showcase Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-medical-blue to-medical-red rounded-3xl blur-xl opacity-25 -rotate-1 scale-105" />

              {/* Main Card Wrapper */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-5 overflow-hidden">
                {/* Visual Header */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-900 mb-4 border border-slate-100">
                  <Image
                    src={hospitalInfo.servicesFlyerPath}
                    alt="Nhyirakesi Wellness Hospital Services"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Logo Badge on Visual */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-1.5 rounded-xl shadow-md border border-slate-200/50 flex items-center gap-2">
                    <div className="relative w-8 h-10">
                      <Image
                        src={hospitalInfo.logoPath}
                        alt="Hospital Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="pr-2 text-left">
                      <div className="text-[10px] font-extrabold text-medical-dark leading-none">NHYIRAKESI</div>
                      <div className="text-[8px] font-semibold text-medical-blue tracking-tighter">WELLNESS HOSPITAL</div>
                    </div>
                  </div>

                  {/* Visual Caption Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-0.5">
                      Holistic & Scientific Healthcare
                    </div>
                    <div className="text-sm font-serif font-bold text-slate-100">
                      Takoradi's Premier Wellness Destination
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid inside card */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-blue-100 text-medical-blue rounded-lg shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Alternative & Holistic Health</h4>
                      <p className="text-xs text-slate-600">Personalized natural treatments tailored to your metabolic blueprint.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-red-100 text-medical-red rounded-lg shrink-0 mt-0.5">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Spine, Joint & Nerve Relief</h4>
                      <p className="text-xs text-slate-600">Advanced therapy for back pain, sciatica, arthritis, and stiffness.</p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Status */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <CheckCircle className="w-4 h-4" /> Open 24 Hours Today
                  </span>
                  <a href={`tel:${hospitalInfo.phones[0].value}`} className="text-medical-blue hover:underline font-bold">
                    Emergency: {hospitalInfo.phones[0].display}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
