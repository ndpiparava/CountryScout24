import React from 'react';
import Svg, {Polygon} from 'react-native-svg';
const ArrowRight = ({size = 20, color = '#929195'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Polygon
      fill={color}
      points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"
    />
  </Svg>
);

export default ArrowRight;
