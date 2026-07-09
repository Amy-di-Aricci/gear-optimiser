import { Stack } from '@mui/material';
import { memo } from 'react';
import { ItemCell } from './ItemCell';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';

export const ItemTable = memo(() => {
  const { filteredItems } = useOptimiserFilters();

  return (
    <Stack
      maxHeight="70vh"
      sx={{
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
      width="100%"
      gap={1}
    >
      {filteredItems.map((wowItem) => {
        return <ItemCell key={wowItem.itemId} wowItem={wowItem} />;
      })}
    </Stack>
  );
});
