"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, MessageCircle, Menu, X, Calendar } from "lucide-react";
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
      {/* Top Announcement & Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Open 24/7 in Takoradi
            </span>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-medical-blue" />
              BU211 Polo Street, Adientem Road, Takoradi
            </span>
          </div>

          {/* Right Phone Contacts */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 font-semibold text-white">
              <Phone className="w-3.5 h-3.5 text-medical-red" />
              <span className="text-slate-400 text-[11px] uppercase font-bold">Hotline:</span>
              <a href={`tel:${hospitalInfo.phones[0].value}`} className="hover:text-medical-blue transition-colors">
                {hospitalInfo.phones[0].display}
              </a>
              <span className="hidden lg:inline text-slate-700">|</span>
              <a href={`tel:${hospitalInfo.phones[1].value}`} className="hidden lg:inline hover:text-medical-blue transition-colors">
                {hospitalInfo.phones[1].display}
              </a>
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href={`https://wa.me/${hospitalInfo.whatsappNumber}?text=Hello%20Nhyirakesi%20Wellness%20Hospital,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-md font-medium text-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 bg-white border-b border-slate-200 transition-all duration-200 ${
          isScrolled ? "shadow-sm py-3" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Hospital Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-13 overflow-hidden rounded-md border border-slate-300 bg-white">
              <Image
                src={hospitalInfo.logoPath}
                alt="Nhyirakesi Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <div className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight group-hover:text-medical-blue transition-colors">
                NHYIRAKESI
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-medical-blue">
                Wellness Hospital
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-slate-700 text-sm">
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
              className="inline-flex items-center gap-2 bg-medical-red hover:bg-medical-red-hover text-white px-4 py-2 rounded-lg font-bold text-sm shadow-2xs transition-colors"
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
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-2 font-semibold text-slate-800 text-base">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-medical-blue"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-medical-blue"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-medical-blue"
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-medical-blue"
              >
                Location & Contact
              </Link>
            </nav>

            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-medical-red text-white py-2.5 rounded-lg font-bold shadow-2xs"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              <a
                href={`tel:${hospitalInfo.phones[0].value}`}
                className="w-full flex items-center justify-center gap-2 bg-medical-blue text-white py-2.5 rounded-lg font-bold"
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
