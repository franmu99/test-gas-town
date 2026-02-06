"use client";

import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CAR_TYPES = [
  { value: "economy", label: "Económico" },
  { value: "compact", label: "Compacto" },
  { value: "suv", label: "SUV" },
  { value: "luxury", label: "Lujo" },
  { value: "van", label: "Furgoneta" },
] as const;

const TRANSMISSIONS = [
  { value: "automatic", label: "Automático" },
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
  const panelRef = useRef<HTMLDivElement>(null);

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

  // Mobile: Escape key and focus trap
  useEffect(() => {
    if (!isMobile || !onClose) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile, onClose]);

  const content = (
    <div className="space-y-6" role="search" aria-label="Filtros de búsqueda">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Filtros</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={clearAll}
            className="text-sm text-primary-600 transition-colors hover:text-primary-700"
          >
            Limpiar todo
          </button>
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="p-1 text-slate-500 transition-colors hover:text-slate-700"
              aria-label="Cerrar filtros"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Car type */}
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 mb-2">Tipo de coche</legend>
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
      </fieldset>

      {/* Price range */}
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">
          Precio por día: {filters.priceMin}&euro; - {filters.priceMax}&euro;
        </h3>
        <div className="space-y-2">
          <label className="sr-only" htmlFor="price-min">Precio mínimo</label>
          <input
            id="price-min"
            type="range"
            min={0}
            max={200}
            value={filters.priceMin}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val <= filters.priceMax) updateFilter("priceMin", val);
            }}
            className="w-full accent-primary-600"
            aria-label={`Precio mínimo: ${filters.priceMin}€`}
          />
          <label className="sr-only" htmlFor="price-max">Precio máximo</label>
          <input
            id="price-max"
            type="range"
            min={0}
            max={200}
            value={filters.priceMax}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= filters.priceMin) updateFilter("priceMax", val);
            }}
            className="w-full accent-primary-600"
            aria-label={`Precio máximo: ${filters.priceMax}€`}
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>0&euro;</span>
            <span>200&euro;</span>
          </div>
        </div>
      </div>

      {/* Transmission */}
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 mb-2">Transmisión</legend>
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
      </fieldset>

      {/* Passengers */}
      <div>
        <label htmlFor="passengers-select" className="text-sm font-medium text-slate-700 mb-2 block">
          Pasajeros mínimo
        </label>
        <select
          id="passengers-select"
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
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 mb-2">Extras</legend>
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
      </fieldset>
    </div>
  );

  if (isMobile) {
    return (
      <div
        className="fixed inset-0 z-50 animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-label="Filtros de búsqueda"
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={panelRef}
          className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white p-5 overflow-y-auto shadow-2xl animate-slideInRight"
        >
          {content}
        </div>
      </div>
    );
  }

  return <aside className="w-64 shrink-0" aria-label="Filtros">{content}</aside>;
}
