"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { hospitalInfo, faqList } from "@/content/hospitalData";

export function LocationContact() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider border border-emerald-100">
            Visit & Reach Us
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medical-dark tracking-tight">
            Location, Contacts & FAQs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Located conveniently on Adientem Road in Takoradi. Call us, send a WhatsApp message, or visit our facility 24/7.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Details Card (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="font-serif text-2xl font-bold text-medical-dark">
                Hospital Contact Channels
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Reach our receptionists and clinical team directly.
              </p>
            </div>

            {/* Address Item */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-medical-blue text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base">Physical Location & Address</h4>
                <p className="text-slate-700 text-sm font-semibold">
                  {hospitalInfo.address.street}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm">
                  {hospitalInfo.address.landmark}
                </p>
                <p className="text-medical-blue text-xs font-bold pt-1">
                  {hospitalInfo.address.city}, {hospitalInfo.address.country}
                </p>
              </div>
            </div>

            {/* Phone Numbers Grid */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-medical-red text-white flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-2 w-full">
                <h4 className="font-bold text-slate-900 text-base">Phone Numbers (Click to Call)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {hospitalInfo.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.value}`}
                      className="p-3 bg-white hover:bg-blue-50 border border-slate-200 hover:border-medical-blue rounded-xl text-center transition-all shadow-2xs group"
                    >
                      <div className="text-xs text-slate-500 font-medium">Phone {i + 1}</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-medical-blue">
                        {phone.display}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email & Digital Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200">
                <Mail className="w-5 h-5 text-medical-blue shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-500 font-medium">Email Us</div>
                  <a
                    href={`mailto:${hospitalInfo.email}`}
                    className="text-xs font-bold text-slate-900 hover:text-medical-blue truncate block"
                  >
                    {hospitalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Working Hours</div>
                  <div className="text-xs font-bold text-emerald-600">
                    Open 24 Hours / 7 Days
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Social Media CTAs */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${hospitalInfo.whatsappNumber}?text=Hello%20Nhyirakesi%20Hospital,%20I%20want%20to%20inquire%20about%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>

              <a
                href={hospitalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 py-3 px-4 rounded-xl font-semibold text-sm transition-all"
              >
                <ExternalLink className="w-4 h-4 text-purple-600" />
                Instagram
              </a>
            </div>

          </div>

          {/* Map Preview Card (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-blue/30 text-blue-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" /> Takoradi Map Location
              </div>
              <h3 className="font-serif text-2xl font-bold">
                Find Us in Takoradi
              </h3>
              <p className="text-slate-300 text-sm">
                Near Adonai Int. Church and directly opposite Ponty International School on Adientem Road.
              </p>

              {/* Graphical Location Box */}
              <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Street Code:</span>
                  <span className="font-mono text-amber-400 font-bold">BU211 Polo St</span>
                </div>
                <div className="text-sm font-bold text-white">
                  Adientem Road, Takoradi
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  ✓ Easily accessible by taxi, private vehicle & public transport
                </div>
              </div>
            </div>

            {/* Direct Directions Link Button */}
            <div className="pt-6 relative z-10 space-y-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalInfo.address.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-medical-blue hover:bg-medical-blue-dark text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                <MapPin className="w-4 h-4" />
                Open Directions in Google Maps
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                Need help finding us? Call 050 588 8327 for phone guidance.
              </p>
            </div>
          </div>

        </div>

        {/* FAQs Accordion Section */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-medical-dark flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-medical-blue" />
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-medical-blue"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-medical-blue shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
