"use client";

import { MapPinIcon, CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Encuentra el coche perfecto
            <br className="hidden sm:block" />
            <span className="text-primary-200"> al mejor precio</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100 sm:text-xl">
            Compara ofertas de cientos de proveedores y ahorra en tu próximo
            alquiler de coche.
          </p>
        </div>

        {/* Search form */}
        <div className="mx-auto mt-10 max-w-4xl">
          <form className="rounded-2xl bg-white p-4 shadow-2xl sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Location */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="location"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Lugar de recogida
                </label>
                <div className="relative">
                  <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="location"
                    type="text"
                    placeholder="Ciudad o aeropuerto"
                    className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pick-up date */}
              <div>
                <label
                  htmlFor="pickup-date"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Fecha recogida
                </label>
                <div className="relative">
                  <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="pickup-date"
                    type="date"
                    className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Return date */}
              <div>
                <label
                  htmlFor="return-date"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Fecha devolución
                </label>
                <div className="relative">
                  <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="return-date"
                    type="date"
                    className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pick-up time */}
              <div>
                <label
                  htmlFor="pickup-time"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Hora recogida
                </label>
                <div className="relative">
                  <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="pickup-time"
                    type="time"
                    defaultValue="10:00"
                    className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full cursor-pointer rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none sm:mt-5"
            >
              Buscar coches
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
