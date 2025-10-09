import React from 'react';
import Svg, {Line} from 'react-native-svg';

type CloseIconProps = {
  size?: number;
  color?: string;
};

export const CloseIcon: React.FC<CloseIconProps> = ({
  size = 16,
  color = '#929195',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line
      x1="4"
      y1="4"
      x2="20"
      y2="20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Line
      x1="20"
      y1="4"
      x2="4"
      y2="20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);
