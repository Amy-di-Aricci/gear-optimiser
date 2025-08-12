import { Box, Button, Stack } from '@mui/material';
import { TSmartSelectorItem } from './types';
import { blue } from '@mui/material/colors';

export enum ESelectorVariant {
  ICON = 'Icon',
  BUTTON = 'Button',
}

type TSmartSelectorProps<T> = {
  currentSelectedIds: T[];
  setCurrentSelectedIds: (ids: T[]) => void;
  items: TSmartSelectorItem<T>[];
  vertical?: boolean;
  itemSize?: number;
  useTint?: boolean;
  color?: string;
  variant?: ESelectorVariant;
  borderWidth?: number;
};

export const SmartMultiSelector = <T,>({
  items,
  currentSelectedIds = [],
  setCurrentSelectedIds,
  vertical = false,
  itemSize = AVATAR_SIZE,
  useTint = false,
  color = blue[500],
  borderWidth = 1,
  variant = ESelectorVariant.ICON,
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
    <Stack gap={0.75} direction={vertical ? 'column' : 'row'}>
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
            {variant === ESelectorVariant.ICON ? (
              <IconBox
                handleClick={handleClick}
                item={item}
                isSvg={isSvg}
                isSelected={isSelected}
                itemSize={itemSize}
                useTint={useTint}
                color={color}
                borderWidth={borderWidth}
              />
            ) : (
              <SelectorButton
                itemSize={itemSize}
                handleClick={handleClick}
                item={item}
                isSelected={isSelected}
                color={color}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

const AVATAR_SIZE = 32;

type IconBoxProps<T> = {
  handleClick: (itemId: T, disabled: boolean) => void;
  item: TSmartSelectorItem<T>;
  isSvg: boolean;
  isSelected: boolean;
  itemSize: number;
  useTint?: boolean;
  color: string;
  borderWidth?: number;
};

const IconBox = <T,>({
  handleClick,
  item,
  isSvg,
  isSelected,
  itemSize,
  useTint = false,
  color,
  borderWidth = 1,
}: IconBoxProps<T>) => {
  return (
    <>
      <Box
        onClick={() => handleClick(item.id, item.disabled ?? false)}
        component="img"
        style={{
          color: 'red',
          fill: isSvg ? 'currentColor' : undefined,
          stroke: isSvg ? 'currentColor' : undefined,
        }}
        sx={() => ({
          color: 'red',
          fill: isSvg ? 'currentColor' : undefined,
          stroke: isSvg ? 'currentColor' : undefined,
          width: itemSize,
          height: itemSize,
          filter: item.disabled || !isSelected ? `grayscale(1) brightness(0.75)` : undefined,
          borderRadius: 2,
          border: `${borderWidth}px solid #6bbb5f`,
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
          sx={() => ({
            width: itemSize,
            height: itemSize,
            borderRadius: 2,
            background: color,
            opacity: 1,
            pointerEvents: 'none',
            mixBlendMode: 'overlay',
          })}
        />
      )}
    </>
  );
};

type ButtonProps<T> = {
  handleClick: (itemId: T, disabled: boolean) => void;
  item: TSmartSelectorItem<T>;
  isSelected: boolean;
  itemSize: number;
  color: string;
};

const SelectorButton = <T,>({ handleClick, item, isSelected, itemSize }: ButtonProps<T>) => {
  return (
    <Button
      variant="outlined"
      onClick={() => handleClick(item.id, item.disabled ?? false)}
      sx={() => {
        return {
          height: itemSize,
          width: 100,
          color: item.tintColor,
          borderColor: item.tintColor,
          borderWidth: isSelected ? 2 : 0.5,
          filter: item.disabled || !isSelected ? `grayscale(0.75) brightness(0.80)` : undefined,
          '&:hover': {
            cursor: !item.disabled ? 'pointer' : undefined,
            filter: `brightness(1.25)${!item.disabled && !isSelected ? ' grayscale(0.33)' : undefined}`,
            borderColor: item.tintColor,
          },
        };
      }}
    >
      {item.name}
    </Button>
  );
};
