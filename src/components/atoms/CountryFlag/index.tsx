import styled from '@emotion/native';
import {memo} from 'react';

type CountryFlagProps = {
  src: string;
  size?: number;
  testID?: string;
};

const DEFAULT_IMAGE_SIZE = 50;

const CountryFlag = ({src, size, testID}: CountryFlagProps) => {
  const width = size ?? DEFAULT_IMAGE_SIZE;
  const height = (size ?? DEFAULT_IMAGE_SIZE) * 0.6;
  return (
    <FlagImg
      source={{uri: src}}
      resizeMode="cover"
      style={{width, height}}
      testID={testID}
    />
  );
};

export default memo(CountryFlag);

const FlagImg = styled.Image`
  border-radius: ${({theme}) => theme.radii.sm};
  margin-right: ${({theme}) => theme.spacing(1)}px;
  object-fit: cover;
`;
