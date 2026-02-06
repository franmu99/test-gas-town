import {
  CurrencyEuroIcon,
  XCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { advantages } from "@/data/landing";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  CurrencyEuroIcon,
  XCircleIcon,
  PhoneIcon,
};

export default function TrustSection() {
  return (
    <section className="bg-primary-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Miles de viajeros confían en nosotros cada día
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {advantages.map((adv) => {
            const Icon = iconMap[adv.icon];
            return (
              <div
                key={adv.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
