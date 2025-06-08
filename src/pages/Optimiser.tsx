import { memo, useCallback, useState } from 'react';
import { ItemTable } from '../components/ItemTable/ItemTable';
import { Container, Stack, Typography } from '@mui/material';
import { InventorySlotPicker } from '../components/InventorySlotPicker';
import { LearningHook } from '../components/LearningHook/LearningHook';
import { ECharacterClass, ECharacterSpecName } from '../types/spec';
import {
  CharacterClassSelector,
  CharacterSpecSelector,
  DEFAULT_CHARACTER_SPECS,
} from '../components/OptimiserSelectors';

export const Optimiser = memo(() => {
  const [selectedClass, _setSelectedClass] = useState<ECharacterClass>(
    ECharacterClass.DEATH_KNIGHT,
  );
  const [selectedSpec, setSelectedSpec] = useState<ECharacterSpecName>(ECharacterSpecName.BLOOD);
  const setSelectedClass = useCallback((newValue: ECharacterClass) => {
    _setSelectedClass(newValue);
    setSelectedSpec(DEFAULT_CHARACTER_SPECS[newValue]);
  }, []);
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
          <InventorySlotPicker />
        </Stack>
        <Stack>
          <ItemTable />
        </Stack>
      </Stack>
    </Container>
  );
});

// [
//   {
//     id: 'dk',
//     iconSrc: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodpresence.jpg',
//     name: 'Death Knight',
//   },
//   {
//     id: 'shaman',
//     iconSrc: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
//     name: 'Shaman',
//   },
//   {
//     id: 'hunter',
//     iconSrc: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_focusedaim.jpg',
//     name: 'Hunter',
//   },
// ];
