import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { steps } from "@/data/landing";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  KeyIcon,
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-16 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Sencillo y rápido
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Alquilar un coche nunca fue tan fácil
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-slate-50 p-8 text-center transition-all duration-200 hover:bg-primary-50 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  {Icon && <Icon className="h-8 w-8" />}
                </div>
                <span className="mt-5 inline-block rounded-full bg-primary-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Paso {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
