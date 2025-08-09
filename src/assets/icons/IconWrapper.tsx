type TIconWrapperProps = {
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color: string;
  isStroke?: boolean;
  isFill?: boolean;
};

export const IconWrapper = ({ IconComponent, color, isStroke, isFill }: TIconWrapperProps) => (
  <IconComponent fill={isFill ? color : undefined} stroke={isStroke ? color : undefined} />
);
