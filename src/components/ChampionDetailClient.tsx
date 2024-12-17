import { ChampionDetail } from "@/types/champion";
import Image from "next/image";

interface Props {
  data: ChampionDetail;
}

const cleanDescription = (description: string): string => {
  return description.replace(/<[^>]*>/g, "");
};

export default function ChampionDetailComponent({ data }: Props) {
  console.log(data);
  return (
    <div className="bg-black text-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-500">{data.name}</h1>
        <h2 className="text-xl text-gray-400">{data.title}</h2>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`}
          alt={`${data.name} splash art`}
          width={600}
          height={300}
          className="rounded-lg"
          priority
        />
      </div>

      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold text-red-500 mb-4">스탯</h3>
        <ul className="inline-block text-lg leading-loose">
          <li>공격력: {data.stats.attack}</li>
          <li>방어력: {data.stats.defense}</li>
          <li>마법력: {data.stats.magic}</li>
          <li>난이도: {data.stats.difficulty}</li>
        </ul>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold text-red-500 mb-6">스킬</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.spells.map((spell) => (
            <div key={spell.id} className="flex flex-col items-center">
              <Image
                src={spell.icon}
                alt={spell.name}
                width={64}
                height={64}
                className="rounded-md"
              />

              <h4 className="mt-2 text-lg font-semibold text-red-400">
                {spell.name}
              </h4>

              <p className="mt-1 text-gray-300 text-sm text-center leading-relaxed">
                {cleanDescription(spell.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
