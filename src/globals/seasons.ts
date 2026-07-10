import { EDungeon, ERaid } from '../types/lootSources';
import {
  EExpansion,
  ESeason,
  TExpansionDisplayData,
  TSeason,
  TSeasonDisplayData,
} from '../types/seasons';
import images from './images';

export const SEASON_INFO_LOOKUP: Record<ESeason, TSeason> = {
  [ESeason.TWWS3]: {
    expansion: EExpansion.TWW,
    seasonShortName: 'Season 3',
    seasonTierName: 'Tier 34 - Manaforge Omega',
  },
  [ESeason.MNS1]: {
    seasonShortName: 'Season 1',
    expansion: EExpansion.MN,
    seasonTierName: "Tier 35 - Dreamrift, Voidspire, March on Quel'Danas",
  },
  [ESeason.MNS2]: {
    expansion: EExpansion.MN,
    seasonShortName: 'Season 2',
    seasonTierName: 'Tier 36 - The Venomous Abyss',
  },
};

export const EXPANSION_NAME_LOOKUP: Record<EExpansion, String> = {
  [EExpansion.TWW]: 'The War Within',
  [EExpansion.MN]: 'Midnight',
};

export const EXPANSION_IMAGE_LOOKUP: Record<EExpansion, String> = {
  [EExpansion.TWW]: images['war_within_key_art'],
  [EExpansion.MN]: images['midnight_key_art'],
};

export const EXPANSION_SLIM_IMAGE_LOOKUP: Record<EExpansion, String> = {
  [EExpansion.TWW]: images['war_within_key_art_slim'],
  [EExpansion.MN]: images['midnight_key_art_slim'],
};

export const SEASON_DUNGEONS_LOOKUP: Record<ESeason, EDungeon[]> = {
  [ESeason.TWWS3]: [
    EDungeon.ARA,
    EDungeon.DAWN,
    EDungeon.FLOOD,
    EDungeon.PSF,
    EDungeon.HOA,
    EDungeon.STREETS,
    EDungeon.GAMBIT,
  ],
  [ESeason.MNS1]: [
    EDungeon.AA,
    EDungeon.MC,
    EDungeon.MT,
    EDungeon.NPX,
    EDungeon.WS,
    EDungeon.POS,
    EDungeon.SEAT,
    EDungeon.SR,
  ],
  [ESeason.MNS2]: [
    EDungeon.AOF,
    EDungeon.MR,
    EDungeon.DON,
    EDungeon.TBV,
    EDungeon.VA,
    EDungeon.KR,
    EDungeon.RLP,
    EDungeon.TOS,
  ],
};

export const SEASON_RAIDS_LOOKUP: Record<ESeason, ERaid[]> = {
  [ESeason.TWWS3]: [ERaid.MFO],
  [ESeason.MNS1]: [ERaid.DR, ERaid.VS, ERaid.MQD, ERaid.SF],
  [ESeason.MNS2]: [ERaid.TVA, ERaid.TG],
};

export const SEASON_IMAGES_LOOKUP: Record<ESeason, String> = {
  [ESeason.TWWS3]: images['manaforge_omega'],
  [ESeason.MNS1]: images['march_queldanas'],
  [ESeason.MNS2]: images['venomous_abyss'],
};

export const getSeasonDisplayData = (season: ESeason): TSeasonDisplayData => {
  const info = SEASON_INFO_LOOKUP[season];

  return {
    season,

    expansion: info.expansion,
    expansionName: EXPANSION_NAME_LOOKUP[info.expansion],

    seasonShortName: info.seasonShortName,
    seasonTierName: info.seasonTierName,
    seasonImage: SEASON_IMAGES_LOOKUP[season],
  };
};

export const getExpansionDisplayData = (expansion: EExpansion): TExpansionDisplayData => {
  return {
    expansion: expansion,
    expansionName: EXPANSION_NAME_LOOKUP[expansion],
    expansionImage: EXPANSION_IMAGE_LOOKUP[expansion],
    expansionSlimImage: EXPANSION_SLIM_IMAGE_LOOKUP[expansion],
  };
};

export const getSeasonsByExpansion = (expansion: EExpansion): ESeason[] => {
  return Object.values(ESeason).filter(
    (season) => SEASON_INFO_LOOKUP[season].expansion === expansion,
  );
};
