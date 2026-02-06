import {
  UserGroupIcon,
  BriefcaseIcon,
  CogIcon,
  SunIcon,
  MapPinIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { CarSpecs as CarSpecsType } from "@/lib/types";

interface Props {
  specs: CarSpecsType;
}

export default function CarSpecs({ specs }: Props) {
  const items = [
    { icon: UserGroupIcon, label: "Pasajeros", value: specs.passengers.toString() },
    { icon: BriefcaseIcon, label: "Maletas", value: specs.luggage.toString() },
    { icon: HomeIcon, label: "Puertas", value: specs.doors.toString() },
    { icon: CogIcon, label: "Transmisión", value: specs.transmission === "automatic" ? "Automático" : "Manual" },
    { icon: SunIcon, label: "Aire acondicionado", value: specs.ac ? "Sí" : "No" },
    { icon: MapPinIcon, label: "GPS", value: specs.gps ? "Incluido" : "No incluido" },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Especificaciones
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-sm font-medium text-slate-900">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
