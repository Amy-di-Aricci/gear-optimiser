import { useContext } from 'react';
import { OptimiserFiltersContext } from './OptimiserFiltersContext';

export const useOptimiserFilters = () => useContext(OptimiserFiltersContext);
