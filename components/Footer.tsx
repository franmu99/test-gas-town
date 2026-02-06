import Link from "next/link";

const footerLinks = {
  empresa: [
    { name: "Sobre nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
    { name: "Blog", href: "/blog" },
  ],
  servicios: [
    { name: "Alquiler de coches", href: "/buscar" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "Ubicaciones", href: "/ubicaciones" },
  ],
  legal: [
    { name: "Términos y condiciones", href: "/terminos" },
    { name: "Política de privacidad", href: "/privacidad" },
    { name: "Cookies", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-white">RentaCar</span>
            <p className="mt-3 text-sm text-slate-400">
              Tu plataforma de alquiler de coches. Encuentra el vehículo
              perfecto al mejor precio.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-white">Empresa</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-white">Servicios</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} RentaCar. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
