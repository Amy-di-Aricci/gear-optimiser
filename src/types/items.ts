export enum EArmorType {
    CLOTH = "CLOTH",
    LEATHER = "LEATHER",
    MAIL = "MAIL",
    PLATE = "PLATE"
}

export enum EItemSlot {
    HEAD = "HEAD",
    SHOULDER = "SHOULDER",
    BACK = "BACK",
    CHEST = "CHEST",
    WRIST = "WRIST",
    HANDS = "HANDS",
    WAIST = "WAIST",
    LEGS = "LEGS",
    FEET = "FEET",
    NECK = "NECK",
    FINGER = "FINGER",
    TRINKET = "TRINKET",
    MAINHAND = "MAINHAND",
    OFFHAND = "OFFHAND",
    TWOHAND = "TWOHAND"
}

export enum EMainStat{
    INT = "INT",
    STR = "STR",
    AGI = "AGI"
}

export enum ESecondaryStat{
    CRIT = "CRIT",
    HASTE = "HASTE",
    VERS = "VERS",
    MASTERY = "MASTERY"
}

export enum EDungeon{
    DFC ="DFC",
    ML = "ML",
    WORK = "WORK",
    FLOOD = "FLOOD",
    ROOK = "ROOK",
    TOP = "TOP",
    MEAD = "MEAD",
    PSF = "PSF"
}

export enum ERaid{
    LOU = "LOU"
}

export type TRaidBoss = {
    bossName: string;
    raid: ERaid;
}

export type TLootSource = EDungeon | TRaidBoss;

export type TWowItem = {
    name: string;
    slot: EItemSlot;
    mainStats: Array<EMainStat>;
    secondaryStats: Array<ESecondaryStat>;
    specialEffect: string | null;
    lootSource: TLootSource;
}

export type TWowItemWeapon = TWowItem & {
    slot: EItemSlot.TWOHAND | EItemSlot.MAINHAND;
}