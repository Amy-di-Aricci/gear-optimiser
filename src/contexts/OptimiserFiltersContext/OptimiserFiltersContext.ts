import { createContext } from 'react';
import { ECharacterClass, ECharacterSpecName } from '../../types/spec';
import { noop } from 'lodash';
import { DEFAULT_CLASS, DEFAULT_SEASON } from './config';
import { EItemSlot, ESecondaryStat, TWowItem } from '../../types/items';
import { ESeason } from '../../types/seasons';

type TOptimiserFiltersContext = {
  filteredItems: TWowItem[];
  selectedClass: ECharacterClass;
  setSelectedClass: (newClass: ECharacterClass) => void;
  selectedSpec: ECharacterSpecName[];
  setSelectedSpec: (newSpec: ECharacterSpecName[]) => void;
  selectedSlot: EItemSlot[];
  setSelectedSlot: (newSlot: EItemSlot[]) => void;
  selectedStats: ESecondaryStat[];
  setSelectedStats: (newStats: ESecondaryStat[]) => void;
  selectedSeason: ESeason;
  setSelectedSeason: (newSeason: ESeason) => void;
};

export const OptimiserFiltersContext = createContext<TOptimiserFiltersContext>({
  filteredItems: [],
  selectedClass: DEFAULT_CLASS,
  setSelectedClass: noop,
  selectedSpec: [],
  setSelectedSpec: noop,
  selectedSlot: [],
  setSelectedSlot: noop,
  selectedStats: [],
  setSelectedStats: noop,
  selectedSeason: DEFAULT_SEASON,
  setSelectedSeason: noop,
});
