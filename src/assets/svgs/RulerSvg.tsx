import React from 'react';
import Svg, {Rect, Line} from 'react-native-svg';

type RulerIconProps = {
  size?: number;
  color?: string;
};

export const RulerIcon: React.FC<RulerIconProps> = ({
  size = 40,
  color = '#929195',
}) => {
  const strokeWidth = 2;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Main ruler rectangle */}
      <Rect
        x={2}
        y={6}
        width={20}
        height={12}
        rx={1}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Tick marks */}
      <Line
        x1={4}
        y1={6}
        x2={4}
        y2={18}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1={8}
        y1={6}
        x2={8}
        y2={18}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1={12}
        y1={6}
        x2={12}
        y2={18}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1={16}
        y1={6}
        x2={16}
        y2={18}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1={20}
        y1={6}
        x2={20}
        y2={18}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};
