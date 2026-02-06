import { categories } from "@/data/landing";

const categoryIcons: Record<string, string> = {
  Economy: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.015 2.015 0 0 0-1.67.896l-3.538 5.518A2.04 2.04 0 0 0 3.75 14.25",
  SUV: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.015 2.015 0 0 0-1.67.896l-3.538 5.518A2.04 2.04 0 0 0 3.75 14.25",
  Luxury: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.015 2.015 0 0 0-1.67.896l-3.538 5.518A2.04 2.04 0 0 0 3.75 14.25",
  Van: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.015 2.015 0 0 0-1.67.896l-3.538 5.518A2.04 2.04 0 0 0 3.75 14.25",
  Convertible: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.015 2.015 0 0 0-1.67.896l-3.538 5.518A2.04 2.04 0 0 0 3.75 14.25",
  Pickup: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.015 2.015 0 0 0-1.67.896l-3.538 5.518A2.04 2.04 0 0 0 3.75 14.25",
};

const bgColors: string[] = [
  "from-blue-100 to-blue-50",
  "from-emerald-100 to-emerald-50",
  "from-amber-100 to-amber-50",
  "from-purple-100 to-purple-50",
  "from-rose-100 to-rose-50",
  "from-cyan-100 to-cyan-50",
];

export default function PopularCategories() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Para cada tipo de viaje
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Categorías populares
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Elige el tipo de coche que mejor se adapta a tu viaje
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${bgColors[i % bgColors.length]}`}>
                <div className="flex h-full items-center justify-center">
                  <svg
                    className="h-16 w-16 text-slate-400/60 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.75}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={categoryIcons[cat.name]}
                    />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-600">
                    Desde {cat.priceFrom}&euro;/día
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
