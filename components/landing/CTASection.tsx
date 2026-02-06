import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 py-16 sm:py-24">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          ¿Listo para tu próxima aventura?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Reserva ahora y consigue las mejores tarifas del mercado. Sin cargos
          ocultos, sin sorpresas.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/buscar"
            className="rounded-lg bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-600 shadow-lg transition hover:bg-primary-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 focus:outline-none"
          >
            Buscar coches ahora
          </Link>
          <Link
            href="/ofertas"
            className="rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 focus:outline-none"
          >
            Ver ofertas
          </Link>
        </div>
      </div>
    </section>
  );
}
