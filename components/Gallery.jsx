"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronRight, CheckCircle2 } from "lucide-react";
import { facilityGallery } from "@/content/hospitalData";

const categories = ["All", "Clinical Care", "Facility", "Therapies"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? facilityGallery
      : facilityGallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-medical-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-medical-red/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Authentic Facility Showcase
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Hospital & Treatment Center
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Take a visual tour inside Nhyirakesi Wellness Hospital in Takoradi — featuring our clinical consultation rooms, pristine facility, and specialized therapy equipment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-medical-blue text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative bg-slate-800/70 border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-medical-blue/50 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-blue-300">
                  {item.category}
                </div>

                {/* Expand Overlay Icon */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-medical-blue pt-2 group-hover:translate-x-1 transition-transform">
                  <span>View Full Photo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-0">
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 bg-slate-800/90 hover:bg-slate-700 text-white p-2.5 rounded-full shadow-lg border border-slate-600/50 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-[450px] w-full bg-slate-950">
              <Image
                src={activeImage.imagePath}
                alt={activeImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 bg-slate-900 border-t border-slate-800 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Nhyirakesi Hospital Facility Photo
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {activeImage.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
