import { memo } from 'react';
import { ItemTable } from '../components/ItemTable/ItemTable';
import { Container, Stack, Grid, Box } from '@mui/material';
import { InventorySlotPicker } from '../components/InventorySlotPicker';
import {
  CharacterClassSelector,
  CharacterSpecSelector,
  StatsSelector,
} from '../components/OptimiserSelectors';
import { OptimiserFilterContextProvider } from '../contexts/OptimiserFiltersContext';
import { LootSourceSummaryCard } from '../components/LootSourceSummary';
import { SeasonSelector } from '../components/SeasonSelector/SeasonSelector';

export const Optimiser = memo(() => {
  return (
    <OptimiserFilterContextProvider>
      <Box
        height={{
          lg: '100vh',
        }}
        sx={{
          margin: '0 auto',
          display: 'flex',
          padding: '48px 24px',
          alignItems: 'start',
        }}
      >
        <Container maxWidth={'lg'}>
          <Grid container spacing={{ xs: 4, lg: 6 }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack
                gap={{
                  xs: 2,
                  md: 4,
                }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <SeasonSelector />
                <Stack spacing={2} alignItems={'center'}>
                  <CharacterClassSelector />
                  <CharacterSpecSelector />
                </Stack>
                <InventorySlotPicker />
                <StatsSelector />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack gap={2} maxHeight={'90vh'}>
                <LootSourceSummaryCard />
                <ItemTable />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </OptimiserFilterContextProvider>
  );
});
