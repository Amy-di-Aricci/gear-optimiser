import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

export const LootSourceSummaryCard = memo(() => {
  return (
    <Stack
      gap={1}
      sx={(theme) => ({
        textDecoration: 'none',
        color: theme.palette.grey[200],
        p: 1,
        alignItems: 'start',
        backgroundColor: theme.palette.grey[900],
      })}
    >
      <Typography>Loot source summary PH</Typography>
    </Stack>
  );
});
