'use client';

import React from 'react';
import { Car, Clock, ShieldCheck, MapPin, Users, CheckCircle2 } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
}

const METRICS: MetricItem[] = [
  {
    value: '500+',
    label: 'Verified Cabs',
    sublabel: 'Spotless & sanitized fleet',
    icon: Car,
    color: 'text-[#155DFC]',
    bg: 'bg-blue-50'
  },
  {
    value: '24/7',
    label: 'Taxi Dispatch',
    sublabel: 'Instant & advance booking',
    icon: Clock,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    value: '100%',
    label: 'Locked Fares',
    sublabel: 'Zero surge guarantee',
    icon: ShieldCheck,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    value: '50+',
    label: 'City Routes',
    sublabel: 'Airports & hill stations',
    icon: MapPin,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    value: '50k+',
    label: 'Safe Journeys',
    sublabel: 'Trusted by tourists & locals',
    icon: Users,
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  }
];

export default function MissionStatsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white text-zinc-950 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Split: Headline + Mission Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#155DFC]" />
              <span>Reliable Mountain & City Transit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-[1.12]">
              Ride in Luxury.<br />
              <span className="text-[#155DFC]">Arrive on Time.</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
              Serving Bhimtal, Nainital, Kathgodam, Haldwani, airport connections, and inter-city routes across Uttarakhand.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50/80 border border-zinc-200/80 shadow-xs space-y-4">
              <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
                Experience the pinnacle of reliable, prompt, and comfortable cab mobility crafted for city commuters, business executives, and Bhimtal travelers.
                Whether heading to an early-morning airport flight, attending an executive summit, or exploring scenic hill stations safely with family,
                <strong> BHIMTAL Taxi Service</strong> pairs spotless, air-conditioned cabs with vetted professional chauffeurs straight to your pickup point with zero waiting delays.
              </p>

              {/* 3 Value Verification Badges */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-zinc-200/70">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed Flat Fares</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Live GPS Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Instant Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Stat Cards Grid (Fully Responsive) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            const isLastOdd = idx === METRICS.length - 1;
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-3xl bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-default ${
                  isLastOdd ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl ${metric.bg} flex items-center justify-center ${metric.color} shadow-2xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[#155DFC] transition-colors">
                    Verified
                  </span>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight group-hover:text-[#155DFC] transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-zinc-500 font-normal mt-0.5 line-clamp-1">
                    {metric.sublabel}
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

