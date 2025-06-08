import { ECharacterClass, ECharacterSpecName } from '../../types/spec';

export const DEFAULT_CHARACTER_SPECS: Record<ECharacterClass, ECharacterSpecName> = {
  [ECharacterClass.SHAMAN]: ECharacterSpecName.ELE,
  [ECharacterClass.WARRIOR]: ECharacterSpecName.PROT_W,
  [ECharacterClass.PALADIN]: ECharacterSpecName.PROT_P,
  [ECharacterClass.HUNTER]: ECharacterSpecName.MM,
  [ECharacterClass.ROGUE]: ECharacterSpecName.ASSA,
  [ECharacterClass.PRIEST]: ECharacterSpecName.DISCI,
  [ECharacterClass.DEATH_KNIGHT]: ECharacterSpecName.BLOOD,
  [ECharacterClass.MAGE]: ECharacterSpecName.ARCANE,
  [ECharacterClass.WARLOCK]: ECharacterSpecName.AFFLI,
  [ECharacterClass.MONK]: ECharacterSpecName.BREW,
  [ECharacterClass.DRUID]: ECharacterSpecName.GUARDIAN,
  [ECharacterClass.DEMON_HUNTER]: ECharacterSpecName.VENG,
  [ECharacterClass.EVOKER]: ECharacterSpecName.PRESERV,
};
