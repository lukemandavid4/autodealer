import { Car } from '@/types/car';

export const mockCars: Car[] = [
  {
    id: '1',
    title: '2023 Toyota Corolla SE',
    brand: 'Toyota',
    model: 'Corolla SE',
    year: 2023,
    price: 24500,
    image: '/placeholder.svg',
    description: 'Experience the perfect blend of efficiency, reliability, and style with the 2023 Toyota Corolla SE. This compact sedan offers exceptional fuel economy, advanced safety features, and a comfortable interior perfect for daily commuting and weekend adventures.',
    specifications: {
      mileage: 15000,
      transmission: 'CVT',
      fuelType: 'Petrol',
      engineCapacity: '2.0L',
      bodyType: 'Sedan',
      color: 'Midnight Black Metallic',
      doors: 4,
      seats: 5
    },
    features: [
      'Toyota Safety Sense 2.0',
      'Apple CarPlay & Android Auto',
      'LED Headlights',
      'Wireless Phone Charging',
      'Dual Zone Climate Control',
      'Premium Audio System'
    ],
    status: 'Available',
    featured: true
  },
  {
    id: '2',
    title: '2022 BMW 330i xDrive',
    brand: 'BMW',
    model: '330i xDrive',
    year: 2022,
    price: 42900,
    image: '/placeholder.svg',
    description: 'Luxury meets performance in the 2022 BMW 330i xDrive. With its turbocharged engine, all-wheel drive capability, and premium interior appointments, this sedan delivers an uncompromising driving experience.',
    specifications: {
      mileage: 28000,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      engineCapacity: '2.0L Turbo',
      bodyType: 'Sedan',
      color: 'Alpine White',
      doors: 4,
      seats: 5
    },
    features: [
      'BMW Live Cockpit Pro',
      'Harman Kardon Premium Audio',
      'Heated Front Seats',
      'Navigation System',
      'Parking Assistant',
      'BMW ConnectedDrive'
    ],
    status: 'Available',
    featured: true
  },
  {
    id: '3',
    title: '2023 Honda CR-V EX-L',
    brand: 'Honda',
    model: 'CR-V EX-L',
    year: 2023,
    price: 35200,
    image: '/placeholder.svg',
    description: 'The versatile 2023 Honda CR-V EX-L combines practicality with sophistication. This compact SUV offers spacious cargo area, advanced safety technology, and leather-trimmed interior for maximum comfort.',
    specifications: {
      mileage: 12000,
      transmission: 'CVT',
      fuelType: 'Petrol',
      engineCapacity: '1.5L Turbo',
      bodyType: 'SUV',
      color: 'Metallic Slate Blue',
      doors: 4,
      seats: 5
    },
    features: [
      'Honda Sensing Suite',
      'Leather-Trimmed Seats',
      'Power Tailgate',
      'Remote Engine Start',
      'Dual-Zone Automatic Climate Control',
      'Honda Connect Infotainment'
    ],
    status: 'Available',
    featured: false
  },
  {
    id: '4',
    title: '2021 Tesla Model 3 Long Range',
    brand: 'Tesla',
    model: 'Model 3 Long Range',
    year: 2021,
    price: 38900,
    image: '/placeholder.svg',
    description: 'Step into the future with the 2021 Tesla Model 3 Long Range. This all-electric sedan offers incredible range, cutting-edge technology, and zero emissions driving with superb performance.',
    specifications: {
      mileage: 35000,
      transmission: 'Automatic',
      fuelType: 'Electric',
      engineCapacity: 'Dual Motor',
      bodyType: 'Sedan',
      color: 'Pearl White Multi-Coat',
      doors: 4,
      seats: 5
    },
    features: [
      '358-Mile Range',
      'Autopilot Included',
      '15-inch Touchscreen',
      'Premium Connectivity',
      'Over-the-Air Updates',
      'Mobile Connector'
    ],
    status: 'Available',
    featured: true
  },
  {
    id: '5',
    title: '2022 Ford F-150 Lariat',
    brand: 'Ford',
    model: 'F-150 Lariat',
    year: 2022,
    price: 52500,
    image: '/placeholder.svg',
    description: 'The 2022 Ford F-150 Lariat combines rugged capability with premium comfort. This full-size pickup truck is perfect for both work and leisure with its powerful engine and luxury features.',
    specifications: {
      mileage: 22000,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      engineCapacity: '3.5L V6 Turbo',
      bodyType: 'Pickup Truck',
      color: 'Agate Black Metallic',
      doors: 4,
      seats: 5
    },
    features: [
      'Co-Pilot360 2.0',
      'Leather-Appointed Seating',
      'SYNC 4 Infotainment',
      'Pro Trailer Backup Assist',
      'Heated and Cooled Seats',
      'FordPass Connect'
    ],
    status: 'Reserved',
    featured: false
  },
  {
    id: '6',
    title: '2023 Audi A4 Premium Plus',
    brand: 'Audi',
    model: 'A4 Premium Plus',
    year: 2023,
    price: 46800,
    image: '/placeholder.svg',
    description: 'Refined elegance meets German engineering in the 2023 Audi A4 Premium Plus. This luxury sedan offers quattro all-wheel drive, premium materials, and advanced technology for the discerning driver.',
    specifications: {
      mileage: 8500,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      engineCapacity: '2.0L TFSI',
      bodyType: 'Sedan',
      color: 'Glacier White Metallic',
      doors: 4,
      seats: 5
    },
    features: [
      'Quattro All-Wheel Drive',
      'Virtual Cockpit Plus',
      'Bang & Olufsen Premium Audio',
      'Audi Pre Sense',
      'Wireless Apple CarPlay',
      'LED Matrix Headlights'
    ],
    status: 'Available',
    featured: true
  }
];