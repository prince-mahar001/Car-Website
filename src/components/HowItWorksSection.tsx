'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, MapPin, KeyRound, Car } from 'lucide-react';

interface StepCard {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: StepCard[] = [
  {
    number: '01',
    title: 'Choose Your Cab',
    description: 'Select Economy, Sedan Prime, Family SUV, or Executive Chauffeur for your journey.',
    icon: <Car className="w-4 h-4 text-amber-500" />
  },
  {
    number: '02',
    title: 'Book in 60 Seconds',
    description: 'Enter your pickup and destination to get instant guaranteed flat fares with zero surge.',
    icon: <Clock className="w-4 h-4 text-blue-500" />
  },
  {
    number: '03',
    title: 'Driver Dispatched',
    description: 'A licensed TLC chauffeur is promptly assigned with vehicle details and live ETA.',
    icon: <MapPin className="w-4 h-4 text-emerald-500" />
  },
  {
    number: '04',
    title: 'Live GPS Tracking',
    description: 'Watch your cab arrive in real time with turn-by-turn live navigation and flight sync.',
    icon: <ShieldCheck className="w-4 h-4 text-violet-500" />
  },
  {
    number: '05',
    title: 'Guaranteed Flat Fares',
    description: 'Pay exactly what was quoted upfront—zero peak multipliers and zero surprise fees.',
    icon: <CheckCircle2 className="w-4 h-4 text-teal-500" />
  },
  {
    number: '06',
    title: 'Safe Doorstep Drop',
    description: 'Arrive on time, refreshed and relaxed. Pay seamlessly by card, cash, or online.',
    icon: <KeyRound className="w-4 h-4 text-rose-500" />
  }
];

export default function HowItWorksSection() {
  const handleScrollToBooking = () => {
    const el = document.getElementById('fleet');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white text-zinc-950 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Simple, Fast, Hassle-Free
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 max-w-xl">
              From instant booking to safe arrival, our seamless taxi dispatch eliminates waiting delays and surge fees.
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollToBooking}
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm px-6 py-3 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <span>Book A Cab</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bento Grid: 6 Steps on Left + Architectural Showcase Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 6 Step Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="group p-5 rounded-2xl bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shadow-xs">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-zinc-500 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Doorstep Cab Arrival Showcase Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-200/80 min-h-[360px] lg:min-h-full group">
            <Image
              src="/images/fleet/cab-doorstep-arrival.jpg"
              alt="Executive Chauffeur Cab Arrival at Hotel Doorstep"
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                24/7 Cab Dispatch
              </span>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
                Prompt Doorstep Cab Arrival
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-sm">
                Clean, air-conditioned taxis waiting right at your doorstep, hotel, or airport terminal on time.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

