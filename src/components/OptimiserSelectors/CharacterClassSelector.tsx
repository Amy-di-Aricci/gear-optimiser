import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';
import { ECharacterClass } from '../../types/spec';
import { SmartSelector, TSmartSelectorItem } from '../SmartSelector';

export const CharacterClassSelector = () => {
  const { selectedClass, setSelectedClass } = useOptimiserFilters();
  return (
    <SmartSelector
      items={SMART_SELECTOR_CLASS_ITEMS}
      currentSelectedId={selectedClass}
      setCurrentSelectedId={setSelectedClass}
    />
  );
};

const CHARACTER_CLASS_NAMES_LOOKUP: Record<ECharacterClass, string> = {
  [ECharacterClass.SHAMAN]: '',
  [ECharacterClass.WARRIOR]: '',
  [ECharacterClass.PALADIN]: '',
  [ECharacterClass.HUNTER]: '',
  [ECharacterClass.ROGUE]: '',
  [ECharacterClass.PRIEST]: '',
  [ECharacterClass.DEATH_KNIGHT]: '',
  [ECharacterClass.MAGE]: '',
  [ECharacterClass.WARLOCK]: '',
  [ECharacterClass.MONK]: '',
  [ECharacterClass.DRUID]: '',
  [ECharacterClass.DEMON_HUNTER]: '',
  [ECharacterClass.EVOKER]: '',
};

const CHARACTER_CLASS_ICONS_LOOKUP: Record<ECharacterClass, string> = {
  [ECharacterClass.SHAMAN]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_shaman.jpg',
  [ECharacterClass.WARRIOR]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_warrior.jpg',
  [ECharacterClass.PALADIN]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_paladin.jpg',
  [ECharacterClass.HUNTER]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_hunter.jpg',
  [ECharacterClass.ROGUE]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_rogue.jpg',
  [ECharacterClass.PRIEST]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_priest.jpg',
  [ECharacterClass.DEATH_KNIGHT]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_classicon.jpg',
  [ECharacterClass.MAGE]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_mage.jpg',
  [ECharacterClass.WARLOCK]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_warlock.jpg',
  [ECharacterClass.MONK]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_monk.jpg',
  [ECharacterClass.DRUID]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_druid.jpg',
  [ECharacterClass.DEMON_HUNTER]:
    'https://wow.zamimg.com/images/wow/icons/medium/classicon_demonhunter.jpg',
  [ECharacterClass.EVOKER]: 'https://wow.zamimg.com/images/wow/icons/medium/classicon_evoker.jpg',
};

const SMART_SELECTOR_CLASS_ITEMS: TSmartSelectorItem<ECharacterClass>[] = Object.values(
  ECharacterClass,
).map((characterClass) => {
  return {
    id: characterClass,
    iconSrc: CHARACTER_CLASS_ICONS_LOOKUP[characterClass],
    name: CHARACTER_CLASS_NAMES_LOOKUP[characterClass],
  };
});
