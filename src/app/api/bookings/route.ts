import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      tripType,
      pickup,
      dropoff,
      date,
      time,
      passengers,
      selectedVehicleId,
      passengerName,
      passengerPhone,
      passengerEmail,
      paymentMethod
    } = body;

    // Validation
    if (!pickup || !dropoff || !passengerName || !passengerPhone || !passengerEmail) {
      return NextResponse.json(
        { error: 'Missing required booking fields (pickup, dropoff, passenger details)' },
        { status: 400 }
      );
    }

    // Generate reference code
    const referenceId = `APX-${Math.floor(100000 + Math.random() * 900000)}`;

    const bookingRecord = {
      referenceId,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      trip: {
        tripType,
        pickup,
        dropoff,
        date,
        time,
        passengers: Number(passengers) || 1,
        selectedVehicleId,
      },
      passenger: {
        name: passengerName,
        phone: passengerPhone,
        email: passengerEmail,
        paymentMethod: paymentMethod || 'card'
      },
      assignedDriver: {
        name: 'David Miller',
        rating: 4.94,
        phone: '+1 (555) 392-8172',
        vehiclePlate: 'NYC-TAXI-9824',
        vehicleModel: 'Silver Toyota Camry Hybrid',
        etaMinutes: 8
      }
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Cab reservation received and confirmed successfully.',
        booking: bookingRecord
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid booking request payload' },
      { status: 500 }
    );
  }
}
