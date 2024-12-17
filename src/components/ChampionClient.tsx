import { useQuery } from "@tanstack/react-query";
import { fetchChampionList } from "@/utils/serverApi";
import { Champion } from "@/types/champion";
import Link from "next/link";
import Image from "next/image";

export default function ChampionsClient({
  initialChampions,
}: {
  initialChampions: Champion[];
}) {
  const {
    data: champions,
    isLoading,
    isError,
  } = useQuery<Champion[]>({
    queryKey: ["champions"],
    queryFn: fetchChampionList,
    initialData: initialChampions,
    staleTime: 86400 * 1000,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는데 실패했습니다.</p>;

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {champions.map((champion) => (
        <li
          key={champion.id}
          className="bg-gray-800 p-4 rounded-lg text-center"
        >
          <Link href={`/champions/${champion.id}`}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              alt={`${champion.name} 이미지`}
              width={200}
              height={112}
              className="rounded-lg"
              placeholder="blur"
              blurDataURL="/placeholder.png"
            />
            <h2 className="text-red-500 font-bold mt-2">{champion.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
