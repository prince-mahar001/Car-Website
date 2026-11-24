'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const BHIMTAL_TAXI_FAQS: FaqItem[] = [
  {
    question: 'How quickly will my taxi arrive after booking?',
    answer: 'For on-demand city bookings, our intelligent dispatch system pairs you with the closest licensed driver—typically arriving at your doorstep within 5 to 10 minutes. For scheduled rides and airport transfers, your cab is guaranteed to arrive at least 5 minutes prior to your selected pickup time.'
  },
  {
    question: 'Are taxi fares fixed or do they surge during peak traffic and rain?',
    answer: 'All BHIMTAL Taxi Service fares are 100% locked upfront. Once you enter your pickup and destination and confirm your booking, that exact price is guaranteed. We never apply surge multipliers, rain surcharges, or peak demand penalties.'
  },
  {
    question: 'How do airport pickups and flight delay tracking work?',
    answer: 'When scheduling an airport transfer, you can provide your flight number. Our system tracks your flight in real time and automatically updates your driver’s arrival schedule if your flight is delayed or lands early. We also include 45 minutes of complimentary waiting time after wheels-down.'
  },
  {
    question: 'What cab categories are available for families and large luggage?',
    answer: 'We offer Economy Cabs (4 passengers, 2-3 bags), Executive Sedans (4 passengers, 3 bags), and Spacious 7-Seater SUVs (up to 7 passengers, 5 large bags). Perfect for solo commuters, business executives, or families with extensive travel luggage.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We offer flexible payment options: credit/debit card directly in the cab, cash paid to the driver upon arrival, or instant online checkout with Apple Pay and Google Pay. All trips generate an official digital SMS receipt.'
  },
  {
    question: 'Are your taxi chauffeurs licensed, vetted, and background-checked?',
    answer: 'Yes, without exception. Every chauffeur in our network is TLC-licensed, holds a clean driving record, and passes extensive criminal background screening. In addition, every vehicle undergoes daily sanitization and periodic multi-point safety inspections.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white text-zinc-950 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Layout matching the wireframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Subtitle */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Got questions?<br />
              We&apos;ve got answers!
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
              Find clear answers to frequently asked questions about cab bookings, guaranteed flat fares, airport flight tracking, and luggage policies.
            </p>

            <div className="pt-4">
              <a
                href="#fleet"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-950 hover:text-zinc-700 transition-colors"
              >
                <span>Still have inquiries? Contact our 24/7 Taxi Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Contrast Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {BHIMTAL_TAXI_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-zinc-950 text-white shadow-lg'
                      : 'bg-zinc-50 border border-zinc-200/80 text-zinc-900 hover:bg-zinc-100/70'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className={`font-semibold text-sm sm:text-base tracking-tight ${isOpen ? 'text-white' : 'text-zinc-900'}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-zinc-800 text-white'
                          : 'bg-white border border-zinc-200 text-zinc-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal border-t border-zinc-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
