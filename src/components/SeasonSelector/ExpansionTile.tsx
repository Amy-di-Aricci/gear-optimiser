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
          sx={{
            p: '0px',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack
            spacing={2}
            direction={'row'}
            sx={{
              alignContent: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
              }}
            >
              {expansion.expansionName}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
});
