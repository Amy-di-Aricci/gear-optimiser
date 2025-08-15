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
import { LootSourceSummaryTooltip } from '../components/LootSourceSummary';

export const Optimiser = memo(() => {
  return (
    <OptimiserFilterContextProvider>
      <Container maxWidth="lg">
        <Stack
          gap={1}
          direction={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Stack minWidth="400px" gap={1} alignItems={'center'}>
            <CharacterClassSelector />
            <CharacterSpecSelector />
            <InventorySlotPicker />
          </Stack>
          <Stack gap={1}>
            <Stack direction="row" gap={1} justifyContent="space-between">
              <StatsSelector />
              <LootSourceSummaryTooltip />
            </Stack>
            <ItemTable />
          </Stack>
        </Stack>
      </Container>
    </OptimiserFilterContextProvider>
  );
});
