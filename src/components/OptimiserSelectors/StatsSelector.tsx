import { ESecondaryStat } from '../../types/items';
import { SmartMultiSelector, TSmartSelectorItem } from '../SmartSelector';

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
    />
  );
};

const SECONDARY_STAT_NAMES_LOOKUP: Record<ESecondaryStat, string> = {
  [ESecondaryStat.CRIT]: 'Critical strike',
  [ESecondaryStat.HASTE]: 'Haste',
  [ESecondaryStat.VERS]: 'Versatility',
  [ESecondaryStat.MASTERY]: 'Mastery',
};

const SECONDARY_STAT_ICONS_LOOKUP: Record<ESecondaryStat, string> = {
  [ESecondaryStat.CRIT]: '/icons/icon_crit.svg',
  [ESecondaryStat.HASTE]: '/icons/icon_haste.svg',
  [ESecondaryStat.VERS]: '/icons/icon_vers.svg',
  [ESecondaryStat.MASTERY]: '/icons/icon_mastery.svg',
};

const SMART_SELECTOR_SECONDARY_STAT_ITEMS: TSmartSelectorItem<ESecondaryStat>[] = Object.values(
  ESecondaryStat,
).map((stat) => {
  return {
    id: stat,
    iconSrc: SECONDARY_STAT_ICONS_LOOKUP[stat],
    name: SECONDARY_STAT_NAMES_LOOKUP[stat],
  };
});
