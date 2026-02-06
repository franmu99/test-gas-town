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
    </div>
  );
}
