import { memo } from 'react';
import { ItemTable } from '../components/ItemTable/ItemTable';
import { Container, Stack } from '@mui/material';
import { InventorySlotPicker } from '../components/InventorySlotPicker';
import {
  CharacterClassSelector,
  CharacterSpecSelector,
  StatsSelector,
} from '../components/OptimiserSelectors';
import { OptimiserFilterContextProvider } from '../contexts/OptimiserFiltersContext';
import { LootSourceSummaryCard } from '../components/LootSourceSummary';

export const Optimiser = memo(() => {
  return (
    <OptimiserFilterContextProvider>
      <Container maxWidth="lg">
        <Stack
          height={{ md: '90vh' }}
          gap={{ xs: 2, md: 6 }}
          direction={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Stack
            minWidth="400px"
            gap={{
              xs: 2,
              md: 6,
            }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Stack spacing={2} alignItems={'center'}>
              <CharacterClassSelector />
              <CharacterSpecSelector />
            </Stack>
            <InventorySlotPicker />
            <StatsSelector />
          </Stack>
          <Stack gap={2}>
            <LootSourceSummaryCard />
            <ItemTable />
          </Stack>
        </Stack>
      </Container>
    </OptimiserFilterContextProvider>
  );
});
