"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { providers, stats } from "@/data/landing";
import SearchForm from "./SearchForm";

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

        {/* Professional search form */}
        <div className="mx-auto mt-10 max-w-5xl">
          <SearchForm />
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
