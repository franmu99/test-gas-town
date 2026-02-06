import { NextRequest, NextResponse } from "next/server";
import { cars } from "@/data/cars";
import { Car } from "@/lib/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const location = searchParams.get("location");
  const type = searchParams.get("type");
  const priceMin = searchParams.get("price_min");
  const priceMax = searchParams.get("price_max");
  const sort = searchParams.get("sort");

  let filtered: Car[] = [...cars];

  if (location) {
    filtered = filtered.filter((car) => car.locationId === location);
  }

  if (type) {
    const types = type.split(",");
    filtered = filtered.filter((car) => types.includes(car.type));
  }

  if (priceMin) {
    const min = parseFloat(priceMin);
    if (!isNaN(min)) {
      filtered = filtered.filter((car) => car.pricePerDay >= min);
    }
  }

  if (priceMax) {
    const max = parseFloat(priceMax);
    if (!isNaN(max)) {
      filtered = filtered.filter((car) => car.pricePerDay <= max);
    }
  }

  if (sort) {
    switch (sort) {
      case "price_asc":
        filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case "price_desc":
        filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  return NextResponse.json({
    data: filtered,
    total: filtered.length,
  });
}
