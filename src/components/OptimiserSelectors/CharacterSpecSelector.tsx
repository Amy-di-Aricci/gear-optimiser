import { useMemo } from 'react';
import { ECharacterClass, ECharacterSpecName } from '../../types/spec';
import { SmartSelector, TSmartSelectorItem } from '../SmartSelector';
import { ALL_SPECS } from '../../globals/specs';

type TCharacterSpecSelectorProps = {
  selectedSpec: ECharacterSpecName;
  setSelectedSpec: (newValue: ECharacterSpecName) => void;
  selectedClass: ECharacterClass;
};

export const CharacterSpecSelector = ({
  selectedSpec,
  setSelectedSpec,
  selectedClass,
}: TCharacterSpecSelectorProps) => {
  const availableSpecsItems = useMemo<TSmartSelectorItem<ECharacterSpecName>[]>(() => {
    const availableSpecs = Object.values(ALL_SPECS)
      .filter((spec) => spec.characterClass === selectedClass)
      .map((spec) => spec.characterSpecName);

    return availableSpecs.map((characterSpec) => {
      return {
        id: characterSpec,
        iconSrc: CHARACTER_SPECS_ICONS_LOOKUP[characterSpec],
        name: CHARACTER_SPECS_NAMES_LOOKUP[characterSpec],
      };
    });
  }, [selectedClass]);

  return (
    <SmartSelector
      items={availableSpecsItems}
      currentSelectedId={selectedSpec}
      setCurrentSelectedId={setSelectedSpec}
    />
  );
};

const CHARACTER_SPECS_NAMES_LOOKUP: Record<ECharacterSpecName, string> = {
  [ECharacterSpecName.PROT_W]: '',
  [ECharacterSpecName.FURY]: '',
  [ECharacterSpecName.ARMS]: '',
  [ECharacterSpecName.PROT_P]: '',
  [ECharacterSpecName.HOLY_PALADIN]: '',
  [ECharacterSpecName.RETRI]: '',
  [ECharacterSpecName.BM]: '',
  [ECharacterSpecName.MM]: '',
  [ECharacterSpecName.SURVI]: '',
  [ECharacterSpecName.ASSA]: '',
  [ECharacterSpecName.OUTLAW]: '',
  [ECharacterSpecName.SUB]: '',
  [ECharacterSpecName.HOLY_PRIEST]: '',
  [ECharacterSpecName.DISCI]: '',
  [ECharacterSpecName.SHADOW]: '',
  [ECharacterSpecName.UNHOLY]: '',
  [ECharacterSpecName.BLOOD]: '',
  [ECharacterSpecName.FROST_DK]: '',
  [ECharacterSpecName.RESTO_S]: '',
  [ECharacterSpecName.ELE]: '',
  [ECharacterSpecName.ENCH]: '',
  [ECharacterSpecName.FROST_M]: '',
  [ECharacterSpecName.FIRE]: '',
  [ECharacterSpecName.ARCANE]: '',
  [ECharacterSpecName.DESTRO]: '',
  [ECharacterSpecName.DEMO]: '',
  [ECharacterSpecName.AFFLI]: '',
  [ECharacterSpecName.MIST]: '',
  [ECharacterSpecName.WW]: '',
  [ECharacterSpecName.BREW]: '',
  [ECharacterSpecName.RESTO_D]: '',
  [ECharacterSpecName.FERAL]: '',
  [ECharacterSpecName.BALANCE]: '',
  [ECharacterSpecName.GUARDIAN]: '',
  [ECharacterSpecName.VENG]: '',
  [ECharacterSpecName.HAVOC]: '',
  [ECharacterSpecName.AUG]: '',
  [ECharacterSpecName.DEVA]: '',
  [ECharacterSpecName.PRESERV]: '',
};

const CHARACTER_SPECS_ICONS_LOOKUP: Record<ECharacterSpecName, string> = {
  [ECharacterSpecName.PROT_W]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.FURY]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.ARMS]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.PROT_P]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.HOLY_PALADIN]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.RETRI]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.BM]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.MM]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.SURVI]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.ASSA]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.OUTLAW]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.SUB]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.HOLY_PRIEST]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.DISCI]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.SHADOW]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.UNHOLY]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.BLOOD]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.FROST_DK]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.RESTO_S]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.ELE]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.ENCH]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.FROST_M]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.FIRE]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.ARCANE]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.DESTRO]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.DEMO]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.AFFLI]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.MIST]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.WW]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.BREW]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.RESTO_D]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.FERAL]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.BALANCE]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.GUARDIAN]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.VENG]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.HAVOC]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.AUG]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.DEVA]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.PRESERV]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
};
