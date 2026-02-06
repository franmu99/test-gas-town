import {
  UserGroupIcon,
  BriefcaseIcon,
  CogIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { CarSpecs as CarSpecsType } from "@/lib/types";

interface Props {
  specs: CarSpecsType;
}

function DoorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 015.25 4.5h6a2.25 2.25 0 012.25 2.25v13.5h-10.5V6.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 12.75h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function SnowflakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18m-18 0l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
    </svg>
  );
}

function FuelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-6 .5-6 4v10a2 2 0 002 2h8a2 2 0 002-2V7c0-3.5-4.8-4-6-4zM8 14h8M15 7l2.5 2.5a1.5 1.5 0 010 2.12L15 14" />
    </svg>
  );
}

function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 00-.879-2.121l-2.121-2.121A3 3 0 0016.25 9h-1.5V6.375c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v9.75" />
    </svg>
  );
}

const fuelLabels: Record<string, string> = {
  gasoline: "Gasolina",
  diesel: "Diésel",
  hybrid: "Híbrido",
  electric: "Eléctrico",
};

export default function CarSpecs({ specs }: Props) {
  const items = [
    { icon: UserGroupIcon, label: "Pasajeros", value: specs.passengers.toString() },
    { icon: BriefcaseIcon, label: "Maletas", value: specs.luggage.toString() },
    { icon: DoorIcon, label: "Puertas", value: specs.doors.toString() },
    { icon: CogIcon, label: "Transmisión", value: specs.transmission === "automatic" ? "Automático" : "Manual" },
    { icon: SnowflakeIcon, label: "Aire acondicionado", value: specs.ac ? "Sí" : "No" },
    { icon: MapPinIcon, label: "GPS", value: specs.gps ? "Incluido" : "No incluido" },
    { icon: FuelIcon, label: "Combustible", value: fuelLabels[specs.fuel] ?? specs.fuel },
    { icon: CarIcon, label: "Categoría", value: specs.transmission === "automatic" ? "Auto" : "Estándar" },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Especificaciones
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-sm font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
