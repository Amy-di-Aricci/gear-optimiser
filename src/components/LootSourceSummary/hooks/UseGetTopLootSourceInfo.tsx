import { maxBy, reduce } from 'lodash';
import { useMemo } from 'react';
import { useOptimiserFilters } from '../../../contexts/OptimiserFiltersContext';
import { TLootSource } from '../../../types/lootSources';

export const useGetTopLootSource = () => {
  const { filteredItems } = useOptimiserFilters();

  return useMemo(() => {
    const lootSourceFrequency = reduce(
      filteredItems,
      (acc, currentItem) => {
        acc.set(currentItem.lootSource, (acc.get(currentItem.lootSource) ?? 0) + 1);
        return acc;
      },
      new Map<TLootSource, number>(),
    );

    return maxBy([...lootSourceFrequency.entries()], ([, count]) => count)?.[0] ?? null;
  }, [filteredItems]);
};
