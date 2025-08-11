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
  [ECharacterSpecName.ENCH]:
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
};
