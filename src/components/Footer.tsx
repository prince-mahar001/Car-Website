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
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-500 group-hover:text-[#155DFC] transition-colors uppercase mt-1">
                Taxi Service
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-sm">
              Uttarakhand Texi Service provides reliable 24/7 taxi booking, airport transfers, and licensed chauffeur cab services with locked fares and live GPS tracking.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-[#155DFC] hover:border-[#155DFC] hover:text-white flex items-center justify-center text-zinc-700 transition-all duration-200 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-pink-600 hover:border-pink-600 hover:text-white flex items-center justify-center text-zinc-700 transition-all duration-200 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-red-600 hover:border-red-600 hover:text-white flex items-center justify-center text-zinc-700 transition-all duration-200 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
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
                  className="w-full py-2.5 px-4 rounded-full bg-[#155DFC] hover:bg-[#124ecf] text-white font-medium text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#155DFC]/20 active:scale-98"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Developer Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-zinc-500">
            <span>Design & Developed By</span>
            <a
              href="https://preettech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-zinc-900 hover:text-[#155DFC] transition-colors underline underline-offset-4 decoration-zinc-300 hover:decoration-[#155DFC]"
            >
              Preet Tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
