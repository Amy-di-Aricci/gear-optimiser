export enum EDungeon {
  DFC = 'DFC',
  ML = 'ML',
  WORK = 'WORK',
  FLOOD = 'FLOOD',
  ROOK = 'ROOK',
  TOP = 'TOP',
  BREW = 'BREW',
  PSF = 'PSF',
  HOA = 'HOA',
  ARA = 'ARA',
  DAWN = 'DAWN',
  ECO = 'ECO',
  STREETS = 'STREETS',
  GAMBIT = 'GAMBIT',
}

export enum ERaid {
  NP = 'NP',
  LOU = 'LOU',
  MFO = 'MFO',
}

export enum ERaidBoss {
  ULGRAX = 'ULGRAX',
  BLOOD_HORROR = 'BLOOD_HORROR',
  SIKRAN = 'SIKRAN',
  RASHANAN = 'RASHANAN',
  BROODTWISTER = 'BROODTWISTER',
  KYVEZA = 'KYVEZA',
  SILKEN_COURT = 'SILKEN_COURT',
  ANSUREK = 'ANSUREK',
  VEXIE = 'VEXIE',
  CAULDRON = 'CAULDRON',
  RIK = 'RIK',
  STIX = 'STIX',
  SPROCKET = 'SPROCKET',
  BANDIT = 'BANDIT',
  MUG_ZEE = 'MUG_ZEE',
  GALLYWIX = 'GALLYWIX',
  PLEXUS = 'PLEXUS',
  LOOMITHAR = 'LOOMITHAR',
  NAAZINDHRI = 'NAAZINDHRI',
  ARAZ = 'ARAZ',
  SOUL_HUNTERS = 'SOUL_HUNTERS',
  FRACTILLUS = 'FRACTILLUS',
  NEXUS_KING = 'NEXUS_KING',
  DIMENSIUS = 'DIMENSIUS',
}

export type TRaidBoss = {
  bossName: ERaidBoss;
  raid: ERaid;
};

export type TLootSource = EDungeon | TRaidBoss;
