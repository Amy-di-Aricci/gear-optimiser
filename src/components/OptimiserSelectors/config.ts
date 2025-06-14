import { ECharacterClass, ECharacterSpecName } from '../../types/spec';

export const DEFAULT_CHARACTER_SPECS: Record<ECharacterClass, ECharacterSpecName> = {
  [ECharacterClass.SHAMAN]: ECharacterSpecName.RESTO_S,
  [ECharacterClass.WARRIOR]: ECharacterSpecName.PROT_W,
  [ECharacterClass.PALADIN]: ECharacterSpecName.PROT_P,
  [ECharacterClass.HUNTER]: ECharacterSpecName.BM,
  [ECharacterClass.ROGUE]: ECharacterSpecName.ASSA,
  [ECharacterClass.PRIEST]: ECharacterSpecName.HOLY_PRIEST,
  [ECharacterClass.DEATH_KNIGHT]: ECharacterSpecName.UNHOLY,
  [ECharacterClass.MAGE]: ECharacterSpecName.FROST_M,
  [ECharacterClass.WARLOCK]: ECharacterSpecName.DESTRO,
  [ECharacterClass.MONK]: ECharacterSpecName.MIST,
  [ECharacterClass.DRUID]: ECharacterSpecName.RESTO_D,
  [ECharacterClass.DEMON_HUNTER]: ECharacterSpecName.VENG,
  [ECharacterClass.EVOKER]: ECharacterSpecName.AUG,
};
