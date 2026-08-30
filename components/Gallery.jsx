"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, CheckCircle2 } from "lucide-react";
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
    <section id="gallery" className="py-12 md:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 text-left">
          <h2 className="section-title text-slate-900 leading-tight">
            Inside Nhyirakesi Wellness Hospital
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Explore our consultation suites, physical rehabilitation rooms, and patient care areas at our Takoradi facility.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-sans">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-semibold text-slate-800 shadow-2xs font-sans">
                  {item.category}
                </div>

                {/* Expand Overlay Icon */}
                <div className="absolute top-3 right-3 bg-slate-900/80 p-2 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-20 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-lg shadow-md border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-[400px] w-full bg-slate-900">
              <Image
                src={activeImage.imagePath}
                alt={activeImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-5 bg-white border-t border-slate-200 space-y-1.5 font-sans">
              <div className="inline-flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Nhyirakesi Wellness Hospital Photo
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900">
                {activeImage.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
