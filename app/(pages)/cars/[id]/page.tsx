import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import Breadcrumb from "@/components/car-detail/Breadcrumb";
import CarImageGallery from "@/components/car-detail/CarImageGallery";
import CarInfo from "@/components/car-detail/CarInfo";
import CarSpecs from "@/components/car-detail/CarSpecs";
import CarDescription from "@/components/car-detail/CarDescription";
import PricingPanel from "@/components/car-detail/PricingPanel";
import CarPolicies from "@/components/car-detail/CarPolicies";
import FAQSection from "@/components/car-detail/FAQSection";

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
    <div className="mx-auto max-w-7xl px-4 py-6 pb-28 sm:px-6 lg:px-8 lg:pb-8 xl:max-w-[80rem]">
      <Breadcrumb carName={car.name} />

      <div className="mt-6 lg:grid lg:grid-cols-5 lg:gap-8">
        {/* Main content — 60% */}
        <div className="space-y-6 lg:col-span-3">
          <CarImageGallery image={car.image} name={car.name} />
          <CarInfo car={car} />
          <CarSpecs specs={car.specs} />
          <CarDescription car={car} />
          <CarPolicies />
          <FAQSection />
        </div>

        {/* Pricing sidebar — 40% */}
        <div className="mt-8 lg:col-span-2 lg:mt-0">
          <PricingPanel car={car} />
        </div>
      </div>
    </div>
  );
}
