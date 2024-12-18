import { Champion } from "@/types/champion";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;
export default async function ChampionsPage() {
  const champions: Champion[] = await fetchChampionList();

  return (
    <section className="bg-black text-white min-h-screen py-10">
      <h1 className="text-4xl font-extrabold text-red-500 text-center mb-10">
        챔피언 목록
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {champions.map((champion) => (
          <li
            key={champion.id}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <Link href={`/champions/${champion.id}`}>
              <div className="relative w-full h-48">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                  alt={champion.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-xl font-bold text-red-400 mb-1">
                  {champion.name}
                </p>
                <p className="text-gray-400">{champion.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
