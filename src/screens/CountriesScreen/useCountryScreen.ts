import {useMemo, useState} from 'react';
import {useIntl} from 'react-intl';
import {useDebouncedCallback} from 'use-debounce';

import {Country} from '@CountryScout24/domain/country';
import {useFetchCountries} from '@CountryScout24/shared/hooks/useFetchCountries';
import useTypedNavigation from '@CountryScout24/shared/hooks/useTypedNavigation';

import {AppStackParamList, Screen} from '../screen';

const SEARCH_DEBOUNCE_DELAY = 300;

const useCountryScreen = () => {
  const [query, setQuery] = useState('');
  const {data, isLoading, isError} = useFetchCountries();
  const navigation = useTypedNavigation<AppStackParamList>();
  const onSelectCountry = (country: Country) => {
    navigation.navigate(Screen.CountryDetailsScreen, {country});
  };

  const intl = useIntl();

  const handleSearch = useDebouncedCallback((text: string) => {
    setQuery(text);
  }, SEARCH_DEBOUNCE_DELAY);

  const filteredData = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return lower
      ? data.filter(c => c.name.toLowerCase().includes(lower))
      : data;
  }, [query, data]);

  return {
    data: filteredData,
    isLoading,
    isError,
    onSelectCountry,
    intl,
    query,
    setQuery,
    handleSearch,
  };
};

export default useCountryScreen;
