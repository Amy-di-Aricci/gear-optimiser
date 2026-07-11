import { useMemo, useState } from 'react';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonBase,
  Grow,
  Popover,
  Stack,
  Typography,
} from '@mui/material';
import {
  getExpansionDisplayData,
  getSeasonDisplayData,
  getSeasonsByExpansion,
} from '../../globals/seasons';
import { KeyboardArrowDown } from '@mui/icons-material';
import { SeasonTile } from './SeasonTile';
import { EExpansion, ESeason } from '../../types/seasons';
import { ExpansionTile } from './ExpansionTile';
import { theme } from '../../theme';

export const SeasonSelector = () => {
  const { selectedSeason, setSelectedSeason } = useOptimiserFilters();
  const [popAnchorEl, setPopAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const selectedSeasonInfo = useMemo(() => getSeasonDisplayData(selectedSeason), [selectedSeason]);

  const [accordionExpanded, setAccordionExpanded] = useState<EExpansion | false>(
    selectedSeasonInfo.expansion,
  );

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPopAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  const handleAccordionChange =
    (expansion: EExpansion) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setAccordionExpanded(isExpanded ? expansion : false);
    };

  const handleSeasonSelect = (item: ESeason) => {
    setSelectedSeason(item);
    setAccordionExpanded(getSeasonDisplayData(item).expansion);
    handlePopoverClose();
  };

  return (
    <>
      <ButtonBase
        onClick={handlePopoverOpen}
        sx={{
          width: '100%',
          borderRadius: '4px',
          overflow: 'clip',
        }}
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
              background: 'var(--tile-gradient-33)',
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
              textShadow: `var(--text-shadow-3px)`,
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
                transform: popoverOpen ? 'rotate(180deg)' : '',
                transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              }}
            />
          </Stack>
        </Box>
      </ButtonBase>
      <Popover
        open={popoverOpen}
        anchorEl={popAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transitionDuration={50}
        slots={{
          transition: Grow,
        }}
        slotProps={{
          transition: {
            onExited: () => {
              setPopAnchorEl(null);
            },
          },
          paper: {
            elevation: 0,
            square: true,
            sx: {
              width: popAnchorEl?.clientWidth,
              border: `solid ${theme.palette.grey[800]}80`,
              borderWidth: '1px 0px 0px 0px',
            },
          },
        }}
      >
        {Object.values(EExpansion).map((expansion: EExpansion) => {
          const expansionInfo = getExpansionDisplayData(expansion);

          return (
            <Accordion
              key={expansion}
              expanded={accordionExpanded === expansion}
              onChange={handleAccordionChange(expansion)}
              sx={{
                padding: 0,
              }}
            >
              <AccordionSummary
                sx={{
                  backgroundImage: `var(--tile-gradient-66-opaque), url(${expansionInfo.expansionSlimImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '12px 24px',
                  border: `solid ${theme.palette.grey[800]}80`,
                  borderWidth: '0px 0px 1px 0px',
                }}
                expandIcon={<KeyboardArrowDown />}
              >
                <ExpansionTile expansion={expansionInfo} />
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Stack>
                  {getSeasonsByExpansion(expansion).map((season: ESeason) => (
                    <SeasonTile
                      key={season}
                      item={getSeasonDisplayData(season)}
                      onClick={handleSeasonSelect}
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Popover>
    </>
  );
};
