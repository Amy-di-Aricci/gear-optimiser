import { Box, Stack } from '@mui/material';
import { memo } from 'react';
import { INVENTORY_ICON_SIZE } from './config';

export const InventorySlotPicker = memo(() => {
  return (
    <Stack direction="row" width="100%">
      <Stack gap={0.5} width={INVENTORY_ICON_SIZE}>
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell disabled />
        <InventoryCell disabled />
        <InventoryCell />
      </Stack>
      <Stack gap={2} flex={1} alignItems="center" justifyContent="flex-end">
        <Box
          component="img"
          width="100%"
          sx={{
            animation: 'spin 20000s linear infinite',
            '@keyframes spin': {
              from: {
                transform: 'rotate(0deg)',
              },
              to: {
                transform: 'rotate(360deg)',
              },
            },
          }}
          src="https://wow.zamimg.com/modelviewer/live/webthumbs/npc/185/441.webp"
        />
        <Stack direction="row" gap={0.5}>
          <InventoryCell />
          <InventoryCell />
        </Stack>
      </Stack>
      <Stack gap={0.5} width={INVENTORY_ICON_SIZE}>
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
      </Stack>
    </Stack>
  );
});

const InventoryCell = ({ disabled = false }: { disabled?: boolean }) => {
  return (
    <Box
      component="img"
      sx={(theme) => ({
        width: INVENTORY_ICON_SIZE,
        height: INVENTORY_ICON_SIZE,
        borderRadius: 2,
        border: `1px solid ${theme.palette.primary.main}`,
        filter: `grayscale(${disabled ? 1 : 0})`,
      })}
      src="https://wow.zamimg.com/images/wow/icons/large/inv_1115_reputationcurrencies_bilgewater.jpg"
    />
  );
};
