'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Search,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/taxiData';

export default function TrackPage() {
  const [refInput, setRefInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [trackingFound, setTrackingFound] = useState(false);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refInput.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setTrackingFound(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-amber-400 selection:text-zinc-950">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" /> Live Ride Radar
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950">
            Track Your Taxi In Real Time
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-lg mx-auto">
            Enter your 6-digit booking reference code (e.g. <strong className="text-zinc-950">APX-84920</strong>) to view your chauffeur&apos;s live GPS location, vehicle details, and estimated time of arrival.
          </p>
        </div>

        {/* Lookup Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-xl mb-10">
          <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <label htmlFor="track-reference" className="sr-only">Booking Reference Number</label>
              <input
                id="track-reference"
                type="text"
                autoCapitalize="characters"
                placeholder="Enter Booking Reference (e.g. APX-84920)"
                value={refInput}
                onChange={(e) => setRefInput(e.target.value.toUpperCase())}
                className="w-full rounded-2xl bg-white border border-zinc-250 px-4 py-3.5 text-sm sm:text-base font-mono uppercase text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 shadow-xs"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="py-3.5 px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-50"
            >
              {isSearching ? (
                <span>Locating Cab...</span>
              ) : (
                <>
                  <Search className="w-4 h-4 stroke-[2.5]" />
                  <span>Track Ride</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Button */}
          <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
            <span>Don&apos;t have a booking ID yet?</span>
            <button
              type="button"
              onClick={() => {
                setRefInput('APX-782910');
                setTrackingFound(true);
              }}
              className="text-amber-700 hover:underline font-semibold cursor-pointer"
            >
              Load Live Demo Ride
            </button>
          </div>
        </div>

        {/* Tracking Details View */}
        {trackingFound && (
          <div className="space-y-6">
            {/* Live Status Banner */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>En Route to Pickup</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950">Driver Arriving in ~6 Minutes</h3>
                <p className="text-xs text-zinc-500">Reference: <strong className="text-amber-600 font-mono">{refInput || 'APX-782910'}</strong></p>
              </div>

              <div className="text-right flex items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" /> Call Driver
                </a>
              </div>
            </div>

            {/* Driver & Car Details Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-150">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Chauffeur Details</h4>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> TLC Certified
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/30 text-amber-700 flex items-center justify-center font-black text-lg">
                    DM
                  </div>
                  <div>
                    <h5 className="font-extrabold text-base text-zinc-950">David Miller</h5>
                    <div className="flex items-center gap-1 text-xs text-zinc-900 font-bold">
                      <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-sm font-semibold">4.96 / 5.0</span>
                      <span className="text-zinc-400 font-normal">• 3,420 Completed Trips</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-zinc-600 space-y-1 border-t border-zinc-100">
                  <p>Vehicle: <strong className="text-zinc-950">Toyota Camry Hybrid (Silver)</strong></p>
                  <p>License Plate: <strong className="text-amber-600 font-mono">NYC-TAXI-9824</strong></p>
                </div>
              </div>

              {/* Route Summary */}
              <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-150">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Trip Telemetry</h4>
                  <span className="text-xs text-zinc-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-500" /> Scheduled: Today
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-400 block font-medium">Pickup:</span>
                      <span className="font-semibold text-zinc-900">Grand Central Terminal, NYC</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-400 block font-medium">Destination:</span>
                      <span className="font-semibold text-zinc-900">JFK International Airport (Terminal 4)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-zinc-150">
                  <span className="text-zinc-500 font-medium">Total Price Locked:</span>
                  <span className="text-base font-black text-amber-600">$55.00</span>
                </div>
              </div>
            </div>

            {/* Simulated Live Route Bar */}
            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 text-center space-y-4 shadow-xs">
              <div className="flex items-center justify-between text-xs text-zinc-600 font-medium">
                <span>Driver Dispatched</span>
                <span className="text-amber-700 font-bold">Driver 1.2 miles away</span>
                <span>Drop-off</span>
              </div>
              <div className="w-full bg-zinc-200 h-2.5 rounded-full overflow-hidden relative">
                <div className="bg-linear-to-r from-amber-400 to-yellow-400 h-full rounded-full w-[65%]" />
              </div>
              <p className="text-xs text-zinc-500">
                Live vehicle GPS telemetry updates every 10 seconds. You will receive an SMS when the vehicle pulls curbside.
              </p>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-amber-700 transition-colors"
          >
            ← Back to Apex Cab Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
