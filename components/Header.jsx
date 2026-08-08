"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, MapPin, MessageCircle, Menu, X, Calendar } from "lucide-react";
import { hospitalInfo } from "@/content/hospitalData";
import { BookingModal } from "./BookingModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement & Emergency Contact Bar */}
      <div className="bg-medical-dark text-slate-200 text-xs py-2 px-4 transition-colors border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400 badge-pulse pl-4">
              {hospitalInfo.status}
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-medical-blue" />
              Takoradi, Ghana (Adientem Rd)
            </span>
          </div>

          {/* Right Phone Contacts */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 font-semibold text-white">
              <Phone className="w-3.5 h-3.5 text-medical-red animate-pulse" />
              <span>Call:</span>
              <a href={`tel:${hospitalInfo.phones[0].value}`} className="hover:text-medical-blue transition-colors">
                {hospitalInfo.phones[0].display}
              </a>
              <span className="hidden lg:inline text-slate-600">|</span>
              <a href={`tel:${hospitalInfo.phones[1].value}`} className="hidden lg:inline hover:text-medical-blue transition-colors">
                {hospitalInfo.phones[1].display}
              </a>
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href={`https://wa.me/${hospitalInfo.whatsappNumber}?text=Hello%20Nhyirakesi%20Wellness%20Hospital,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-full font-medium transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Hospital Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-14 overflow-hidden rounded-lg border-2 border-medical-blue shadow-sm transition-transform group-hover:scale-105 bg-white">
              <Image
                src={hospitalInfo.logoPath}
                alt="Nhyirakesi Hospital Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <div className="font-serif font-extrabold text-lg sm:text-xl text-medical-dark leading-tight tracking-tight group-hover:text-medical-blue transition-colors">
                NHYIRAKESI
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-medical-blue">
                Wellness Hospital
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-slate-700 text-sm">
            <Link href="/" className="hover:text-medical-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-medical-blue transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-medical-blue transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-medical-blue transition-colors">
              Location & Contact
            </Link>
          </nav>

          {/* CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-hover text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 font-medium text-slate-800 text-base">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-medical-blue"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-medical-blue"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-medical-blue"
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-medical-blue"
              >
                Location & Contact
              </Link>
            </nav>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-medical-red text-white py-3 rounded-xl font-semibold shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              <a
                href={`tel:${hospitalInfo.phones[0].value}`}
                className="w-full flex items-center justify-center gap-2 bg-medical-blue text-white py-3 rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call {hospitalInfo.phones[0].display}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Appointment Modal Popup */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
