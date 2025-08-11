import { memo } from 'react';
import { TWowItem } from '../../types/items';
import { Box, Stack, Typography } from '@mui/material';
import { AVATAR_SIZE, ITEM_CELL_GAP } from './config';
import { getSlotDisplay, getSourceDisplayName, getSecondaryStatsDisplay } from './utils';

type TItemCellProps = {
  wowItem: TWowItem;
};

export const ItemCell = memo(({ wowItem }: TItemCellProps) => {
  return (
    <Stack
      gap={1}
      sx={(theme) => ({
        p: 1,
        alignItems: 'start',
        backgroundColor: theme.palette.grey[900],
      })}
    >
      <Stack direction="row" sx={() => ({ gap: ITEM_CELL_GAP, width: '100%' })}>
        <Box
          component="img"
          sx={(theme) => ({
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: 2,
            border: `1px solid ${theme.palette.primary.main}`,
          })}
          src={`https://wow.zamimg.com/images/wow/icons/large/${wowItem.imgId}.jpg`}
        />
        <Stack width={`calc(100% - ${AVATAR_SIZE + 8 * ITEM_CELL_GAP}px)`}>
          <Stack gap={2} direction="row" width="100%" justifyContent="space-between">
            <Typography
              textAlign="start"
              variant="subtitle1"
              noWrap
              sx={{
                flex: 1,
              }}
            >
              {wowItem.name}
            </Typography>
            <Typography textAlign="end" noWrap variant="button">
              {getSecondaryStatsDisplay(wowItem.secondaryStats)}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2">{getSlotDisplay(wowItem)}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography variant="subtitle2">
        Source: {getSourceDisplayName(wowItem.lootSource)}
      </Typography>
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
