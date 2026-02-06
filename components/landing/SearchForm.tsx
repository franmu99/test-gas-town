"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { locations } from "@/data/locations";
import { Location } from "@/lib/types";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isBefore,
  startOfDay,
} from "date-fns";
import { es } from "date-fns/locale";

// ─── Time Options ────────────────────────────────────────────
const TIME_OPTIONS: string[] = [];
for (let h = 0; h < 24; h++) {
  for (let m = 0; m < 60; m += 30) {
    TIME_OPTIONS.push(
      `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
    );
  }
}

// ─── Vehicle type filter data ────────────────────────────────
const VEHICLE_TYPES = [
  { key: "economy", label: "Economy", icon: EconomyIcon },
  { key: "suv", label: "SUV", icon: SUVIcon },
  { key: "luxury", label: "Luxury", icon: LuxuryIcon },
  { key: "van", label: "Van", icon: VanIcon },
] as const;

// ─── SVG Icons ───────────────────────────────────────────────
function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

function EconomyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M26 18h-1.18A5.02 5.02 0 0020 14H12a5.02 5.02 0 00-4.82 4H6a1 1 0 00-1 1v2a1 1 0 001 1h1.05a2.5 2.5 0 004.9 0h8.1a2.5 2.5 0 004.9 0H26a1 1 0 001-1v-2a1 1 0 00-1-1zM9.5 23a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm13 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  );
}

function SUVIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M27 17h-1.09l-2.55-4.25A2 2 0 0021.64 12H10.36a2 2 0 00-1.72 1l-2.55 4.25H5a1 1 0 00-1 1v3a1 1 0 001 1h1.05a2.5 2.5 0 004.9 0h10.1a2.5 2.5 0 004.9 0H27a1 1 0 001-1v-3a1 1 0 00-1-1zM8.5 23a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm15 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  );
}

function LuxuryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M28 17h-1.24l-1.47-3.68A3 3 0 0022.5 11h-13a3 3 0 00-2.79 2.32L5.24 17H4a1 1 0 00-1 1v3a1 1 0 001 1h1.05a2.5 2.5 0 004.9 0h12.1a2.5 2.5 0 004.9 0H28a1 1 0 001-1v-3a1 1 0 00-1-1zM7.5 23a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm17 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  );
}

function VanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M27 15l-3-5a2 2 0 00-1.73-1H7a2 2 0 00-2 2v8a1 1 0 001 1h1.05a2.5 2.5 0 004.9 0h8.1a2.5 2.5 0 004.9 0H27a1 1 0 001-1v-3a1 1 0 00-1-1zM9.5 22a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm13 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM22 15h-4v-3h2.27l1.73 3z" />
    </svg>
  );
}

// ─── Location Autocomplete ───────────────────────────────────
function LocationAutocomplete({
  id,
  label,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
}) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? locations.filter(
        (loc) =>
          loc.name.toLowerCase().includes(query.toLowerCase()) ||
          loc.city.toLowerCase().includes(query.toLowerCase()) ||
          (loc.code && loc.code.toLowerCase().includes(query.toLowerCase()))
      )
    : locations;

  const select = useCallback(
    (loc: Location) => {
      const display = loc.code
        ? `${loc.city} - ${loc.name} (${loc.code})`
        : `${loc.city} - ${loc.name}`;
      setQuery(display);
      onChange(display);
      setOpen(false);
      setHighlighted(-1);
    },
    [onChange]
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter" && highlighted >= 0) {
      e.preventDefault();
      select(filtered[highlighted]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const borderColor = error
    ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-500/20"
    : "border-slate-200 focus-within:border-accent-500 focus-within:ring-accent-500/20";

  return (
    <div ref={containerRef} className="relative">
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
      >
        {label}
      </label>
      <div
        className={`flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5 transition-shadow focus-within:ring-2 ${borderColor}`}
      >
        <PinIcon className="h-5 w-5 shrink-0 text-slate-400" />
        <input
          ref={inputRef}
          id={id}
          type="text"
          autoComplete="off"
          value={query}
          placeholder="Ciudad o aeropuerto"
          className="w-full min-w-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          onChange={(e) => {
            setQuery(e.target.value);
            onChange("");
            setOpen(true);
            setHighlighted(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          aria-controls={`${id}-listbox`}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
      {open && filtered.length > 0 && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
        >
          {filtered.map((loc, i) => (
            <li
              key={loc.id}
              role="option"
              aria-selected={i === highlighted}
              className={`flex cursor-pointer items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                i === highlighted
                  ? "bg-accent-50 text-accent-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
              onMouseEnter={() => setHighlighted(i)}
              onMouseDown={(e) => {
                e.preventDefault();
                select(loc);
              }}
            >
              {loc.type === "airport" ? (
                <PlaneIcon className="h-4 w-4 shrink-0 text-accent-500" />
              ) : (
                <BuildingIcon className="h-4 w-4 shrink-0 text-slate-400" />
              )}
              <div className="min-w-0">
                <div className="truncate font-medium">
                  {loc.name}
                  {loc.code && (
                    <span className="ml-1.5 text-xs font-semibold text-accent-600">
                      {loc.code}
                    </span>
                  )}
                </div>
                <div className="truncate text-xs text-slate-400">
                  {loc.city}, {loc.country}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Calendar Date Picker ────────────────────────────────────
function DatePicker({
  id,
  label,
  value,
  onChange,
  minDate,
  error,
}: {
  id: string;
  label: string;
  value: Date | null;
  onChange: (d: Date) => void;
  minDate?: Date;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const today = startOfDay(new Date());
  const effectiveMin = minDate ? startOfDay(minDate) : today;

  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(viewMonth);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calStart, end: calEnd });

  const weekDays = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

  const borderColor = error
    ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-500/20"
    : "border-slate-200 focus-within:border-accent-500 focus-within:ring-accent-500/20";

  return (
    <div ref={containerRef} className="relative">
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
      >
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => {
          setOpen(!open);
          if (!open && value) setViewMonth(value);
        }}
        className={`flex w-full items-center gap-2 rounded-xl border bg-white px-3 py-2.5 text-left text-sm transition-shadow focus:ring-2 focus:outline-none ${borderColor} ${
          value ? "text-slate-900" : "text-slate-400"
        }`}
      >
        <CalendarIcon className="h-5 w-5 shrink-0 text-slate-400" />
        <span className="truncate">
          {value
            ? format(value, "EEE, d MMM yyyy", { locale: es })
            : "Seleccionar fecha"}
        </span>
      </button>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
      {open && (
        <div className="absolute left-0 z-50 mt-1 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
          {/* Month navigation */}
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setViewMonth(subMonths(viewMonth, 1))}
              className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <span className="text-sm font-semibold capitalize text-slate-700">
              {format(viewMonth, "MMMM yyyy", { locale: es })}
            </span>
            <button
              type="button"
              onClick={() => setViewMonth(addMonths(viewMonth, 1))}
              className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
          {/* Day headers */}
          <div className="mb-1 grid grid-cols-7 text-center text-xs font-medium text-slate-400">
            {weekDays.map((d) => (
              <div key={d} className="py-1">
                {d}
              </div>
            ))}
          </div>
          {/* Days grid */}
          <div className="grid grid-cols-7 text-center text-sm">
            {days.map((day) => {
              const isCurrentMonth = isSameMonth(day, viewMonth);
              const isSelected = value && isSameDay(day, value);
              const isDisabled = isBefore(day, effectiveMin);
              const isToday = isSameDay(day, today);

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  disabled={isDisabled || !isCurrentMonth}
                  onClick={() => {
                    onChange(day);
                    setOpen(false);
                  }}
                  className={`mx-auto my-0.5 flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                    !isCurrentMonth
                      ? "invisible"
                      : isSelected
                        ? "bg-accent-500 font-semibold text-white"
                        : isDisabled
                          ? "cursor-not-allowed text-slate-300"
                          : isToday
                            ? "font-semibold text-accent-600 hover:bg-accent-50"
                            : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Time Select ─────────────────────────────────────────────
function TimeSelect({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
      >
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition-shadow focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-500/20">
        <ClockIcon className="h-5 w-5 shrink-0 text-slate-400" />
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 appearance-none bg-transparent text-sm text-slate-900 focus:outline-none"
        >
          {TIME_OPTIONS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// ─── Main SearchForm ─────────────────────────────────────────
export default function SearchForm() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [sameReturn, setSameReturn] = useState(true);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnTime, setReturnTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState("30-65");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Auto-fix return date if it's before pickup date
  useEffect(() => {
    if (pickupDate && returnDate && isBefore(returnDate, pickupDate)) {
      setReturnDate(null);
    }
  }, [pickupDate, returnDate]);

  function toggleType(key: string) {
    setSelectedTypes((prev) =>
      prev.includes(key) ? prev.filter((t) => t !== key) : [...prev, key]
    );
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!pickupLocation) errs.pickupLocation = "Selecciona un lugar de recogida";
    if (!sameReturn && !returnLocation)
      errs.returnLocation = "Selecciona un lugar de devolución";
    if (!pickupDate) errs.pickupDate = "Selecciona fecha de recogida";
    if (!returnDate) errs.returnDate = "Selecciona fecha de devolución";
    if (
      pickupDate &&
      returnDate &&
      isBefore(returnDate, pickupDate)
    ) {
      errs.returnDate = "La devolución debe ser posterior a la recogida";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (!validate()) return;

    const params = new URLSearchParams();
    if (pickupLocation) params.set("pickup", pickupLocation);
    if (!sameReturn && returnLocation) params.set("return", returnLocation);
    if (pickupDate) params.set("from", format(pickupDate, "yyyy-MM-dd"));
    if (returnDate) params.set("to", format(returnDate, "yyyy-MM-dd"));
    params.set("pickupTime", pickupTime);
    params.set("returnTime", returnTime);
    params.set("age", driverAge);
    if (selectedTypes.length > 0) params.set("type", selectedTypes.join(","));

    window.location.href = `/buscar?${params.toString()}`;
  }

  // Re-validate on field changes after first submission
  useEffect(() => {
    if (submitted) validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pickupLocation,
    returnLocation,
    sameReturn,
    pickupDate,
    returnDate,
    submitted,
  ]);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm transition-shadow duration-300 focus-within:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] sm:p-6"
    >
      {/* ─── Top row: Locations ─── */}
      <div className="grid gap-4 md:grid-cols-2">
        <LocationAutocomplete
          id="pickup-location"
          label="Lugar de recogida"
          value={pickupLocation}
          onChange={setPickupLocation}
          error={errors.pickupLocation}
        />

        {sameReturn ? (
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => setSameReturn(false)}
              className="text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
            >
              + Devolver en otro lugar
            </button>
          </div>
        ) : (
          <div className="animate-slideDown">
            <LocationAutocomplete
              id="return-location"
              label="Lugar de devolución"
              value={returnLocation}
              onChange={setReturnLocation}
              error={errors.returnLocation}
            />
            <button
              type="button"
              onClick={() => {
                setSameReturn(true);
                setReturnLocation("");
              }}
              className="mt-1 text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Devolver en el mismo lugar
            </button>
          </div>
        )}
      </div>

      {/* ─── Middle row: Dates + Times ─── */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <DatePicker
          id="pickup-date"
          label="Fecha recogida"
          value={pickupDate}
          onChange={setPickupDate}
          error={errors.pickupDate}
        />
        <TimeSelect
          id="pickup-time"
          label="Hora recogida"
          value={pickupTime}
          onChange={setPickupTime}
        />
        <DatePicker
          id="return-date"
          label="Fecha devolución"
          value={returnDate}
          onChange={setReturnDate}
          minDate={pickupDate || undefined}
          error={errors.returnDate}
        />
        <TimeSelect
          id="return-time"
          label="Hora devolución"
          value={returnTime}
          onChange={setReturnTime}
        />
      </div>

      {/* ─── Bottom row: Driver age + Vehicle types + Search ─── */}
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end">
        {/* Driver age */}
        <div className="shrink-0">
          <label
            htmlFor="driver-age"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Edad del conductor
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition-shadow focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-500/20">
            <UserIcon className="h-5 w-5 shrink-0 text-slate-400" />
            <select
              id="driver-age"
              value={driverAge}
              onChange={(e) => setDriverAge(e.target.value)}
              className="w-full min-w-0 appearance-none bg-transparent text-sm text-slate-900 focus:outline-none"
            >
              <option value="18-24">18 - 24</option>
              <option value="25-29">25 - 29</option>
              <option value="30-65">30 - 65</option>
              <option value="66+">66+</option>
            </select>
          </div>
        </div>

        {/* Vehicle type quick filters */}
        <div className="flex flex-1 flex-wrap items-end gap-2">
          {VEHICLE_TYPES.map(({ key, label, icon: Icon }) => {
            const active = selectedTypes.includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => toggleType(key)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium transition-all ${
                  active
                    ? "border-accent-500 bg-accent-50 text-accent-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </div>

        {/* Search button */}
        <button
          type="submit"
          className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 py-3 text-sm font-extrabold text-white shadow-lg shadow-accent-500/30 transition-all hover:bg-accent-600 hover:shadow-accent-600/30 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98] md:px-10"
        >
          <SearchIcon className="h-5 w-5" />
          Buscar
        </button>
      </div>
    </form>
  );
}
