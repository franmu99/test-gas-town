"use client";

import { useState, useEffect, useCallback } from "react";
import { Car } from "@/lib/types";
import CarCard from "@/components/search/CarCard";
import FilterPanel, { Filters } from "@/components/search/FilterPanel";
import SortSelect from "@/components/search/SortSelect";
import SearchBar from "@/components/search/SearchBar";

const DEFAULT_FILTERS: Filters = {
  types: [],
  priceMin: 0,
  priceMax: 200,
  transmission: "",
  passengers: 0,
  ac: false,
  gps: false,
};

export default function BuscarPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [sort, setSort] = useState("");
  const [location, setLocation] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const fetchCars = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();

    if (filters.types.length > 0) {
      params.set("type", filters.types.join(","));
    }
    if (filters.priceMin > 0) {
      params.set("price_min", String(filters.priceMin));
    }
    if (filters.priceMax < 200) {
      params.set("price_max", String(filters.priceMax));
    }
    if (sort) {
      params.set("sort", sort);
    }

    const url = `/api/cars${params.toString() ? `?${params}` : ""}`;

    try {
      const res = await fetch(url);
      const json = await res.json();
      let results: Car[] = json.data;

      // Client-side filters for fields the API doesn't support
      if (filters.transmission) {
        results = results.filter(
          (c) => c.specs.transmission === filters.transmission
        );
      }
      if (filters.passengers > 0) {
        results = results.filter(
          (c) => c.specs.passengers >= filters.passengers
        );
      }
      if (filters.ac) {
        results = results.filter((c) => c.specs.ac);
      }
      if (filters.gps) {
        results = results.filter((c) => c.specs.gps);
      }
      if (location.trim()) {
        const q = location.trim().toLowerCase();
        results = results.filter((c) =>
          c.locationId.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q)
        );
      }

      setCars(results);
      setTotal(results.length);
    } catch {
      setCars([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [filters, sort, location]);

  useEffect(() => {
    const timer = setTimeout(fetchCars, 300);
    return () => clearTimeout(timer);
  }, [fetchCars]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xl:max-w-[80rem]">
      {/* Search bar */}
      <div className="mb-6">
        <SearchBar
          location={location}
          onLocationChange={setLocation}
          onToggleFilters={() => setMobileFiltersOpen(true)}
          showFilterButton
        />
      </div>

      <div className="flex gap-8">
        {/* Desktop filter panel */}
        <div className="hidden lg:block">
          <FilterPanel filters={filters} onChange={setFilters} />
        </div>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            onClose={() => setMobileFiltersOpen(false)}
            isMobile
          />
        )}

        {/* Results area */}
        <div className="flex-1 min-w-0">
          {/* Results header */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-slate-600" aria-live="polite" aria-atomic="true">
              {loading ? (
                "Buscando..."
              ) : (
                <>
                  <span className="font-semibold text-slate-900">{total}</span>{" "}
                  {total === 1 ? "coche encontrado" : "coches encontrados"}
                </>
              )}
            </p>
            <SortSelect value={sort} onChange={setSort} />
          </div>

          {/* Loading state */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-pulse"
                >
                  <div className="aspect-[16/10] bg-slate-200" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                    <div className="flex gap-2">
                      <div className="h-3 bg-slate-200 rounded w-12" />
                      <div className="h-3 bg-slate-200 rounded w-12" />
                      <div className="h-3 bg-slate-200 rounded w-12" />
                    </div>
                    <div className="flex justify-between items-end pt-2">
                      <div className="h-6 bg-slate-200 rounded w-16" />
                      <div className="h-9 bg-slate-200 rounded w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && cars.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                No se encontraron coches
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                Prueba a ajustar los filtros o la busqueda para ver mas resultados.
              </p>
              <button
                onClick={() => {
                  setFilters(DEFAULT_FILTERS);
                  setLocation("");
                  setSort("");
                }}
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Limpiar todos los filtros
              </button>
            </div>
          )}

          {/* Results grid */}
          {!loading && cars.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
