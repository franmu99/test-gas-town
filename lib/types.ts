export interface CarSpecs {
  transmission: "automatic" | "manual";
  passengers: number;
  luggage: number;
  doors: number;
  ac: boolean;
  gps: boolean;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: "economy" | "compact" | "suv" | "luxury" | "van";
  pricePerDay: number;
  image: string;
  specs: CarSpecs;
  rating: number;
  reviewCount: number;
  locationId: string;
  available: boolean;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  country: string;
  type: "airport" | "city";
  code?: string;
}
