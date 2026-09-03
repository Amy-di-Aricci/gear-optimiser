import { DUNGEON_IMAGE_LOOKUP, RAID_IMAGE_LOOKUP } from '../../globals/lootSources';
import { EDungeon, TLootSource, TRaidBoss } from '../../types/lootSources';

export const GetLootSourceImage = (lootSource: TLootSource | null) => {
  if (lootSource === null) return '';
  if ((lootSource as TRaidBoss).raid != undefined)
    return `https://ik.imagekit.io/gearoptimizer/images/instance-img/${RAID_IMAGE_LOOKUP[(lootSource as TRaidBoss).raid]}.webp`;
  else return `https://ik.imagekit.io/gearoptimizer/images/instance-img/${DUNGEON_IMAGE_LOOKUP[lootSource as EDungeon]}.webp`;
};
