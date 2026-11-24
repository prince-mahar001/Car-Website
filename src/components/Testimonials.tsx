'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  avatarText: string;
}

const TESTIMONIAL_LIST: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    role: 'Private Equity Director',
    location: 'New York & Miami',
    comment: 'The Porsche 911 GT3 RS arrived at my Hamptons residence in pristine showroom condition. The concierge walked me through every control and track mode. Absolutely world-class experience from start to finish.',
    avatarText: 'MV'
  },
  {
    id: 't-2',
    name: 'Sophia Laurent',
    role: 'Fashion Creative Executive',
    location: 'Milan / Los Angeles',
    comment: 'Renting the Ferrari 488 Spider for a coastal weekend was completely seamless. No long lines, no confusing paperwork or surprise charges. Just pure driving pleasure and impeccable white-glove service.',
    avatarText: 'SL'
  },
  {
    id: 't-3',
    name: 'David Chen',
    role: 'Tech Founder & Investor',
    location: 'San Francisco, CA',
    comment: 'Uttarakhand Texi Service is in a league of its own. When my incoming flight touched down, the cab was waiting curbside with my preferred climate and audio settings ready. Unmatched attention to detail.',
    avatarText: 'DC'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_LIST.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIAL_LIST.length) % TESTIMONIAL_LIST.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-white text-zinc-950 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title + Carousel Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Trusted by Thousands
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 max-w-xl">
              Discover why discerning travelers, families, and executives make Uttarakhand Texi Service their first call.
            </p>
          </div>

          {/* Right Arrow Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_LIST.map((t, idx) => {
            const isFocal = idx === currentIndex;
            return (
              <div
                key={t.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isFocal
                    ? 'border-zinc-950 shadow-md ring-1 ring-zinc-950/5'
                    : 'border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 text-zinc-300 fill-zinc-200" />
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      5.0 Rating • Verified
                    </span>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-8">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-zinc-100">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                    {t.avatarText}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-zinc-950">{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <span className="text-xs text-zinc-400 font-normal">
                      {t.role} • {t.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
