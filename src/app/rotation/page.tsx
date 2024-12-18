"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { getChampionRotation } from "@/utils/serverApi";
import { Champion } from "@/types/champion";

export default function RotationPage() {
  const {
    data: rotationChampions,
    isLoading,
    isError,
  } = useQuery<Champion[]>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl font-bold">로딩 중...</p>
      </div>
    );
  }

  if (isError || !rotationChampions) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl font-bold">
          데이터를 불러오는 중 오류가 발생했습니다.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-red-500">
        로테이션 챔피언
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rotationChampions.map((champion) => (
          <li
            key={champion.id}
            className="bg-gray-800 p-4 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <Link href={`/champions/${champion.id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                alt={`${champion.name} 이미지`}
                width={400}
                height={230}
                className="rounded-lg object-cover"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
              <h2 className="text-red-500 font-bold mt-3 text-xl">
                {champion.name}
              </h2>
              <p className="text-gray-400 text-sm">{champion.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
