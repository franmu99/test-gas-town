"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

const angles = ["Frontal", "Lateral", "Trasera", "Interior"];

export default function CarImageGallery({ image, name }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-slate-100 to-slate-50">
        <Image
          src={image}
          alt={`${name} - vista ${angles[activeIndex]?.toLowerCase()}`}
          fill
          className="object-contain p-8"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
      <div className="flex gap-2 border-t border-slate-100 p-3">
        {angles.map((angle, i) => (
          <button
            key={angle}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Ver vista ${angle}`}
            aria-pressed={i === activeIndex}
            className={`relative flex-1 overflow-hidden rounded-lg bg-slate-50 transition-all duration-200 ${
              i === activeIndex
                ? "ring-2 ring-secondary-500 ring-offset-1"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={image}
                alt={`${name} - ${angle}`}
                fill
                className="object-contain p-2"
                sizes="150px"
                loading="lazy"
              />
            </div>
            <span className="block pb-1 text-center text-[10px] font-medium text-slate-500">
              {angle}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
