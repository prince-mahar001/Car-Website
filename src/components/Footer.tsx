'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/taxiData';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const currentYear = '2026';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="contact-footer" className="bg-white text-zinc-950 border-t border-zinc-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid matching the wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-zinc-150">
          
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex flex-col group">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-zinc-950 leading-none">
                UTTARAKHAND
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-500 group-hover:text-blue-600 transition-colors uppercase mt-1">
                Taxi Service
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-sm">
              Uttarakhand Texi Service provides reliable 24/7 taxi booking, airport transfers, and licensed chauffeur cab services with locked fares and live GPS tracking.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2 pt-2">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#contact-footer"
                  aria-label={social}
                  className="w-8 h-8 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-700 transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li>
                <Link href="/#why-us" className="hover:text-zinc-950 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#fleet" className="hover:text-zinc-950 transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-950 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-zinc-950 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/#top-picks" className="hover:text-zinc-950 transition-colors">Airport Transfers</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Concierge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              24/7 Dispatch
            </h4>
            <div className="space-y-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-zinc-950 font-semibold text-zinc-800">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-zinc-950">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter Subscribe Pill Box */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Receive promo codes, new airport routes, and exclusive fixed-rate travel discounts.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/20 active:scale-98"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-zinc-600 transition-colors">Terms of Service</a>
            <a href="#faq" className="hover:text-zinc-600 transition-colors">Taxi Safety & Licensing</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
