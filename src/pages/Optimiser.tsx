import { memo, useCallback, useState } from 'react';
import { ItemTable } from '../components/ItemTable/ItemTable';
import { Container, Stack, Typography } from '@mui/material';
import { InventorySlotPicker } from '../components/InventorySlotPicker';
import { ECharacterClass, ECharacterSpecName } from '../types/spec';
import {
  CharacterClassSelector,
  CharacterSpecSelector,
  DEFAULT_CHARACTER_SPECS,
} from '../components/OptimiserSelectors';
import { EItemSlot } from '../types/items';

export const Optimiser = memo(() => {
  const [selectedClass, _setSelectedClass] = useState<ECharacterClass>(
    ECharacterClass.DEATH_KNIGHT,
  );
  const [selectedSpec, setSelectedSpec] = useState<ECharacterSpecName>(ECharacterSpecName.BLOOD);
  const setSelectedClass = useCallback((newValue: ECharacterClass) => {
    _setSelectedClass(newValue);
    setSelectedSpec(DEFAULT_CHARACTER_SPECS[newValue]);
  }, []);
  const [selectedSlot, setSelectedSlot] = useState<EItemSlot>();
  return (
    <Container maxWidth="lg">
      <Stack
        gap={1}
        direction={{
          xs: 'column',
          md: 'row',
        }}
      >
        <Stack minWidth="400px" gap={1} alignItems={'center'}>
          <CharacterClassSelector
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
          />
          <CharacterSpecSelector
            selectedSpec={selectedSpec}
            setSelectedSpec={setSelectedSpec}
            selectedClass={selectedClass}
          />
          <Typography>Stat filter placeholder</Typography>
          <InventorySlotPicker selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} />
        </Stack>
        <Stack>
          <ItemTable />
        </Stack>
      </Stack>
    </Container>
  );
});
