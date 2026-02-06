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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Alquilar un coche nunca fue tan fácil
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <span className="mt-4 inline-block rounded-full bg-primary-50 px-3 py-0.5 text-xs font-semibold text-primary-700">
                  Paso {index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
