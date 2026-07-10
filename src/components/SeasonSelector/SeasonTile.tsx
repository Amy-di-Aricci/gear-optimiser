import { memo } from 'react';
import { ESeason, TSeasonDisplayData } from '../../types/seasons';
import { Box, ButtonBase, Typography } from '@mui/material';

type TSeasonTileProps = {
  item: TSeasonDisplayData;
  onClick: (item: ESeason) => void;
};

export const SeasonTile = memo(({ item, onClick }: TSeasonTileProps) => {
  return (
    <>
      <ButtonBase
        sx={{ width: '100%', alignContent: 'flex-start' }}
        onClick={() => onClick(item.season)}
      >
        <Box
          alignContent={'center'}
          sx={{
            position: 'relative',
            width: '100%',
            minWidth: 0,
            height: '100%',
            p: '12px 24px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${item.seasonImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'var(--tile-gradient-50)',
            }}
          />
          <Typography
            sx={{
              position: 'relative',
              zIndex: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant="subtitle2"
          >
            {item.seasonTierName}
          </Typography>
        </Box>
      </ButtonBase>
    </>
  );
});
