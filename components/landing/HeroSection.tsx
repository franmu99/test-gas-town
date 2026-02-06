"use client";

import { MapPinIcon, CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { providers, stats } from "@/data/landing";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-500 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-600 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ahorra hasta un 70% en
            <br className="hidden sm:block" />
            <span className="text-primary-400"> alquiler de coches</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Precios claros, sin sorpresas. Confiado por millones de viajeros en
            todo el mundo.
          </p>

          {/* Rating badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-primary-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-white">
              Excelente servicio
            </span>
            <span className="text-sm text-slate-400">254K+ opiniones</span>
          </div>
        </div>

        {/* Search form */}
        <div className="mx-auto mt-10 max-w-4xl">
          <form className="rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-900/5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Location */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="location"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Lugar de recogida
                </label>
                <div className="relative">
                  <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="location"
                    type="text"
                    placeholder="Ciudad o aeropuerto"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pick-up date */}
              <div>
                <label
                  htmlFor="pickup-date"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Fecha recogida
                </label>
                <div className="relative">
                  <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="pickup-date"
                    type="date"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-3 text-sm text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Return date */}
              <div>
                <label
                  htmlFor="return-date"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Fecha devolución
                </label>
                <div className="relative">
                  <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="return-date"
                    type="date"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-3 text-sm text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pick-up time */}
              <div>
                <label
                  htmlFor="pickup-time"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Hora recogida
                </label>
                <div className="relative">
                  <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="pickup-time"
                    type="time"
                    defaultValue="10:00"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-3 text-sm text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full cursor-pointer rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-700 hover:shadow-primary-700/30 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none sm:mt-5"
            >
              Buscar coches
            </button>
          </form>
        </div>

        {/* Provider logos bar */}
        <div className="mx-auto mt-10 max-w-3xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Comparamos las mejores marcas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {providers.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-slate-400 transition hover:text-slate-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/5 px-4 py-4 text-center backdrop-blur-sm ring-1 ring-white/10"
              >
                <p className="text-2xl font-extrabold text-primary-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
