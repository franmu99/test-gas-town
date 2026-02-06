import { categories } from "@/data/landing";

export default function PopularCategories() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Categorías populares
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Elige el tipo de coche que mejor se adapta a tu viaje
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-slate-200">
                <div className="flex h-full items-center justify-center text-slate-400">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.015 2.015 0 0 0-1.67.896l-3.538 5.518A2.04 2.04 0 0 0 3.75 14.25"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{cat.description}</p>
                <p className="mt-2 text-sm font-medium text-primary-600">
                  Desde {cat.priceFrom} &euro;/día
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
