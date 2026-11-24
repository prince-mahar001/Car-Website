'use client';

import React from 'react';
import {
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Award,
  HeartHandshake,
  Headphones
} from 'lucide-react';

export default function WhyChooseUs() {
  const stats = [
    { value: '1.2M+', label: 'Safe Trips Completed', sub: 'Across 6 metropolitan zones' },
    { value: '4.9★', label: 'Average Customer Rating', sub: 'From over 45,000 reviews' },
    { value: '4.9 / 5', label: 'Average Customer Rating', sub: 'From over 45,000 reviews' },
    { value: '99.4%', label: 'On-Time Arrival Rate', sub: 'Backed by dispatch guarantee' },
    { value: '500+', label: 'Verified Clean Vehicles', sub: 'Inspected every 30 days' }
  ];

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Vetted & Licensed Chauffeurs',
      desc: 'Every driver undergoes strict criminal background verification, drug screening, and continuous driving record monitoring.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: 'Guaranteed Punctual Dispatch',
      desc: 'Our dispatch engine assigns your vehicle well in advance. If our driver arrives more than 10 minutes late, your ride is discounted 25%.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      title: 'Live GPS & Route Sharing',
      desc: 'Share live trip progress and estimated arrival times with family or colleagues via a single secure SMS tracking link.'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: 'Pristine Cleanliness Standard',
      desc: 'Every cab is thoroughly sanitized, air conditioned, and equipped with fresh bottled water, phone charging cables, and contactless payment.'
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: 'Flat Transparent Pricing',
      desc: 'Zero surge multipliers during bad weather, peak rush hours, or major sports events. The price quoted is the price charged.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-sky-600" />,
      title: '24/7 Human Support Desk',
      desc: 'Real human dispatchers standing by 24 hours a day, 365 days a year to assist with changes, lost items, or urgent bookings.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" /> Safety & Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950">
            Why Millions Choose Apex Cab
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            We bridge the gap between traditional taxi reliability and modern luxury ride booking.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 text-center space-y-1 shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-zinc-900">{stat.label}</div>
              <div className="text-xs text-zinc-500">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* 6 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-amber-400 hover:bg-white transition-all flex flex-col justify-start shadow-xs hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-5 shadow-xs">
                {item.icon}
              </div>
              <h3 className="text-lg font-extrabold text-zinc-950 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
