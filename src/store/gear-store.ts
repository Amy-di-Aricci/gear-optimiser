import { TWowItem } from '../types/items';
import gearStoreJson from './gear-store.json';

export const GEAR_STORE: Array<TWowItem> = gearStoreJson as Array<TWowItem>;

// export const GEAR_STORE: Array<TWowItem> = [
//   {
//     name: 'Grim Codex',
//     itemId: 178811,
//     imgId: 'inv_misc_book_01',
//     slot: EItemSlot.TRINKET,
//     mainStats: [EMainStat.AGI, EMainStat.STR],
//     secondaryStats: [],
//     specialEffect:
//       'Use: Conjure a Spectral Scythe, dealing 1033 Shadow damage to your target and 143 Shadow damage in a 15 yd cone to enemies behind your target. (1 Min, 30 Sec Cooldown)',
//     lootSource: EDungeon.TOP,
//     roles: [ERole.DPS_MELEE, ERole.DPS_RANGED, ERole.TANK],
//   },
//   {
//     name: 'Faded Championship Ring',
//     itemId: 228840,
//     imgId: 'inv_111_ring_bilgewater',
//     slot: EItemSlot.FINGER,
//     secondaryStats: [ESecondaryStat.CRIT, ESecondaryStat.HASTE],
//     specialEffect: null,
//     lootSource: ALL_RAID_BOSSES[ERaidBoss.CAULDRON],
//   },
//   {
//     name: 'Sanitized Scraphood',
//     itemId: 228859,
//     imgId: 'inv_helm_mail_raidshamangoblin_d_01',
//     slot: EItemSlot.HEAD,
//     armorType: EArmorType.MAIL,
//     secondaryStats: [ESecondaryStat.CRIT, ESecondaryStat.HASTE],
//     specialEffect: null,
//     lootSource: ALL_RAID_BOSSES[ERaidBoss.STIX],
//   },
//   {
//     name: 'Poleaxe of Somber Fate',
//     itemId: 221111,
//     imgId: 'inv_polearm_2h_earthendungeon_c_01',
//     slot: EItemSlot.TWOHAND,
//     weaponType: EWeaponType.POLEARM,
//     mainStats: [EMainStat.STR],
//     secondaryStats: [ESecondaryStat.MASTERY, ESecondaryStat.HASTE],
//     specialEffect: null,
//     lootSource: EDungeon.DFC,
//   },
// ];
