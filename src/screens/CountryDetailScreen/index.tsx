import styled from '@emotion/native';
import {MotiView} from 'moti';
import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

import {TEST_IDS} from '@CountryScout24/__specs__/testIDs';
import {PopulationIcon} from '@CountryScout24/assets/svgs/PopulationSvg';
import {RulerIcon} from '@CountryScout24/assets/svgs/RulerSvg';
import CountryFlag from '@CountryScout24/components/atoms/CountryFlag';
import InfoRow from '@CountryScout24/components/atoms/InfoRow';
import {DetailScreenAnimation} from '@CountryScout24/utils/animation';

import useCountryDetailScreen from './useCountryDetailScreen';

const FLAG_SIZE = Dimensions.get('window').width * 0.8;

const CountryDetailScreen = () => {
  const {country, intl} = useCountryDetailScreen();

  return (
    <Container testID={TEST_IDS.COUNTRY_DETAIL_SCREEN}>
      <ScrollView
        contentContainerStyle={{paddingVertical: 32, paddingHorizontal: 24}}
        showsVerticalScrollIndicator={false}
      >
        <MotiView
          from={DetailScreenAnimation.from}
          animate={DetailScreenAnimation.animate}
          transition={DetailScreenAnimation.transition}
        >
          <Centered testID={TEST_IDS.COUNTRY_DETAIL_SECTION}>
            <FlagWrapper size={FLAG_SIZE}>
              <CountryFlag src={country.flagUrl} size={FLAG_SIZE} />
            </FlagWrapper>

            <CountryName>{country.name}</CountryName>
            <CapitalText>{country.capital}</CapitalText>
          </Centered>

          <InfoWrapper>
            <InfoRow
              label={intl.formatMessage({id: 'population'})}
              value={country.population.toLocaleString()}
              icon={<PopulationIcon />}
              testID={TEST_IDS.POPULATION_DETAIL}
            />
            <InfoRow
              label={intl.formatMessage({id: 'area'})}
              value={`${country.area.toLocaleString()} km²`}
              icon={<RulerIcon />}
              testID={TEST_IDS.AREA_DETAIL}
            />
          </InfoWrapper>
        </MotiView>
      </ScrollView>
    </Container>
  );
};

export default CountryDetailScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
`;

const Centered = styled.View`
  align-items: center;
  margin-bottom: ${({theme}) => theme.spacing(4)}px;
`;

type FlagWrapperProps = {
  size: number;
};
const FlagWrapper = styled.View<FlagWrapperProps>`
  width: ${({size}) => size}px;
  height: ${({size}) => size * 0.6}px;
  margin-bottom: ${({theme}) => theme.spacing(2)}px;
  border-radius: ${({theme}) => theme.radii.md};
  overflow: hidden;
`;

const CountryName = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.vxl};
  color: ${({theme}) => theme.colors.textPrimary};
  font-weight: ${({theme}) => theme.fontWeights.bold};
`;

const CapitalText = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.xl};
  color: ${({theme}) => theme.colors.textSecondary};
  margin-top: ${({theme}) => theme.spacing(1)}px;
`;

const InfoWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
  border-radius: ${({theme}) => theme.radii.md};
  padding: ${({theme}) => theme.spacing(5)}px;
  gap: ${({theme}) => theme.spacing(2)}px;
`;
