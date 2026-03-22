import { useMemo } from 'react';
import { ECharacterSpecName } from '../../types/spec';
import { SmartMultiSelector, TSmartSelectorItem } from '../SmartSelector';
import { useOptimiserFilters } from '../../contexts/OptimiserFiltersContext';
import { getAllClassSpecs } from '../../utils/mappers';

export const CharacterSpecSelector = () => {
  const { selectedClass, selectedSpec, setSelectedSpec } = useOptimiserFilters();
  const availableSpecsItems = useMemo<TSmartSelectorItem<ECharacterSpecName>[]>(() => {
    const availableSpecs = getAllClassSpecs(selectedClass);

    return availableSpecs.map((characterSpec) => {
      return {
        id: characterSpec,
        iconSrc: CHARACTER_SPECS_ICONS_LOOKUP[characterSpec],
        name: CHARACTER_SPECS_NAMES_LOOKUP[characterSpec],
      };
    });
  }, [selectedClass]);

  return (
    <SmartMultiSelector
      items={availableSpecsItems}
      currentSelectedIds={selectedSpec}
      setCurrentSelectedIds={setSelectedSpec}
    />
  );
};

const CHARACTER_SPECS_NAMES_LOOKUP: Record<ECharacterSpecName, string> = {
  [ECharacterSpecName.PROT_W]: 'Protection',
  [ECharacterSpecName.FURY]: 'Fury',
  [ECharacterSpecName.ARMS]: 'Arms',
  [ECharacterSpecName.PROT_P]: 'Protection',
  [ECharacterSpecName.HOLY_PALADIN]: 'Holy',
  [ECharacterSpecName.RETRI]: 'Retribution',
  [ECharacterSpecName.BM]: 'Beast Master',
  [ECharacterSpecName.MM]: 'Marksman',
  [ECharacterSpecName.SURVI]: 'Survival',
  [ECharacterSpecName.ASSA]: 'Assassination',
  [ECharacterSpecName.OUTLAW]: 'Outlaw',
  [ECharacterSpecName.SUB]: 'Subtlety',
  [ECharacterSpecName.HOLY_PRIEST]: 'Holy',
  [ECharacterSpecName.DISCI]: 'Discipline',
  [ECharacterSpecName.SHADOW]: 'Shadow',
  [ECharacterSpecName.UNHOLY]: 'Unholy',
  [ECharacterSpecName.BLOOD]: 'Blood',
  [ECharacterSpecName.FROST_DK]: 'Frost',
  [ECharacterSpecName.RESTO_S]: 'Restoration',
  [ECharacterSpecName.ELE]: 'Elemental',
  [ECharacterSpecName.ENH]: 'Enhancement',
  [ECharacterSpecName.FROST_M]: 'Frost',
  [ECharacterSpecName.FIRE]: 'Fire',
  [ECharacterSpecName.ARCANE]: 'Arcane',
  [ECharacterSpecName.DESTRO]: 'Destruction',
  [ECharacterSpecName.DEMO]: 'Demonology',
  [ECharacterSpecName.AFFLI]: 'Affliction',
  [ECharacterSpecName.MIST]: 'Mistweaver',
  [ECharacterSpecName.WW]: 'Windwalker',
  [ECharacterSpecName.BREW]: 'Brewmaster',
  [ECharacterSpecName.RESTO_D]: 'Restoration',
  [ECharacterSpecName.FERAL]: 'Feral',
  [ECharacterSpecName.BALANCE]: 'Balance',
  [ECharacterSpecName.GUARDIAN]: 'Guardian',
  [ECharacterSpecName.VENG]: 'Vengeance',
  [ECharacterSpecName.HAVOC]: 'Havoc',
  [ECharacterSpecName.AUG]: 'Augmentation',
  [ECharacterSpecName.DEVA]: 'Devastation',
  [ECharacterSpecName.PRESERV]: 'Preservation',
  [ECharacterSpecName.DEVOURER]: 'Devourer',
};

const CHARACTER_SPECS_ICONS_LOOKUP: Record<ECharacterSpecName, string> = {
  [ECharacterSpecName.PROT_W]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_defensivestance.jpg',
  [ECharacterSpecName.FURY]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_innerrage.jpg',
  [ECharacterSpecName.ARMS]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_savageblow.jpg',
  [ECharacterSpecName.PROT_P]:
    'https://wow.zamimg.com/images/wow/icons/large/ability_paladin_shieldofthetemplar.jpg',
  [ECharacterSpecName.HOLY_PALADIN]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg',
  [ECharacterSpecName.RETRI]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auraoflight.jpg',
  [ECharacterSpecName.BM]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_bestialdiscipline.jpg',
  [ECharacterSpecName.MM]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_focusedaim.jpg',
  [ECharacterSpecName.SURVI]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_camouflage.jpg',
  [ECharacterSpecName.ASSA]:
    'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_deadlybrew.jpg',
  [ECharacterSpecName.OUTLAW]:
    'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_waylay.jpg',
  [ECharacterSpecName.SUB]: 'https://wow.zamimg.com/images/wow/icons/medium/ability_stealth.jpg',
  [ECharacterSpecName.HOLY_PRIEST]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_guardianspirit.jpg',
  [ECharacterSpecName.DISCI]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg',
  [ECharacterSpecName.SHADOW]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowwordpain.jpg',
  [ECharacterSpecName.UNHOLY]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_unholypresence.jpg',
  [ECharacterSpecName.BLOOD]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_bloodpresence.jpg',
  [ECharacterSpecName.FROST_DK]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_frostpresence.jpg',
  [ECharacterSpecName.RESTO_S]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingwavegreater.jpg',
  [ECharacterSpecName.ELE]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
  [ECharacterSpecName.ENH]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_shaman_improvedstormstrike.jpg',
  [ECharacterSpecName.FROST_M]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt02.jpg',
  [ECharacterSpecName.FIRE]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_fire_firebolt02.jpg',
  [ECharacterSpecName.ARCANE]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_magicalsentry.jpg',
  [ECharacterSpecName.DESTRO]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_rainoffire.jpg',
  [ECharacterSpecName.DEMO]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_metamorphosis.jpg',
  [ECharacterSpecName.AFFLI]:
    'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg',
  [ECharacterSpecName.MIST]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_monk_mistweaver_spec.jpg',
  [ECharacterSpecName.WW]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_monk_windwalker_spec.jpg',
  [ECharacterSpecName.BREW]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_monk_brewmaster_spec.jpg',
  [ECharacterSpecName.RESTO_D]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg',
  [ECharacterSpecName.FERAL]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_druid_catform.jpg',
  [ECharacterSpecName.BALANCE]:
    'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg',
  [ECharacterSpecName.GUARDIAN]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bearform.jpg',
  [ECharacterSpecName.VENG]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_spectank.jpg',
  [ECharacterSpecName.HAVOC]:
    'https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_specdps.jpg',
  [ECharacterSpecName.AUG]:
    'https://wow.zamimg.com/images/wow/icons/medium/classicon_evoker_augmentation.jpg',
  [ECharacterSpecName.DEVA]:
    'https://wow.zamimg.com/images/wow/icons/medium/classicon_evoker_devastation.jpg',
  [ECharacterSpecName.PRESERV]:
    'https://wow.zamimg.com/images/wow/icons/medium/classicon_evoker_preservation.jpg',
  [ECharacterSpecName.DEVOURER]:
    'https://wow.zamimg.com/images/wow/icons/medium/classicon_demonhunter_void.jpg',
};
