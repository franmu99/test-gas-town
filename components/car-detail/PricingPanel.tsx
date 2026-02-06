"use client";

import { useState } from "react";
import { Car } from "@/lib/types";

interface Props {
  car: Car;
}

const extras = [
  { id: "insurance", name: "Seguro premium", pricePerDay: 12 },
  { id: "gps", name: "GPS navegador", pricePerDay: 5 },
  { id: "baby-seat", name: "Silla de bebé", pricePerDay: 8 },
];

export default function PricingPanel({ car }: Props) {
  const [days, setDays] = useState(3);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const subtotal = car.pricePerDay * days;
  const extrasTotal = selectedExtras.reduce((acc, id) => {
    const extra = extras.find((e) => e.id === id);
    return acc + (extra ? extra.pricePerDay * days : 0);
  }, 0);
  const taxes = Math.round((subtotal + extrasTotal) * 0.21 * 100) / 100;
  const total = subtotal + extrasTotal + taxes;

  return (
    <div className="sticky top-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-slate-900">
          {car.pricePerDay}€
        </span>
        <span className="text-sm text-slate-500">/día</span>
      </div>

      {/* Days selector */}
      <div className="mt-5">
        <label
          htmlFor="days"
          className="block text-sm font-medium text-slate-700"
        >
          Días de alquiler
        </label>
        <select
          id="days"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
        >
          {[1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 30].map((d) => (
            <option key={d} value={d}>
              {d} {d === 1 ? "día" : "días"}
            </option>
          ))}
        </select>
      </div>

      {/* Extras */}
      <div className="mt-5">
        <p className="text-sm font-medium text-slate-700">Extras opcionales</p>
        <div className="mt-2 space-y-2">
          {extras.map((extra) => (
            <label
              key={extra.id}
              className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-3 transition-colors hover:bg-slate-50 has-[:checked]:border-primary-300 has-[:checked]:bg-primary-50"
            >
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={selectedExtras.includes(extra.id)}
                  onChange={() => toggleExtra(extra.id)}
                  className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-slate-700">{extra.name}</span>
              </div>
              <span className="text-sm font-medium text-slate-900">
                +{extra.pricePerDay}€/día
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price breakdown */}
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
          <span className="text-slate-600">Tasas e impuestos (21%)</span>
          <span className="text-slate-900">{taxes.toFixed(2)}€</span>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-semibold">
          <span className="text-slate-900">Total</span>
          <span className="text-slate-900">{total.toFixed(2)}€</span>
        </div>
      </div>

      {/* Book button */}
      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Reservar ahora
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        No se realizará ningún cargo hasta la confirmación
      </p>
    </div>
  );
}
