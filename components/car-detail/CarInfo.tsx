import { StarIcon } from "@heroicons/react/24/solid";
import { Car } from "@/lib/types";

interface Props {
  car: Car;
}

export default function CarInfo({ car }: Props) {
  const typeLabels: Record<Car["type"], string> = {
    economy: "Económico",
    compact: "Compacto",
    suv: "SUV",
    luxury: "Lujo",
    van: "Furgoneta",
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
            {typeLabels[car.type]}
          </span>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {car.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {car.brand} {car.model} &middot; {car.year}
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <StarIcon className="h-5 w-5 text-amber-400" />
          <span className="text-lg font-semibold text-slate-900">
            {car.rating}
          </span>
          <span className="text-sm text-slate-500">
            ({car.reviewCount} opiniones)
          </span>
        </div>
      </div>
    </div>
  );
}
