import { memo } from 'react';
import { ItemTable } from '../components/ItemTable/ItemTable';
import { Container, Stack, Typography } from '@mui/material';
import { InventorySlotPicker } from '../components/InventorySlotPicker';

export const Optimiser = memo(() => {
  return (
    <Container maxWidth="lg">
      <Stack
        gap={1}
        direction={{
          xs: 'column',
          md: 'row',
        }}
      >
        <Stack minWidth="400px">
          <Typography>Class filter placeholder</Typography>
          <Typography>Spec filter placeholder</Typography>
          <Typography>Stat filter placeholder</Typography>
          <InventorySlotPicker />
        </Stack>
        <Stack>
          <ItemTable />
        </Stack>
      </Stack>
    </Container>
  );
});
