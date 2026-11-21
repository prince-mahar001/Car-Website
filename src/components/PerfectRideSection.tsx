'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Users, Fuel, Sparkles, Pause, Play } from 'lucide-react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Users, Fuel, ShieldCheck, Pause, Play } from 'lucide-react';
import { Vehicle } from '@/types/taxi';

interface PerfectRideProps {
  onSelectCar: (car: Vehicle) => void;
}

interface RealBrandCardItem {
  id: string;
  name: string;
  brand: string;
  brandSlug: string;
  categoryBadge: string;
  tagline: string;
  dailyPrice: number;
  hp: string;
  seats: string;
  fuelEfficiency: string;
  image: string;
  isCutout?: boolean;
  passengerCapacity: number;
  luggageCapacity: number;
  baseFare: number;
  perKmRate: number;
  features: string[];
}

const REAL_FLEET_VEHICLES: RealBrandCardItem[] = [
  {
    id: 'maruti-swift',
    name: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    brandSlug: 'maruti-suzuki',
    categoryBadge: 'Hatchback / City Ride',
    tagline: 'High-Efficiency DualJet Engine with Agile City Comfort',
    dailyPrice: 28,
    hp: '89 HP',
    seats: '5 Seats',
    fuelEfficiency: '22 km/l',
    image: '/images/hero-swift.png',
    isCutout: true,
    passengerCapacity: 4,
    luggageCapacity: 3,
    baseFare: 25.0,
    perKmRate: 2.2,
    features: ['Automatic Climate Control', 'SmartPlay Touchscreen', 'Dual Airbags', 'Prompt Airport Transfer']
  },
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta SX',
    brand: 'Hyundai',
    brandSlug: 'hyundai',
    categoryBadge: 'Premium Compact SUV',
    tagline: 'Smooth 1.5L CRDi Power with Panoramic Skyroof & Ventilated Seats',
    dailyPrice: 38,
    hp: '115 HP',
    seats: '5 Seats',
    fuelEfficiency: '18 km/l',
    image: '/images/fleet-real/hyundai-creta-opt.jpg',
    passengerCapacity: 5,
    luggageCapacity: 4,
    baseFare: 35.0,
    perKmRate: 2.8,
    features: ['Bose Premium 8-Speaker Audio', 'Voice Enabled Panoramic Sunroof', 'Air Purifier', 'Drive Modes']
  },
  {
    id: 'mahindra-xuv700',
    name: 'Mahindra XUV700 AX7',
    brand: 'Mahindra',
    brandSlug: 'mahindra',
    categoryBadge: 'Executive 7-Seater SUV',
    tagline: 'Commanding mStallion Turbo Power with ADAS Level 2 Technology',
    dailyPrice: 48,
    hp: '197 HP',
    seats: '7 Seats',
    fuelEfficiency: '15 km/l',
    image: '/images/fleet-real/mahindra-xuv700-opt.jpg',
    passengerCapacity: 7,
    luggageCapacity: 5,
    baseFare: 45.0,
    perKmRate: 3.2,
    features: ['Dual 10.25-inch Digital Cockpit', 'Sony 12-Speaker 3D Audio', 'Panoramic Skyroof', 'Wireless Charging']
  },
  {
    id: 'skoda-octavia',
    name: 'Škoda Octavia Style',
    brand: 'Škoda',
    brandSlug: 'skoda',
    categoryBadge: 'European Executive Sedan',
    tagline: 'Precision 2.0L TSI Engine with Signature European Refinement',
    dailyPrice: 42,
    hp: '190 HP',
    seats: '5 Seats',
    fuelEfficiency: '16 km/l',
    image: '/images/fleet-real/skoda-octavia-opt.jpg',
    passengerCapacity: 5,
    luggageCapacity: 4,
    baseFare: 40.0,
    perKmRate: 3.0,
    features: ['Shift-by-Wire DSG Transmission', 'Canton 11-Speaker Audio', 'Huge 600L Luggage Boot', '5-Star Safety']
  },
  {
    id: 'nissan-kicks',
    name: 'Nissan Kicks Turbo',
    brand: 'Nissan',
    brandSlug: 'nissan',
    categoryBadge: 'Dynamic Crossover',
    tagline: 'HR13DDT Turbocharged Power with Nissan Intelligent Mobility',
    dailyPrice: 32,
    hp: '154 HP',
    seats: '5 Seats',
    fuelEfficiency: '16.5 km/l',
    image: '/images/fleet-real/nissan-kicks-opt.jpg',
    passengerCapacity: 5,
    luggageCapacity: 4,
    baseFare: 30.0,
    perKmRate: 2.5,
    features: ['Around View 360-Degree Camera', 'Hill Start Assist', 'Automatic Climate Control', 'Cruise Control']
  },
  {
    id: 'mg-zs-ev',
    name: 'MG ZS EV Luxury',
    brand: 'MG',
    brandSlug: 'mg',
    categoryBadge: 'Zero Emission Electric',
    tagline: 'Instant Electric Acceleration with 461km Certified Range',
    dailyPrice: 45,
    hp: '176 HP',
    seats: '5 Seats',
    fuelEfficiency: '461 km Range',
    image: '/images/fleet-real/mg-zs-ev-opt.jpg',
    passengerCapacity: 5,
    luggageCapacity: 4,
    baseFare: 38.0,
    perKmRate: 2.6,
    features: ['50.3 kWh Prismatic Battery', 'Dual Pane Panoramic Skyroof', 'i-SMART 75+ Connected Features', 'DC Fast Charge']
  },
  {
    id: 'kia-ev6',
    name: 'KIA EV6 GT-Line',
    brand: 'KIA',
    brandSlug: 'kia',
    categoryBadge: 'Ultra-High Tech Flagship',
    tagline: '800V Ultra-Fast Charging with Futuristic Curved Cockpit',
    dailyPrice: 55,
    hp: '229 HP',
    seats: '5 Seats',
    fuelEfficiency: '528 km Range',
    image: '/images/fleet-real/kia-ev6-opt.jpg',
    passengerCapacity: 5,
    luggageCapacity: 4,
    baseFare: 50.0,
    perKmRate: 3.5,
    features: ['10-to-80% Charge in 18 Min', 'Meridian 14-Speaker Sound', 'Augmented Reality HUD', 'Vehicle-to-Load (V2L)']
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova Crysta',
    brand: 'Toyota',
    brandSlug: 'toyota',
    categoryBadge: 'VIP MPV & Airport Chauffeur',
    tagline: 'Unmatched Ride Comfort, Captain Recliner Seats & Bulletproof Reliability',
    dailyPrice: 46,
    hp: '150 HP',
    seats: '7/8 Seats',
    fuelEfficiency: '15 km/l',
    image: '/images/fleet-real/toyota-innova-opt.jpg',
    passengerCapacity: 7,
    luggageCapacity: 6,
    baseFare: 42.0,
    perKmRate: 3.0,
    features: ['Plush Captain Recliner Seats', 'Dual Air Conditioning', 'Superior Cabin Insulation', 'Large Luggage Capacity']
  }
];

