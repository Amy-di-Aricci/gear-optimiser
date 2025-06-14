import { Box, Stack } from '@mui/material';
import { TSmartSelectorItem } from './types';

type TSmartSelectorProps<T> = {
  currentSelectedId?: T;
  setCurrentSelectedId: (id: T) => void;
  items: TSmartSelectorItem<T>[];
  vertical?: boolean;
  itemSize?: number;
  useTint?: boolean;
};

export const SmartSelector = <T,>({
  items,
  currentSelectedId,
  setCurrentSelectedId,
  vertical = false,
  itemSize = AVATAR_SIZE,
  useTint = false,
}: TSmartSelectorProps<T>) => {
  items.map((item) => ({
    ...item,
    disabled: item.disabled ?? false,
  }));
  return (
    <Stack gap={0.25} direction={vertical ? 'column' : 'row'}>
      {items.map((item) => {
        const onClick = () => {
          if (item.disabled) return;
          setCurrentSelectedId(item.id);
        };
        return (
          <Stack position={'relative'}>
            <Box
              onClick={onClick}
              component="img"
              sx={(theme) => ({
                width: itemSize,
                height: itemSize,
                filter:
                  item.disabled || item.id !== currentSelectedId
                    ? `grayscale(1) brightness(0.75)`
                    : undefined,
                borderRadius: 2,
                border: `1px solid ${theme.palette.primary.main}`,
                '&:hover': {
                  cursor: !item.disabled ? 'pointer' : undefined,
                  filter: `brightness(1.25)${!item.disabled && item.id !== currentSelectedId ? ' grayscale(0.66)' : undefined}`,
                },
              })}
              src={item.iconSrc}
            />
            {useTint && item.id === currentSelectedId && (
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
