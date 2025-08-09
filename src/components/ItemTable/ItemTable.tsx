import { Stack } from '@mui/material';
import { memo, useMemo } from 'react';
import { GEAR_STORE } from '../../store/gear-store';
import { ItemCell } from './ItemCell';
import { ITEM_WIDTH } from './config';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';
import { classToArmorType, getAllClassSpecs, getItemMainStats } from '../../utils/mappers';
import { ALL_SPECS } from '../../globals/specs';
import {
  isWowItemArmor,
  isWowItemOffhand,
  isWowItemTrinket,
  isWowItemWeapon,
} from '../../types/items';
import { intersection } from 'lodash';
import { hasSelectedSecondaryStats } from './utils';

export const ItemTable = memo(() => {
  const { selectedClass, selectedSpec, selectedSlot, selectedStats } = useOptimiserFilters();
  const filteredItems = useMemo(() => {
    const armorType = classToArmorType(selectedClass);
    const specs = selectedSpec.length ? selectedSpec : getAllClassSpecs(selectedClass);
    const specsDefs = specs.map((spec) => ALL_SPECS[spec]);
    const roles = new Set(specsDefs.map((specDef) => specDef.role));
    const mainStats = new Set(specsDefs.map((specDef) => specDef.mainStat));
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
      if (isWowItemTrinket(item) && !intersection([...roles], [...item.roles]).length) {
        return false;
      }
      const itemMainStats = getItemMainStats(item);
      if (itemMainStats.length && !intersection([...itemMainStats], [...mainStats])) {
        return false;
      }
      if (!hasSelectedSecondaryStats(item, selectedStats)) {
        return false;
      }
      return true;
    });
  }, [selectedClass, selectedSpec, selectedSlot, selectedStats]);

  return (
    <Stack width={ITEM_WIDTH} border="1px solid red" gap={1}>
      {filteredItems.map((wowItem) => {
        return <ItemCell key={wowItem.itemId} wowItem={wowItem} />;
      })}
    </Stack>
  );
});
