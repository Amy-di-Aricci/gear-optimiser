import { memo, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { OptimiserFiltersContext } from './OptimiserFiltersContext';
import { ECharacterClass, ECharacterSpecName } from '../../types/spec';
import { EItemSlot, ESecondaryStat } from '../../types/items';
import { DEFAULT_CLASS } from './config';

export const OptimiserFilterContextProvider = memo(({ children }: PropsWithChildren) => {
  const [selectedClass, _setSelectedClass] = useState<ECharacterClass>(DEFAULT_CLASS);
  const [selectedSpec, setSelectedSpec] = useState<ECharacterSpecName[]>([]);
  const setSelectedClass = useCallback((newValue: ECharacterClass) => {
    _setSelectedClass(newValue);
    setSelectedSpec([]);
  }, []);
  const [selectedSlot, setSelectedSlot] = useState<EItemSlot[]>([]);
  const [selectedStats, setSelectedStats] = useState<ESecondaryStat[]>([]);

  const value = useMemo(
    () => ({
      selectedClass,
      setSelectedClass,
      selectedSpec,
      setSelectedSpec,
      selectedSlot,
      setSelectedSlot,
      selectedStats,
      setSelectedStats,
    }),
    [
      selectedClass,
      setSelectedClass,
      selectedSpec,
      setSelectedSpec,
      selectedSlot,
      setSelectedSlot,
      selectedStats,
      setSelectedStats,
    ],
  );

  return (
    <OptimiserFiltersContext.Provider value={value}>{children}</OptimiserFiltersContext.Provider>
  );
});
