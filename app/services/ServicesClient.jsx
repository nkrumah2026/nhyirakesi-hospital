"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Activity, Sparkles, Clock, CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { servicesList, cardServicesList } from "@/content/hospitalData";
import { BookingModal } from "@/components/BookingModal";

const iconMap = {
  Stethoscope: Stethoscope,
  Activity: Activity,
  Sparkles: Sparkles,
  Clock: Clock,
};

export function ServicesClient() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="space-y-12">
      {/* Overview Intro */}
      <div className="text-left space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          Clinical Specialties & Healthcare Programs
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-sans leading-relaxed">
          Select any healthcare program below to view detailed treatment plans, available therapies, and recovery guidance.
        </p>
      </div>

      {/* Clickable Specialty Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {servicesList.map((service) => {
          const IconComponent = iconMap[service.iconName] || Stethoscope;

          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-medical-blue transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-5">
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-medical-blue flex items-center justify-center group-hover:bg-medical-blue group-hover:text-white transition-colors shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                    {service.categoryName}
                  </span>
                </div>

                {/* Service Image (if available) */}
                {service.imagePath && (
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src={service.imagePath}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Title & Short Description */}
                <div className="space-y-2 text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-medical-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Featured Treatments:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.availableTreatments?.slice(0, 3).map((treatment, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{treatment}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-blue-50/50 transition-colors">
                <span className="text-xs sm:text-sm font-bold text-medical-blue">
                  Explore Full Care Details
                </span>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-medical-blue flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-2xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Full 22 Services from Official Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              Our Full Range of Services ({cardServicesList.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5">
              Available at Nhyirakesi Wellness Hospital • Adientem Road, Takoradi
            </p>
          </div>
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-medical-blue hover:bg-medical-blue-hover text-white px-4 py-2 rounded-lg font-bold text-xs shadow-2xs transition-colors shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Any Service</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cardServicesList.map((serviceName, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setBookingOpen(true)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-medical-blue text-left transition-all group"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-medical-blue group-hover:bg-medical-blue group-hover:text-white flex items-center justify-center shrink-0 border border-blue-100 font-bold text-xs transition-colors">
                {idx + 1}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-medical-blue transition-colors">
                {serviceName}
              </span>
            </button>
          ))}
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
