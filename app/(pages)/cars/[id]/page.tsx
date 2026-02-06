import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import CarImageGallery from "@/components/car-detail/CarImageGallery";
import CarInfo from "@/components/car-detail/CarInfo";
import CarSpecs from "@/components/car-detail/CarSpecs";
import CarDescription from "@/components/car-detail/CarDescription";
import PricingPanel from "@/components/car-detail/PricingPanel";
import CarPolicies from "@/components/car-detail/CarPolicies";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) return { title: "Coche no encontrado" };
  return {
    title: `${car.name} - Alquiler | RentaCar`,
    description: `Alquila ${car.name} ${car.year} desde ${car.pricePerDay}€/día. ${car.specs.passengers} pasajeros, ${car.specs.luggage} maletas.`,
  };
}

export default async function CarDetailPage({ params }: Props) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <CarImageGallery image={car.image} name={car.name} />
          <CarInfo car={car} />
          <CarSpecs specs={car.specs} />
          <CarDescription car={car} />
          <CarPolicies />
        </div>

        {/* Pricing sidebar */}
        <div className="mt-8 lg:mt-0">
          <PricingPanel car={car} />
        </div>
      </div>
    </div>
  );
}
