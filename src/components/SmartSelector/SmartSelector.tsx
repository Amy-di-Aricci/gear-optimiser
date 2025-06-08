import { Box, Stack } from '@mui/material';
import { TSmartSelectorItem } from './types';

type TSmartSelectorProps<T> = {
  currentSelectedId: T;
  setCurrentSelectedId: (id: T) => void;
  items: TSmartSelectorItem<T>[];
};

export const SmartSelector = <T,>({
  items,
  currentSelectedId,
  setCurrentSelectedId,
}: TSmartSelectorProps<T>) => {
  return (
    <Stack gap={0.25} direction="row">
      {items.map((item) => {
        const onClick = () => {
          setCurrentSelectedId(item.id);
        };
        return (
          <Box
            onClick={onClick}
            component="img"
            sx={(theme) => ({
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              filter: item.id !== currentSelectedId ? `grayscale(1)` : undefined,
              borderRadius: 2,
              border: `1px solid ${theme.palette.primary.main}`,
              '&:hover': {
                cursor: 'pointer',
                filter: `brightness(1.25)${item.id !== currentSelectedId ? ' grayscale(1)' : ''}`,
              },
            })}
            src={item.iconSrc}
          />
        );
      })}
    </Stack>
  );
};

const AVATAR_SIZE = 32;
