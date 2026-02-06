import {
  ShieldCheckIcon,
  FireIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

const policies = [
  {
    icon: ShieldCheckIcon,
    title: "Cancelación gratuita",
    description:
      "Cancela hasta 48 horas antes de la recogida sin coste. Después, se aplicará un cargo del 20% del total.",
  },
  {
    icon: FireIcon,
    title: "Política de combustible",
    description:
      "Recoge el coche con el depósito lleno y devuélvelo igual. Si no, se cobrará el repostaje más un cargo de servicio.",
  },
  {
    icon: MapIcon,
    title: "Kilómetros incluidos",
    description:
      "Incluye 300 km/día. Los kilómetros adicionales se cobran a 0,15€/km. Opción de kilómetros ilimitados disponible.",
  },
];

export default function CarPolicies() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Políticas de alquiler
      </h2>
      <div className="mt-4 space-y-4">
        {policies.map((policy) => (
          <div key={policy.title} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <policy.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-900">
                {policy.title}
              </h3>
              <p className="mt-0.5 text-sm text-slate-500">
                {policy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
