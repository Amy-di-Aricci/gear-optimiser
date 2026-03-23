import { reduce } from 'lodash';
import { useMemo } from 'react';
import { getSourceDisplayName } from '../../ItemTable/utils';
import { useOptimiserFilters } from '../../../contexts/OptimiserFiltersContext';

export const useGetLootSourceFrequency = () => {
  const { filteredItems } = useOptimiserFilters();

  return useMemo(() => {
    const lootSourceFrequency = reduce(
      filteredItems,
      (acc, currentItem) => {
        const displayName = getSourceDisplayName(currentItem.lootSource);
        acc[displayName] = (acc[displayName] ?? 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(lootSourceFrequency)
      .sort((a, b) => b[1] - a[1])
      .map(([name, value]) => ({ name, value }));
  }, [filteredItems]);
};
