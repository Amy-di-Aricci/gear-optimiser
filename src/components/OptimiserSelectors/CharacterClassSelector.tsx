import { ECharacterClass } from '../../types/spec';
import { SmartSelector, TSmartSelectorItem } from '../SmartSelector';

type TCharacterClassSelectorProps = {
  selectedClass: ECharacterClass;
  setSelectedClass: (newValue: ECharacterClass) => void;
};

export const CharacterClassSelector = ({
  selectedClass,
  setSelectedClass,
}: TCharacterClassSelectorProps) => {
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
  [ECharacterClass.SHAMAN]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.WARRIOR]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.PALADIN]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.HUNTER]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.ROGUE]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.PRIEST]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.DEATH_KNIGHT]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.MAGE]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.WARLOCK]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.MONK]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.DRUID]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.DEMON_HUNTER]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterClass.EVOKER]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
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
