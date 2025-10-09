import {useFetchCountries} from '@CountryScout24/shared/hooks/useFetchCountries';
import useTypedNavigation from '@CountryScout24/shared/hooks/useTypedNavigation';

import {AppStackParamList, Screen} from '../screen';
import {Country} from '@CountryScout24/domain/country';
import {useIntl} from 'react-intl';
import {useMemo, useState} from 'react';

const useCountryScreen = () => {
  const [query, setQuery] = useState('');
  const {data, isLoading, isError} = useFetchCountries();
  const navigation = useTypedNavigation<AppStackParamList>();
  const onSelectCountry = (country: Country) => {
    navigation.navigate(Screen.CountryDetailsScreen, {country});
  };

  const intl = useIntl();

  const filteredData = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return lower
      ? data.filter(c => c.name.toLowerCase().includes(lower))
      : data;
  }, [query, data]);

  return {
    data: filteredData || data,
    isLoading,
    isError,
    onSelectCountry,
    intl,
    query,
    setQuery,
  };
};

export default useCountryScreen;
