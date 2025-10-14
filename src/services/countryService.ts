import axios from 'axios';

import {Country, CountryRepository} from '@CountryScout24/domain/country';
import {env} from '@CountryScout24/utils/env';

export class CountryService implements CountryRepository {
  async getEuropeanCountries(): Promise<Country[]> {
    const {data} = await axios.get(
      `${env.API_BASE_URL}/region/europe?fields=name,capital,flags,population,area`,
    );
    return data.map((c: any) => ({
      name: c.name.common,
      capital: c.capital ? c.capital[0] : 'N/A',
      flagUrl: c.flags.png,
      population: c.population,
      area: c.area,
    }));
  }
}
