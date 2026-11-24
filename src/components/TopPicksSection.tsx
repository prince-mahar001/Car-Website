'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight, Award, Users, Luggage, Clock } from 'lucide-react';
import { Vehicle } from '@/types/taxi';

interface TopPicksProps {
  onSelectCar: (car: Vehicle) => void;
}

interface PickCar {
  id: string;
  name: string;
  brand: string;
  brandSlug: string;
  category: string;
  tierBadge: string;
  price: number;
  passengers: string;
  luggage: string;
  featurePill: string;
  image: string;
  description: string;
}

const PICKS: PickCar[] = [
  {
    id: 'airport-sedan',
    name: 'Škoda Octavia Style',
    brand: 'Škoda',
    brandSlug: 'skoda',
    category: 'Executive Airport Sedan',
    tierBadge: 'Airport Special',
    price: 45,
    passengers: '4 Seats',
    luggage: '4 Large Bags',
    featurePill: 'Flight Sync',
    image: '/images/fleet-real/skoda-octavia-clean.jpg',
    description: 'Guaranteed flight tracking, terminal curbside pickup, and 45 minutes complimentary wait time.'
  },
  {
    id: 'group-suv',
    name: 'Mahindra XUV700 AX7',
    brand: 'Mahindra',
    brandSlug: 'mahindra',
    category: 'Spacious 7-Seater Cab',
    tierBadge: 'Group & Family',
    price: 55,
    passengers: '7 Seats',
    luggage: '5 Large Bags',
    featurePill: 'Dual Zone AC',
    image: '/images/fleet-real/mahindra-xuv700-clean.jpg',
    description: 'Commanding 7-seater SUV with dual-zone climate control, extra legroom, and generous luggage boot.'
  },
  {
    id: 'city-swift',
    name: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    brandSlug: 'maruti-suzuki',
    category: 'Prompt City Commuter',
    tierBadge: 'Instant Dispatch',
    price: 25,
    passengers: '4 Seats',
    luggage: '3 Bags',
    featurePill: '< 5 Mins Arrival',
    image: '/images/hero-swift.png',
    description: 'Fast, air-conditioned city cab arriving at your doorstep in under 5 minutes with contactless digital pay.'
  }
];

export default function TopPicksSection({ onSelectCar }: TopPicksProps) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % PICKS.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + PICKS.length) % PICKS.length);
  };

  const displayedPicks = [...PICKS.slice(startIndex), ...PICKS.slice(0, startIndex)];

  const handleBook = (pick: PickCar) => {
    const v: Vehicle = {
      id: pick.id,
      name: pick.name,
      tagline: pick.category,
      category: 'business',
      image: pick.image,
      passengerCapacity: pick.passengers.includes('7') ? 7 : 4,
      luggageCapacity: 4,
      baseFare: pick.price,
      perKmRate: 2.5,
      features: [pick.passengers, pick.luggage, pick.featurePill, pick.tierBadge],
      popularFor: pick.description
    };
    onSelectCar(v);
  };

  return (
    <section id="top-picks" className="py-20 sm:py-24 bg-white text-zinc-950 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title + Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-800 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Most Booked Cab Rides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Top Picks This Week
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 max-w-xl">
              High-demand airport transfers, executive corporate shuttles, and prompt city cab packages.
            </p>
          </div>

          {/* Right Controls: Arrow buttons matching the wireframe */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous cab"
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer shadow-2xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next cab"
              className="w-10 h-10 rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Featured Cab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayedPicks.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-3xl border border-zinc-200/90 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-zinc-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Showcase Stage */}
                <div className="relative w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-b from-zinc-100/70 via-zinc-50 to-zinc-100/40 border border-zinc-200/60 overflow-hidden flex items-center justify-center p-3">
                  
                  {/* Top Left: Official Brand Logo & Name */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-zinc-200/90 rounded-full px-2.5 py-1 text-[11px] font-semibold text-zinc-900 shadow-xs">
                    <Image
                      src={`/images/brand-svgs/${car.brandSlug}.svg`}
                      alt={car.brand}
                      width={18}
                      height={14}
                      unoptimized
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>{car.brand}</span>
                  </div>

                  {/* Top Right: Category Tier Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-zinc-950/90 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
                    {car.tierBadge}
                  </div>

                  {/* Car Image with Smooth Zoom */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={600}
                      height={360}
                      unoptimized
                      className="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-106"
                    />
                  </div>
                </div>

                {/* Header & Price Info */}
                <div className="mt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block truncate">
                        {car.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight group-hover:text-zinc-700 transition-colors mt-0.5 truncate">
                        {car.name}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-2xl font-black text-zinc-950 tracking-tight">
                        ${car.price}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-emerald-700 block tracking-wider -mt-0.5">
                        Flat Fare
                      </span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs text-zinc-500 font-normal leading-relaxed line-clamp-2">
                    {car.description}
                  </p>

                  {/* 3 Telemetry Spec Pillars */}
                  <div className="mt-4 grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-zinc-50/90 border border-zinc-200/70 text-center">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-[10px] font-medium text-zinc-400">
                        <Users className="w-3 h-3 text-blue-500" /> Seats
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5">{car.passengers}</span>
                    </div>

                    <div className="flex flex-col items-center border-x border-zinc-200">
                      <span className="flex items-center gap-1 text-[10px] font-medium text-zinc-400">
                        <Luggage className="w-3 h-3 text-amber-500" /> Luggage
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5">{car.luggage}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-[10px] font-medium text-zinc-400">
                        <Clock className="w-3 h-3 text-emerald-500" /> Feature
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5 truncate max-w-[85px]">{car.featurePill}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Full-width dark pill */}
              <div className="mt-6 pt-1">
                <button
                  type="button"
                  onClick={() => handleBook(car)}
                  className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm py-3 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-98 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Book This Cab</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
