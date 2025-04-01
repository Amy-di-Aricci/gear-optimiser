import { EMainStat, EOffhandType, EWeaponType } from './items';
import { ERole } from './roles';

export enum ECharacterClass {
  SHAMAN = 'SHAMAN',
  WARRIOR = 'WARRIOR',
  PALADIN = 'PALADIN',
  HUNTER = 'HUNTER',
  ROGUE = 'ROGUE',
  PRIEST = 'PRIEST',
  DEATH_KNIGHT = 'DEATH_KNIGHT',
  MAGE = 'MAGE',
  WARLOCK = 'WARLOCK',
  MONK = 'MONK',
  DRUID = 'DRUID',
  DEMON_HUNTER = 'DEMON_HUNTER',
  EVOKER = 'EVOKER',
}

export enum ECharacterSpecName {
  PROT_W = 'PROT_W',
  FURY = 'FURY',
  ARMS = 'ARMS',
  PROT_P = 'PROT_P',
  HOLY_PALADIN = 'HOLY_PALADIN',
  RETRI = 'RETRI',
  BM = 'BM',
  MM = 'MM',
  SURVI = 'SURVI',
  ASSA = 'ASSA',
  OUTLAW = 'OUTLAW',
  SUB = 'SUB',
  HOLY_PRIEST = 'HOLY_PRIEST',
  DISCI = 'DISCI',
  SHADOW = 'SHADOW',
  UNHOLY = 'UNHOLY',
  BLOOD = 'BLOOD',
  FROST_DK = 'FROST_DK',
  RESTO_S = 'RESTO_S',
  ELE = 'ELE',
  ENCH = 'ENCH',
  FROST_M = 'FROST_M',
  FIRE = 'FIRE',
  ARCANE = 'ARCANE',
  DESTRO = 'DESTRO',
  DEMO = 'DEMO',
  AFFLI = 'AFFLI',
  MIST = 'MIST',
  WW = 'WW',
  BREW = 'BREW',
  RESTO_D = 'RESTO_D',
  FERAL = 'FERAL',
  BALANCE = 'BALANCE',
  GUARDIAN = 'GUARDIAN',
  VENG = 'VENG',
  HAVOC = 'HAVOC',
  AUG = 'AUG',
  DEVA = 'DEVA',
  PRESERV = 'PRESERV',
}

export type TCharacterSpec = {
  characterSpecName: ECharacterSpecName;
  characterClass: ECharacterClass;
  role: ERole;
  mainStat: EMainStat;
  weaponTypes: Array<EWeaponType>;
  offhandTypes?: Array<EOffhandType>;
};
