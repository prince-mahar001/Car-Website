'use client';

import React, { useState, useEffect, useRef } from 'react';
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

interface NavItem {
  id: string;
  label: string;
  href: string;
  sectionId?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'why-us', label: 'About Us', href: '/#why-us', sectionId: 'why-us' },
  { id: 'fleet', label: 'Our Fleet', href: '/#fleet', sectionId: 'fleet' },
  { id: 'services', label: 'Our Services', href: '/#services', sectionId: 'services' },
  { id: 'top-picks', label: 'Airport Transfers', href: '/#top-picks', sectionId: 'top-picks' },
  { id: 'contact', label: 'Contact Us', href: '/contact' }
];

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const navContainerRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const isClickScrolling = useRef(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync activeTab with pathname and hash
  useEffect(() => {
    if (pathname === '/contact') {
      setActiveTab('contact');
    } else if (pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['why-us', 'fleet', 'services', 'top-picks'].includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab('home');
      }
    }
  }, [pathname]);

  // Recalculate sliding pill position and width
  const updatePill = () => {
    const activeEl = itemRefs.current.get(activeTab);
    const container = navContainerRef.current;
    if (activeEl && container) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPillStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width
      });
    }
  };

  useEffect(() => {
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [activeTab, mounted]);

  // Scroll spy to update activeTab when scrolling sections on home page
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveTab('home');
        return;
      }

      const sections = ['top-picks', 'services', 'fleet', 'why-us'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 100) {
            setActiveTab(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setActiveTab(item.id);

    if (item.id === 'contact') {
      setMobileMenuOpen(false);
      return;
    }

    if (item.id === 'home') {
      setMobileMenuOpen(false);
      if (pathname === '/') {
        e.preventDefault();
        isClickScrolling.current = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          isClickScrolling.current = false;
        }, 800);
      }
      return;
    }

    if (item.sectionId) {
      setMobileMenuOpen(false);
      if (pathname === '/') {
        e.preventDefault();
        isClickScrolling.current = true;
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
          isClickScrolling.current = false;
        }, 800);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo: Stacked BHIMTAL + Taxi Service */}
            <Link href="/" className="flex flex-col justify-center group py-1">
              <span className="font-black text-lg sm:text-2xl tracking-tight text-zinc-950 leading-none">
                BHIMTAL
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-500 group-hover:text-[#155DFC] transition-colors uppercase mt-1">
                Taxi Service
              </span>
            </Link>

            {/* Center Pill Navigation Menu with Animated Sliding Pill */}
            <nav
              ref={navContainerRef}
              className="relative hidden lg:flex items-center bg-zinc-100/90 border border-zinc-200/80 rounded-full p-1.5 shadow-xs"
            >
              {/* Animated Sliding Background Pill */}
              <div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-[#155DFC] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none shadow-sm shadow-[#155DFC]/25"
                style={{
                  transform: `translateX(${pillStyle.left}px)`,
                  width: `${pillStyle.width}px`,
                  opacity: pillStyle.width > 0 ? 1 : 0
                }}
              />

              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <Link
                    key={item.id}
                    ref={(el) => {
                      if (el) itemRefs.current.set(item.id, el);
                      else itemRefs.current.delete(item.id);
                    }}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative z-10 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-200 cursor-pointer select-none ${
                      isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
                className="bg-[#155DFC] hover:bg-[#124ecf] text-white rounded-full px-5 py-2.5 text-xs font-semibold shadow-md shadow-[#155DFC]/20 transition-all cursor-pointer active:scale-95"
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
                    BHIMTAL
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[#155DFC] uppercase mt-1">
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
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeTab === item.id;
                    const IconComponent =
                      item.id === 'home'
                        ? Home
                        : item.id === 'why-us'
                        ? ShieldCheck
                        : item.id === 'fleet'
                        ? Car
                        : item.id === 'services'
                        ? Briefcase
                        : item.id === 'top-picks'
                        ? Plane
                        : Mail;

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-[#155DFC] text-white shadow-md shadow-[#155DFC]/20'
                            : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                              isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white/80' : 'text-zinc-400'}`} />
                      </Link>
                    );
                  })}
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
                  className="w-full rounded-full bg-[#155DFC] hover:bg-[#124ecf] text-white py-3.5 text-xs sm:text-sm font-semibold shadow-md shadow-[#155DFC]/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
