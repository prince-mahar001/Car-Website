
# 🚖 Apex Cab - Modern Taxi & Chauffeur Booking Website


A full-featured, responsive, production-ready Taxi & Airport Chauffeur Booking web application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.


## ✨ Features

- **🚖 Interactive Ride Booking Widget**:
  - Ride Types: One-Way, Round Trip, Airport Transfer, and Hourly Chauffeur Hire.
  - Live pickup shortcuts (JFK Airport, LGA, Grand Central, Times Square, etc.).
  - Free Flight Delay Tracking telemetry for airport trips.
  - Interactive passenger count (1-8) and luggage selector (0-6).
  - Dynamic vehicle selection with live fare calculation.
- **💰 Real-Time Fare Estimator & Transparent Pricing**:
  - Live route cost calculations with zero surge fees.
  - Popular fixed-rate route cards (Downtown to JFK, Midtown to LGA, etc.) with 1-click booking.
  - Fully transparent breakdowns (tolls & taxes included, free 45-min airport waiting time).
- **🏎️ Fleet Showcase & Category Filters**:
  - Categories: Economy Sedans, Executive Business Class, Family SUVs, Luxury Vans, and Eco Green Electrics.
  - Specifications: passenger capacity, luggage volume, amenities, base fares, and per-km rates.
  - One-click "Select & Book" button that pre-selects the vehicle in the booking widget.
- **🛡️ Booking Confirmation Dialog (Modal)**:
  - Accessible native `<dialog>` implementation with backdrop blur and keyboard dismissal.
  - Step 1: Review trip summary & enter passenger contact info (name, mobile phone, email, payment preference, special notes).
  - Step 2: Instant booking confirmation with reference ID (`#APX-XXXXXX`), verified route summary, and printable receipt.
- **🌟 Services & Solutions**:
  - Airport Drop & Pickup, Point-to-Point City Rides, Hourly Hire, Corporate Accounts, Outstation Trips, and Event Charters.
- **📋 Trust, Reviews & FAQ**:
  - Safety & verification statistics (1.2M+ Trips, 4.9★ rating, 99.4% on-time).
  - Passenger reviews from business travelers, tourists, and families.
  - Interactive FAQ accordion for common ride questions.
  - 24/7 hotline dispatch integration.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```


### 5. Lint & Typecheck

```bash
npm run lint
```



## 📁 Project Structure

```
Taxi-Website/
├── public/                 # Static assets & icons
├── src/
│   ├── app/
│   │   ├── globals.css     # Global theme & dialog backdrop styles
│   │   ├── layout.tsx      # Root HTML layout, font setup & SEO metadata
│   │   └── page.tsx        # Main homepage coordinating all taxi components
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navigation with 24/7 hotline & mobile menu
│   │   ├── HeroBooking.tsx        # Hero banner & interactive booking widget
│   │   ├── FleetSection.tsx       # Vehicle catalog with category filter tabs
│   │   ├── ServicesSection.tsx    # Core mobility services grid
│   │   ├── FareEstimatorSection.tsx # Popular routes table & flat pricing
│   │   ├── WhyChooseUs.tsx        # Safety standards, statistics & trust pillars
│   │   ├── Testimonials.tsx       # Passenger reviews & star ratings
│   │   ├── FAQSection.tsx         # Interactive FAQ accordion
│   │   ├── BookingModal.tsx       # Accessible reservation modal & confirmation receipt
│   │   └── Footer.tsx             # Footer, directory links, newsletter promo & license info
│   ├── data/
│   │   └── taxiData.ts     # Mock fleet data, routes, services, testimonials & company info
│   └── types/
│       └── taxi.ts         # TypeScript interfaces for vehicles, bookings & services
├── package.json
├── tsconfig.json
└── README.md
```


---

## 🎨 Customization

- **Pricing & Vehicles**: Edit `src/data/taxiData.ts` to update vehicle types, base rates, per-kilometer pricing, and photos.
- **Company Branding**: Modify `COMPANY_INFO` in `src/data/taxiData.ts` to update your company name, dispatch phone number, address, and operating cities.
# Car-Website
