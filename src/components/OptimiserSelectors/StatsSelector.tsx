import { amber, indigo, purple, red } from '@mui/material/colors';
import { ESecondaryStat } from '../../types/items';
import { ESelectorVariant, SmartMultiSelector, TSmartSelectorItem } from '../SmartSelector';

type TStatsSelectorProps = {
  selectedStats: ESecondaryStat[];
  setSelectedStats: (newValue: ESecondaryStat[]) => void;
};

export const StatsSelector = ({ selectedStats, setSelectedStats }: TStatsSelectorProps) => {
  return (
    <SmartMultiSelector
      items={SMART_SELECTOR_SECONDARY_STAT_ITEMS}
      currentSelectedIds={selectedStats}
      setCurrentSelectedIds={setSelectedStats}
      color={''}
      variant={ESelectorVariant.BUTTON}
    />
  );
};

const SECONDARY_STAT_NAMES_LOOKUP: Record<ESecondaryStat, string> = {
  [ESecondaryStat.CRIT]: 'Crit',
  [ESecondaryStat.HASTE]: 'Haste',
  [ESecondaryStat.VERS]: 'Vers',
  [ESecondaryStat.MASTERY]: 'Mastery',
};

const SECONDARY_STAT_ICONS_LOOKUP: Record<ESecondaryStat, string> = {
  [ESecondaryStat.CRIT]: '/assets/icons/icon_crit.svg',
  [ESecondaryStat.HASTE]: '/assets/icons/icon_haste.svg',
  [ESecondaryStat.VERS]: '/assets/icons/icon_vers.svg',
  [ESecondaryStat.MASTERY]: '/assets/icons/icon_mastery.svg',
};

const SECONDARY_STAT_COLORS_LOOKUP: Record<ESecondaryStat, string> = {
  [ESecondaryStat.CRIT]: red['500'],
  [ESecondaryStat.HASTE]: amber['500'],
  [ESecondaryStat.VERS]: indigo['500'],
  [ESecondaryStat.MASTERY]: purple['500'],
};

const SMART_SELECTOR_SECONDARY_STAT_ITEMS: TSmartSelectorItem<ESecondaryStat>[] = Object.values(
  ESecondaryStat,
).map((stat) => {
  return {
    id: stat,
    iconSrc: SECONDARY_STAT_ICONS_LOOKUP[stat],
    name: SECONDARY_STAT_NAMES_LOOKUP[stat],
    tintColor: SECONDARY_STAT_COLORS_LOOKUP[stat],
  };
});