export default function PerfectRideSection({ onSelectCar }: PerfectRideProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleCarClick = (item: RealBrandCardItem) => {
    const v: Vehicle = {
      id: item.id,
      name: item.name,
      tagline: item.tagline,
      category: item.seats.includes('7') ? 'suv' : 'business',
      image: item.image,
      passengerCapacity: item.passengerCapacity,
      luggageCapacity: item.luggageCapacity,
      baseFare: item.baseFare,
      perKmRate: item.perKmRate,
      features: item.features,
      popularFor: item.tagline
    };
    onSelectCar(v);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-20 sm:py-24 bg-white text-zinc-950 border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Taxi Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Find Your Perfect Cab
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 max-w-xl">
              Explore our real taxi fleet across Maruti Suzuki, Hyundai, Mahindra, Škoda, Nissan, MG, KIA, and Toyota for instant doorstep booking.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Auto-scroll pause / play toggle */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? 'Resume auto carousel' : 'Pause auto carousel'}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-xs font-medium text-zinc-700 transition-colors cursor-pointer shadow-xs"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-zinc-500" />
                  <span>Hover to Pause</span>
                </>
              )}
            </button>

            {/* Left and Right Carousel Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleScrollLeft}
                aria-label="Scroll left in fleet carousel"
                className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleScrollRight}
                aria-label="Scroll right in fleet carousel"
                className="w-10 h-10 rounded-full border border-zinc-950 bg-zinc-950 hover:bg-zinc-800 flex items-center justify-center text-white transition-colors cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Smooth Carousel Container */}
      <div
        ref={scrollContainerRef}
        className={`cards-carousel-container relative w-full overflow-x-auto no-scrollbar mask-edge-fade py-4 select-none ${
          isPaused ? '[&_.animate-cards-marquee]:[animation-play-state:paused]' : ''
        }`}
        aria-label="Infinite real brand fleet carousel"
      >
        <div className="flex w-max px-4 sm:px-8">
          
          {/* Track 1: First continuous set of 8 real cars */}
          <div className="animate-cards-marquee flex gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
            {REAL_FLEET_VEHICLES.map((car, idx) => (
              <div
                key={`track1-${car.id}-${idx}`}
                className="w-[310px] sm:w-[350px] md:w-[370px] shrink-0 bg-white rounded-3xl border border-zinc-200/90 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-zinc-400 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Vehicle Image Stage */}
                  <div className="relative w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-b from-zinc-100/60 via-zinc-50 to-zinc-100/40 border border-zinc-200/60 overflow-hidden flex items-center justify-center p-3">
                    
                    {/* Top Left: Real Brand Logo + Category Badge */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-zinc-200/90 rounded-full px-2.5 py-1 text-[11px] font-semibold text-zinc-900 shadow-xs">
                      <Image
                        src={`/images/brand-svgs/${car.brandSlug}.svg`}
                        alt={car.brand}
                        width={20}
                        height={16}
                        unoptimized
                        className="w-4 h-4 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                      <span>{car.brand}</span>
                    </div>

                    {/* Top Right: Fare Rate */}
                    <div className="absolute top-3 right-3 z-10 bg-zinc-950/90 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
                      From ${car.dailyPrice} <span className="text-zinc-400 font-normal">/ ride</span>
                    </div>

                    {/* Car Image with Smooth Scale */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={600}
                        height={375}
                        unoptimized
                        className={`w-full h-full rounded-xl transition-transform duration-700 ease-out group-hover:scale-106 ${
                          car.isCutout ? 'object-contain drop-shadow-md' : 'object-cover'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Header & Tagline */}
                  <div className="mt-5">
                    <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      {car.categoryBadge}
                    </div>
                    <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight group-hover:text-zinc-700 transition-colors mt-0.5">
                      {car.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 font-normal line-clamp-1">
                      {car.tagline}
                    </p>
                  </div>

                  {/* Real Car Telemetry / Specs Bar */}
                  <div className="mt-5 grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-zinc-50/80 border border-zinc-200/70 text-center">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <Zap className="w-3 h-3 text-amber-500" /> Output
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5">{car.hp}</span>
                    </div>

                    <div className="flex flex-col items-center border-x border-zinc-200">
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <Users className="w-3 h-3 text-blue-500" /> Capacity
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5">{car.seats}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <Fuel className="w-3 h-3 text-emerald-500" /> Mileage
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5 truncate max-w-[85px]">{car.fuelEfficiency}</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA: Full-width dark pill */}
                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => handleCarClick(car)}
                    className="w-full rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm py-3 transition-all cursor-pointer shadow-xs active:scale-98 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Book {car.brand} Cab</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2: Identical twin clone for 100% seamless infinite loop */}
          <div className="animate-cards-marquee flex gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8" aria-hidden="true">
            {REAL_FLEET_VEHICLES.map((car, idx) => (
              <div
                key={`track2-${car.id}-${idx}`}
                className="w-[310px] sm:w-[350px] md:w-[370px] shrink-0 bg-white rounded-3xl border border-zinc-200/90 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-zinc-400 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Vehicle Image Stage */}
                  <div className="relative w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-b from-zinc-100/60 via-zinc-50 to-zinc-100/40 border border-zinc-200/60 overflow-hidden flex items-center justify-center p-3">
                    
                    {/* Top Left: Real Brand Logo + Category Badge */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-zinc-200/90 rounded-full px-2.5 py-1 text-[11px] font-semibold text-zinc-900 shadow-xs">
                      <Image
                        src={`/images/brand-svgs/${car.brandSlug}.svg`}
                        alt={car.brand}
                        width={20}
                        height={16}
                        unoptimized
                        className="w-4 h-4 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                      <span>{car.brand}</span>
                    </div>

                    {/* Top Right: Fare Rate */}
                    <div className="absolute top-3 right-3 z-10 bg-zinc-950/90 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
                      From ${car.dailyPrice} <span className="text-zinc-400 font-normal">/ ride</span>
                    </div>

                    {/* Car Image with Smooth Scale */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={600}
                        height={375}
                        unoptimized
                        className={`w-full h-full rounded-xl transition-transform duration-700 ease-out group-hover:scale-106 ${
                          car.isCutout ? 'object-contain drop-shadow-md' : 'object-cover'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Header & Tagline */}
                  <div className="mt-5">
                    <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      {car.categoryBadge}
                    </div>
                    <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight group-hover:text-zinc-700 transition-colors mt-0.5">
                      {car.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 font-normal line-clamp-1">
                      {car.tagline}
                    </p>
                  </div>

                  {/* Real Car Telemetry / Specs Bar */}
                  <div className="mt-5 grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-zinc-50/80 border border-zinc-200/70 text-center">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <Zap className="w-3 h-3 text-amber-500" /> Output
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5">{car.hp}</span>
                    </div>

                    <div className="flex flex-col items-center border-x border-zinc-200">
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <Users className="w-3 h-3 text-blue-500" /> Capacity
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5">{car.seats}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <Fuel className="w-3 h-3 text-emerald-500" /> Mileage
                      </span>
                      <span className="text-xs font-bold text-zinc-950 mt-0.5 truncate max-w-[85px]">{car.fuelEfficiency}</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA: Full-width dark pill */}
                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => handleCarClick(car)}
                    className="w-full rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm py-3 transition-all cursor-pointer shadow-xs active:scale-98 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Book {car.brand} Cab</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
