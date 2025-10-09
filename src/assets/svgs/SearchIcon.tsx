import Svg, {Path} from 'react-native-svg';

export const SearchIcon = ({size = 24, color = '#929195'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M10 2a8 8 0 105.29 14.29l4.71 4.71 1.41-1.41-4.71-4.71A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
      fill={color}
    />
  </Svg>
);
