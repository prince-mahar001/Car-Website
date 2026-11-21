'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Gauge, Zap, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { Vehicle } from '@/types/taxi';

interface RadialShowcaseProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

interface CategoryVehicle {
  id: string;
  category: 'Economy Cab' | 'Sedan Prime' | 'Family SUV' | 'Green EV' | 'VIP Chauffeur';
  name: string;
  tagline: string;
  luggage: string;
  responseEta: string;
  fareDisplay: string;
  image: string;
  dailyRate: number;
  highlight: string;
}

const CATEGORY_VEHICLES: CategoryVehicle[] = [
  {
    id: 'eco-swift',
    category: 'Economy Cab',
    name: 'Maruti Suzuki Swift',
    tagline: 'Agile & Fuel-Efficient City Cab',
    luggage: '3 Large Bags',
    responseEta: '< 5 Mins Dispatch',
    fareDisplay: '$25 Base Fare',
    image: '/images/hero-swift.png',
    dailyRate: 25,
    highlight: 'Prompt doorstep pickup, air-conditioned cabin, and contactless digital pay'
  },
  {
    id: 'sedan-octavia',
    category: 'Sedan Prime',
    name: 'Škoda Octavia',
    tagline: 'European Executive Sedan for Corporate & Airport Rides',
    luggage: '4 Bags (600L Boot)',
    responseEta: 'Guaranteed On-Time',
    fareDisplay: '$40 Base Fare',
    image: '/images/fleet-real/skoda-octavia-opt.jpg',
    dailyRate: 40,
    highlight: 'Extra rear legroom, plush leather upholstery, and quiet highway cruising'
  },
  {
    id: 'suv-xuv700',
    category: 'Family SUV',
    name: 'Mahindra XUV700',
    tagline: 'Spacious 7-Seater Cab for Groups & Heavy Luggage',
    luggage: '6 Suitcases',
    responseEta: 'Airport & Outstation',
    fareDisplay: '$45 Base Fare',
    image: '/images/fleet-real/mahindra-xuv700-opt.jpg',
    dailyRate: 45,
    highlight: '7 comfortable seats, dual-zone AC, and massive boot luggage capacity'
  },
  {
    id: 'green-zs-ev',
    category: 'Green EV',
    name: 'MG ZS EV',
    tagline: 'Zero-Emission Eco-Friendly Electric Taxi',
    luggage: '4 Bags',
    responseEta: 'Fast Eco Dispatch',
    fareDisplay: '$38 Base Fare',
    image: '/images/fleet-real/mg-zs-ev-opt.jpg',
    dailyRate: 38,
    highlight: 'Silent electric ride with zero emissions, USB-C fast ports, and panoramic roof'
  },
  {
    id: 'vip-innova',
    category: 'VIP Chauffeur',
    name: 'Toyota Innova Crysta',
    tagline: 'Gold Standard Chauffeur Driven Luxury & Comfort',
    luggage: '5 Large Bags',
    responseEta: 'Dedicated Chauffeur',
    fareDisplay: '$50 Base Fare',
    image: '/images/fleet-real/toyota-innova-opt.jpg',
    dailyRate: 50,
    highlight: 'Reclining captain chairs, supreme ride isolation, and complimentary bottled water'
  }
];

