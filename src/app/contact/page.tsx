'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { BookingFormData, Vehicle } from '@/types/taxi';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  User
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/taxiData';

export default function ContactPage() {
  // Modal state for header "Book A Cab" button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBookingData, setActiveBookingData] = useState<BookingFormData | null>(null);
  const [activeVehicle, setActiveVehicle] = useState<Vehicle | null>(null);
  const [activeFare, setActiveFare] = useState<number>(0);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Immediate Cab Assistance');
  const [message, setMessage] = useState('');

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBookCabAction = () => {
    const defaultCab: Vehicle = {
      id: 'maruti-swift',
      name: 'Maruti Suzuki Swift',
      tagline: 'Comfortable, Efficient & Prompt City Cab',
      category: 'economy',
      image: '/images/hero-swift.png',
      passengerCapacity: 4,
      luggageCapacity: 3,
      baseFare: 25.0,
      perKmRate: 2.2,
      features: ['Air Conditioning', 'Prompt Airport Transfer', 'Licensed Driver'],
      popularFor: 'Quick city transit & airport transfers'
    };
    const initialData: BookingFormData = {
      tripType: 'one-way',
      pickup: 'Manhattan, New York',
      dropoff: 'JFK Airport (Terminal 4)',
      date: '2026-11-10',
      time: '12:00',
      passengers: 4,
      luggage: 3,
      selectedVehicleId: 'maruti-swift'
    };
    setActiveBookingData(initialData);
    setActiveVehicle(defaultCab);
    setActiveFare(75);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email address, and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setTicketId(data.inquiry?.ticketId || `TKT-${Math.floor(10000 + Math.random() * 90000)}`);
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setErrorMessage('Network error while submitting. Please call our 24/7 helpline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('Immediate Cab Assistance');
    setMessage('');
    setSubmitSuccess(false);
    setTicketId('');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onBookClick={handleBookCabAction} />

      {/* Main Content */}
      <main className="flex-1 py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-semibold text-zinc-800 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>24/7 Live Taxi Dispatch & Support</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
              Contact Our Dispatch Team
            </h1>
            
            <p className="mt-3 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
              Have questions about a booking, need airport transfer assistance, or want to set up a corporate business account? Our dispatch team is on call around the clock.
            </p>
          </div>

          {/* 2-Column Grid: Contact Information Cards + Interactive Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Dispatch Channels & Trust Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Phone Card */}
              <div className="p-6 rounded-3xl bg-zinc-50/80 border border-zinc-200/80 space-y-3 shadow-2xs">
                <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-xs">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
                    Immediate Phone Helpline (24/7)
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-xl sm:text-2xl font-extrabold text-zinc-950 hover:text-zinc-700 transition-colors tracking-tight mt-0.5 block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-zinc-500 mt-1 font-normal leading-relaxed">
                    Direct connection to active dispatch managers for ride bookings, airport flight delay adjustments, and driver location updates.
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-zinc-50/80 border border-zinc-200/80 space-y-3 shadow-2xs">
                <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
                    Direct Email Support
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-zinc-950 hover:text-zinc-700 transition-colors mt-0.5 block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-zinc-500 mt-1 font-normal leading-relaxed">
                    Average response time under 15 minutes. Send itinerary details, lost & found inquiries, or corporate account inquiries.
                  </p>
                </div>
              </div>

              {/* Central Station / Airport Coordinators */}
              <div className="p-6 rounded-3xl bg-zinc-50/80 border border-zinc-200/80 space-y-3 shadow-2xs">
                <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-xs">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
                    Central Station & Terminals
                  </span>
                  <div className="text-sm font-bold text-zinc-950 mt-0.5">
                    {COMPANY_INFO.address}
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 font-normal leading-relaxed">
                    Curbside dispatch coordinators stationed at JFK (Terminal 4/5), LGA (Terminal B), and Newark Liberty (Terminal A).
                  </p>
                </div>
              </div>

              {/* Operating Badges */}
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl border border-zinc-200 bg-white flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-950 block">24/7/365</span>
                    <span className="text-[11px] text-zinc-400">Always On Call</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl border border-zinc-200 bg-white flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-950 block">Locked Fares</span>
                    <span className="text-[11px] text-zinc-400">Zero Surge Price</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-10 shadow-sm">
                
                {submitSuccess ? (
                  /* Success Feedback View */
                  <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Inquiry Dispatched</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                        Thank You, {name}!
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-500 mt-2 max-w-md mx-auto leading-relaxed">
                        Your inquiry has been assigned to our on-duty dispatch manager. A confirmation and response will be sent to <strong className="text-zinc-950 font-bold">{email}</strong> within 15 minutes.
                      </p>
                    </div>

                    {/* Ticket Reference Badge */}
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 max-w-sm mx-auto text-center space-y-1">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block">
                        Support Ticket Reference
                      </span>
                      <span className="font-mono text-base font-extrabold text-zinc-950 block">
                        {ticketId}
                      </span>
                      <span className="text-[11px] text-zinc-500 block">
                        Subject: {subject}
                      </span>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold text-xs px-6 py-3 transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>

                      <button
                        type="button"
                        onClick={handleBookCabAction}
                        className="rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs px-6 py-3 transition-all cursor-pointer shadow-xs"
                      >
                        Book A Cab Now
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Active Form View */
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">
                        Send Us A Message
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-normal">
                        Fill in your journey or inquiry details below and our team will get in touch immediately.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alexander Miller"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl bg-zinc-50/80 border border-zinc-200 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            required
                            placeholder="e.g. alex@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl bg-zinc-50/80 border border-zinc-200 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone & Inquiry Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            type="tel"
                            placeholder="e.g. +1 (555) 019-2834"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-xl bg-zinc-50/80 border border-zinc-200 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Inquiry Type
                        </label>
                        <div className="relative">
                          <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full rounded-xl bg-zinc-50/80 border border-zinc-200 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-950 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all cursor-pointer"
                          >
                            <option value="Immediate Cab Assistance">Immediate Cab Assistance</option>
                            <option value="Airport Transfer Reservation">Airport Transfer Reservation</option>
                            <option value="Corporate / Business Account">Corporate / Business Account</option>
                            <option value="Lost & Found Item">Lost & Found Item</option>
                            <option value="Driver / Journey Feedback">Driver / Journey Feedback</option>
                            <option value="General Question">General Question</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Your Message / Trip Details <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          required
                          placeholder="Please provide pickup/destination details, date & time, flight number, or your specific question..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full rounded-2xl bg-zinc-50/80 border border-zinc-200 px-4 py-3 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all resize-y"
                        />
                      </div>
                    </div>

                    {/* Submit Action Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-full bg-zinc-950 hover:bg-zinc-800 disabled:opacity-60 text-white font-semibold text-xs sm:text-sm py-3.5 px-6 shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Routing Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                            <span>Send Inquiry to Dispatch</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-zinc-400 text-center font-normal pt-1">
                      By submitting, your inquiry is securely routed to our 24/7 dispatch desk. No spam, ever.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Booking Modal (if user clicks "Book A Cab" from Contact page) */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={activeBookingData}
        vehicle={activeVehicle}
        fare={activeFare}
      />
    </div>
  );
}
