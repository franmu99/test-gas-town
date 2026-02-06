"use client";

import { useState } from "react";
import {
  ShieldCheckIcon,
  FireIcon,
  MapIcon,
  CurrencyEuroIcon,
  IdentificationIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const policies = [
  {
    icon: FireIcon,
    title: "Política de combustible",
    description:
      "El vehículo se entrega con el depósito lleno y debe devolverse de la misma forma (full-to-full). Si no se devuelve lleno, se cobrará el repostaje más un cargo de servicio de 30€.",
  },
  {
    icon: MapIcon,
    title: "Kilometraje",
    description:
      "Incluye 300 km/día. Los kilómetros adicionales se cobran a 0,15€/km. Opción de kilómetros ilimitados disponible como extra por 10€/día adicionales.",
  },
  {
    icon: CurrencyEuroIcon,
    title: "Depósito y franquicia",
    description:
      "Se requiere un depósito de garantía de 300€ a 1.200€ (según categoría) en tarjeta de crédito. La franquicia estándar es de 950€, reducible con seguro premium.",
  },
  {
    icon: IdentificationIcon,
    title: "Requisitos del conductor",
    description:
      "Edad mínima 21 años (25 para categorías luxury y SUV). Carnet de conducir con antigüedad mínima de 1 año. Conductores menores de 25 años pagan suplemento de joven conductor.",
  },
  {
    icon: DocumentTextIcon,
    title: "Documentación necesaria",
    description:
      "Carnet de conducir válido, documento de identidad o pasaporte, tarjeta de crédito a nombre del conductor principal. Para conductores extranjeros, permiso internacional de conducción si el carnet no es de la UE.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cancelación gratuita",
    description:
      "Cancela hasta 48 horas antes de la recogida sin coste alguno. Cancelaciones posteriores tendrán un cargo del 20% del total de la reserva.",
  },
];

export default function CarPolicies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Políticas de alquiler
      </h2>
      <div className="mt-4 divide-y divide-slate-100" role="list">
        {policies.map((policy, index) => {
          const isOpen = openIndex === index;
          const id = `policy-${index}`;
          return (
            <div key={policy.title} role="listitem">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center gap-4 py-4 text-left transition-colors hover:bg-slate-50 rounded-lg"
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
                id={`${id}-trigger`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <policy.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="flex-1 text-sm font-medium text-slate-900">
                  {policy.title}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`${id}-content`}
                role="region"
                aria-labelledby={`${id}-trigger`}
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  isOpen ? "max-h-48 pb-4" : "max-h-0"
                }`}
              >
                <p className="pl-14 text-sm leading-relaxed text-slate-500">
                  {policy.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
