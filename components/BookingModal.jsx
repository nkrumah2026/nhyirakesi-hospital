"use client";

import { useState } from "react";
import { X, Calendar, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { hospitalInfo, servicesList, cardServicesList } from "@/content/hospitalData";

export function BookingModal({ isOpen, onClose }) {
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(cardServicesList[0]);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (9 AM - 12 PM)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsapp = () => {
    const text = `*APPOINTMENT BOOKING REQUEST*%0A` +
      `*Name:* ${patientName || "Patient"}%0A` +
      `*Phone:* ${phone || "Not provided"}%0A` +
      `*Service:* ${selectedService}%0A` +
      `*Preferred Date:* ${preferredDate || "As soon as possible"}%0A` +
      `*Time Window:* ${preferredTime}%0A` +
      `*Notes:* ${notes || "None"}`;

    window.open(`https://wa.me/${hospitalInfo.whatsappNumber}?text=${text}`, "_blank");
    onClose();
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 text-emerald-400 text-xs font-semibold mb-1 border border-slate-700 font-sans">
            Takoradi Clinic • Open 24/7
          </div>
          <h3 className="font-serif text-xl font-bold">Book an Appointment</h3>
          <p className="text-slate-300 text-xs mt-0.5 font-sans">
            Nhyirakesi Wellness Hospital • Adientem Road, Takoradi
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 font-sans">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ama Mensah"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 050 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Select Healthcare Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm bg-white font-sans"
                >
                  <optgroup label="All Healthcare Services">
                    {cardServicesList.map((serviceName, idx) => (
                      <option key={idx} value={serviceName}>
                        {serviceName}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="General Care Categories">
                    {servicesList.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm bg-white font-sans"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    <option value="Anytime / Walk-In">Anytime / Walk-In</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Health Symptoms or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe any pain, joint stiffness, or general health concerns..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm font-sans"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2 font-sans">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-medical-red hover:bg-medical-red-hover text-white font-semibold rounded-lg transition-colors shadow-2xs flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Proceed to Confirm Request
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-3 font-sans">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-900">
                Ready to Send Request!
              </h4>
              <p className="text-slate-600 text-xs max-w-xs mx-auto leading-relaxed">
                Click below to send your appointment details directly to our Takoradi receptionist on WhatsApp.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleSendWhatsapp}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-2xs flex items-center justify-center gap-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp Now
                </button>
                <a
                  href={`tel:${hospitalInfo.phones[0].value}`}
                  className="w-full py-2.5 bg-medical-blue hover:bg-medical-blue-dark text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Or Call Direct: {hospitalInfo.phones[0].display}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
