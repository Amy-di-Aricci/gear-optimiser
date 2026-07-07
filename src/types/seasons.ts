export enum EExpansion {
  TWW = 'TWW',
  MN = 'MN',
}

export enum ESeason {
  TWWS1 = 'TWWS3',
  MNS1 = 'MNS1',
  MNS2 = 'MNS2',
}

export type TSeason = {
  expansion: EExpansion;
  seasonName: String;
};
