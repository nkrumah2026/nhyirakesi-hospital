"use client";

import { useState } from "react";
import { X, Calendar, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { hospitalInfo, servicesList } from "@/content/hospitalData";

export function BookingModal({ isOpen, onClose }) {
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(servicesList[0].title);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-medical-dark text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-blue/30 text-emerald-400 text-xs font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            24/7 Booking Available
          </div>
          <h2 className="font-serif text-2xl font-bold">Book an Appointment</h2>
          <p className="text-slate-300 text-sm mt-1">
            Nhyirakesi Wellness Hospital • Takoradi, Ghana
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ama Mensah"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 050 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Select Healthcare Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm bg-white"
                >
                  {servicesList.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm bg-white"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    <option value="Anytime / Emergency">Anytime / Emergency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Health Symptoms or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe any pain, joint issues, or general health goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue text-slate-900 text-sm"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-medical-red hover:bg-medical-red-hover text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Proceed to Confirm Booking
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Ready to Send Request!
              </h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Click below to instantly dispatch your appointment details directly to our clinical receptionist team on WhatsApp.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={handleSendWhatsapp}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp Now
                </button>
                <a
                  href={`tel:${hospitalInfo.phones[0].value}`}
                  className="w-full py-3 bg-medical-blue hover:bg-medical-blue-dark text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
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
