import styled from '@emotion/native';
import {memo} from 'react';

type CountryNameProps = {
  name: string;
};

const CountryName = ({name}: CountryNameProps) => {
  return <Name>{name}</Name>;
};

export default memo(CountryName);

const Name = styled.Text`
  font-weight: ${({theme}) => theme.fontWeights.semibold};
  font-size: ${({theme}) => theme.fontSizes.lg};
  color: ${({theme}) => theme.colors.textPrimary};
`;
