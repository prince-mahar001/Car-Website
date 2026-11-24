'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  ArrowRight,
  Phone,
  ChevronRight,
  Home,
  ShieldCheck,
  Car,
  Briefcase,
  Plane,
  Mail
} from 'lucide-react';

interface NavbarProps {
  onBookClick?: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background body scroll when mobile sidebar is open
  useEffect(() => {
    if (!mounted) return;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, mounted]);

  // Close sidebar on Escape key press
  useEffect(() => {
    if (!mounted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, mounted]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo: Stacked UTTARAKHAND + Taxi Service */}
            <Link href="/" className="flex flex-col justify-center group py-1">
              <span className="font-black text-lg sm:text-2xl tracking-tight text-zinc-950 leading-none">
                UTTARAKHAND
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-500 group-hover:text-blue-600 transition-colors uppercase mt-1">
                Taxi Service
              </span>
            </Link>

            {/* Center Pill Navigation Menu */}
            <nav className="hidden lg:flex items-center bg-zinc-100/90 border border-zinc-200/80 rounded-full p-1.5 shadow-xs">
              <Link
                href="/"
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  pathname === '/'
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Home
              </Link>

              <Link
                href="/#why-us"
                onClick={(e) => scrollToSection(e, 'why-us')}
                className="text-zinc-600 hover:text-zinc-950 px-3.5 py-1.5 text-xs font-medium transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/#fleet"
                onClick={(e) => scrollToSection(e, 'fleet')}
                className="text-zinc-600 hover:text-zinc-950 px-3.5 py-1.5 text-xs font-medium transition-colors"
              >
                Our Fleet
              </Link>

              <Link
                href="/#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="text-zinc-600 hover:text-zinc-950 px-3.5 py-1.5 text-xs font-medium transition-colors"
              >
                Our Services
              </Link>

              <Link
                href="/#top-picks"
                onClick={(e) => scrollToSection(e, 'top-picks')}
                className="text-zinc-600 hover:text-zinc-950 px-3.5 py-1.5 text-xs font-medium transition-colors"
              >
                Airport Transfers
              </Link>

              <Link
                href="/contact"
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  pathname === '/contact'
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right Action Buttons: Search + Book Cab */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('fleet');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full bg-zinc-100/90 hover:bg-zinc-200 border border-zinc-200/80 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer"
                aria-label="Search cab fleet"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookClick}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 text-xs font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer active:scale-95"
              >
                Book A Cab
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 rounded-full transition-colors cursor-pointer active:scale-95"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-sidebar"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Sidebar & Backdrop via React Portal directly into body */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${
              mobileMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible delay-300'
            }`}
          >
            {/* Backdrop Overlay (Smooth Fade) */}
            <div
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
              className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Solid Sidebar Drawer (Smooth Slide-in / Slide-out from Right) */}
            <aside
              id="mobile-sidebar"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              className={`fixed inset-y-0 right-0 z-10 h-dvh w-[86%] max-w-[340px] bg-white shadow-2xl border-l border-zinc-200 flex flex-col justify-between transition-transform duration-300 ease-out ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Sidebar Header: Stacked Logo + Close Button */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-150 bg-white">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col justify-center">
                  <span className="font-black text-xl tracking-tight text-zinc-950 leading-none">
                    UTTARAKHAND
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mt-1">
                    Taxi Service
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer active:scale-95"
                  aria-label="Close mobile navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Nav Links with Dedicated Icons */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5 bg-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 px-3">
                  Quick Navigation
                </p>

                <nav className="flex flex-col space-y-1.5">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                      pathname === '/'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          pathname === '/' ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                        }`}
                      >
                        <Home className="w-4 h-4" />
                      </div>
                      <span>Home</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${pathname === '/' ? 'text-white/80' : 'text-zinc-400'}`} />
                  </Link>

                  <Link
                    href="/#why-us"
                    onClick={(e) => scrollToSection(e, 'why-us')}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span>About Us</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>

                  <Link
                    href="/#fleet"
                    onClick={(e) => scrollToSection(e, 'fleet')}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center">
                        <Car className="w-4 h-4" />
                      </div>
                      <span>Our Fleet</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>

                  <Link
                    href="/#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <span>Our Services</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>

                  <Link
                    href="/#top-picks"
                    onClick={(e) => scrollToSection(e, 'top-picks')}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center">
                        <Plane className="w-4 h-4" />
                      </div>
                      <span>Airport Transfers</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                      pathname === '/contact'
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          pathname === '/contact' ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                      </div>
                      <span>Contact Us</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${pathname === '/contact' ? 'text-white/80' : 'text-zinc-400'}`} />
                  </Link>
                </nav>
              </div>

              {/* Sidebar Footer CTA & 24/7 Helpline */}
              <div className="p-5 border-t border-zinc-150 space-y-3 bg-zinc-50/80">
                <a
                  href="tel:+18005558294"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white border border-zinc-200 text-xs text-zinc-800 font-medium shadow-2xs hover:bg-zinc-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>24/7 Helpline: <strong>+1 (800) 555-TAXI</strong></span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onBookClick) onBookClick();
                  }}
                  className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Your Cab Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
