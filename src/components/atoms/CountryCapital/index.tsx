import styled from '@emotion/native';
import {memo} from 'react';

type CountryCapitalProps = {
  capital: string;
};

const CountryCapital = ({capital}: CountryCapitalProps) => {
  return <Capital>{capital}</Capital>;
};

export default memo(CountryCapital);

const Capital = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.base};
  color: ${({theme}) => theme.colors.textSecondary};
`;
