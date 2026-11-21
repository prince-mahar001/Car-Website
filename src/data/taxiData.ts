import { Vehicle, PopularRoute, ServiceItem, TestimonialItem, FaqItem } from '@/types/taxi';

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: 'eco-sedan',
    name: 'Economy Standard',
    tagline: 'Toyota Prius / Camry or similar',
    category: 'economy',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    passengerCapacity: 4,
    luggageCapacity: 2,
    baseFare: 8.0,
    perKmRate: 1.85,
    features: ['Air Conditioning', 'Free 4G Wi-Fi', 'Bottled Water', 'Contactless Pay'],
    popularFor: 'Daily city commuting & quick airport transfers'
  },
  {
    id: 'business-sedan',
    name: 'Executive Comfort',
    tagline: 'Mercedes-Benz E-Class / BMW 5 Series',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    passengerCapacity: 3,
    luggageCapacity: 3,
    baseFare: 16.0,
    perKmRate: 2.80,
    features: ['Leather Upholstery', 'Chauffeured Driver', 'Phone Chargers', 'Quiet Cabin', 'Flight Monitoring'],
    popularFor: 'Business meetings, VIP clients & executive travel'
  },
  {
    id: 'family-suv',
    name: 'Spacious Family SUV',
    tagline: 'Chevrolet Suburban / Ford Explorer',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    passengerCapacity: 6,
    luggageCapacity: 5,
    baseFare: 18.0,
    perKmRate: 3.10,
    features: ['Extra Legroom', 'Roof Rack option', 'Child Seat upon request', 'Quad-Zone AC', 'Tinted Windows'],
    popularFor: 'Family trips, large airport luggage & ski/beach gear'
  },
  {
    id: 'vip-van',
    name: 'VIP Chauffeur Van',
    tagline: 'Mercedes-Benz V-Class / Luxury Sprinter',
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    passengerCapacity: 8,
    luggageCapacity: 8,
    baseFare: 30.0,
    perKmRate: 4.20,
    features: ['Conference Seating', 'Ambient Lighting', 'Premium Audio', 'Refreshment Bar', 'Privacy Partition'],
    popularFor: 'Corporate delegations, wedding parties & VIP group tours'
  },
  {
    id: 'green-electric',
    name: 'Eco Green Electric',
    tagline: 'Tesla Model Y / Hyundai Ioniq 5',
    category: 'electric',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1200&q=80',
    passengerCapacity: 4,
    luggageCapacity: 3,
    baseFare: 10.0,
    perKmRate: 1.95,
    features: ['Zero Emissions', 'Ultra-Smooth Silent Ride', 'Panoramic Glass Roof', 'Fast USB-C Charging'],
    popularFor: 'Eco-conscious travelers & smooth quiet rides'
  }
];

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: 'route-1',
    from: 'Downtown Financial District',
    to: 'International Airport (JFK/Terminal 4)',
    distanceKm: 28,
    estTime: '35-45 mins',
    sedanFare: 55,
    suvFare: 78
  },
  {
    id: 'route-2',
    from: 'Grand Central Station',
    to: 'LaGuardia Airport (LGA)',
    distanceKm: 16,
    estTime: '25-35 mins',
    sedanFare: 38,
    suvFare: 55
  },
  {
    id: 'route-3',
    from: 'Midtown Manhattan',
    to: 'Newark Liberty Airport (EWR)',
    distanceKm: 26,
    estTime: '40-50 mins',
    sedanFare: 62,
    suvFare: 88
  },
  {
    id: 'route-4',
    from: 'Brooklyn Downtown',
    to: 'JFK Airport',
    distanceKm: 21,
    estTime: '30-40 mins',
    sedanFare: 48,
    suvFare: 69
  },
  {
    id: 'route-5',
    from: 'City Center',
    to: 'Metropolitan Convention Center',
    distanceKm: 9,
    estTime: '15-20 mins',
    sedanFare: 24,
    suvFare: 36
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'airport-transfers',
    title: 'Airport Drop & Pickup',
    shortDesc: 'Punctual terminal meet & greet with automatic flight delay tracking and 45-min free wait time.',
    fullDesc: 'Never miss a flight or wait in taxi queues. Our drivers monitor real-time flight telemetry so even if your flight lands early or gets delayed, your driver is right at the arrivals hall with a personalized name board.',
    iconName: 'Plane',
    perks: ['Free 45 min waiting period', 'Complimentary luggage assistance', 'Live flight status tracking']
  },
  {
    id: 'city-cabs',
    title: 'Point-to-Point City Rides',
    shortDesc: 'Instant on-demand or pre-scheduled reliable transfers anywhere across the metropolitan area.',
    fullDesc: 'Travel through the city stress-free. Avoid high surge multipliers during peak hours with our fixed, transparent pricing. Clean cabs, temperature regulated, and navigated via live traffic intelligence.',
    iconName: 'Navigation',
    perks: ['Zero surge pricing surprises', 'Average 5-min pickup time', 'Real-time GPS ride sharing']
  },
  {
    id: 'hourly-charter',
    title: 'Hourly & Chauffeur Hire',
    shortDesc: 'Keep a car and professional driver at your service for meetings, shopping, or full-day city tours.',
    fullDesc: 'Need multiple stops throughout your busy day? Reserve a dedicated luxury vehicle by the hour. Driver waits patiently while you conduct meetings, dine, or shop without rebooking individual trips.',
    iconName: 'Clock',
    perks: ['Unlimited stops in city zone', 'Flexible itinerary adjustments', 'Dedicated personal chauffeur']
  },
  {
    id: 'corporate-accounts',
    title: 'Corporate Travel Solutions',
    shortDesc: 'Centralized company billing, employee ride allowances, and premium executive black car fleets.',
    fullDesc: 'Streamline business travel for your team and visiting VIPs. Receive single monthly itemized invoicing, expense management integration, and priority vehicle allocation even during peak rush hours.',
    iconName: 'Briefcase',
    perks: ['Monthly consolidated invoicing', 'Priority VIP dispatch', 'Dedicated account manager']
  },
  {
    id: 'intercity-rides',
    title: 'Intercity & Outstation',
    shortDesc: 'Long-distance cross-state travel in top comfort with experienced highway certified chauffeurs.',
    fullDesc: 'Skip crowded trains and airport security lines for regional travel. Door-to-door direct transportation between major cities at flat competitive rates with rest stops whenever desired.',
    iconName: 'Milestone',
    perks: ['Door-to-door cross-city comfort', 'Highway-certified vetted drivers', 'Flat distance pricing']
  },
  {
    id: 'special-events',
    title: 'Weddings & Special Events',
    shortDesc: 'Coordinated guest transportation, luxury bridal sedans, and group shuttles for memorable occasions.',
    fullDesc: 'Make your special day flawless. From pristine white luxury sedans for the couple to spacious executive passenger vans for family and guests, our coordinators handle the logistics effortlessly.',
    iconName: 'Sparkles',
    iconName: 'Car',
    perks: ['Pristine event vehicle prep', 'Custom ribbon & decor options', 'Synchronized group fleet']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Frequent Flyer & Consultant',
    location: 'New York, NY',
    rating: 5,
    comment: 'The best taxi service I have used. My flight arrived 40 minutes late past midnight, and my driver was still waiting with my name sign. Car was spotless and the ride was so peaceful after a grueling flight.',
    avatarText: 'SJ'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Tech Director',
    location: 'Boston, MA',
    rating: 5,
    comment: 'We use their Corporate Account for all our visiting clients. Upfront pricing, immaculately maintained Mercedes sedans, and polite, professional drivers who actually know the quickest routes.',
    avatarText: 'MV'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Family Vacationer',
    location: 'Miami, FL',
    rating: 5,
    comment: 'Traveling with 3 young kids and 5 large suitcases is always a nightmare, but the Family SUV booking had child booster seats already installed and plenty of trunk space. Exceptional service!',
    avatarText: 'ER'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do fixed fares work? Are there surge pricing hidden fees?',
    answer: 'Unlike ride-share apps with unpredictable surges during rain or rush hours, our rates are calculated strictly based on standard distance and time. Once your booking is confirmed, your quoted fare is 100% locked.'
  },
  {
    question: 'What happens if my incoming flight is delayed?',
    answer: 'We automatically track your flight status using the flight number you provide when booking airport pickups. Our driver will automatically adjust their arrival time to your actual touchdown, and we provide 45 minutes of complimentary waiting time after landing.'
  },
  {
    question: 'How can I pay for my taxi ride?',
    answer: 'We offer flexible payment methods: you can pay the driver directly with Cash, tap with any major Credit/Debit card (Visa, Mastercard, Amex) using the in-vehicle terminal, or pay securely online at the time of booking.'
  },
  {
    question: 'Can I cancel or reschedule my booking for free?',
    answer: 'Yes! You can cancel or change your booking free of charge up to 2 hours before the scheduled pickup time. Instant confirmations and cancellation links are sent to your phone and email.'
  },
  {
    question: 'Are your drivers licensed and vehicles inspected?',
    answer: 'All our chauffeurs undergo rigorous background checks, drug screenings, and local route certifications. Every vehicle in our fleet is commercially insured and passes comprehensive mechanical safety inspections every 30 days.'
  },
  {
    question: 'Do you offer child seats or special assistance?',
    answer: 'Yes! We provide infant, toddler, and booster safety seats upon request at no extra charge. Please specify your requirements in the special requests note when making your booking.'
  }
];

export const COMPANY_INFO = {
  name: 'Dream Drive',
  tagline: 'Drive Your Dream Car Anytime Anywhere.',
  phone: '+1 (800) 555-8294',
  phoneDisplay: '+1 (800) 555-DREAM',
  email: 'concierge@dreamdrive.com',
  address: '450 Lexington Ave, Suite 1200, New York, NY 10017',
  operatingHours: '24 Hours a Day / 7 Days a Week / 365 Days a Year',
  operatingCities: ['New York City', 'Brooklyn & Queens', 'New Jersey Metro', 'Long Island', 'Westchester', 'Miami Corridor']
};

