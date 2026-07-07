import { EDungeon, ERaid } from '../types/lootSources';
import { EExpansion, ESeason, TSeason } from '../types/seasons';

export const SEASON_INFO_LOOKUP: Record<ESeason, TSeason> = {
  [ESeason.TWWS1]: {
    expansion: EExpansion.TWW,
    seasonName: 'Tier 34 (Manaforge Omega)',
  },
  [ESeason.MNS1]: {
    expansion: EExpansion.MN,
    seasonName: "Tier 35 (Dreamrift, Voidspire, March on Quel'Danas)",
  },
  [ESeason.MNS2]: {
    expansion: EExpansion.MN,
    seasonName: 'Tier 36 (The Venomous Abyss)',
  },
};

export const SEASON_DUNGEONS_LOOKUP: Record<ESeason, EDungeon[]> = {
  [ESeason.TWWS1]: [
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
  [ESeason.TWWS1]: [ERaid.MFO],
  [ESeason.MNS1]: [ERaid.DR, ERaid.VS, ERaid.MQD, ERaid.SF],
  [ESeason.MNS2]: [ERaid.TVA, ERaid.TG],
};
