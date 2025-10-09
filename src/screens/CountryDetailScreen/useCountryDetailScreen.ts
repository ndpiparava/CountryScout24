import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackParamList, Screen} from '../screen';
import {useIntl} from 'react-intl';

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
