"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Coches", href: "/buscar" },
  { name: "Ofertas", href: "/ofertas" },
  { name: "Cómo funciona", href: "/#como-funciona" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 10);
    if (currentY > lastScrollY.current && currentY > 80) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on Escape and trap focus
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
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

    // Prevent body scroll when menu open
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white shadow-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary-600">
            Renta<span className="text-slate-900">Car</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-primary-600"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/buscar"
            className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md active:scale-[0.98]"
          >
            Reservar
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden -m-2.5 rounded-md p-2.5 text-slate-700 transition-colors hover:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu panel */}
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className={`absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <span className="text-xl font-extrabold tracking-tight text-primary-600">
              Renta<span className="text-slate-900">Car</span>
            </span>
            <button
              type="button"
              className="-m-2 rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="px-5 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/buscar"
                className="block rounded-lg bg-primary-600 px-3 py-3 text-center text-base font-semibold text-white transition-all hover:bg-primary-700 active:scale-[0.98]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservar ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
