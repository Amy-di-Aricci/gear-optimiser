import { memo } from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Stack, Tooltip, Typography } from '@mui/material';
import { useGetLootSourceFrequency } from './hooks/UseGetLootSourceFrequency';

export const LootSourceSummaryTooltip = memo(() => {
  const tooltipDisplayData = useGetLootSourceFrequency();
  return (
    <Tooltip
      title={
        tooltipDisplayData.length === 0 ? (
          ''
        ) : (
          <Stack
            sx={{
              gap: 0.25,
            }}
          >
            {tooltipDisplayData.map((data) => {
              return (
                <Stack
                  direction="row"
                  sx={{
                    minWidth: 200,
                    gap: 2,
                    justifyContent: 'space-between',
                  }}
                >
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
