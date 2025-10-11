// src/components/icons/RetryIcon.tsx
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type RetryIconProps = {
  size?: number;
  color?: string;
};

const RetryIcon: React.FC<RetryIconProps> = ({
  size = 40,
  color = '#1E2327',
}) => (
  <Svg viewBox="0 0 50 50" width="50px" height="50px" fill={color}>
    <Path
      stroke={color}
      d="M 25 2 A 2.0002 2.0002 0 1 0 25 6 C 35.517124 6 44 14.482876 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 19.524201 8.3080175 14.608106 12 11.144531 L 12 15 A 2.0002 2.0002 0 1 0 16 15 L 16 4 L 5 4 A 2.0002 2.0002 0 1 0 5 8 L 9.5253906 8 C 4.9067015 12.20948 2 18.272325 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 C 48 12.321124 37.678876 2 25 2 z"
    />
  </Svg>
);

export default RetryIcon;
