'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BookingFormData, Vehicle } from '@/types/taxi';
import BrandCarousel from '@/components/BrandCarousel';

interface HeroBookingProps {
  onInitiateBooking: (data: BookingFormData, vehicle: Vehicle, estimatedFare: number) => void;
  selectedVehicleIdOverride?: string | null;
}

interface HeroSlide {
  id: string;
  name: string;
  tagline: string;
  category: 'economy' | 'business' | 'luxury' | 'suv';
  image: string;
  width: number;
  height: number;
  baseFare: number;
  perKmRate: number;
  passengerCapacity: number;
  luggageCapacity: number;
  features: string[];
  colorBadge: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'maruti-swift',
    name: 'Maruti Suzuki Swift',
    tagline: 'Comfortable, Efficient & Prompt City Cab',
    category: 'economy',
    image: '/images/hero-swift.png',
    width: 962,
    height: 506,
    baseFare: 25.0,
    perKmRate: 2.2,
    passengerCapacity: 4,
    luggageCapacity: 3,
    features: ['Automatic Climate Control', 'Prompt Airport Transfer', 'Smooth City Commute', 'Doorstep Cab Arrival'],
    colorBadge: 'City Cab'
  },
  {
    id: 'maruti-baleno',
    name: 'Maruti Suzuki Baleno',
    tagline: 'Spacious Nexa Cab with Premium Rear Legroom',
    category: 'economy',
    image: '/images/hero-baleno.png',
    width: 800,
    height: 400,
    baseFare: 28.0,
    perKmRate: 2.3,
    passengerCapacity: 5,
    luggageCapacity: 3,
    features: ['SmartPlay Studio Display', 'Extra Rear Legroom', 'Refined Suspension', 'Ultra-Quiet Cabin'],
    colorBadge: 'Sedan Prime'
  },
  {
    id: 'maruti-alto',
    name: 'Maruti Suzuki Alto K10',
    tagline: 'Agile, Compact & Ultra-Affordable City Taxi',
    category: 'economy',
    image: '/images/hero-alto.png',
    width: 1024,
    height: 553,
    baseFare: 18.0,
    perKmRate: 1.8,
    passengerCapacity: 4,
    luggageCapacity: 2,
    features: ['Peppy Fuel Efficient Engine', 'Effortless City Navigation', 'Quick Airport Drop', 'Instant Dispatch'],
    colorBadge: 'Economy Taxi'
  }
];

export default function HeroBooking({ onInitiateBooking }: HeroBookingProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-advance slideshow every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleOpenBooking = () => {
    const activeVehicle: Vehicle = {
      id: currentSlide.id,
      name: currentSlide.name,
      tagline: currentSlide.tagline,
      category: currentSlide.category,
      image: currentSlide.image,
      passengerCapacity: currentSlide.passengerCapacity,
      luggageCapacity: currentSlide.luggageCapacity,
      baseFare: currentSlide.baseFare,
      perKmRate: currentSlide.perKmRate,
      features: currentSlide.features,
      popularFor: currentSlide.tagline
    };

    const initialData: BookingFormData = {
      tripType: 'one-way',
      pickup: 'Downtown Manhattan, NYC',
      dropoff: 'JFK International Airport (Terminal 4)',
      date: '2026-11-10',
      time: '12:00',
      passengers: currentSlide.passengerCapacity,
      luggage: currentSlide.luggageCapacity,
      selectedVehicleId: currentSlide.id
    };

    onInitiateBooking(initialData, activeVehicle, currentSlide.baseFare * 2.5);
  };

  const handleBrowseFleet = () => {
    const el = document.getElementById('fleet');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 bg-white text-zinc-950 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-zinc-950 leading-[1.08] max-w-4xl mx-auto">
          Ride Your Dream Cab<br />
          Anytime Anywhere
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto leading-relaxed">
          BHIMTAL Taxi Service offers instant fixed-fare taxi bookings, airport transfers, and<br className="hidden sm:inline" />
          professional TLC chauffeurs with 24/7 live tracking and zero surge surprises
        </p>

        {/* Action Buttons: 2 Rounded Pills */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleOpenBooking}
            className="rounded-full bg-[#155DFC] hover:bg-[#124ecf] text-white font-medium text-xs sm:text-sm px-7 py-3.5 shadow-md shadow-[#155DFC]/25 transition-all cursor-pointer active:scale-95"
          >
            Book Your Cab
          </button>
          
          <button
            type="button"
            onClick={handleBrowseFleet}
            className="rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 font-medium text-xs sm:text-sm px-7 py-3.5 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Explore Taxi Fleet
          </button>
        </div>

        {/* Centerpiece Car Slideshow with Smooth Crossfade and Controls */}
        <div
          className="relative mt-2 mb-4 w-full max-w-3xl mx-auto h-[260px] sm:h-[340px] md:h-[400px] flex items-center justify-center group/slider select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous car in slideshow"
            className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white border border-zinc-200/90 shadow-md backdrop-blur-md flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all cursor-pointer active:scale-95 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Car Slides Layered for Smooth 60fps Crossfade */}
          <div className="relative w-full h-full flex items-center justify-center">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                    isActive
                      ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                      : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative w-full h-[220px] sm:h-[300px] md:h-[350px] flex items-center justify-center">
                    <Image
                      src={slide.image}
                      alt={`${slide.name} - ${slide.colorBadge}`}
                      width={slide.width}
                      height={slide.height}
                      priority={idx === 0}
                      unoptimized
                      className="max-h-full max-w-[90%] md:max-w-2xl w-auto h-auto object-contain transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next car in slideshow"
            className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white border border-zinc-200/90 shadow-md backdrop-blur-md flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all cursor-pointer active:scale-95 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators & Dynamic Model Badge */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-semibold text-zinc-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{currentSlide.name}</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-500 font-normal">{currentSlide.colorBadge}</span>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center gap-2 pt-1">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={`dot-${slide.id}`}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.name}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlideIndex
                    ? 'w-7 bg-zinc-950'
                    : 'w-2 bg-zinc-300 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Luxury Brand Logos: Infinite Marquee Carousel */}
        <div className="pt-2 pb-2 border-t border-zinc-100/90 w-full">
          <BrandCarousel />
        </div>

      </div>
    </section>
  );
}
