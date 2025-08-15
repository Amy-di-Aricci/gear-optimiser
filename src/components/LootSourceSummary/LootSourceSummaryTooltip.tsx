import { memo, useMemo } from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';
import { reduce } from 'lodash';
import { getSourceDisplayName } from '../ItemTable/utils';
import { Stack, Tooltip, Typography } from '@mui/material';

export const LootSourceSummaryTooltip = memo(() => {
  const { filteredItems } = useOptimiserFilters();
  const tooltipDisplayData = useMemo(() => {
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
      .sort((a, b) => {
        return b[1] - a[1];
      })
      .map((entry) => ({
        name: entry[0],
        value: entry[1],
      }));
  }, [filteredItems]);
  return (
    <Tooltip
      title={
        tooltipDisplayData.length === 0 ? (
          ''
        ) : (
          <Stack gap={0.25}>
            {tooltipDisplayData.map((data) => {
              return (
                <Stack minWidth={200} gap={2} direction="row" justifyContent="space-between">
                  <Typography noWrap>{data.name}</Typography>
                  <Typography>{data.value}</Typography>
                </Stack>
              );
            })}
          </Stack>
        )
      }
    >
      <LeaderboardIcon />
    </Tooltip>
  );
});
