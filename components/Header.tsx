"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Buscar coches", href: "/buscar" },
  { name: "Ofertas", href: "/ofertas" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary-600">
            Renta<span className="text-slate-900">Car</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/buscar"
            className="rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
          >
            Reservar
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden -m-2.5 p-2.5 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menú</span>
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/buscar"
              className="mt-2 block rounded-lg bg-primary-600 px-3 py-2.5 text-center text-base font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
