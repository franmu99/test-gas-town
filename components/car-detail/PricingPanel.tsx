"use client";

import { useState, useCallback, useRef } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { Car } from "@/lib/types";

interface Props {
  car: Car;
}

const extras = [
  { id: "insurance", name: "Seguro premium", pricePerDay: 12, description: "Reduce franquicia a 0€" },
  { id: "gps", name: "GPS navegador", pricePerDay: 5, description: "Navegación paso a paso" },
  { id: "baby-seat", name: "Silla de bebé", pricePerDay: 8, description: "Grupo 0+/1, homologada" },
  { id: "extra-driver", name: "Conductor adicional", pricePerDay: 7, description: "Un conductor extra" },
  { id: "full-protection", name: "Protección total", pricePerDay: 15, description: "Sin franquicia, sin preocupaciones" },
];

export default function PricingPanel({ car }: Props) {
  const [days, setDays] = useState(3);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [priceFlash, setPriceFlash] = useState(false);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerFlash = useCallback(() => {
    setPriceFlash(true);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setPriceFlash(false), 600);
  }, []);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
    triggerFlash();
  };

  const handleDaysChange = (newDays: number) => {
    setDays(newDays);
    triggerFlash();
  };

  const subtotal = car.pricePerDay * days;
  const extrasTotal = selectedExtras.reduce((acc, id) => {
    const extra = extras.find((e) => e.id === id);
    return acc + (extra ? extra.pricePerDay * days : 0);
  }, 0);
  const taxes = Math.round((subtotal + extrasTotal) * 0.21 * 100) / 100;
  const total = subtotal + extrasTotal + taxes;

  return (
    <>
      {/* Desktop sticky panel */}
      <div className="hidden lg:block">
        <div className="sticky top-20 rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
          <div className="p-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900">
                {car.pricePerDay}€
              </span>
              <span className="text-sm text-slate-500">/día</span>
            </div>

            <div className="mt-4 rounded-lg bg-slate-50 p-3">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Recogida</span>
                <span>Devolución</span>
              </div>
              <div className="mt-1 flex justify-between text-sm font-medium text-slate-900">
                <span>Madrid Aeropuerto</span>
                <span>Madrid Aeropuerto</span>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="days-desktop"
                className="block text-sm font-medium text-slate-700"
              >
                Días de alquiler
              </label>
              <select
                id="days-desktop"
                value={days}
                onChange={(e) => handleDaysChange(Number(e.target.value))}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 30].map((d) => (
                  <option key={d} value={d}>
                    {d} {d === 1 ? "día" : "días"}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <p className="text-sm font-medium text-slate-700">
                Extras opcionales
              </p>
              <div className="mt-2 space-y-2">
                {extras.map((extra) => (
                  <label
                    key={extra.id}
                    className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-slate-200 p-3 transition-all duration-200 hover:bg-slate-50 has-[:checked]:border-accent-300 has-[:checked]:bg-accent-50"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={selectedExtras.includes(extra.id)}
                        onChange={() => toggleExtra(extra.id)}
                        className="h-4 w-4 rounded border-slate-300 text-accent-500 focus:ring-accent-500"
                      />
                      <div>
                        <span className="text-sm text-slate-700">
                          {extra.name}
                        </span>
                        <p className="text-xs text-slate-400">
                          {extra.description}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-slate-900">
                      +{extra.pricePerDay}€/día
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-2 border-t border-slate-200 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">
                  {car.pricePerDay}€ x {days} {days === 1 ? "día" : "días"}
                </span>
                <span className="text-slate-900">{subtotal.toFixed(2)}€</span>
              </div>
              {selectedExtras.map((id) => {
                const extra = extras.find((e) => e.id === id);
                if (!extra) return null;
                return (
                  <div key={id} className="flex justify-between text-sm">
                    <span className="text-slate-600">{extra.name}</span>
                    <span className="text-slate-900">
                      {(extra.pricePerDay * days).toFixed(2)}€
                    </span>
                  </div>
                );
              })}
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">
                  Tasas e impuestos (21%)
                </span>
                <span className="text-slate-900">{taxes.toFixed(2)}€</span>
              </div>
              <div
                className={`flex justify-between border-t border-slate-200 pt-3 text-lg font-bold rounded-lg px-1 -mx-1 transition-colors ${
                  priceFlash ? "animate-priceFlash" : ""
                }`}
              >
                <span className="text-slate-900">Total</span>
                <span className="text-slate-900">{total.toFixed(2)}€</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-accent-500 px-4 py-3.5 text-base font-extrabold text-white shadow-lg shadow-accent-500/25 transition-all duration-200 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            >
              Reservar ahora
            </button>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              <ShieldCheckIcon className="h-4 w-4 text-emerald-500" />
              <p className="text-center text-xs text-slate-500">
                Cancelación gratuita hasta 48h antes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
          <div>
            <div
              className={`flex items-baseline gap-1 rounded-md px-1 -mx-1 transition-colors ${
                priceFlash ? "animate-priceFlash" : ""
              }`}
            >
              <span className="text-xl font-extrabold text-slate-900">
                {total.toFixed(2)}€
              </span>
              <span className="text-xs text-slate-500">total</span>
            </div>
            <p className="text-xs text-slate-500">
              {days} {days === 1 ? "día" : "días"} &middot;{" "}
              {car.pricePerDay}€/día
            </p>
          </div>
          <button
            type="button"
            className="rounded-xl bg-accent-500 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-accent-500/25 transition-all duration-200 hover:bg-accent-600 hover:opacity-90 active:scale-[0.98]"
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </>
  );
}
