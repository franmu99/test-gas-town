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

  const isExcellent = car.rating >= 4.5;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-700">
              {typeLabels[car.type]}
            </span>
            {isExcellent && (
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Excelente
              </span>
            )}
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {car.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {car.brand} {car.model} &middot; {car.year}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(car.rating)
                      ? "text-amber-400"
                      : "text-slate-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-900">
              {car.rating}
            </span>
            <span className="text-sm text-slate-500">
              ({car.reviewCount} opiniones)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 sm:shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
            {car.provider.charAt(0)}
          </div>
          <span className="text-sm font-medium text-slate-700">
            {car.provider}
          </span>
        </div>
      </div>
    </div>
  );
}
