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
import { DEFAULT_CLASS } from './config';
import { hasSelectedRoles, hasSelectedSecondaryStats } from '../../components/ItemTable/utils';
import { ALL_SPECS } from '../../globals/specs';
import { GEAR_STORE } from '../../store/gear-store';
import { classToArmorType, getAllClassSpecs, getItemMainStats } from '../../utils/mappers';

export const OptimiserFilterContextProvider = memo(({ children }: PropsWithChildren) => {
  const [selectedClass, _setSelectedClass] = useState<ECharacterClass>(DEFAULT_CLASS);
  const [selectedSpec, setSelectedSpec] = useState<ECharacterSpecName[]>([]);
  const setSelectedClass = useCallback((newValue: ECharacterClass) => {
    _setSelectedClass(newValue);
    setSelectedSpec([]);
  }, []);
  const [selectedSlot, setSelectedSlot] = useState<EItemSlot[]>([]);
  const [selectedStats, setSelectedStats] = useState<ESecondaryStat[]>([]);

  const filteredItems = useMemo(() => {
    const armorType = classToArmorType(selectedClass);
    const specs = selectedSpec.length ? selectedSpec : getAllClassSpecs(selectedClass);
    const specsDefs = specs.map((spec) => ALL_SPECS[spec]);
    const roles = specsDefs.map((specDef) => specDef.role);
    const mainStats = specsDefs.map((specDef) => specDef.mainStat);
    const weaponTypes = new Set(specsDefs.map((specDef) => specDef.weaponTypes).flat());
    const offhandTypes = new Set(specsDefs.map((specDef) => specDef.offhandTypes ?? []).flat());
    const slots = new Set(selectedSlot);
    return GEAR_STORE.filter((item) => {
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
  }, [selectedClass, selectedSpec, selectedSlot, selectedStats]);

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
    ],
  );

  return (
    <OptimiserFiltersContext.Provider value={value}>{children}</OptimiserFiltersContext.Provider>
  );
});
