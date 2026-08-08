import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Calendar, Phone, Sparkles, Clock, ShieldCheck } from "lucide-react";
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
    <div className="bg-white py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-medical-blue hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Header Section */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-medical-blue text-xs font-bold uppercase tracking-wider">
            Specialized Care Protocol
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-medical-dark tracking-tight">
            {service.title}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Detailed Content */}
        <div className="space-y-8 text-slate-700 text-base sm:text-lg leading-relaxed">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-medical-dark flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-medical-blue" />
              About This Specialty
            </h2>
            <p className="text-slate-600 text-base">
              {service.fullDesc}
            </p>
          </div>

          {/* Features Bullets */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-medical-dark">
              What We Offer in This Service:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800 text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hospital Slogan Callout */}
          <div className="p-6 bg-medical-dark text-white rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" /> Open 24 Hours / 7 Days
            </div>
            <h3 className="font-serif text-xl font-bold">
              Ready to schedule your evaluation?
            </h3>
            <p className="text-slate-300 text-sm">
              Visit our facility at BU211 Polo Street, Adientem Road, Takoradi or contact us to book a consultation today.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${hospitalInfo.phones[0].value}`}
                className="bg-medical-red hover:bg-medical-red-hover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {hospitalInfo.phones[0].display}
              </a>
              <a
                href={`https://wa.me/${hospitalInfo.whatsappNumber}?text=Hello%20Nhyirakesi%20Hospital,%20I%20want%20to%20book%20an%20appointment%20for%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
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
