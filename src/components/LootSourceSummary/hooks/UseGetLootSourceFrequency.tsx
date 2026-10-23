import { reduce } from 'lodash';
import { useMemo } from 'react';
import { getSourceDisplayName } from '../../ItemTable/utils';
import { useOptimiserFilters } from '../../../contexts/OptimiserFiltersContext';
import { TLootSource, TRaidBoss } from '../../../types/lootSources';

export type TLootSourceFrequency = {
  name: string;
  value: number;
  lootSource: TLootSource;
};

// Raid sources are objects, so they can't be compared or used as Map keys
// directly (two equal objects are still different references). Group by a
// string built from their codes instead.
const getLootSourceKey = (lootSource: TLootSource) =>
  typeof lootSource === 'string'
    ? lootSource
    : `${(lootSource as TRaidBoss).raid}/${(lootSource as TRaidBoss).bossName}`;

// Loot sources of the filtered items, most items first. The single source of
// truth for the summary card and tooltip: the card's background is the first
// entry's image, so it always matches the top of the list.
export const useGetLootSourceFrequency = () => {
  const { filteredItems } = useOptimiserFilters();

  return useMemo(() => {
    const lootSourceFrequency = reduce(
      filteredItems,
      (acc, currentItem) => {
        const key = getLootSourceKey(currentItem.lootSource);
        const entry = acc.get(key);
        if (entry) {
          entry.value += 1;
        } else {
          acc.set(key, {
            name: getSourceDisplayName(currentItem.lootSource),
            value: 1,
            lootSource: currentItem.lootSource,
          });
        }
        return acc;
      },
      new Map<string, TLootSourceFrequency>(),
    );

    return [...lootSourceFrequency.values()].sort((a, b) => b.value - a.value);
  }, [filteredItems]);
};
