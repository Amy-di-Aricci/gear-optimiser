import { ECharacterClass } from '../types/character';
import { EArmorType, EMainStat } from '../types/items';

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
