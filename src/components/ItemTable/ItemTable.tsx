import { Stack } from '@mui/material';
import { memo } from 'react';
import { ItemCell } from './ItemCell';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';

export const ItemTable = memo(() => {
  const { filteredItems } = useOptimiserFilters();

  return (
    <Stack
      sx={{
        maxHeight: '70vh',
        height: '100%',
        width: '100%',
        gap: 1,
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      {filteredItems.map((wowItem) => {
        return <ItemCell key={wowItem.itemId} wowItem={wowItem} />;
      })}
    </Stack>
  );
});
