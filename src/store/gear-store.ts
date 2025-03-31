import { EDungeon, EItemSlot, EMainStat, EMiscType, ESecondaryStat, TWowItem, ERaid, ERaidBoss, EArmorType, EWeaponType } from "../types/items";

export const GEAR_STORE: Array<TWowItem> = [
    {
        name: "Grim Codex",
        itemId: 178811,
        slot: EItemSlot.TRINKET,
        mainStats: [EMainStat.AGI, EMainStat.STR],
        secondaryStats: [],
        specialEffect: "Placeholder",
        lootSource: EDungeon.TOP,
        miscType: EMiscType.TRINKET
    },
    {
        name: "Faded Championship Ring",
        itemId: 228840,
        slot: EItemSlot.FINGER,
        mainStats: [],
        secondaryStats: [ESecondaryStat.CRIT, ESecondaryStat.HASTE],
        specialEffect: null,
        lootSource: {
            bossName: ERaidBoss.CAULDRON,
            raid: ERaid.LOU
        },
        miscType: EMiscType.FINGER
    },
    {
        name: "Sanitized Scraphood",
        itemId: 228859,
        slot: EItemSlot.HEAD,
        armorType: EArmorType.MAIL,
        mainStats: [EMainStat.AGI, EMainStat.INT],
        secondaryStats: [ESecondaryStat.CRIT, ESecondaryStat.HASTE],
        specialEffect: null,
        lootSource: {
            bossName: ERaidBoss.STIX,
            raid: ERaid.LOU
        }
    },
    {
        name: "Poleaxe of Somber Fate",
        itemId: 221111,
        slot: EItemSlot.TWOHAND,
        weaponType: EWeaponType.POLEARM,
        mainStats: [EMainStat.STR],
        secondaryStats: [ESecondaryStat.MASTERY, ESecondaryStat.HASTE],
        specialEffect: null,
        lootSource: EDungeon.DFC
    }
]