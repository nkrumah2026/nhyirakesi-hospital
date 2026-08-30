import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Phone, Sparkles, Clock } from "lucide-react";
import { servicesList, hospitalInfo } from "@/content/hospitalData";

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Nhyirakesi Wellness Hospital`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-medical-blue hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Header Section */}
        <div className="space-y-3 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-blue-50 text-medical-blue text-xs font-bold uppercase tracking-wider border border-blue-200">
            Specialized Care Protocol
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {service.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Featured Service Image */}
        {service.imagePath && (
          <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
            <Image
              src={service.imagePath}
              alt={service.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}

        {/* Detailed Content */}
        <div className="space-y-8 text-slate-700 text-base leading-relaxed">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
            <h2 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-medical-blue" />
              About This Specialty
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Features Bullets */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Clinical Focus & Offerings:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800 text-xs sm:text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hospital Contact Callout */}
          <div className="p-6 bg-slate-900 text-white rounded-xl space-y-3 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4" /> Open 24 Hours / 7 Days in Takoradi
            </div>
            <h3 className="font-serif text-xl font-bold">
              Ready to schedule your evaluation?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Visit our facility at BU211 Polo Street, Adientem Road, Takoradi or contact us to speak with a practitioner today.
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

