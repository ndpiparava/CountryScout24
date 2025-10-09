import {Country} from './entities';

export type CountryRepository = {
  getEuropeanCountries(): Promise<Country[]>;
};
