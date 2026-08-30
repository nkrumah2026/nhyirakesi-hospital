"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, HelpCircle, ChevronDown, ChevronUp, CheckCircle, Calendar } from "lucide-react";
import { hospitalInfo, faqList, firstVisitSteps } from "@/content/hospitalData";
import { BookingModal } from "./BookingModal";

export function LocationContact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header - Left Aligned */}
        <div className="max-w-3xl space-y-2 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-medical-blue">
            Hospital Location & Contact
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Visiting Nhyirakesi Wellness Hospital
          </h3>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Located on Adientem Road in Takoradi. Call our phone numbers, message us on WhatsApp, or visit our clinic at any hour.
          </p>
        </div>

        {/* Patient First Visit Guide */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-2xs">
          <div className="text-left max-w-2xl space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              What to Expect on Your First Visit
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              We ensure every patient receives clear, comfortable, and attentive medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {firstVisitSteps.map((stepItem, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-medical-blue bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    Step {stepItem.step}
                  </span>
                </div>
                <h5 className="font-bold text-slate-900 text-base">{stepItem.title}</h5>
                <p className="text-slate-600 text-xs leading-relaxed">{stepItem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info & Directions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h4 className="font-serif text-xl font-bold text-slate-900">
                Direct Contact Lines
              </h4>
              <p className="text-slate-600 text-xs mt-0.5">
                Our receptionists and clinical team are available 24 hours a day.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-medical-blue border border-blue-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 text-xs sm:text-sm">
                <h5 className="font-bold text-slate-900">Physical Address</h5>
                <p className="text-slate-700 font-medium">{hospitalInfo.address.street}</p>
                <p className="text-slate-600">{hospitalInfo.address.landmark}</p>
                <p className="text-medical-blue font-semibold pt-0.5">{hospitalInfo.address.city}, {hospitalInfo.address.country}</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-medical-red border border-red-200 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-2 w-full">
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Phone Lines (Click to Call)</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {hospitalInfo.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.value}`}
                      className="p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-medical-blue rounded-lg text-center transition-colors"
                    >
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">Line {i + 1}</div>
                      <div className="text-xs font-bold text-slate-900">
                        {phone.display}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <Mail className="w-4 h-4 text-medical-blue shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Email</div>
                  <a
                    href={`mailto:${hospitalInfo.email}`}
                    className="text-xs font-bold text-slate-900 hover:underline truncate block"
                  >
                    {hospitalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Working Hours</div>
                  <div className="text-xs font-bold text-emerald-600">
                    Open 24 Hours / 7 Days
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Booking CTAs */}
            <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${hospitalInfo.whatsappNumber}?text=Hello%20Nhyirakesi%20Hospital,%20I%20want%20to%20inquire%20about%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-lg font-bold text-xs shadow-2xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Receptionist
              </a>

              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-medical-red hover:bg-medical-red-hover text-white py-2.5 px-4 rounded-lg font-bold text-xs shadow-2xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book Online
              </button>
            </div>

          </div>

          {/* Location Map Box (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 rounded-xl p-6 text-white border border-slate-800 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 text-blue-300 text-xs font-semibold border border-slate-700">
                <MapPin className="w-3.5 h-3.5" /> Location & Directions
              </div>
              <h4 className="font-serif text-xl font-bold">
                Finding Our Takoradi Clinic
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Located on Adientem Road, directly opposite Ponty International School and near Adonai Int. Church.
              </p>

              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 space-y-1 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Polo Street Code:</span>
                  <span className="font-mono text-amber-400 font-bold">BU211</span>
                </div>
                <div className="font-bold text-white">
                  Adientem Road, Takoradi, Ghana
                </div>
                <div className="text-emerald-400 text-[11px] font-medium pt-0.5">
                  ✓ Accessible by taxi, private car & public transport
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalInfo.address.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-medical-blue hover:bg-medical-blue-dark text-white py-2.5 px-4 rounded-lg font-bold text-xs transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Open Directions in Google Maps
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                Phone directions available at 050 588 8327.
              </p>
            </div>
          </div>

        </div>

        {/* Real Patient FAQs Section */}
        <div className="max-w-4xl mx-auto pt-4 border-t border-slate-200 space-y-6">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-2xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-medical-blue" />
              Frequently Asked Patient Questions
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Clear answers to common questions about visiting, appointments, and care protocols.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-medical-blue text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-medical-blue shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-4 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}

