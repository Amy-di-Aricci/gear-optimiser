import { Stack } from '@mui/material';
import { memo } from 'react';
import { GEAR_STORE } from '../../store/gear-store';
import { ItemCell } from './ItemCell';
import { ITEM_WIDTH } from './config';

export const ItemTable = memo(() => {
  return (
    <Stack width={ITEM_WIDTH} border="1px solid red" gap={1}>
      {GEAR_STORE.map((wowItem) => {
        return <ItemCell key={wowItem.itemId} wowItem={wowItem} />;
      })}
    </Stack>
  );
});
