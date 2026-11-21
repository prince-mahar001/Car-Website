'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroBooking from '@/components/HeroBooking';
import MissionStatsSection from '@/components/MissionStatsSection';
import PerfectRideSection from '@/components/PerfectRideSection';
import RadialShowcaseSection from '@/components/RadialShowcaseSection';
import TopPicksSection from '@/components/TopPicksSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { BookingFormData, Vehicle } from '@/types/taxi';

export default function Home() {
  // Modal State for interactive bookings across all sections
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBookingData, setActiveBookingData] = useState<BookingFormData | null>(null);
  const [activeVehicle, setActiveVehicle] = useState<Vehicle | null>(null);
  const [activeFare, setActiveFare] = useState<number>(0);

  const handleInitiateBooking = (data: BookingFormData, vehicle: Vehicle, fare: number) => {
    setActiveBookingData(data);
    setActiveVehicle(vehicle);
    setActiveFare(fare);
    setIsModalOpen(true);
  };

  const handleSelectCar = (vehicle: Vehicle) => {
    const initialData: BookingFormData = {
      tripType: 'one-way',
      pickup: 'Manhattan, New York (or Doorstep Delivery)',
      dropoff: 'JFK Airport (or Flexible Destination)',
      date: '2026-11-10',
      time: '12:00',
      passengers: vehicle.passengerCapacity,
      luggage: vehicle.luggageCapacity,
      selectedVehicleId: vehicle.id
    };
    handleInitiateBooking(initialData, vehicle, vehicle.baseFare * 3);
  };

  const handleGenericBookAction = () => {
    const defaultCab: Vehicle = {
      id: 'maruti-swift',
      name: 'Maruti Suzuki Swift',
      tagline: 'Comfortable, Efficient & Prompt City Cab',
      category: 'economy',
      image: '/images/hero-swift.png',
      passengerCapacity: 4,
      luggageCapacity: 3,
      baseFare: 25.0,
      perKmRate: 2.2,
      features: ['Air Conditioning', 'Live GPS Tracking', 'Prompt Airport Drop', 'Licensed Driver'],
      popularFor: 'Quick city transit & airport transfers'
    };
    handleSelectCar(defaultCab);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      {/* 1. Sticky Capsule Header Navigation */}
      <Navbar onBookClick={handleGenericBookAction} />

      {/* Main Content Sections strictly matching the design layout */}
      <main className="flex-1">
        
        {/* 2. Hero Section: Pure White Canvas + Real Car Slideshow + Infinite Brand Marquee */}
        <HeroBooking onInitiateBooking={handleInitiateBooking} />

        {/* 3. "Ride in Luxury, Arrive on Time" + Metrics (500+, 24/7, 100%, 50+, 50k+) */}
        <MissionStatsSection />

        {/* 4. "Find Your Perfect Cab" with Infinite Carousel of Real Car Brand Cards */}
        <PerfectRideSection onSelectCar={handleSelectCar} />

        {/* 5. "Luxury Meets Reliability" with Speedometer Dial Showcase */}
        <RadialShowcaseSection onSelectVehicle={handleSelectCar} />

        {/* 6. "Top Picks This Week" with Curated Weekly Taxi Routes & Rides */}
        <TopPicksSection onSelectCar={handleSelectCar} />

        {/* 7. "Simple, Fast, Hassle-Free" 6 Bento Steps + Chauffeur Arrival Card */}
        <HowItWorksSection />

        {/* 8. "Trusted by Thousands" Verified Passenger Reviews Carousel */}
        <Testimonials />

        {/* 9. "Got questions? We've got answers!" 2-Column Accordion */}
        <FAQSection />

      </main>

      {/* 10. Clean 4-Column Dream Drive Brand Footer */}
      <Footer />

      {/* 11. Interactive Booking Reservation Confirmation Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={activeBookingData}
        vehicle={activeVehicle}
        fare={activeFare}
      />
    </div>
  );
}
