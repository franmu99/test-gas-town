import Image from "next/image";
import { Car } from "@/lib/types";
import {
  UserGroupIcon,
  CogIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import {
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

function TransmissionIcon({ className }: { className?: string }) {
  return <CogIcon className={className} />;
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-slate-900">{car.name}</h3>
            <span className="text-xs text-slate-500 capitalize">{car.type}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <StarIcon className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-slate-700">{car.rating}</span>
            <span className="text-xs text-slate-400">({car.reviewCount})</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <UserGroupIcon className="h-3.5 w-3.5" />
            {car.specs.passengers}
          </span>
          <span className="flex items-center gap-1">
            <TransmissionIcon className="h-3.5 w-3.5" />
            {car.specs.transmission === "automatic" ? "Auto" : "Manual"}
          </span>
          <span className="flex items-center gap-1">
            <BriefcaseIcon className="h-3.5 w-3.5" />
            {car.specs.luggage}
          </span>
          {car.specs.ac && (
            <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">AC</span>
          )}
          {car.specs.gps && (
            <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">GPS</span>
          )}
        </div>

        <div className="flex items-end justify-between border-t border-slate-100 pt-3">
          <div>
            <span className="text-2xl font-bold text-primary-600">{car.pricePerDay}&euro;</span>
            <span className="text-sm text-slate-400">/dia</span>
          </div>
          <a
            href={`/coches/${car.id}`}
            className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Ver oferta
          </a>
        </div>
      </div>
    </div>
  );
}
