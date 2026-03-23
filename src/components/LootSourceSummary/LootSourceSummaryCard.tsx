import { Collapse, Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { memo, useState } from 'react';
import { useGetLootSourceFrequency } from './hooks/UseGetLootSourceFrequency';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { useGetTopLootSource } from './hooks/UseGetTopLootSourceInfo';
import { GetLootSourceImage } from './utils';

const COLLAPSED_ITEM_COUNT = 3;

export const LootSourceSummaryCard = memo(() => {
  const theme = useTheme();
  const recommendationDisplayData = useGetLootSourceFrequency();
  const [isExpanded, setIsExpanded] = useState(false);

  const isExpandable = recommendationDisplayData.length > COLLAPSED_ITEM_COUNT;
  const alwaysVisibleData = recommendationDisplayData.slice(0, COLLAPSED_ITEM_COUNT);
  const collapsedData = recommendationDisplayData.slice(COLLAPSED_ITEM_COUNT);
  const topSource = useGetTopLootSource();
  const topSourceImg = GetLootSourceImage(topSource);

  return (
    <Stack
      gap={1}
      sx={{
        position: 'relative',
        textDecoration: 'none',
        textShadow: `3px 3px 2px ${theme.palette.grey[900]}`,
        borderRadius: 1,
        color: theme.palette.grey[200],
        p: 2,
        alignItems: 'start',
        background: theme.palette.grey[900],
        backgroundColor: theme.palette.grey[900],
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          overflow: 'hidden',
          pointerEvents: 'none',
          '&::before': {
            opacity: 0.5,
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 360,
            background: [
              `linear-gradient(to top, ${theme.palette.grey[900]} 30%, transparent)`,
              `url(${topSourceImg}) top/cover no-repeat`,
            ].join(', '),
          },
        }}
      />
      <Typography variant="h6" sx={{ zIndex: 1 }}>
        Activities recommended for you:
      </Typography>
      {alwaysVisibleData.map((data) => (
        <Stack
          key={data.name}
          sx={{ width: '100%', zIndex: 1 }}
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" noWrap>
            {data.name}
          </Typography>
          <Typography variant="subtitle2">{data.value}</Typography>
        </Stack>
      ))}
      {isExpandable && (
        <>
          <Collapse in={isExpanded} sx={{ width: '100%', zIndex: 1 }}>
            <Stack gap={1}>
              {collapsedData.map((data) => (
                <Stack
                  key={data.name}
                  sx={{ width: '100%' }}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" noWrap>
                    {data.name}
                  </Typography>
                  <Typography variant="subtitle2">{data.value}</Typography>
                </Stack>
              ))}
            </Stack>
          </Collapse>
          <IconButton
            color="primary"
            size="small"
            onClick={() => setIsExpanded((prev) => !prev)}
            sx={{ alignSelf: 'center', p: 0, zIndex: 1 }}
          >
            {isExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </>
      )}
    </Stack>
  );
});
