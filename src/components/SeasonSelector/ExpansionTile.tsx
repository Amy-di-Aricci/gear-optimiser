import { memo } from 'react';
import { TExpansionDisplayData } from '../../types/seasons';
import { Box, Stack, Typography } from '@mui/material';

type TExpansionTileProps = {
  expansion: TExpansionDisplayData;
  //open: boolean;
};

export const ExpansionTile = memo(({ expansion }: TExpansionTileProps) => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stack
          direction={'row'}
          p={'0px'}
          sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Stack alignContent={'center'} spacing={2} direction={'row'}>
            <Typography variant="body1" fontWeight={'bold'}>
              {expansion.expansionName}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
});
