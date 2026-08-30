"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Stethoscope, Activity, Sparkles, Clock, CheckCircle2, Phone, Calendar, ArrowRight } from "lucide-react";
import { servicesList, hospitalInfo } from "@/content/hospitalData";
import { BookingModal } from "@/components/BookingModal";

const iconMap = {
  Stethoscope: Stethoscope,
  Activity: Activity,
  Sparkles: Sparkles,
  Clock: Clock,
};

export function ServicesClient() {
  const [activeTabId, setActiveTabId] = useState(servicesList[0].id);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Sync active tab with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = servicesList.find((s) => s.slug === hash || s.id === hash);
        if (found) {
          setActiveTabId(found.id);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeService = servicesList.find((s) => s.id === activeTabId) || servicesList[0];
  const ActiveIcon = iconMap[activeService.iconName] || Stethoscope;

  return (
    <div className="space-y-10">
      {/* Tab Navigation - Concise & Clean */}
      <div className="border-b border-slate-200 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 min-w-max pb-px">
          {servicesList.map((service) => {
            const Icon = iconMap[service.iconName] || Stethoscope;
            const isActive = service.id === activeTabId;

            return (
              <button
                key={service.id}
                onClick={() => {
                  setActiveTabId(service.id);
                  window.history.replaceState(null, "", `#${service.slug}`);
                }}
                className={`inline-flex items-center gap-2 px-4 py-3 border-b-2 text-xs sm:text-sm font-bold transition-all rounded-t-lg ${
                  isActive
                    ? "border-medical-blue text-medical-blue bg-blue-50/50"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-medical-blue" : "text-slate-400"}`} />
                <span>{service.shortTitle || service.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed View Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-2xs space-y-8">
        
        {/* Service Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-200">
          <div className="lg:col-span-8 space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-blue-50 text-medical-blue text-xs font-bold border border-blue-200">
              <ActiveIcon className="w-3.5 h-3.5" />
              {activeService.categoryName || "Specialty Care"}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              {activeService.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {activeService.fullDesc}
            </p>
          </div>

          {activeService.imagePath && (
            <div className="lg:col-span-4 relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
              <Image
                src={activeService.imagePath}
                alt={activeService.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* 2-Column Content: How We Can Help & Available Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* How We Can Help */}
          <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              How We Can Help
            </h3>
            <ul className="space-y-2.5">
              {activeService.howWeCanHelp?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Available Services & Treatments */}
          <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              Available Treatments & Services
            </h3>
            <ul className="space-y-2.5">
              {activeService.availableTreatments?.map((treatment, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-medical-blue shrink-0 mt-2"></span>
                  <span>{treatment}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* What to Expect Section */}
        <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-serif text-lg font-bold text-slate-900">
            What to Expect During Your Visit
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {activeService.whatToExpect}
          </p>
        </div>

        {/* Ready to Book CTA Banner */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-serif text-xl font-bold text-white">
              Ready to Book Your Consultation?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Our Takoradi clinic on Adientem Road is open 24/7. Walk-in or schedule an appointment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-hover text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-2xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>

            <a
              href={`tel:${hospitalInfo.phones[0].value}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-5 py-2.5 rounded-lg font-bold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Call {hospitalInfo.phones[0].display}
            </a>
          </div>
        </div>

      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
