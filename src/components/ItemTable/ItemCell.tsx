import { memo } from 'react';
import { isWowItemTrinket, isWowItemWeapon, TWowItem } from '../../types/items';
import { Box, Stack, Typography } from '@mui/material';
import { AVATAR_SIZE, ITEM_CELL_GAP } from './config';
import { getSlotDisplay, getStatsDisplay } from './utils';

type TItemCellProps = {
  wowItem: TWowItem;
};

export const ItemCell = memo(({ wowItem }: TItemCellProps) => {
  return (
    <Stack
      sx={{
        p: 1,
        gap: ITEM_CELL_GAP,
      }}
      direction="row"
    >
      <Box
        component="img"
        sx={(theme) => ({
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          borderRadius: 2,
          border: `1px solid ${theme.palette.primary.main}`,
        })}
        src="https://wow.zamimg.com/images/wow/icons/large/inv_1115_reputationcurrencies_bilgewater.jpg"
      />
      <Stack width={`calc(100% - ${AVATAR_SIZE + 8 * ITEM_CELL_GAP}px)`}>
        <Stack gap={2} direction="row" width="100%" justifyContent="space-between">
          <Typography
            textAlign="start"
            variant="body1"
            noWrap
            sx={{
              flex: 1,
            }}
          >
            {wowItem.name}
          </Typography>
          <Typography textAlign="end" noWrap variant="body1">
            {getStatsDisplay(
              wowItem.secondaryStats,
              isWowItemWeapon(wowItem) || isWowItemTrinket(wowItem) ? wowItem.mainStats : null,
            )}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1">source PH</Typography>
          <Typography variant="body1">{getSlotDisplay(wowItem)}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
});

{
  /* <Stack
      direction="row"
      width={350}
      sx={{
        p: 1,
        gap: 2,
      }}
    >
      <Box
        component="img"
        sx={(theme) => ({
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          borderRadius: 2,
          border: `1px solid ${theme.palette.primary.main}`,
        })}
        src="https://wow.zamimg.com/images/wow/icons/large/inv_1115_reputationcurrencies_bilgewater.jpg"
      />
      <Stack flex={1} gap={0.5} width="calc(100%-72px)">
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Typography noWrap variant="body1">
            {wowItem.name}
          </Typography>
          <Typography noWrap variant="body1">
            {getStatsDisplay(
              wowItem.secondaryStats,
              isWowItemWeapon(wowItem) || isWowItemTrinket(wowItem) ? wowItem.mainStats : null,
            )}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1">source PH</Typography>
          <Typography variant="body1">{getSlotDisplay(wowItem)}</Typography>
        </Stack>
      </Stack>
    </Stack> */
}
