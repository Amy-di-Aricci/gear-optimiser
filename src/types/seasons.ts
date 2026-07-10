export enum EExpansion {
  MN = 'MN',
  TWW = 'TWW',
}

export enum ESeason {
  MNS2 = 'MNS2',
  MNS1 = 'MNS1',
  TWWS3 = 'TWWS3',
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

  seasonShortName: String;
  seasonTierName: String;
  seasonImage: String;
};

export type TExpansionDisplayData = {
  expansion: EExpansion;
  expansionName: String;
  expansionImage: String;
  expansionSlimImage: String;
};
