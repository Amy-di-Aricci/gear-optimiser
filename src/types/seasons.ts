export enum EExpansion {
  TWW = 'TWW',
  MN = 'MN',
}

export enum ESeason {
  TWWS3 = 'TWWS3',
  MNS1 = 'MNS1',
  MNS2 = 'MNS2',
}

export type TSeason = {
  expansion: EExpansion;
  seasonTierName: String;
  seasonShortName: String;
};

export type TSeasonDisplayData = {
  season: ESeason;

  expansion: EExpansion;
  expansionName: String;
  expansionImage: String;

  seasonShortName: String;
  seasonTierName: String;
  seasonImage: String;
};
