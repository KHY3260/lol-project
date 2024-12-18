export interface ChampionRotation {
  freeChampionIds: number[];
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
}

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
}
