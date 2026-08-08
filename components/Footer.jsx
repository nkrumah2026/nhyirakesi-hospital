import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Heart, ShieldAlert, ArrowUpRight } from "lucide-react";
import { hospitalInfo, servicesList } from "@/content/hospitalData";

export function Footer() {
  return (
    <footer className="bg-medical-dark text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-14 overflow-hidden rounded-lg border border-slate-700 bg-white">
                <Image
                  src={hospitalInfo.logoPath}
                  alt="Nhyirakesi Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div className="font-serif font-extrabold text-xl text-white tracking-tight">
                  NHYIRAKESI
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-medical-blue">
                  Wellness Hospital
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              "{hospitalInfo.slogan}"
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open 24 Hours • Takoradi, Ghana
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white font-bold text-base border-l-2 border-medical-blue pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Hospital & Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Health Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Location & Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-white font-bold text-base border-l-2 border-medical-red pl-2.5">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesList.map((srv) => (
                <li key={srv.id}>
                  <Link href={`/services/${srv.slug}`} className="hover:text-white transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts & Address (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white font-bold text-base border-l-2 border-emerald-500 pl-2.5">
              Emergency & Direct Line
            </h4>
            
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-medical-blue shrink-0 mt-0.5" />
                <span>{hospitalInfo.address.fullAddress}</span>
              </p>
              
              <div className="pt-2 space-y-1">
                {hospitalInfo.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.value}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors font-medium text-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-medical-red" />
                    {p.display}
                  </a>
                ))}
              </div>

              <p className="flex items-center gap-2 text-slate-400 pt-1">
                <Mail className="w-3.5 h-3.5 text-medical-blue" />
                <a href={`mailto:${hospitalInfo.email}`} className="hover:underline">
                  {hospitalInfo.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Nhyirakesi Wellness Hospital. All rights reserved. Takoradi, Ghana.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={hospitalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              Instagram <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={hospitalInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              Facebook <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
