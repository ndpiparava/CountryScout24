import {RouteProp, useRoute} from '@react-navigation/native';
import {useIntl} from 'react-intl';

import {AppStackParamList, Screen} from '../screen';

const useCountryDetailScreen = () => {
  const route =
    useRoute<RouteProp<AppStackParamList, Screen.CountryDetailsScreen>>();
  const {country} = route.params;
  const intl = useIntl();

  return {
    country,
    intl,
  };
};

export default useCountryDetailScreen;
