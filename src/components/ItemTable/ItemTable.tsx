import { Stack } from '@mui/material';
import { memo } from 'react';
import { ItemCell } from './ItemCell';
import { ITEM_WIDTH } from './config';
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
      width={ITEM_WIDTH}
      gap={1}
    >
      {filteredItems.map((wowItem) => {
        return <ItemCell key={wowItem.itemId} wowItem={wowItem} />;
      })}
    </Stack>
  );
});
