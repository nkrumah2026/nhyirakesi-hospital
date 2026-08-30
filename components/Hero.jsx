"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Calendar, ShieldCheck, HeartPulse, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { hospitalInfo } from "@/content/hospitalData";
import { BookingModal } from "./BookingModal";

export function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Hospital Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs">
              <span>Nhyirakesi Wellness Hospital • Open 24/7 in Takoradi</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-slate-900">
              Natural & Scientific Healthcare, Spine Rehabilitation & Wellness
            </h1>

            {/* Clear, Human Subheading */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Medical consultations, non-surgical spine and joint care, and supportive natural therapies provided by dedicated healthcare practitioners in Takoradi, Ghana.
            </p>

            {/* Key Service Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 max-w-xl">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-medical-blue shrink-0" />
                <span>Natural & Clinical Care</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
                <HeartPulse className="w-4 h-4 text-medical-red shrink-0" />
                <span>Spine & Joint Rehab</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open 24/7 Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-medical-red hover:bg-medical-red-hover text-white px-6 py-3 rounded-lg font-bold text-sm shadow-2xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${hospitalInfo.phones[0].value}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 px-6 py-3 rounded-lg font-bold text-sm shadow-2xs transition-colors"
              >
                <Phone className="w-4 h-4 text-medical-blue" />
                <span>Call {hospitalInfo.phones[0].display}</span>
              </a>
            </div>

            {/* Hospital Landmark Info */}
            <div className="pt-3 text-xs text-slate-500 flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-slate-700">Location:</span>
              <span>BU211 Polo Street, Adientem Road (Opposite Ponty Int. School), Takoradi</span>
            </div>
          </motion.div>

          {/* Right Showcase Hospital Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-4">
              
              {/* Photo */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={hospitalInfo.doctorPhotoPath}
                  alt="Medical Consultation at Nhyirakesi Wellness Hospital"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Photo Caption & Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    Medical Consultation Suite
                  </h3>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Takoradi Facility
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our clinical team provides patient consultations combining medical evaluations with practical natural health guidance.
                </p>
              </div>

              {/* Quick Info Points */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <CheckCircle className="w-4 h-4" /> Open 24/7
                </span>
                <a href={`tel:${hospitalInfo.phones[0].value}`} className="text-medical-blue hover:underline font-bold">
                  Hotline: {hospitalInfo.phones[0].display}
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
