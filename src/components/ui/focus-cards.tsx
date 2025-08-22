"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardData {
  id: number;
  title: string;
  src: string;
  description: string;
  year: number;
}

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardData;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-3xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-[350px] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "opacity-50"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 opacity-0"></div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto md:px-8 w-full py-8">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={cn("", index % 2 !== 0 ? "md:mt-20" : "")}
        >
          <Link href={`/projects/${card.key}`}>
            <Card
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <div className="text-lg font-medium ">{card.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {card.description}
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {card.year}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
