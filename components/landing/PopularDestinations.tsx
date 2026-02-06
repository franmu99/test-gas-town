import { MapPinIcon } from "@heroicons/react/24/solid";
import { destinations } from "@/data/landing";

const destColors: string[] = [
  "from-rose-400 to-orange-300",
  "from-blue-400 to-cyan-300",
  "from-amber-400 to-yellow-300",
  "from-emerald-400 to-teal-300",
  "from-purple-400 to-pink-300",
  "from-indigo-400 to-blue-300",
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Explora España
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Destinos populares
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Descubre las ciudades más buscadas por nuestros usuarios
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <div
              key={dest.city}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`aspect-[3/2] bg-gradient-to-br ${destColors[i % destColors.length]}`}>
                <div className="flex h-full items-center justify-center">
                  <MapPinIcon className="h-12 w-12 text-white/40 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-white">{dest.city}</h3>
                <p className="text-sm text-white/70">{dest.country}</p>
                <p className="mt-2 inline-block rounded-full bg-primary-600/90 px-3 py-1 text-xs font-bold text-white">
                  Desde {dest.priceFrom}&euro;/día
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
