import { Champion, Spell } from "@/types/champion";
import { Item } from "@/types/items";
import { ChampionDetail } from "@/types/champion";

export const fetchLatestVersion = async (): Promise<string> => {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/api/versions.json`
    );
    const versions: string[] = await response.json();
    return versions[0];
  } catch (error) {
    console.error("버전 불러오기 실패!", error);
    throw new Error("버전 정보확인 실패!");
  }
};

export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const versionRes = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versions = await versionRes.json();
    const version = versions[0];

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );

    if (!res.ok) {
      throw new Error("챔피언 리스트를 불러오는 중 실패했습니다.");
    }

    const data = await res.json();
    return Object.values(data.data);
  } catch (error) {
    console.error("챔피언 목록 불러오기 실패!:", error);
    return [];
  }
};

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  try {
    console.log("API call time:", new Date().toISOString());

    const version = await fetchLatestVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(` 챔피언 ID를 찾지 못했습니다: ${id}`);
    }

    const json = await response.json();
    const champion = json.data[id];

    return {
      id: champion.id,
      name: champion.name,
      title: champion.title,
      lore: champion.lore,
      stats: {
        attack: champion.info.attack,
        defense: champion.info.defense,
        magic: champion.info.magic,
        difficulty: champion.info.difficulty,
      },
      spells: champion.spells.map((spell: Spell) => ({
        id: spell.id,
        name: spell.name,
        description: spell.description,
        icon: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.id}.png`,
      })),
    };
  } catch (error) {
    console.error(" Error fetching champion details:", error);
    throw new Error("챔피언 데이터를 가져오는 중 오류가 발생했습니다.");
  }
};

export const fetchItemList = async (): Promise<Item[]> => {
  try {
    const version = await fetchLatestVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!response.ok) {
      throw new Error("아이템 데이터를 가져오는 데 실패했습니다.");
    }

    const data = await response.json();

    return Object.entries(data.data as Record<string, any>).map(
      ([id, itemData]) => {
        if (!itemData.image || !itemData.image.full) {
          throw new Error(`아이템 데이터에 image가 없습니다. ID: ${id}`);
        }

        return {
          id,
          name: itemData.name,
          description: itemData.description,
          gold: {
            base: itemData.gold.base,
            total: itemData.gold.total,
            sell: itemData.gold.sell,
          },
          from: itemData.from || [],
          into: itemData.into || [],
          image: {
            full: itemData.image.full,
          },
          imageUrl: `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemData.image.full}`,
        };
      }
    );
  } catch (error) {
    console.error(" 아이템 목록 불러오기 실패:", error);
    throw new Error("아이템 목록을 불러오는 중 오류가 발생했습니다.");
  }
};
