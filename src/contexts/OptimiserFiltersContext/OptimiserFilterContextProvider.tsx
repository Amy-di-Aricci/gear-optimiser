import { memo, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { OptimiserFiltersContext } from './OptimiserFiltersContext';
import { ECharacterClass, ECharacterSpecName } from '../../types/spec';
import {
  EItemSlot,
  ESecondaryStat,
  isWowItemArmor,
  isWowItemOffhand,
  isWowItemTrinket,
  isWowItemWeapon,
} from '../../types/items';
import { DEFAULT_CLASS, DEFAULT_SEASON } from './config';
import { hasSelectedRoles, hasSelectedSecondaryStats } from '../../components/ItemTable/utils';
import { ALL_SPECS } from '../../globals/specs';
import { GEAR_STORE } from '../../store/gear-store';
import { classToArmorType, getAllClassSpecs, getItemMainStats } from '../../utils/mappers';
import { TLootSource, TRaidBoss } from '../../types/lootSources';
import { ESeason } from '../../types/seasons';
import { SEASON_DUNGEONS_LOOKUP, SEASON_RAIDS_LOOKUP } from '../../globals/seasons';

export const OptimiserFilterContextProvider = memo(({ children }: PropsWithChildren) => {
  const [selectedClass, _setSelectedClass] = useState<ECharacterClass>(DEFAULT_CLASS);
  const [selectedSpec, setSelectedSpec] = useState<ECharacterSpecName[]>([]);
  const setSelectedClass = useCallback((newValue: ECharacterClass) => {
    _setSelectedClass(newValue);
    setSelectedSpec([]);
  }, []);
  const [selectedSlot, setSelectedSlot] = useState<EItemSlot[]>([]);
  const [selectedStats, setSelectedStats] = useState<ESecondaryStat[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<ESeason>(DEFAULT_SEASON);
  const filteredItems = useMemo(() => {
    const armorType = classToArmorType(selectedClass);
    const specs = selectedSpec.length ? selectedSpec : getAllClassSpecs(selectedClass);
    const specsDefs = specs.map((spec) => ALL_SPECS[spec]);
    const roles = specsDefs.map((specDef) => specDef.role);
    const mainStats = specsDefs.map((specDef) => specDef.mainStat);
    const weaponTypes = new Set(specsDefs.map((specDef) => specDef.weaponTypes).flat());
    const offhandTypes = new Set(specsDefs.map((specDef) => specDef.offhandTypes ?? []).flat());
    //TODO: implement season selector, those hardcoded loot sources are temporary
    const seasonRaids = SEASON_RAIDS_LOOKUP[selectedSeason];
    const seasonDungeons: Array<TLootSource> = SEASON_DUNGEONS_LOOKUP[selectedSeason];
    const slots = new Set(selectedSlot);
    return GEAR_STORE.filter((item) => {
      if (
        !(
          seasonDungeons.includes(item.lootSource) ||
          seasonRaids.includes((item.lootSource as TRaidBoss).raid)
        )
      ) {
        return false;
      }
      if (slots.size && !slots.has(item.slot)) {
        return false;
      }
      if (isWowItemArmor(item) && item.armorType !== armorType) {
        return false;
      }
      if (isWowItemWeapon(item) && !weaponTypes.has(item.weaponType)) {
        return false;
      }
      if (isWowItemOffhand(item) && !offhandTypes.has(item.offhandType)) {
        return false;
      }
      if (isWowItemTrinket(item) && !hasSelectedRoles(item, roles)) {
        return false;
      }
      const itemMainStats = getItemMainStats(item);
      if (itemMainStats.length && !itemMainStats.some((itemStat) => mainStats.includes(itemStat))) {
        return false;
      }
      if (!hasSelectedSecondaryStats(item, selectedStats)) {
        return false;
      }
      return true;
    });
  }, [selectedClass, selectedSpec, selectedSlot, selectedStats, selectedSeason]);

  const value = useMemo(
    () => ({
      filteredItems,
      selectedClass,
      setSelectedClass,
      selectedSpec,
      setSelectedSpec,
      selectedSlot,
      setSelectedSlot,
      selectedStats,
      setSelectedStats,
      selectedSeason,
      setSelectedSeason,
    }),
    [
      filteredItems,
      selectedClass,
      setSelectedClass,
      selectedSpec,
      setSelectedSpec,
      selectedSlot,
      setSelectedSlot,
      selectedStats,
      setSelectedStats,
      selectedSeason,
      setSelectedSeason,
    ],
  );

  return (
    <OptimiserFiltersContext.Provider value={value}>{children}</OptimiserFiltersContext.Provider>
  );
});
