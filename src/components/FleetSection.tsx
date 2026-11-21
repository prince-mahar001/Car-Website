'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Briefcase, Check, ArrowRight, Car } from 'lucide-react';
import { FLEET_VEHICLES } from '@/data/taxiData';
import { VehicleCategory } from '@/types/taxi';

interface FleetSectionProps {
  onSelectVehicle: (vehicleId: string) => void;
}

export default function FleetSection({ onSelectVehicle }: FleetSectionProps) {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>('all');

  const categories: { id: VehicleCategory; label: string }[] = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'economy', label: 'Economy' },
    { id: 'business', label: 'Executive' },
    { id: 'suv', label: 'Family SUV' },
    { id: 'luxury', label: 'VIP Vans' },
    { id: 'electric', label: 'Eco Electric' }
  ];

  const filteredVehicles =
    activeCategory === 'all'
      ? FLEET_VEHICLES
      : FLEET_VEHICLES.filter((v) => v.category === activeCategory);

  return (
    <section id="fleet" className="py-24 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5" /> Modern Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950">
            Choose Your Ideal Ride
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            From budget-friendly city sedans to spacious group vans and executive black cars.
            Every vehicle is rigorously sanitized and mechanically inspected before every shift.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-2xl border border-zinc-200 shadow-xs max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-zinc-950 shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group rounded-3xl bg-white border border-zinc-200 hover:border-amber-400 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl shadow-xs"
            >
              {/* Image banner */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={800}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200 text-[11px] font-bold text-zinc-900 shadow-sm">
                    {vehicle.popularFor}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-white font-semibold drop-shadow-md">{vehicle.tagline}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-zinc-900 group-hover:text-amber-600 transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-0.5">Base Fare: ${vehicle.baseFare.toFixed(2)} + ${vehicle.perKmRate.toFixed(2)}/km</p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-zinc-400 block font-medium">From</span>
                      <span className="text-2xl font-black text-amber-600">${Math.round(vehicle.baseFare + 15 * vehicle.perKmRate)}</span>
                    </div>
                  </div>

                  {/* Capacity Info */}
                  <div className="flex items-center gap-4 py-3 border-y border-zinc-100 text-xs text-zinc-700">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span>{vehicle.passengerCapacity} Passengers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-amber-500" />
                      <span>{vehicle.luggageCapacity} Luggage Bags</span>
                    </div>
                  </div>

                  {/* Included Perks */}
                  <ul className="mt-4 space-y-2 text-xs text-zinc-600">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => onSelectVehicle(vehicle.id)}
                    className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-amber-400 hover:text-zinc-950 font-bold text-xs sm:text-sm text-white transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
                  >
                    Select & Book Vehicle
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
