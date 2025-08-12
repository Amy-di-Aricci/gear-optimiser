import { TLootSource } from './lootSources';
import { ERole } from './roles';

export enum EArmorType {
  CLOTH = 'CLOTH',
  LEATHER = 'LEATHER',
  MAIL = 'MAIL',
  PLATE = 'PLATE',
}

export enum EWeaponType {
  DAGGER = 'DAGGER',
  FIST = 'FIST',
  AXE1H = 'AXE1H',
  MACE1H = 'MACE1H',
  SWORD1H = 'SWORD1H',
  POLEARM = 'POLEARM',
  STAFF = 'STAFF',
  AXE2H = 'AXE2H',
  MACE2H = 'MACE2H',
  SWORD2H = 'SWORD2H',
  WARGLAIVE = 'WARGLAIVE',
  BOW = 'BOW',
  CROSSBOW = 'CROSSBOW',
  GUN = 'GUN',
  WAND = 'WAND',
}

export enum EOffhandType {
  OFFHAND = 'OFFHAND',
  SHIELD = 'SHIELD',
}

export enum EItemSlot {
  HEAD = 'HEAD',
  SHOULDER = 'SHOULDER',
  BACK = 'BACK',
  CHEST = 'CHEST',
  WRIST = 'WRIST',
  HANDS = 'HANDS',
  WAIST = 'WAIST',
  LEGS = 'LEGS',
  FEET = 'FEET',
  NECK = 'NECK',
  FINGER = 'FINGER',
  TRINKET = 'TRINKET',
  MAINHAND = 'MAINHAND',
  OFFHAND = 'OFFHAND',
  RANGED = 'RANGED',
}

export enum EMainStat {
  INT = 'INT',
  STR = 'STR',
  AGI = 'AGI',
}

export enum ESecondaryStat {
  CRIT = 'CRIT',
  HASTE = 'HASTE',
  VERS = 'VERS',
  MASTERY = 'MASTERY',
}

export type TWowItemBase = {
  name: string;
  itemId: number;
  imgId: string;
  slot: EItemSlot;
  secondaryStats: Array<ESecondaryStat>;
  specialEffect: string | null;
  lootSource: TLootSource;
};

export type TWowItemWeapon = TWowItemBase & {
  slot: EItemSlot.RANGED | EItemSlot.MAINHAND | EItemSlot.OFFHAND;
  weaponType: EWeaponType;
  mainStats: Array<EMainStat>;
};

export type TWowItemArmor = TWowItemBase & {
  slot:
    | EItemSlot.CHEST
    | EItemSlot.FEET
    | EItemSlot.HANDS
    | EItemSlot.HEAD
    | EItemSlot.LEGS
    | EItemSlot.WRIST
    | EItemSlot.WAIST
    | EItemSlot.SHOULDER;
  armorType: EArmorType;
};

export type TWowItemOffhand = TWowItemBase & {
  slot: EItemSlot.OFFHAND;
  offhandType: EOffhandType;
};

export type TWowItemMisc = TWowItemBase & {
  slot: EItemSlot.NECK | EItemSlot.FINGER | EItemSlot.BACK;
};

export type TWowItemTrinket = TWowItemBase & {
  slot: EItemSlot.TRINKET;
  roles: Array<ERole>;
  mainStats: Array<EMainStat>;
};

export type TWowItem =
  | TWowItemWeapon
  | TWowItemArmor
  | TWowItemMisc
  | TWowItemOffhand
  | TWowItemTrinket;

export const isWowItemWeapon = (wowItem: TWowItem): wowItem is TWowItemWeapon =>
  wowItem.slot === EItemSlot.RANGED || wowItem.slot === EItemSlot.MAINHAND;

export const isWowItemArmor = (wowItem: TWowItem): wowItem is TWowItemArmor =>
  wowItem.slot === EItemSlot.CHEST ||
  wowItem.slot === EItemSlot.FEET ||
  wowItem.slot === EItemSlot.HANDS ||
  wowItem.slot === EItemSlot.HEAD ||
  wowItem.slot === EItemSlot.LEGS ||
  wowItem.slot === EItemSlot.WRIST ||
  wowItem.slot === EItemSlot.WAIST ||
  wowItem.slot === EItemSlot.SHOULDER;

export const isWowItemOffhand = (wowItem: TWowItem): wowItem is TWowItemOffhand =>
  wowItem.slot === EItemSlot.OFFHAND;

export const isWowItemMisc = (wowItem: TWowItem): wowItem is TWowItemMisc =>
  wowItem.slot === EItemSlot.NECK ||
  wowItem.slot === EItemSlot.FINGER ||
  wowItem.slot === EItemSlot.BACK;

export const isWowItemTrinket = (wowItem: TWowItem): wowItem is TWowItemTrinket =>
  wowItem.slot === EItemSlot.TRINKET;
