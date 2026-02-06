import { MapPinIcon } from "@heroicons/react/24/solid";
import { destinations } from "@/data/landing";

export default function PopularDestinations() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Destinos populares
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Descubre las ciudades más buscadas por nuestros usuarios
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.city}
              className="group relative overflow-hidden rounded-xl bg-slate-200 shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[3/2] bg-gradient-to-br from-slate-300 to-slate-200">
                <div className="flex h-full items-center justify-center">
                  <MapPinIcon className="h-10 w-10 text-slate-400" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{dest.city}</h3>
                <p className="text-sm text-white/80">{dest.country}</p>
                <p className="mt-1 text-sm font-medium text-primary-300">
                  Desde {dest.priceFrom} &euro;/día
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
