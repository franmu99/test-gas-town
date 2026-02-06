import { NextRequest, NextResponse } from "next/server";
import { cars } from "@/data/cars";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return NextResponse.json(
      { error: "Car not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: car });
}
