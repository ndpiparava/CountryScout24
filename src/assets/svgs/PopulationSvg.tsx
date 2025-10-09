import Svg, {Path} from 'react-native-svg';

export const PopulationIcon = ({size = 40, color = '#929195'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
      fill={color}
    />
    <Path d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" fill={color} />
  </Svg>
);
