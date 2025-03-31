export enum EArmorType {
    CLOTH = "CLOTH",
    LEATHER = "LEATHER",
    MAIL = "MAIL",
    PLATE = "PLATE"
}

export enum EWeaponType{
    DAGGER = "DAGGER",
    FIST = "FIST",
    AXE1H = "AXE1H",
    MACE1H = "MACE1H",
    SWORD1H = "SWORD1H",
    POLEARM = "POLEARM",
    STAFF = "STAFF",
    AXE2H = "AXE2H",
    MACE2H = "MACE2H",
    SWORD2H = "SWORD2H",
    WARGLAIVE = "WARGLAIVE",
    BOW = "BOW",
    CROSSBOW = "CROSSBOW",
    GUN = "GUN",
    WAND = "WAND"
}

export enum EOffhandType{
    OFFHAND = "OFFHAND",
    SHIELD = "SHIELD"
}

export enum EMiscType{
    NECK = "NECK",
    FINGER = "FINGER",
    TRINKET = "TRINKET",
    BACK = "BACK",
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
    BREW = "BREW",
    PSF = "PSF"
}

export enum ERaid{
    NP = "NP",
    LOU = "LOU"
}

export type TRaidBoss = {
    bossName: string;
    raid: ERaid;
}

export type TLootSource = EDungeon | TRaidBoss;

export type TWowItem = {
    name: string;
    itemId: number,
    slot: EItemSlot;
    mainStats: Array<EMainStat>;
    secondaryStats: Array<ESecondaryStat>;
    specialEffect: string | null;
    lootSource: TLootSource;
}

export type TWowItemWeapon = TWowItem & {
    slot: EItemSlot.TWOHAND | EItemSlot.MAINHAND | EItemSlot.OFFHAND;
    itemType: EWeaponType
}

export type TWowItemArmor = TWowItem & {
    itemType: EArmorType;
}

export type TWowItemOffhand = TWowItem & {
    slot: EItemSlot.OFFHAND;
    itemType: EOffhandType;
}

export type TWowItemMisc = TWowItem &{
    slot: EItemSlot.NECK | EItemSlot.FINGER | EItemSlot.FINGER | EItemSlot.BACK;
    itemType: EMiscType;
}