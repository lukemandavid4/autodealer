export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  description: string;
  specifications: {
    mileage: number;
    transmission: 'Manual' | 'Automatic' | 'CVT';
    fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
    engineCapacity: string;
    bodyType: string;
    color: string;
    doors: number;
    seats: number;
  };
  features: string[];
  status: 'Available' | 'Sold' | 'Reserved';
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interestedCar: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}

export interface TestDriveRequest {
  name: string;
  email: string;
  phone: string;
  carId: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}