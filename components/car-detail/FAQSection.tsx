"use client";

import { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "¿Qué significa la franquicia?",
    answer:
      "La franquicia es la cantidad máxima que pagarías en caso de daño o robo del vehículo. Con el seguro básico incluido, la franquicia es de 950€. Puedes reducirla a 0€ contratando la protección total sin franquicia.",
  },
  {
    question: "¿Puedo devolver el coche en otra ciudad?",
    answer:
      "Sí, ofrecemos servicio de entrega en otra ciudad (one-way). El coste adicional depende de la distancia entre las oficinas de recogida y devolución. Consulta disponibilidad al reservar.",
  },
  {
    question: "¿Qué pasa si devuelvo el coche con retraso?",
    answer:
      "Hay un periodo de gracia de 29 minutos. Después, se cobra un día adicional completo. Te recomendamos comunicar cualquier retraso con antelación.",
  },
  {
    question: "¿Está incluido el seguro a terceros?",
    answer:
      "Sí, todos nuestros vehículos incluyen seguro a terceros y asistencia en carretera 24h. La cobertura a todo riesgo con franquicia también está incluida en el precio base.",
  },
  {
    question: "¿Necesito tarjeta de crédito?",
    answer:
      "Sí, el conductor principal debe presentar una tarjeta de crédito válida a su nombre para el depósito de garantía. No se aceptan tarjetas de débito ni prepago.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <QuestionMarkCircleIcon className="h-5 w-5 text-secondary-600" />
        <h2 className="text-lg font-semibold text-slate-900">
          Preguntas frecuentes
        </h2>
      </div>
      <div className="mt-4 divide-y divide-slate-100">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:bg-slate-50"
              >
                <span className="flex-1 text-sm font-medium text-slate-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isOpen ? "max-h-48 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-slate-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
