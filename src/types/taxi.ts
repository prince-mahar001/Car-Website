export type VehicleCategory = 'all' | 'economy' | 'business' | 'suv' | 'luxury' | 'electric';

export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  category: VehicleCategory;
  image: string;
  passengerCapacity: number;
  luggageCapacity: number;
  baseFare: number;
  perKmRate: number;
  features: string[];
  popularFor: string;
}

export interface BookingFormData {
  tripType: 'one-way' | 'round-trip' | 'hourly' | 'airport';
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: number;
  luggage: number;
  selectedVehicleId: string;
  flightNumber?: string;
  hourlyDuration?: number;
  passengerName?: string;
  passengerPhone?: string;
  passengerEmail?: string;
  paymentMethod?: 'cash' | 'card' | 'online';
  specialNotes?: string;
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  estTime: string;
  sedanFare: number;
  suvFare: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  perks: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatarText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

