import { difference } from 'lodash';
import {
  EMainStat,
  EOffhandType,
  ESecondaryStat,
  EWeaponType,
  isWowItemOffhand,
  isWowItemWeapon,
  TWowItem,
} from '../../types/items';
import { formatName } from '../../utils/formatters';
import { EDungeon, TLootSource, TRaidBoss } from '../../types/lootSources';
import {
  BOSS_NAMES_LOOKUP,
  DUNGEONS_NAMES_LOOKUP,
  RAID_NAMES_LOOKUP,
} from '../../globals/lootSources';

export const getWowheadItemData = (itemId: number) => `item=${itemId}`;

const SECONDARY_STATS_LOOKUP: Record<ESecondaryStat, string> = {
  [ESecondaryStat.CRIT]: 'Crit',
  [ESecondaryStat.HASTE]: 'Haste',
  [ESecondaryStat.VERS]: 'Vers',
  [ESecondaryStat.MASTERY]: 'Mastery',
};

const MAIN_STATS_LOOKUP: Record<EMainStat, string> = {
  [EMainStat.INT]: 'Intellect',
  [EMainStat.STR]: 'Strength',
  [EMainStat.AGI]: 'Agility',
};

export const getPrimaryStatsDisplay = (mainStats: Array<EMainStat>) => {
  const mainStatsDisplay = mainStats
    .sort()
    .map((stat) => MAIN_STATS_LOOKUP[stat])
    .join(', ');
  return mainStatsDisplay;
};

export const getSecondaryStatsDisplay = (secondaryStats: Array<ESecondaryStat>) => {
  const secondaryStatsDisplay = secondaryStats
    .sort()
    .map((stat) => SECONDARY_STATS_LOOKUP[stat])
    .join(', ');
  return secondaryStatsDisplay;
};

const WEAPON_TYPE_LOOKUP: Record<EWeaponType, string> = {
  [EWeaponType.DAGGER]: 'Dagger',
  [EWeaponType.FIST]: 'Fist',
  [EWeaponType.AXE1H]: '1H Axe',
  [EWeaponType.MACE1H]: '1H Mace',
  [EWeaponType.SWORD1H]: '1H Sword',
  [EWeaponType.POLEARM]: 'Polearm',
  [EWeaponType.STAFF]: 'Staff',
  [EWeaponType.AXE2H]: '2H Axe',
  [EWeaponType.MACE2H]: '2H Mace',
  [EWeaponType.SWORD2H]: '2H Sword',
  [EWeaponType.WARGLAIVE]: 'Warglaive',
  [EWeaponType.BOW]: 'Bow',
  [EWeaponType.CROSSBOW]: 'Crossbow',
  [EWeaponType.GUN]: 'Gun',
  [EWeaponType.WAND]: 'Wand',
};

const OFFHAND_TYPE_LOOKUP: Record<EOffhandType, string> = {
  [EOffhandType.OFFHAND]: 'Offhand',
  [EOffhandType.SHIELD]: 'Shield',
};

export const getSlotDisplay = (item: TWowItem) => {
  if (isWowItemWeapon(item)) {
    return WEAPON_TYPE_LOOKUP[item.weaponType];
  }
  if (isWowItemOffhand(item)) {
    return OFFHAND_TYPE_LOOKUP[item.offhandType];
  }
  return formatName(item.slot);
};

export const getSourceDisplayName = (lootSource: TLootSource) => {
  if ((lootSource as TRaidBoss).bossName !== undefined) {
    const raidName = RAID_NAMES_LOOKUP[(lootSource as TRaidBoss).raid];
    const bossName = BOSS_NAMES_LOOKUP[(lootSource as TRaidBoss).bossName];
    return `${bossName} - ${raidName}`;
  } else if ((Object.values(EDungeon) as string[]).includes(lootSource.toString())) {
    return DUNGEONS_NAMES_LOOKUP[lootSource as EDungeon];
  }
  return 'undefined';
};

export const hasSelectedSecondaryStats = (
  item: TWowItem,
  selectedStats: ESecondaryStat[],
): boolean => {
  if (selectedStats.length === 0 || selectedStats.length === Object.values(ESecondaryStat).length) {
    return true;
  }
  if (item.secondaryStats.length === 0) {
    return false;
  }
  if (selectedStats.length === 1 && item.secondaryStats.includes(selectedStats[0])) {
    return true;
  }
  if (
    selectedStats.length === 2 &&
    difference([...selectedStats], [...item.secondaryStats]).length === 0
  ) {
    return true;
  }
  return difference([...item.secondaryStats], [...selectedStats]).length === 0;
};
