import { Box, Stack } from '@mui/material';
import { TSmartSelectorItem } from './types';

type TSmartSelectorProps<T> = {
  currentSelectedIds: T[];
  setCurrentSelectedIds: (ids: T[]) => void;
  items: TSmartSelectorItem<T>[];
  vertical?: boolean;
  itemSize?: number;
  useTint?: boolean;
};

export const SmartMultiSelector = <T,>({
  items,
  currentSelectedIds = [],
  setCurrentSelectedIds,
  vertical = false,
  itemSize = AVATAR_SIZE,
  useTint = false,
}: TSmartSelectorProps<T>) => {
  const normalizedItems = items.map((item) => ({
    ...item,
    disabled: item.disabled ?? false,
  }));

  const handleClick = (itemId: T, disabled: boolean) => {
    if (disabled) return;
    if (currentSelectedIds.includes(itemId)) {
      setCurrentSelectedIds(currentSelectedIds.filter((id) => id !== itemId));
    } else {
      setCurrentSelectedIds([...currentSelectedIds, itemId]);
    }
  };

  return (
    <Stack gap={0.25} direction={vertical ? 'column' : 'row'}>
      {normalizedItems.map((item) => {
        const isSelected = currentSelectedIds.includes(item.id);
        const isSvg = item.iconSrc.endsWith('.svg');
        return (
          <Stack
            style={{
              color: 'red',
              fill: isSvg ? 'currentColor' : undefined,
              stroke: isSvg ? 'currentColor' : undefined,
            }}
            sx={{
              color: 'red',
            }}
            key={String(item.id)}
            position={'relative'}
          >
            <Box
              onClick={() => handleClick(item.id, item.disabled)}
              component="img"
              style={{
                color: 'red',
                fill: isSvg ? 'currentColor' : undefined,
                stroke: isSvg ? 'currentColor' : undefined,
              }}
              sx={(theme) => ({
                color: 'red',
                fill: isSvg ? 'currentColor' : undefined,
                stroke: isSvg ? 'currentColor' : undefined,
                width: itemSize,
                height: itemSize,
                filter: item.disabled || !isSelected ? `grayscale(1) brightness(0.75)` : undefined,
                borderRadius: 2,
                border: `1px solid ${theme.palette.primary.main}`,
                '&:hover': {
                  cursor: !item.disabled ? 'pointer' : undefined,
                  filter: `brightness(1.25)${
                    !item.disabled && !isSelected ? ' grayscale(0.66)' : undefined
                  }`,
                },
              })}
              src={item.iconSrc}
            />
            {useTint && isSelected && (
              <Box
                position={'absolute'}
                sx={(theme) => ({
                  width: itemSize,
                  height: itemSize,
                  borderRadius: 2,
                  background: theme.palette.primary.main,
                  opacity: 1,
                  pointerEvents: 'none',
                  mixBlendMode: 'overlay',
                })}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

const AVATAR_SIZE = 32;
