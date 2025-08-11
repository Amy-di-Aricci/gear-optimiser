import { ECharacterClass } from '../types/spec';
import {
  EArmorType,
  EMainStat,
  isWowItemArmor,
  isWowItemTrinket,
  isWowItemWeapon,
  TWowItem,
} from '../types/items';
import { ALL_SPECS } from '../globals/specs';

export const classToArmorType = (characterClass: ECharacterClass): EArmorType => {
  switch (characterClass) {
    case ECharacterClass.WARRIOR:
    case ECharacterClass.PALADIN:
    case ECharacterClass.DEATH_KNIGHT: {
      return EArmorType.PLATE;
    }
    case ECharacterClass.SHAMAN:
    case ECharacterClass.HUNTER:
    case ECharacterClass.EVOKER: {
      return EArmorType.MAIL;
    }
    case ECharacterClass.DRUID:
    case ECharacterClass.ROGUE:
    case ECharacterClass.DEMON_HUNTER:
    case ECharacterClass.MONK: {
      return EArmorType.LEATHER;
    }
    case ECharacterClass.PRIEST:
    case ECharacterClass.MAGE:
    case ECharacterClass.WARLOCK: {
      return EArmorType.CLOTH;
    }
  }
};

export const armorTypeToMainStats = (armorType: EArmorType): Array<EMainStat> => {
  switch (armorType) {
    case EArmorType.CLOTH: {
      return [EMainStat.INT];
    }
    case EArmorType.LEATHER: {
      return [EMainStat.INT, EMainStat.AGI];
    }
    case EArmorType.MAIL: {
      return [EMainStat.INT, EMainStat.AGI];
    }
    case EArmorType.PLATE: {
      return [EMainStat.INT, EMainStat.STR];
    }
  }
};

export const getAllClassSpecs = (selectedClass: ECharacterClass) =>
  Object.values(ALL_SPECS)
    .filter((spec) => spec.characterClass === selectedClass)
    .map((spec) => spec.characterSpecName);

export const getItemMainStats = (item: TWowItem): EMainStat[] => {
  if (isWowItemArmor(item)) {
    return armorTypeToMainStats(item.armorType);
  }
  if (isWowItemWeapon(item)) {
    return item.mainStats;
  }
  if (isWowItemTrinket(item)) {
    return item.mainStats;
  }
  return [];
};
