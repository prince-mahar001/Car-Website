'use client';

import React, { useRef, useEffect, useState, useId } from 'react';
import Image from 'next/image';
import {
  X,
  CheckCircle2,
  Car,
  Calendar,
  Clock,
  CreditCard,
  Banknote,
  Smartphone,
  User,
  Phone,
  Mail,
  FileText,
  Printer,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { BookingFormData, Vehicle } from '@/types/taxi';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingFormData | null;
  vehicle: Vehicle | null;
  fare: number;
}

export default function BookingModal({
  isOpen,
  onClose,
  bookingData,
  vehicle,
  fare
}: BookingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formId = useId();

  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [bookingRefId, setBookingRefId] = useState('');

  // Passenger details
  const [passengerName, setPassengerName] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | 'online'>('card');
  const [specialNotes, setSpecialNotes] = useState('');

  // Validation
  const [touched, setTouched] = useState<{ name?: boolean; phone?: boolean; email?: boolean }>({});
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        setStep('form');
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleNativeClose = () => {
    onClose();
  };

  const validate = (): boolean => {
    const errs: { name?: string; phone?: string; email?: string } = {};

    if (!passengerName.trim()) {
      errs.name = 'Please enter passenger full name.';
    }
    if (!passengerPhone.trim()) {
      errs.phone = 'Mobile number is required for driver updates.';
    } else if (passengerPhone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!passengerEmail.trim()) {
      errs.email = 'Email address is required for trip receipt.';
    } else if (!/\S+@\S+\.\S+/.test(passengerEmail)) {
      errs.email = 'Please enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });

    if (!validate()) {
      return;
    }

    const randomCode = `CAB-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRefId(randomCode);
    setStep('confirmed');
  };

  if (!bookingData || !vehicle) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleNativeClose}
      aria-labelledby={`${formId}-modal-title`}
      className="fixed inset-0 m-auto p-0 bg-transparent border-none shadow-none outline-none backdrop:bg-zinc-950/65 backdrop:backdrop-blur-md z-50 overflow-visible"
    >
      <div className="w-[calc(100vw-2rem)] sm:w-[460px] max-w-[460px] mx-auto bg-white text-zinc-950 rounded-3xl shadow-2xl border border-zinc-200/90 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-150 bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-zinc-950 text-white flex items-center justify-center shadow-xs">
              <Car className="w-3.5 h-3.5" />
            </div>
            <div>
              <h2 id={`${formId}-modal-title`} className="text-sm font-bold text-zinc-950 tracking-tight">
                {step === 'form' ? 'Finalize Your Cab Reservation' : 'Booking Confirmed!'}
              </h2>
              <p className="text-[11px] text-zinc-500 font-normal">
                {step === 'form' ? 'Guaranteed flat fare • Zero surge' : `Reference: ${bookingRefId}`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-white space-y-4">
          {step === 'form' ? (
            <form onSubmit={handleSubmitBooking} noValidate className="space-y-5">
              
              {/* Trip & Vehicle Summary Card */}
              <div className="rounded-2xl bg-zinc-50/90 border border-zinc-200/80 p-4 space-y-3.5">
                
                {/* Vehicle Header */}
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-zinc-200/70">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-16 h-11 rounded-xl bg-white border border-zinc-200/80 overflow-hidden flex items-center justify-center shrink-0 p-1">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={64}
                        height={40}
                        unoptimized
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block">
                        Selected Cab
                      </span>
                      <h3 className="text-sm font-bold text-zinc-950 truncate">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-zinc-500 truncate font-normal">
                        {vehicle.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Fixed Fare</span>
                    </div>
                    <div className="text-xl font-extrabold text-zinc-950 mt-0.5">
                      ${fare}
                    </div>
                  </div>
                </div>

                {/* Route visualization with vertical connector */}
                <div className="relative pl-6 space-y-2.5 text-xs">
                  {/* Vertical dotted connector line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-zinc-300" />

                  {/* Pickup */}
                  <div className="relative">
                    <span className="absolute -left-6 top-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                      Pickup Location
                    </span>
                    <span className="font-semibold text-zinc-900 leading-tight block">
                      {bookingData.pickup}
                    </span>
                  </div>

                  {/* Drop-off */}
                  <div className="relative pt-1">
                    <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white shadow-xs" />
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                      Drop-off Destination
                    </span>
                    <span className="font-semibold text-zinc-900 leading-tight block">
                      {bookingData.dropoff}
                    </span>
                  </div>
                </div>

                {/* Trip meta pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-200/70 text-xs text-zinc-600">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium text-[11px]">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    <span>{bookingData.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium text-[11px]">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span>{bookingData.time}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium text-[11px]">
                    <User className="w-3 h-3 text-zinc-400" />
                    <span>{bookingData.passengers} Passenger(s)</span>
                  </div>
                </div>

              </div>

              {/* Passenger & Contact Details */}
              <div className="space-y-3.5 pt-1">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Passenger Information</span>
                  </h3>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    We will send live driver GPS tracking and receipt to this contact info.
                  </p>
                </div>

                {/* Full Name Input */}
                <div>
                  <label
                    htmlFor={`${formId}-pname`}
                    className="block text-xs font-semibold text-zinc-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id={`${formId}-pname`}
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Alexander Miller"
                      value={passengerName}
                      onChange={(e) => {
                        setPassengerName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, name: true }));
                        if (!passengerName.trim()) setErrors((prev) => ({ ...prev, name: 'Please enter passenger full name.' }));
                      }}
                      aria-invalid={touched.name && !!errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? `${formId}-pname-error` : undefined}
                      className={`w-full rounded-xl bg-zinc-50/80 border pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all ${
                        touched.name && errors.name
                          ? 'border-red-500 ring-1 ring-red-500/20'
                          : 'border-zinc-200'
                      }`}
                      required
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p id={`${formId}-pname-error`} className="mt-1 text-[11px] text-red-600 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile Phone & Email in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor={`${formId}-pphone`}
                      className="block text-xs font-semibold text-zinc-700 mb-1"
                    >
                      Mobile Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id={`${formId}-pphone`}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="e.g. +1 (555) 019-2834"
                        value={passengerPhone}
                        onChange={(e) => {
                          setPassengerPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        onBlur={() => {
                          setTouched((prev) => ({ ...prev, phone: true }));
                          if (!passengerPhone.trim()) setErrors((prev) => ({ ...prev, phone: 'Mobile phone number is required.' }));
                        }}
                        aria-invalid={touched.phone && !!errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? `${formId}-pphone-error` : undefined}
                        className={`w-full rounded-xl bg-zinc-50/80 border pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all ${
                          touched.phone && errors.phone
                            ? 'border-red-500 ring-1 ring-red-500/20'
                            : 'border-zinc-200'
                        }`}
                        required
                      />
                    </div>
                    {touched.phone && errors.phone && (
                      <p id={`${formId}-pphone-error`} className="mt-1 text-[11px] text-red-600 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-pemail`}
                      className="block text-xs font-semibold text-zinc-700 mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id={`${formId}-pemail`}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck="false"
                        placeholder="e.g. alex@example.com"
                        value={passengerEmail}
                        onChange={(e) => {
                          setPassengerEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        onBlur={() => {
                          setTouched((prev) => ({ ...prev, email: true }));
                          if (!passengerEmail.trim()) setErrors((prev) => ({ ...prev, email: 'Email address is required.' }));
                        }}
                        aria-invalid={touched.email && !!errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? `${formId}-pemail-error` : undefined}
                        className={`w-full rounded-xl bg-zinc-50/80 border pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all ${
                          touched.email && errors.email
                            ? 'border-red-500 ring-1 ring-red-500/20'
                            : 'border-zinc-200'
                        }`}
                        required
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p id={`${formId}-pemail-error`} className="mt-1 text-[11px] text-red-600 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special Instructions (Optional) */}
                <div>
                  <label
                    htmlFor={`${formId}-pnotes`}
                    className="block text-xs font-semibold text-zinc-700 mb-1"
                  >
                    Special Notes / Flight Number (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-zinc-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <textarea
                      id={`${formId}-pnotes`}
                      rows={2}
                      placeholder="e.g. Flight #AA120, meet at terminal curb, child seat needed..."
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full rounded-xl bg-zinc-50/80 border border-zinc-200 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-950 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-950 focus:bg-white focus:ring-2 focus:ring-zinc-950/5 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div>
                  <span className="block text-xs font-semibold text-zinc-700 mb-2">
                    Payment Method
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        paymentMethod === 'card'
                          ? 'bg-zinc-950 border-zinc-950 text-white shadow-xs ring-1 ring-zinc-950'
                          : 'bg-zinc-50/70 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100/80'
                      }`}
                    >
                      <CreditCard className={`w-3.5 h-3.5 ${paymentMethod === 'card' ? 'text-amber-400' : 'text-zinc-500'}`} />
                      <span className="text-[11px] font-semibold block leading-tight">Card in Cab</span>
                      <span className={`text-[9px] block ${paymentMethod === 'card' ? 'text-zinc-400' : 'text-zinc-500'}`}>Card terminal</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cash')}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        paymentMethod === 'cash'
                          ? 'bg-zinc-950 border-zinc-950 text-white shadow-xs ring-1 ring-zinc-950'
                          : 'bg-zinc-50/70 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100/80'
                      }`}
                    >
                      <Banknote className={`w-3.5 h-3.5 ${paymentMethod === 'cash' ? 'text-emerald-400' : 'text-zinc-500'}`} />
                      <span className="text-[11px] font-semibold block leading-tight">Cash</span>
                      <span className={`text-[9px] block ${paymentMethod === 'cash' ? 'text-zinc-400' : 'text-zinc-500'}`}>Pay on arrival</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('online')}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        paymentMethod === 'online'
                          ? 'bg-zinc-950 border-zinc-950 text-white shadow-xs ring-1 ring-zinc-950'
                          : 'bg-zinc-50/70 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100/80'
                      }`}
                    >
                      <Smartphone className={`w-3.5 h-3.5 ${paymentMethod === 'online' ? 'text-sky-400' : 'text-zinc-500'}`} />
                      <span className="text-[11px] font-semibold block leading-tight">Online</span>
                      <span className={`text-[9px] block ${paymentMethod === 'online' ? 'text-zinc-400' : 'text-zinc-500'}`}>Apple/Google</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Actions Footer */}
              <div className="pt-2.5 border-t border-zinc-150 flex items-center justify-between gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold text-xs px-4 py-2.5 transition-colors cursor-pointer shrink-0"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-3 px-4 shadow-md shadow-blue-600/20 active:scale-98 transition-all flex items-center justify-center gap-1.5 group cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Confirm Cab (${fare})</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 shrink-0" />
                </button>
              </div>

            </form>
          ) : (
            /* Step 2: Confirmed Screen */
            <div className="py-6 px-2 text-center space-y-6">
              
              <div className="relative w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Cab Reserved Successfully</span>
                </span>
                <h3 className="text-2xl font-black text-zinc-950 mt-3 tracking-tight">
                  Your Ride is Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-sm mx-auto font-normal">
                  Driver assignment details and live GPS tracking have been dispatched via SMS to <strong className="text-zinc-950 font-bold">{passengerPhone}</strong>.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="w-full rounded-2xl bg-zinc-50/90 border border-zinc-200/80 p-4 sm:p-5 text-left text-xs space-y-3 shadow-2xs">
                
                <div className="flex justify-between items-center pb-3 border-b border-zinc-200">
                  <span className="text-zinc-500 font-medium">Booking Reference</span>
                  <span className="font-mono font-bold text-zinc-950 bg-white border border-zinc-200 px-2.5 py-0.5 rounded-md text-xs">
                    {bookingRefId}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-medium">Assigned Vehicle</span>
                  <span className="font-semibold text-zinc-900">{vehicle.name}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-medium">Passenger Name</span>
                  <span className="font-semibold text-zinc-900">{passengerName}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-medium">Pickup Schedule</span>
                  <span className="font-semibold text-zinc-900">{bookingData.date} at {bookingData.time}</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="text-zinc-500 font-medium shrink-0">Pickup Point</span>
                  <span className="font-semibold text-zinc-900 text-right truncate max-w-[220px]">
                    {bookingData.pickup}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="text-zinc-500 font-medium shrink-0">Destination</span>
                  <span className="font-semibold text-zinc-900 text-right truncate max-w-[220px]">
                    {bookingData.dropoff}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-zinc-200">
                  <span className="text-zinc-800 font-bold">Total Guaranteed Fare:</span>
                  <span className="text-lg font-black text-zinc-950">${fare}</span>
                </div>
              </div>

              {/* Dispatch Notice */}
              <div className="w-full p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-left flex items-center gap-2.5 text-xs text-amber-900">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Your driver will arrive 5 minutes prior to pickup time. 24/7 dispatch helpline: <strong>+1 (800) 555-0199</strong>.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold hover:bg-zinc-100 flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto flex-1 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer shadow-md shadow-blue-600/20 transition-all active:scale-98"
                >
                  Done / Return to Fleet
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </dialog>
  );
}
