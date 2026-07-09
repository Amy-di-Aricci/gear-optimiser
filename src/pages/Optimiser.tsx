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
        sx={{
          margin: '0 auto',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth={'lg'}>
          <Grid container height={{ lg: '90vh' }} spacing={{ xs: 4, lg: 6 }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack
                gap={{
                  xs: 2,
                  md: 6,
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
              <Stack gap={2}>
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
