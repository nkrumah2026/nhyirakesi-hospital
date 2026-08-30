import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Phone, Calendar, Clock, Stethoscope, Activity, Sparkles } from "lucide-react";
import { servicesList, hospitalInfo } from "@/content/hospitalData";

const iconMap = {
  Stethoscope: Stethoscope,
  Activity: Activity,
  Sparkles: Sparkles,
  Clock: Clock,
};

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug || s.id === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Nhyirakesi Wellness Hospital`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Stethoscope;

  return (
    <div className="bg-slate-50 py-10 sm:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-medical-blue hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Detailed Service Content Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-2xs space-y-8">
          
          {/* Header Section */}
          <div className="space-y-3 border-b border-slate-200 pb-6 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-blue-50 text-medical-blue text-xs font-bold border border-blue-200">
              <IconComponent className="w-3.5 h-3.5" />
              {service.categoryName || "Specialty Care"}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {service.title}
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Featured Service Image */}
          {service.imagePath && (
            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-2xs border border-slate-200 bg-slate-100">
              <Image
                src={service.imagePath}
                alt={service.title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          )}

          {/* 2-Column: How We Can Help & Available Treatments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h2 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                How We Can Help
              </h2>
              <ul className="space-y-2.5">
                {service.howWeCanHelp?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h2 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                Available Treatments
              </h2>
              <ul className="space-y-2.5">
                {service.availableTreatments?.map((treatment, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-medical-blue shrink-0 mt-2"></span>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What to Expect */}
          <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-200">
            <h2 className="font-serif text-lg font-bold text-slate-900">
              What to Expect During Your Visit
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {service.whatToExpect}
            </p>
          </div>

          {/* Contact & Booking Callout */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-xl space-y-4 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4" /> Open 24/7 in Takoradi, Ghana
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Ready to schedule your evaluation?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Visit our facility at BU211 Polo Street, Adientem Road, Takoradi or call direct to speak with a practitioner today.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${hospitalInfo.phones[0].value}`}
                className="bg-medical-red hover:bg-medical-red-hover text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-2xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {hospitalInfo.phones[0].display}
              </a>
              <a
                href={`https://wa.me/${hospitalInfo.whatsappNumber}?text=Hello%20Nhyirakesi%20Hospital,%20I%20want%20to%20book%20an%20appointment%20for%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-bold text-xs transition-colors"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
