import styled from '@emotion/native';
import React, {memo, useCallback} from 'react';
import {FlatList} from 'react-native';

import {TEST_IDS} from '@CountryScout24/__specs__/testIDs';
import Loading from '@CountryScout24/components/atoms/Loading/Index';
import CountryItem from '@CountryScout24/components/molecules/CountryItem';
import {Country} from '@CountryScout24/domain/country';

type CountryListProps = {
  data: Country[];
  isLoading?: boolean;
  onRefresh?: () => void;
  onSelectCountry?: (country: Country) => void;
  noCountriesFoundMessage?: string;
  testID?: string;
  noCountryTestID?: string;
};

const CountryList: React.FC<CountryListProps> = ({
  data = [],
  isLoading = false,
  onRefresh,
  onSelectCountry,
  noCountriesFoundMessage,
  testID,
  noCountryTestID,
}) => {
  const handleSelectCountry = useCallback((country: Country) => {
    if (onSelectCountry) {
      onSelectCountry(country);
    }
  }, []);

  const renderCountryItem = useCallback(
    ({item}: {item: Country}) => (
      <CountryItem
        country={item}
        onSelect={handleSelectCountry}
        testID={TEST_IDS.COUNTRY_ITEM_ID(item.name)}
      />
    ),
    [handleSelectCountry],
  );

  const renderEmptyMessage = useCallback(() => {
    if (!isLoading) {
      return (
        <Centered testID={noCountryTestID}>
          <EmptyText>{noCountriesFoundMessage}</EmptyText>
        </Centered>
      );
    }
    return null;
  }, [isLoading]);

  return (
    <StyledFlatList
      data={data}
      testID={testID}
      keyExtractor={item => item.name}
      renderItem={renderCountryItem}
      refreshing={isLoading}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      onRefresh={onRefresh}
      ListFooterComponent={isLoading ? <Loading /> : null}
      ListEmptyComponent={renderEmptyMessage()}
      alwaysBounceVertical={false}
    />
  );
};

export default memo(CountryList);

const Centered = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacing(2)}px;
`;

const EmptyText = styled.Text`
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: ${({theme}) => theme.fontSizes.lg};
`;

const CountryTypedList = FlatList<Country>;
const StyledFlatList = styled(CountryTypedList)`
  padding-vertical: ${({theme}) => theme.spacing(2)}px;
  width: 100%;
`;
