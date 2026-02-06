import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Listo para tu próxima aventura?
        </h2>
        <p className="mt-4 text-lg text-primary-100">
          Reserva ahora y consigue las mejores tarifas del mercado. Sin cargos
          ocultos, sin sorpresas.
        </p>
        <Link
          href="/buscar"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-sm transition hover:bg-primary-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 focus:outline-none"
        >
          Buscar coches ahora
        </Link>
      </div>
    </section>
  );
}
