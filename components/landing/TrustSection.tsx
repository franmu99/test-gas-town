import {
  CurrencyEuroIcon,
  XCircleIcon,
  PhoneIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { advantages } from "@/data/landing";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  CurrencyEuroIcon,
  XCircleIcon,
  PhoneIcon,
  EyeSlashIcon,
};

export default function TrustSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckBadgeIcon className="h-7 w-7 text-green-600" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Confianza garantizada
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Miles de viajeros confían en nosotros cada día
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => {
            const Icon = iconMap[adv.icon];
            return (
              <div
                key={adv.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
