"use client";

import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  location: string;
  onLocationChange: (value: string) => void;
  onToggleFilters?: () => void;
  showFilterButton?: boolean;
}

export default function SearchBar({
  location,
  onLocationChange,
  onToggleFilters,
  showFilterButton,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl shadow-sm border border-slate-200 p-2">
      {showFilterButton && (
        <button
          onClick={onToggleFilters}
          className="p-2 text-slate-500 hover:text-primary-600 lg:hidden"
          aria-label="Abrir filtros"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
        </button>
      )}
      <div className="flex items-center flex-1 gap-2 px-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          placeholder="Buscar por ubicacion..."
          className="w-full text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />
      </div>
    </div>
  );
}
