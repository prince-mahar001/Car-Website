'use client';

import React from 'react';
import {
  Plane,
  Navigation,
  Clock,
  Briefcase,
  Milestone,
  Sparkles,
  Car,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '@/data/taxiData';

interface ServicesSectionProps {
  onBookServiceClick: () => void;
}

export default function ServicesSection({ onBookServiceClick }: ServicesSectionProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-6 h-6 text-amber-600" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-amber-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-600" />;
      case 'Milestone':
        return <Milestone className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-600" />;
        return <Car className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Mobility Solutions
            <Car className="w-3.5 h-3.5" /> Mobility Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950">
            Comprehensive Taxi & Transportation Services
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Tailored transport services designed for business professionals, vacationing families,
            and everyday urban travelers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between group hover:shadow-xl shadow-xs"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-zinc-200/80">
                  {service.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6">
                <button
                  type="button"
                  onClick={onBookServiceClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-zinc-250 group-hover:bg-amber-400 group-hover:text-zinc-950 group-hover:border-transparent text-xs font-bold text-zinc-800 transition-all cursor-pointer text-center shadow-xs"
                >
                  Book Service Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate dispatch banner */}
        <div className="mt-16 rounded-3xl bg-linear-to-r from-amber-50 via-zinc-50 to-amber-100/40 border border-amber-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              Need Corporate Fleet Account?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              Get 15% Off Your First Month of Executive Rides
            </h3>
            <p className="text-sm text-zinc-600 max-w-xl">
              Consolidated monthly invoices, dedicated account manager, and guaranteed priority vehicle allocation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 font-bold text-sm flex items-center gap-2 transition-colors shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-amber-600" />
              Corporate Desk
            </a>
            <button
              type="button"
              onClick={onBookServiceClick}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm shadow-md shadow-amber-400/25 transition-all cursor-pointer"
            >
              Open Company Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
