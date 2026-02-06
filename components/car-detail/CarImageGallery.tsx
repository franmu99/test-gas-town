import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

export default function CarImageGallery({ image, name }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-8"
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>
    </div>
  );
}
