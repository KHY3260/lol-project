export interface Champion {
  id: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ChampionStats {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface ChampionDetail {
  id: string;
  name: string;
  title: string;
  lore: string;
  stats: ChampionStats;
  spells: Spell[];
}
