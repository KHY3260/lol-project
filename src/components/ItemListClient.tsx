"use client";

import Image from "next/image";
import { Item } from "@/types/items";

interface ItemListClientProps {
  items: Item[];
}

const cleanDescription = (description: string): string => {
  const cleaned = description.replace(/<[^>]*>/g, "");
  return cleaned.length > 80 ? cleaned.slice(0, 80) + "..." : cleaned;
};

export default function ItemListClient({ items }: ItemListClientProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
          style={{ minHeight: "300px" }}
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={80}
            height={80}
            className="rounded-md"
          />

          <h2 className="mt-3 text-lg font-bold text-red-400">{item.name}</h2>

          <p className="mt-2 text-gray-300 text-sm text-center leading-relaxed">
            {cleanDescription(item.description)}
          </p>

          <p className="mt-auto font-semibold text-green-400">
            가격: {item.gold.total}골드
          </p>
        </div>
      ))}
    </div>
  );
}
