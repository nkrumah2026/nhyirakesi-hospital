import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { hospitalInfo, servicesList } from "@/content/hospitalData";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-12 overflow-hidden rounded-md border border-slate-700 bg-white">
                <Image
                  src={hospitalInfo.logoPath}
                  alt="Nhyirakesi Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white tracking-tight">
                  NHYIRAKESI
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-medical-blue">
                  Wellness Hospital
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              "{hospitalInfo.slogan}"
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Open 24/7 • Takoradi, Ghana
            </div>
          </div>

          {/* Quick Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-sm border-l-2 border-medical-blue pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
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
                  Healthcare Services & Specialties
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
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-white font-bold text-sm border-l-2 border-medical-red pl-2">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesList.map((srv) => (
                <li key={srv.id}>
                  <Link href={`/services#${srv.slug}`} className="hover:text-white transition-colors">
                    {srv.shortTitle || srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts & Address (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-sm border-l-2 border-emerald-500 pl-2">
              Takoradi Location & Contact
            </h4>
            
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-medical-blue shrink-0 mt-0.5" />
                <span>{hospitalInfo.address.fullAddress}</span>
              </p>
              
              <div className="pt-1 space-y-1">
                {hospitalInfo.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.value}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors font-medium text-xs"
                  >
                    <Phone className="w-3 h-3 text-medical-red" />
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
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
