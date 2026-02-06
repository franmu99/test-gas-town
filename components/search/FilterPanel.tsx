"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";

const CAR_TYPES = [
  { value: "economy", label: "Economico" },
  { value: "compact", label: "Compacto" },
  { value: "suv", label: "SUV" },
  { value: "luxury", label: "Lujo" },
  { value: "van", label: "Furgoneta" },
] as const;

const TRANSMISSIONS = [
  { value: "automatic", label: "Automatico" },
  { value: "manual", label: "Manual" },
] as const;

const PASSENGER_OPTIONS = [2, 4, 5, 7, 9] as const;

export interface Filters {
  types: string[];
  priceMin: number;
  priceMax: number;
  transmission: string;
  passengers: number;
  ac: boolean;
  gps: boolean;
}

interface FilterPanelProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function FilterPanel({
  filters,
  onChange,
  onClose,
  isMobile,
}: FilterPanelProps) {
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleType = (type: string) => {
    const types = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    updateFilter("types", types);
  };

  const clearAll = () => {
    onChange({
      types: [],
      priceMin: 0,
      priceMax: 200,
      transmission: "",
      passengers: 0,
      ac: false,
      gps: false,
    });
  };

  const content = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Filtros</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={clearAll}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            Limpiar todo
          </button>
          {isMobile && onClose && (
            <button onClick={onClose} className="p-1 text-slate-500 hover:text-slate-700">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Car type */}
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">Tipo de coche</h3>
        <div className="space-y-1.5">
          {CAR_TYPES.map((t) => (
            <label key={t.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.types.includes(t.value)}
                onChange={() => toggleType(t.value)}
                className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-slate-600">{t.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">
          Precio por dia: {filters.priceMin}&euro; - {filters.priceMax}&euro;
        </h3>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={200}
            value={filters.priceMin}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val <= filters.priceMax) updateFilter("priceMin", val);
            }}
            className="w-full accent-primary-600"
          />
          <input
            type="range"
            min={0}
            max={200}
            value={filters.priceMax}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= filters.priceMin) updateFilter("priceMax", val);
            }}
            className="w-full accent-primary-600"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>0&euro;</span>
            <span>200&euro;</span>
          </div>
        </div>
      </div>

      {/* Transmission */}
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">Transmision</h3>
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="transmission"
              checked={filters.transmission === ""}
              onChange={() => updateFilter("transmission", "")}
              className="border-slate-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-slate-600">Todas</span>
          </label>
          {TRANSMISSIONS.map((t) => (
            <label key={t.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="transmission"
                checked={filters.transmission === t.value}
                onChange={() => updateFilter("transmission", t.value)}
                className="border-slate-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-slate-600">{t.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Passengers */}
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">Pasajeros minimo</h3>
        <select
          value={filters.passengers}
          onChange={(e) => updateFilter("passengers", Number(e.target.value))}
          className="w-full rounded-lg border border-slate-300 text-sm py-2 px-3 text-slate-700 focus:border-primary-500 focus:ring-primary-500"
        >
          <option value={0}>Cualquiera</option>
          {PASSENGER_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n}+ pasajeros
            </option>
          ))}
        </select>
      </div>

      {/* Extras */}
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">Extras</h3>
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.ac}
              onChange={(e) => updateFilter("ac", e.target.checked)}
              className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-slate-600">Aire acondicionado</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.gps}
              onChange={(e) => updateFilter("gps", e.target.checked)}
              className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-slate-600">GPS</span>
          </label>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
        <div
          className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white p-5 overflow-y-auto shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
    );
  }

  return <aside className="w-64 shrink-0">{content}</aside>;
}
