import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Car } from "@/lib/types";

interface Props {
  car: Car;
}

export default function CarDescription({ car }: Props) {
  const typeDescriptions: Record<Car["type"], string> = {
    economy:
      "Ideal para desplazamientos urbanos y viajes cortos. Bajo consumo de combustible y fácil de aparcar.",
    compact:
      "Perfecto equilibrio entre espacio y eficiencia. Cómodo para viajes largos con buen espacio para equipaje.",
    suv: "Amplio y versátil, ideal para familias y aventuras. Gran capacidad de carga y confort en todo tipo de carreteras.",
    luxury:
      "Experiencia de conducción premium con los mejores acabados. Tecnología de vanguardia y máximo confort.",
    van: "Máxima capacidad para grupos grandes. Ideal para familias numerosas, eventos o viajes en equipo.",
  };

  const features: string[] = [];
  if (car.specs.ac) features.push("Aire acondicionado incluido");
  if (car.specs.gps) features.push("Navegación GPS integrada");
  if (car.specs.transmission === "automatic")
    features.push("Transmisión automática");
  if (car.specs.passengers >= 7)
    features.push(`Capacidad para ${car.specs.passengers} pasajeros`);
  if (car.specs.luggage >= 4)
    features.push(`Amplio maletero (${car.specs.luggage} maletas)`);
  if (car.specs.fuel === "hybrid") features.push("Motor híbrido eficiente");
  if (car.specs.fuel === "electric")
    features.push("100% eléctrico, cero emisiones");

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Sobre este vehículo
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        El {car.name} {car.year} es un vehículo de categoría{" "}
        {car.type === "suv" ? "SUV" : car.type} de la marca {car.brand}.{" "}
        {typeDescriptions[car.type]}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Cuenta con capacidad para {car.specs.passengers} pasajeros y{" "}
        {car.specs.luggage} maletas, transmisión{" "}
        {car.specs.transmission === "automatic" ? "automática" : "manual"}
        {car.specs.ac ? ", aire acondicionado" : ""}
        {car.specs.gps ? " y GPS integrado" : ""}.
      </p>

      {features.length > 0 && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <h3 className="text-sm font-medium text-slate-900">
            Características destacadas
          </h3>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircleIcon className="h-4 w-4 shrink-0 text-emerald-500" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
