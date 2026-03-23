import { EDungeon, ERaid, ERaidBoss, TRaidBoss } from '../types/lootSources';

const images = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/images/*.webp', { eager: true, import: 'default' }) as Record<
      string,
      string
    >,
  ).map(([path, src]) => [
    path
      .split('/')
      .pop()!
      .replace(/\.[^.]+$/, ''),
    src,
  ]),
) as Record<string, string>;

export const ALL_RAID_BOSSES: Record<ERaidBoss, TRaidBoss> = {
  [ERaidBoss.VEXIE]: {
    bossName: ERaidBoss.VEXIE,
    raid: ERaid.LOU,
  },
  [ERaidBoss.CAULDRON]: {
    bossName: ERaidBoss.CAULDRON,
    raid: ERaid.LOU,
  },
  [ERaidBoss.RIK]: {
    bossName: ERaidBoss.RIK,
    raid: ERaid.LOU,
  },
  [ERaidBoss.STIX]: {
    bossName: ERaidBoss.STIX,
    raid: ERaid.LOU,
  },
  [ERaidBoss.SPROCKET]: {
    bossName: ERaidBoss.SPROCKET,
    raid: ERaid.LOU,
  },
  [ERaidBoss.BANDIT]: {
    bossName: ERaidBoss.BANDIT,
    raid: ERaid.LOU,
  },
  [ERaidBoss.MUG_ZEE]: {
    bossName: ERaidBoss.MUG_ZEE,
    raid: ERaid.LOU,
  },
  [ERaidBoss.GALLYWIX]: {
    bossName: ERaidBoss.GALLYWIX,
    raid: ERaid.LOU,
  },
  [ERaidBoss.PLEXUS]: {
    bossName: ERaidBoss.PLEXUS,
    raid: ERaid.MFO,
  },
  [ERaidBoss.LOOMITHAR]: {
    bossName: ERaidBoss.LOOMITHAR,
    raid: ERaid.MFO,
  },
  [ERaidBoss.NAAZINDHRI]: {
    bossName: ERaidBoss.NAAZINDHRI,
    raid: ERaid.MFO,
  },
  [ERaidBoss.ARAZ]: {
    bossName: ERaidBoss.ARAZ,
    raid: ERaid.MFO,
  },
  [ERaidBoss.SOUL_HUNTERS]: {
    bossName: ERaidBoss.SOUL_HUNTERS,
    raid: ERaid.MFO,
  },
  [ERaidBoss.FRACTILLUS]: {
    bossName: ERaidBoss.FRACTILLUS,
    raid: ERaid.MFO,
  },
  [ERaidBoss.NEXUS_KING]: {
    bossName: ERaidBoss.NEXUS_KING,
    raid: ERaid.MFO,
  },
  [ERaidBoss.DIMENSIUS]: {
    bossName: ERaidBoss.DIMENSIUS,
    raid: ERaid.MFO,
  },
  [ERaidBoss.ULGRAX]: {
    bossName: ERaidBoss.ULGRAX,
    raid: ERaid.NP,
  },
  [ERaidBoss.BLOOD_HORROR]: {
    bossName: ERaidBoss.BLOOD_HORROR,
    raid: ERaid.NP,
  },
  [ERaidBoss.SIKRAN]: {
    bossName: ERaidBoss.SIKRAN,
    raid: ERaid.NP,
  },
  [ERaidBoss.RASHANAN]: {
    bossName: ERaidBoss.RASHANAN,
    raid: ERaid.NP,
  },
  [ERaidBoss.BROODTWISTER]: {
    bossName: ERaidBoss.BROODTWISTER,
    raid: ERaid.NP,
  },
  [ERaidBoss.KYVEZA]: {
    bossName: ERaidBoss.KYVEZA,
    raid: ERaid.NP,
  },
  [ERaidBoss.SILKEN_COURT]: {
    bossName: ERaidBoss.SILKEN_COURT,
    raid: ERaid.NP,
  },
  [ERaidBoss.ANSUREK]: {
    bossName: ERaidBoss.ANSUREK,
    raid: ERaid.NP,
  },
  [ERaidBoss.CHIMAERUS]: {
    bossName: ERaidBoss.CHIMAERUS,
    raid: ERaid.DR,
  },
  [ERaidBoss.AVERZIAN]: {
    bossName: ERaidBoss.AVERZIAN,
    raid: ERaid.VS,
  },
  [ERaidBoss.VORASIUS]: {
    bossName: ERaidBoss.VORASIUS,
    raid: ERaid.VS,
  },
  [ERaidBoss.FALLEN_SALHADAAR]: {
    bossName: ERaidBoss.FALLEN_SALHADAAR,
    raid: ERaid.VS,
  },
  [ERaidBoss.VAELGOR]: {
    bossName: ERaidBoss.VAELGOR,
    raid: ERaid.VS,
  },
  [ERaidBoss.LIGHT_VANGUARD]: {
    bossName: ERaidBoss.LIGHT_VANGUARD,
    raid: ERaid.VS,
  },
  [ERaidBoss.CROWN_COSMOS]: {
    bossName: ERaidBoss.CROWN_COSMOS,
    raid: ERaid.VS,
  },
  [ERaidBoss.BELOREN]: {
    bossName: ERaidBoss.BELOREN,
    raid: ERaid.MQD,
  },
  [ERaidBoss.MIDNIGHT_FALLS]: {
    bossName: ERaidBoss.MIDNIGHT_FALLS,
    raid: ERaid.MQD,
  },
};

export const DUNGEONS_NAMES_LOOKUP: Record<EDungeon, string> = {
  [EDungeon.DFC]: 'Darkflame Cleft',
  [EDungeon.ML]: 'The MOTHERLODE!!',
  [EDungeon.WORK]: 'Operation: Mechagon - Workshop',
  [EDungeon.FLOOD]: 'Operation: Floodgate',
  [EDungeon.ROOK]: 'The Rookery',
  [EDungeon.TOP]: 'Theater of Pain',
  [EDungeon.BREW]: 'Cinderbrew Meadery',
  [EDungeon.PSF]: 'Priory of the Sacred Flame',
  [EDungeon.HOA]: 'Halls of Atonement',
  [EDungeon.ARA]: 'Ara-Kara, City of Echoes',
  [EDungeon.DAWN]: 'The Dawnbreaker',
  [EDungeon.ECO]: "Eco-Dome Al'dani",
  [EDungeon.STREETS]: 'Tazavesh - Streets of Wonder',
  [EDungeon.GAMBIT]: "Tazavesh - So'leah's Gambit",
  [EDungeon.MT]: "Magister's Terrace",
  [EDungeon.MC]: 'Maisara Caverns',
  [EDungeon.AA]: "Algeth'ar Academy",
  [EDungeon.NPX]: 'Nexus-Point Xenas',
  [EDungeon.POS]: 'Pit of Saron',
  [EDungeon.SEAT]: 'Seat of the Triumvirate',
  [EDungeon.SR]: 'Skyreach',
  [EDungeon.WS]: 'Windrunner Spire',
};

export const DUNGEON_IMAGE_LOOKUP: Record<EDungeon, string> = {
  [EDungeon.DFC]: '',
  [EDungeon.ML]: '',
  [EDungeon.WORK]: '',
  [EDungeon.FLOOD]: '',
  [EDungeon.ROOK]: '',
  [EDungeon.TOP]: '',
  [EDungeon.BREW]: '',
  [EDungeon.PSF]: '',
  [EDungeon.HOA]: '',
  [EDungeon.ARA]: '',
  [EDungeon.DAWN]: '',
  [EDungeon.ECO]: '',
  [EDungeon.STREETS]: '',
  [EDungeon.GAMBIT]: '',
  [EDungeon.MT]: images['magisters_terrace'],
  [EDungeon.MC]: images['maisara_caverns'],
  [EDungeon.AA]: images['algethar_academy'],
  [EDungeon.NPX]: images['nexus_point_xenas'],
  [EDungeon.POS]: images['pit_of_saron'],
  [EDungeon.SEAT]: images['seat_of_triumvirate'],
  [EDungeon.SR]: images['skyreach'],
  [EDungeon.WS]: images['windrunner_spire'],
};

export const BOSS_NAMES_LOOKUP: Record<ERaidBoss, string> = {
  [ERaidBoss.VEXIE]: 'Vexie and the Geargrinders',
  [ERaidBoss.CAULDRON]: 'Cauldron of Carnage',
  [ERaidBoss.RIK]: 'Rik Reverb',
  [ERaidBoss.STIX]: 'Stix Bunkjunker',
  [ERaidBoss.SPROCKET]: 'Sprocketmonger Lockenstock',
  [ERaidBoss.BANDIT]: 'The One-Armed Bandit',
  [ERaidBoss.MUG_ZEE]: "Mug'Zee, Heads of Security",
  [ERaidBoss.GALLYWIX]: 'Chrome King Gallywix',
  [ERaidBoss.PLEXUS]: 'Plexus Sentinel',
  [ERaidBoss.LOOMITHAR]: "Loom'ithar",
  [ERaidBoss.NAAZINDHRI]: 'Soulbinder Naazindhri',
  [ERaidBoss.ARAZ]: 'Forgeweaver Araz',
  [ERaidBoss.SOUL_HUNTERS]: 'The Soul Hunters',
  [ERaidBoss.FRACTILLUS]: 'Fractillus',
  [ERaidBoss.NEXUS_KING]: 'Nexus-King Salhadaar',
  [ERaidBoss.DIMENSIUS]: 'Dimensius, the All-Devouring',
  [ERaidBoss.ULGRAX]: 'Ulgrax the Devourer',
  [ERaidBoss.BLOOD_HORROR]: 'The Bloodbound Horror',
  [ERaidBoss.SIKRAN]: 'Sikran, Captain of the Sureki',
  [ERaidBoss.RASHANAN]: "Rasha'nan",
  [ERaidBoss.BROODTWISTER]: "Broodtwister Ovi'nax",
  [ERaidBoss.KYVEZA]: "Nexus-Princess Ky'veza",
  [ERaidBoss.SILKEN_COURT]: 'The Silken Court',
  [ERaidBoss.ANSUREK]: 'Queen Ansurek',
  [ERaidBoss.CHIMAERUS]: 'Chimaerus the Undreamt God',
  [ERaidBoss.AVERZIAN]: 'Imperator Averzian',
  [ERaidBoss.VORASIUS]: 'Vorasius',
  [ERaidBoss.FALLEN_SALHADAAR]: 'Fallen-King Salhadaar',
  [ERaidBoss.VAELGOR]: 'Vaelgor & Ezzorak',
  [ERaidBoss.LIGHT_VANGUARD]: 'Lightblinded Vanguard',
  [ERaidBoss.CROWN_COSMOS]: 'Crown of the Cosmos',
  [ERaidBoss.BELOREN]: "Belo'ren, Child of Al'ar",
  [ERaidBoss.MIDNIGHT_FALLS]: 'Midnight Falls',
};

export const RAID_NAMES_LOOKUP: Record<ERaid, string> = {
  [ERaid.NP]: 'Nerub-ar Palace',
  [ERaid.LOU]: 'Liberation of Undermine',
  [ERaid.MFO]: 'Manaforge Omega',
  [ERaid.DR]: 'The Dreamrift',
  [ERaid.VS]: 'The Voidspire',
  [ERaid.MQD]: "March on Quel'Danas",
};

export const RAID_IMAGE_LOOKUP: Record<ERaid, string> = {
  [ERaid.NP]: '',
  [ERaid.LOU]: '',
  [ERaid.MFO]: '',
  [ERaid.DR]: images['dreamrift'],
  [ERaid.VS]: images['voidspire'],
  [ERaid.MQD]: images['march_queldanas'],
};
