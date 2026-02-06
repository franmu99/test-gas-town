export const steps = [
  {
    icon: "MagnifyingGlassIcon",
    title: "Busca tu coche",
    description:
      "Introduce tu destino, fechas y hora para ver todas las opciones disponibles.",
  },
  {
    icon: "AdjustmentsHorizontalIcon",
    title: "Compara y elige",
    description:
      "Filtra por tipo de coche, precio y características para encontrar el ideal.",
  },
  {
    icon: "KeyIcon",
    title: "Recoge y disfruta",
    description:
      "Reserva en segundos y recoge tu coche en el lugar y hora elegidos.",
  },
];

export const categories = [
  {
    name: "Economy",
    description: "Compactos y eficientes",
    priceFrom: 18,
    image: "/categories/economy.jpg",
  },
  {
    name: "SUV",
    description: "Espacio y versatilidad",
    priceFrom: 35,
    image: "/categories/suv.jpg",
  },
  {
    name: "Luxury",
    description: "Confort y elegancia",
    priceFrom: 65,
    image: "/categories/luxury.jpg",
  },
  {
    name: "Van",
    description: "Ideal para grupos",
    priceFrom: 45,
    image: "/categories/van.jpg",
  },
  {
    name: "Convertible",
    description: "Libertad al aire libre",
    priceFrom: 55,
    image: "/categories/convertible.jpg",
  },
  {
    name: "Pickup",
    description: "Potencia y capacidad",
    priceFrom: 40,
    image: "/categories/pickup.jpg",
  },
];

export const destinations = [
  { city: "Madrid", country: "España", priceFrom: 15, image: "/destinations/madrid.jpg" },
  { city: "Barcelona", country: "España", priceFrom: 18, image: "/destinations/barcelona.jpg" },
  { city: "Málaga", country: "España", priceFrom: 12, image: "/destinations/malaga.jpg" },
  { city: "Palma de Mallorca", country: "España", priceFrom: 20, image: "/destinations/palma.jpg" },
  { city: "Sevilla", country: "España", priceFrom: 14, image: "/destinations/sevilla.jpg" },
  { city: "Valencia", country: "España", priceFrom: 16, image: "/destinations/valencia.jpg" },
];

export const advantages = [
  {
    icon: "CurrencyEuroIcon",
    title: "Mejor precio garantizado",
    description: "Comparamos cientos de proveedores para ofrecerte la tarifa más baja.",
  },
  {
    icon: "XCircleIcon",
    title: "Cancelación gratuita",
    description: "Cancela sin coste hasta 48 horas antes de la recogida.",
  },
  {
    icon: "PhoneIcon",
    title: "Soporte 24/7",
    description: "Nuestro equipo está disponible en cualquier momento para ayudarte.",
  },
  {
    icon: "EyeSlashIcon",
    title: "Sin costes ocultos",
    description: "Precios transparentes desde el primer momento. Lo que ves es lo que pagas.",
  },
];

export const providers = [
  "Hertz",
  "Avis",
  "Europcar",
  "Sixt",
  "Enterprise",
  "Budget",
  "Alamo",
  "National",
];

export const stats = [
  { value: "1,000+", label: "Marcas de coches" },
  { value: "50,000+", label: "Ubicaciones" },
  { value: "254K+", label: "Opiniones positivas" },
  { value: "Premiado", label: "Mejor web 2025" },
];
