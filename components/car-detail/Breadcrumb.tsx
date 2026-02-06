import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface Props {
  carName: string;
}

export default function Breadcrumb({ carName }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500">
      <Link href="/" className="transition-colors hover:text-primary-600">
        Home
      </Link>
      <ChevronRightIcon className="h-4 w-4 shrink-0" />
      <Link href="/buscar" className="transition-colors hover:text-primary-600">
        Resultados
      </Link>
      <ChevronRightIcon className="h-4 w-4 shrink-0" />
      <span className="font-medium text-slate-900">{carName}</span>
    </nav>
  );
}
