import { Box, Stack } from '@mui/material';
import { INVENTORY_ICON_SIZE } from './config';
import { EItemSlot } from '../../types/items';
import { SmartMultiSelector, TSmartSelectorItem } from '../SmartSelector';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';

export const InventorySlotPicker = () => {
  const { selectedSlot, setSelectedSlot } = useOptimiserFilters();
  return (
    <Stack direction="row" width="100%">
      <Stack>
        <SmartMultiSelector
          useTint
          vertical
          items={SMART_SELECTOR_LEFT_UPPER_SLOTS}
          currentSelectedIds={selectedSlot}
          setCurrentSelectedIds={setSelectedSlot}
          itemSize={INVENTORY_ICON_SIZE}
        />
        <SmartMultiSelector
          vertical
          items={SMART_SELECTOR_LEFT_DISABLED_SLOTS}
          currentSelectedIds={[]}
          setCurrentSelectedIds={() => {}}
          itemSize={INVENTORY_ICON_SIZE}
        />
        <SmartMultiSelector
          vertical
          useTint
          items={SMART_SELECTOR_LEFT_LOWER_SLOTS}
          currentSelectedIds={selectedSlot}
          setCurrentSelectedIds={setSelectedSlot}
          itemSize={INVENTORY_ICON_SIZE}
        />
      </Stack>

      <Stack gap={2} flex={1} alignItems="center" justifyContent="flex-end">
        <Box
          component="img"
          width="100%"
          sx={{
            pointerEvents: 'none',
            animation: 'spin 20000s linear infinite',
            '@keyframes spin': {
              from: {
                transform: 'rotate(0deg)',
              },
              to: {
                transform: 'rotate(360deg)',
              },
            },
          }}
          src="https://wow.zamimg.com/modelviewer/live/webthumbs/npc/185/441.webp"
        />
        <SmartMultiSelector
          useTint
          items={SMART_SELECTOR_BOTTOM_SLOTS}
          currentSelectedIds={selectedSlot}
          setCurrentSelectedIds={setSelectedSlot}
          itemSize={INVENTORY_ICON_SIZE}
        />
      </Stack>
      <SmartMultiSelector
        useTint
        vertical
        items={SMART_SELECTOR_RIGHT_SLOTS}
        currentSelectedIds={selectedSlot}
        setCurrentSelectedIds={setSelectedSlot}
        itemSize={INVENTORY_ICON_SIZE}
      />
    </Stack>
  );
};

const INVENTORY_SLOT_NAMES_LOOKUP: Record<EItemSlot, string> = {
  [EItemSlot.HEAD]: 'Head',
  [EItemSlot.SHOULDER]: 'Shoulder',
  [EItemSlot.BACK]: 'Back',
  [EItemSlot.CHEST]: 'Chest',
  [EItemSlot.WRIST]: 'Wrist',
  [EItemSlot.HANDS]: 'Hands',
  [EItemSlot.WAIST]: 'Waist',
  [EItemSlot.LEGS]: 'Legs',
  [EItemSlot.FEET]: 'Feet',
  [EItemSlot.NECK]: 'Neck',
  [EItemSlot.FINGER]: 'Finger',
  [EItemSlot.TRINKET]: 'Trinket',
  [EItemSlot.MAINHAND]: 'Main-Hand Weapon',
  [EItemSlot.OFFHAND]: 'Off Hand',
  [EItemSlot.TWOHAND]: 'Two-Hand Weapon',
};

const INVENTORY_SLOT_ICONS_LOOKUP: Record<EItemSlot, string> = {
  [EItemSlot.HEAD]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_head.jpg',
  [EItemSlot.SHOULDER]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_shoulder.jpg',
  [EItemSlot.BACK]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_tabard.jpg',
  [EItemSlot.CHEST]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_chest.jpg',
  [EItemSlot.WRIST]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_wrists.jpg',
  [EItemSlot.HANDS]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_hands.jpg',
  [EItemSlot.WAIST]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_waist.jpg',
  [EItemSlot.LEGS]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_legs.jpg',
  [EItemSlot.FEET]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_feet.jpg',
  [EItemSlot.NECK]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_neck.jpg',
  [EItemSlot.FINGER]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_finger.jpg',
  [EItemSlot.TRINKET]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_trinket.jpg',
  [EItemSlot.MAINHAND]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_mainhand.jpg',
  [EItemSlot.OFFHAND]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_offhand.jpg',
  [EItemSlot.TWOHAND]: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_ranged.jpg',
};

const SMART_SELECTOR_LEFT_UPPER_SLOTS: TSmartSelectorItem<EItemSlot>[] = [
  EItemSlot.HEAD,
  EItemSlot.NECK,
  EItemSlot.SHOULDER,
  EItemSlot.BACK,
  EItemSlot.CHEST,
].map((slot) => {
  return {
    id: slot,
    iconSrc: INVENTORY_SLOT_ICONS_LOOKUP[slot],
    name: INVENTORY_SLOT_NAMES_LOOKUP[slot],
  };
});

const SMART_SELECTOR_LEFT_LOWER_SLOTS: TSmartSelectorItem<EItemSlot>[] = [EItemSlot.WRIST].map(
  (slot) => {
    return {
      id: slot,
      iconSrc: INVENTORY_SLOT_ICONS_LOOKUP[slot],
      name: INVENTORY_SLOT_NAMES_LOOKUP[slot],
    };
  },
);

const SMART_SELECTOR_BOTTOM_SLOTS: TSmartSelectorItem<EItemSlot>[] = [
  EItemSlot.MAINHAND,
  EItemSlot.OFFHAND,
  EItemSlot.TWOHAND,
].map((slot) => {
  return {
    id: slot,
    iconSrc: INVENTORY_SLOT_ICONS_LOOKUP[slot],
    name: INVENTORY_SLOT_NAMES_LOOKUP[slot],
  };
});

const SMART_SELECTOR_RIGHT_SLOTS: TSmartSelectorItem<EItemSlot>[] = [
  EItemSlot.HANDS,
  EItemSlot.WAIST,
  EItemSlot.LEGS,
  EItemSlot.FEET,
  EItemSlot.FINGER,
  EItemSlot.TRINKET,
].map((slot) => {
  return {
    id: slot,
    iconSrc: INVENTORY_SLOT_ICONS_LOOKUP[slot],
    name: INVENTORY_SLOT_NAMES_LOOKUP[slot],
  };
});

const SMART_SELECTOR_LEFT_DISABLED_SLOTS: TSmartSelectorItem<string>[] = [
  {
    id: 'shirt',
    iconSrc: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_shirt.jpg',
    name: 'shirt',
    disabled: true,
  },
  {
    id: 'tabard',
    iconSrc: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_tabard.jpg',
    name: 'tabard',
    disabled: true,
  },
];
