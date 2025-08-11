import CritIconRaw from './icon_crit.svg?react';
import { IconWrapper } from './IconWrapper';

export const CritIcon = ({ color }: { color: string }) => {
  return <IconWrapper color={color} IconComponent={CritIconRaw} />;
};
