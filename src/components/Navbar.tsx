'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick?: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo: Dream Drive */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-extrabold text-2xl tracking-tight text-zinc-950">
              Dream Drive
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
              className="bg-zinc-950 hover:bg-zinc-800 text-white rounded-full px-5 py-2.5 text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              Book A Cab
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-zinc-950 bg-zinc-100 rounded-full"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-zinc-700">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl bg-zinc-100 text-zinc-950 font-bold"
            >
              Home
            </Link>
            <Link
              href="/#why-us"
              onClick={(e) => scrollToSection(e, 'why-us')}
              className="px-3 py-2 rounded-xl hover:bg-zinc-50"
            >
              About Us
            </Link>
            <Link
              href="/#fleet"
              onClick={(e) => scrollToSection(e, 'fleet')}
              className="px-3 py-2 rounded-xl hover:bg-zinc-50"
            >
              Our Fleet
            </Link>
            <Link
              href="/#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="px-3 py-2 rounded-xl hover:bg-zinc-50"
            >
              Our Services
            </Link>
            <Link
              href="/#top-picks"
              onClick={(e) => scrollToSection(e, 'top-picks')}
              className="px-3 py-2 rounded-xl hover:bg-zinc-50"
            >
              Airport Transfers
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl font-bold ${
                pathname === '/contact' ? 'bg-zinc-100 text-zinc-950' : 'hover:bg-zinc-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-2 border-t border-zinc-150">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
              }}
              className="w-full text-center rounded-full bg-zinc-950 text-white py-3 text-xs font-semibold shadow-md"
            >
              Book Your Cab
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
