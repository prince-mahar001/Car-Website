'use client';

import React from 'react';

interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

const METRICS: MetricItem[] = [
  { value: '500+', label: 'Verified Cabs', sublabel: 'Spotless & sanitized' },
  { value: '24/7', label: 'Taxi Dispatch', sublabel: 'Instant & scheduled' },
  { value: '100%', label: 'Locked Fares', sublabel: 'Zero surge guarantee' },
  { value: '50+', label: 'City Routes', sublabel: 'Airports & outstation' },
  { value: '50k+', label: 'Safe Trips', sublabel: 'Licensed TLC drivers' }
];

export default function MissionStatsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white text-zinc-950 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Split: Headline + Story Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Ride in Luxury.<br />
              Arrive on Time.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Experience the pinnacle of reliable, prompt, and comfortable cab mobility crafted for city commuters, business executives, and world travelers.
              Whether heading to an early-morning airport flight, attending an executive summit, or traveling safely across town with family,
              Dream Drive pairs spotless, air-conditioned cabs with vetted professional chauffeurs straight to your pickup point with zero waiting delays.
            </p>
          </div>
        </div>

        {/* Bottom Metrics Counter Strip */}
        <div className="mt-16 pt-12 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 text-center sm:text-left">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-800">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="text-xs text-zinc-400 font-normal">
                  {metric.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

