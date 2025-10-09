import ErrorMessage from '@CountryScout24/components/atoms/ErrorMessage';
import CountryList from '@CountryScout24/components/organisms/CountryList';
import styled from '@emotion/native';

import React from 'react';
import useCountryScreen from './useCountryScreen';
import SearchBar from '@CountryScout24/components/molecules/SearchBar';
import {TEST_IDS} from '@CountryScout24/__specs__/testIDs';

const CountriesScreen = () => {
  const {isError, isLoading, intl, data, onSelectCountry, query, setQuery} =
    useCountryScreen();

  if (isError) {
    return (
      <Centered>
        <ErrorMessage
          message={intl.formatMessage({id: 'dataLoadError'})}
          testID={TEST_IDS.ERROR_MESSAGE}
        />
      </Centered>
    );
  }

  return (
    <Container testID={TEST_IDS.COUNTRY_SCREEN}>
      <SearchWrapper>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Search countries..."
          testID={TEST_IDS.SEARCH_BAR}
          searchInputTestID={TEST_IDS.SEARCH_INPUT}
        />
      </SearchWrapper>

      <CountryList
        testID={TEST_IDS.COUNTRY_LIST}
        noCountryTestID={TEST_IDS.NO_COUNTRIES_FOUND}
        data={data}
        isLoading={isLoading}
        onSelectCountry={onSelectCountry}
        noCountriesFoundMessage={intl.formatMessage({id: 'noCountriesFound'})}
      />
    </Container>
  );
};

export default CountriesScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding: ${({theme}) => theme.spacing(2)}px;
`;

const Centered = styled(Container)`
  align-items: center;
  justify-content: center;
`;

const SearchWrapper = styled.View`
  padding-horizontal: ${({theme}) => theme.spacing(1)}px;
`;
