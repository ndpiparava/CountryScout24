import styled from '@emotion/native';
import {MotiView} from 'moti';
import React, {memo} from 'react';
import {Pressable} from 'react-native';

import ArrowRight from '@CountryScout24/assets/svgs/ArrowRight';
import CountryCapital from '@CountryScout24/components/atoms/CountryCapital';
import CountryFlag from '@CountryScout24/components/atoms/CountryFlag';
import CountryName from '@CountryScout24/components/atoms/CountryName';
import {Country} from '@CountryScout24/domain/country';
import {ListItemAnimation} from '@CountryScout24/utils/animation';

type CountryItemProps = {
  country: Country;
  onSelect: (country: Country) => void;
  testID?: string;
  flagTestID?: string;
};

const CountryItem = ({
  country,
  onSelect,
  testID,
  flagTestID,
}: CountryItemProps) => {
  return (
    <Pressable
      onPress={() => {
        onSelect(country);
      }}
      testID={testID}>
      {({pressed}) => (
        <AnimatedItemWrapper
          from={{...ListItemAnimation.from, scale: 0.9}}
          animate={{...ListItemAnimation.animate, scale: pressed ? 0.74 : 1}}
          transition={ListItemAnimation.transition}>
          <Left>
            <CountryFlag src={country.flagUrl} testID={flagTestID} />
          </Left>

          <Middle>
            <CountryName name={country.name} />
            <CountryCapital capital={country.capital} />
          </Middle>

          <Right>
            <ArrowRight />
          </Right>
        </AnimatedItemWrapper>
      )}
    </Pressable>
  );
};
export default memo(CountryItem);

const AnimatedItemWrapper = styled(MotiView)`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.boarderPrimary};
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  width: 100%;
`;

const Left = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
`;

const Middle = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const Right = styled.View`
  width: 24px;
  align-items: center;
  justify-content: center;
`;
