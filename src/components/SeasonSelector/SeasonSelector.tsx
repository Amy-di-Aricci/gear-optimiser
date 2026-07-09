import { useState } from 'react';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';
import { Box, ButtonBase, Popover, Stack, Typography } from '@mui/material';
import { getSeasonDisplayData } from '../../globals/seasons';
import { KeyboardArrowDown } from '@mui/icons-material';

export const SeasonSelector = () => {
  const { selectedSeason, setSelectedSeason } = useOptimiserFilters();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const selectedSeasonInfo = getSeasonDisplayData(selectedSeason);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ButtonBase
        onClick={handleOpen}
        sx={{ width: '100%', borderRadius: '4px', overflow: 'clip' }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${selectedSeasonInfo.seasonImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(33,33,33,.95) 33%, rgba(12,12,12,.0) 100%)',
            }}
          />

          <Stack
            direction={'row'}
            spacing={6}
            sx={{
              paddingY: '12px',
              paddingX: '24px',
              position: 'relative',
              zIndex: 1,
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Stack sx={{ minWidth: 0 }} spacing={1}>
              <Typography variant="subtitle1">
                {selectedSeasonInfo.expansionName} {selectedSeasonInfo.seasonShortName}
              </Typography>

              <Typography
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                variant="subtitle2"
              >
                {selectedSeasonInfo.seasonTierName}
              </Typography>
            </Stack>

            <KeyboardArrowDown
              sx={{
                fontSize: 32,
              }}
            />
          </Stack>
        </Box>
      </ButtonBase>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: anchorEl?.clientWidth,
            },
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {/* accordiony */}
      </Popover>
    </>
  );
};
