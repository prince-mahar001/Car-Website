'use client';

import React from 'react';
import Image from 'next/image';

interface BrandItem {
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  maxWidthClass?: string;
}

const BRAND_ITEMS: BrandItem[] = [
  {
    name: 'Nissan',
    src: '/images/brand-svgs/nissan.svg',
    width: 265,
    height: 221,
    alt: 'Nissan Innovation that Excites',
    maxWidthClass: 'max-w-[70px] sm:max-w-[85px]'
  },
  {
    name: 'Maruti Suzuki',
    src: '/images/brand-svgs/maruti-suzuki.svg',
    width: 450,
    height: 50,
    alt: 'Maruti Suzuki India',
    maxWidthClass: 'max-w-[200px] sm:max-w-[240px]'
  },
  {
    name: 'Hyundai',
    src: '/images/brand-svgs/hyundai.svg',
    width: 1000,
    height: 129,
    alt: 'Hyundai New Thinking New Possibilities',
    maxWidthClass: 'max-w-[140px] sm:max-w-[170px]'
  },
  {
    name: 'Skoda',
    src: '/images/brand-svgs/skoda.svg',
    width: 239,
    height: 34,
    alt: 'Škoda Simply Clever',
    maxWidthClass: 'max-w-[110px] sm:max-w-[130px]'
  },
  {
    name: 'Mahindra',
    src: '/images/brand-svgs/mahindra.svg',
    width: 699,
    height: 86,
    alt: 'Mahindra Rise',
    maxWidthClass: 'max-w-[135px] sm:max-w-[160px]'
  },
  {
    name: 'MG',
    src: '/images/brand-svgs/mg.svg',
    width: 699,
    height: 699,
    alt: 'MG Morris Garages',
    maxWidthClass: 'max-w-[45px] sm:max-w-[55px]'
  },
  {
    name: 'KIA',
    src: '/images/brand-svgs/kia.svg',
    width: 1000,
    height: 502,
    alt: 'KIA Movement that Inspires',
    maxWidthClass: 'max-w-[75px] sm:max-w-[90px]'
  },
  {
    name: 'Toyota',
    src: '/images/brand-svgs/toyota.svg',
    width: 251,
    height: 182,
    alt: 'Toyota Let\'s Go Places',
    maxWidthClass: 'max-w-[65px] sm:max-w-[80px]'
  }
];

export default function BrandCarousel() {
  const scrollToFleet = () => {
    const el = document.getElementById('fleet');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="carousel-container marquee-pause-on-hover relative w-full overflow-hidden mask-edge-fade py-5 select-none"
      aria-label="Official automotive brand partners infinite carousel"
    >
      <div className="flex w-max items-center">
        {/* Track 1: First continuous loop */}
        <div className="animate-marquee-infinite flex items-center shrink-0">
          {BRAND_ITEMS.map((brand, idx) => (
            <button
              key={`track1-${brand.name}-${idx}`}
              type="button"
              onClick={scrollToFleet}
              title={`View ${brand.name} fleet`}
              className="group mx-7 sm:mx-10 md:mx-14 flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-hidden"
            >
              <div className="relative h-7 sm:h-8 md:h-9 flex items-center justify-center opacity-65 group-hover:opacity-100 group-hover:scale-108 transition-all duration-300">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  unoptimized
                  className={`h-full w-auto max-h-7 sm:max-h-8 md:max-h-9 ${brand.maxWidthClass || ''} object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300`}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Track 2: Identical twin clone for seamless infinite repetition */}
        <div className="animate-marquee-infinite flex items-center shrink-0" aria-hidden="true">
          {BRAND_ITEMS.map((brand, idx) => (
            <button
              key={`track2-${brand.name}-${idx}`}
              type="button"
              tabIndex={-1}
              onClick={scrollToFleet}
              title={`View ${brand.name} fleet`}
              className="group mx-7 sm:mx-10 md:mx-14 flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-hidden"
            >
              <div className="relative h-7 sm:h-8 md:h-9 flex items-center justify-center opacity-65 group-hover:opacity-100 group-hover:scale-108 transition-all duration-300">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  unoptimized
                  className={`h-full w-auto max-h-7 sm:max-h-8 md:max-h-9 ${brand.maxWidthClass || ''} object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
