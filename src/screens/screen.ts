import {Country} from '@CountryScout24/domain/country';

export enum Screen {
  HomeScreen = 'HomeScreen',
  CountriesScreen = 'CountriesScreen',
  CountryDetailsScreen = 'CountryDetailsScreen',
}

export type AppStackParamList = {
  [Screen.HomeScreen]: undefined;
  [Screen.CountriesScreen]: undefined;
  [Screen.CountryDetailsScreen]: {country: Country};
};