export default function RadialShowcaseSection({ onSelectVehicle }: RadialShowcaseProps) {
  const [activeTab, setActiveTab] = useState<CategoryVehicle['category']>('Economy Cab');
  const activeCar = CATEGORY_VEHICLES.find((c) => c.category === activeTab) || CATEGORY_VEHICLES[0];

  const handleBookCurrent = () => {
    const v: Vehicle = {
      id: activeCar.id,
      name: activeCar.name,
      tagline: activeCar.tagline,
      category: 'business',
      image: activeCar.image,
      passengerCapacity: activeCar.category === 'Family SUV' ? 7 : 4,
      luggageCapacity: 4,
      baseFare: activeCar.dailyRate,
      perKmRate: 2.8,
      features: [activeCar.highlight, activeCar.luggage, activeCar.responseEta, activeCar.fareDisplay],
      popularFor: activeCar.tagline
    };
    onSelectVehicle(v);
  };

  return (
    <section className="py-24 bg-zinc-50/70 text-zinc-950 border-t border-zinc-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Luxury Meets Reliability
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 max-w-xl">
              Punctual dispatch, certified background-checked chauffeurs, and transparent flat fares calibrated for every travel need.
            </p>
          </div>

          {/* Interactive Category Selector Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-zinc-200/80 rounded-full shadow-xs self-start lg:self-auto overflow-x-auto max-w-full">
            {(['Economy Cab', 'Sedan Prime', 'Family SUV', 'Green EV', 'VIP Chauffeur'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === cat
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Central Radial Cockpit Showcase Stage */}
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-12 shadow-sm overflow-hidden flex flex-col items-center justify-center">
          
          {/* Subtle Speedometer / Radial Arc Vector Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg
              viewBox="0 0 800 500"
              className="w-[120%] sm:w-full h-auto max-h-[500px]"
              fill="none"
              stroke="currentColor"
            >
              {/* Outer gauge arcs */}
              <circle cx="400" cy="400" r="320" stroke="#09090b" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="400" cy="400" r="280" stroke="#09090b" strokeWidth="1" opacity="0.6" />
              <circle cx="400" cy="400" r="240" stroke="#09090b" strokeWidth="0.8" opacity="0.4" />

              {/* Ticks & radial markers */}
              {Array.from({ length: 37 }).map((_, i) => {
                const angle = 180 + (i * 180) / 36;
                const rad = (angle * Math.PI) / 180;
                const x1 = 400 + 280 * Math.cos(rad);
                const y1 = 400 + 280 * Math.sin(rad);
                const x2 = 400 + (i % 6 === 0 ? 305 : 292) * Math.cos(rad);
                const y2 = 400 + (i % 6 === 0 ? 305 : 292) * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#09090b"
                    strokeWidth={i % 6 === 0 ? '2' : '1'}
                    opacity={i % 6 === 0 ? '0.8' : '0.4'}
                  />
                );
              })}

              {/* Tachometer RPM digits */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((rpm, i) => {
                const angle = 190 + (i * 160) / 8;
                const rad = (angle * Math.PI) / 180;
                const x = 400 + 250 * Math.cos(rad);
                const y = 400 + 250 * Math.sin(rad);
                return (
                  <text
                    key={rpm}
                    x={x}
                    y={y}
                    fill="#09090b"
                    fontSize="12"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="central"
                    opacity="0.6"
                  >
                    {rpm}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Focal Centerpiece Car Cutout / Showcase */}
          <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
            <div className="relative w-full h-56 sm:h-72 flex items-center justify-center transition-all duration-500">
              <Image
                src={activeCar.image}
                alt={activeCar.name}
                width={800}
                height={420}
                priority
                unoptimized
                className="max-w-md sm:max-w-lg w-full h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Telemetry Specs Box matching the wireframe */}
            <div className="mt-2 w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200/90 p-5 shadow-lg text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-100 text-[11px] font-bold text-zinc-800 uppercase tracking-wider mb-2">
                <Compass className="w-3 h-3 text-zinc-500" />
                <span>{activeCar.category} Spec Profile</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                {activeCar.name}
              </h3>
              
              <p className="text-xs text-zinc-500 mt-1 font-medium">
                {activeCar.highlight}
              </p>

              {/* 3 Taxi Service Pillars */}
              <div className="mt-4 grid grid-cols-3 gap-2 py-2.5 px-2 bg-zinc-50 rounded-xl border border-zinc-150">
                <div>
                  <span className="flex items-center justify-center gap-1 text-[11px] text-zinc-400">
                    <Gauge className="w-3 h-3 text-blue-500" /> Luggage Space
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-zinc-950 mt-0.5 truncate">
                    {activeCar.luggage}
                  </div>
                </div>

                <div className="border-x border-zinc-200">
                  <span className="flex items-center justify-center gap-1 text-[11px] text-zinc-400">
                    <Zap className="w-3 h-3 text-amber-500" /> Response Time
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-zinc-950 mt-0.5 truncate">
                    {activeCar.responseEta}
                  </div>
                </div>

                <div>
                  <span className="flex items-center justify-center gap-1 text-[11px] text-zinc-400">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" /> Fare Policy
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-zinc-950 mt-0.5 truncate">
                    {activeCar.fareDisplay}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleBookCurrent}
                  className="w-full rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold py-3 transition-all cursor-pointer shadow-xs active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Book {activeCar.name} Cab (From ${activeCar.dailyRate})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Trust Micro-badges */}
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Licensed & Background-Checked Drivers
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Compass className="w-4 h-4 text-blue-600" /> Live GPS Tracking & Flight Delay Sync
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-amber-600" /> Guaranteed Fixed Pricing - Zero Surge
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

