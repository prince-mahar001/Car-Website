'use client';

import React from 'react';
import { ArrowRight, Clock, Check, DollarSign } from 'lucide-react';
import { POPULAR_ROUTES } from '@/data/taxiData';

interface FareEstimatorSectionProps {
  onSelectRoute: (from: string, to: string) => void;
}

export default function FareEstimatorSection({ onSelectRoute }: FareEstimatorSectionProps) {
  return (
    <section id="estimator" className="py-24 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" /> 100% Transparent Fares
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950">
            Fixed Flat Fares on Popular Routes
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Never guess what your ride will cost. What you see is exactly what you pay —
            no surge multipliers during rain, holidays, or heavy traffic.
          </p>
        </div>

        {/* Popular Routes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="p-6 rounded-3xl bg-white border border-zinc-200 hover:border-amber-400 transition-all flex flex-col justify-between group shadow-xs hover:shadow-xl"
            >
              <div>
                {/* Route Header */}
                <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 border-b border-zinc-150 mb-4">
                  <span className="flex items-center gap-1 font-medium text-zinc-600">
                    <Clock className="w-3.5 h-3.5 text-amber-500" /> {route.estTime}
                  </span>
                  <span className="font-semibold bg-zinc-100 px-2.5 py-0.5 rounded-full text-zinc-700">
                    ~{route.distanceKm} km
                  </span>
                </div>

                {/* Locations */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mt-1 shrink-0" />
                    <div>
                      <span className="text-[11px] text-zinc-400 block uppercase font-bold tracking-wider">
                        Pick-Up
                      </span>
                      <span className="text-sm font-bold text-zinc-900">{route.from}</span>
                    </div>
                  </div>

                  <div className="w-0.5 h-4 bg-zinc-250 ml-1.5" />

                  <div className="flex items-start gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-amber-400 mt-1 shrink-0" />
                    <div>
                      <span className="text-[11px] text-zinc-400 block uppercase font-bold tracking-wider">
                        Drop-Off
                      </span>
                      <span className="text-sm font-bold text-zinc-900">{route.to}</span>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-200 mb-4">
                  <div>
                    <span className="text-[11px] text-zinc-500 block font-medium">Standard Sedan</span>
                    <span className="text-xl font-black text-amber-600">${route.sedanFare}</span>
                  </div>
                  <div className="border-l border-zinc-200 pl-3">
                    <span className="text-[11px] text-zinc-500 block font-medium">Family SUV / XL</span>
                    <span className="text-xl font-black text-zinc-950">${route.suvFare}</span>
                  </div>
                </div>
              </div>

              {/* Book Route Action */}
              <button
                type="button"
                onClick={() => onSelectRoute(route.from, route.to)}
                className="w-full py-2.5 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/20 active:scale-98"
              >
                <span>Book This Route</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Fare Promise Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-start gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900">Zero Surge Charges</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">Fares never double when it rains or during rush hour.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-start gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900">All Tolls & Taxes Included</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">What is quoted is the complete price you pay.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-start gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900">45-Min Airport Wait Time</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">Flight delayed? Your chauffeur waits for free.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-start gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900">No Cancellation Fee</h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">Cancel up to 2 hours before trip with zero penalty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
