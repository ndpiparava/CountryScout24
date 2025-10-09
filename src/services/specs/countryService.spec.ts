import axios from 'axios';
import { CountryService } from '../countryService';
import { env } from '@CountryScout24/utils/env';
import { Country } from '@CountryScout24/domain/country';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
 const mockApiResponse = [
      {
        name: { common: 'France' },
        capital: ['Paris'],
        flags: { png: 'fr.png' },
        population: 67000000,
        area: 640000,
      },
      {
        name: { common: 'Germany' },
        capital: ['Berlin'],
        flags: { png: 'de.png' },
        population: 83000000,
        area: 357000,
      },
    ];

describe('CountryService', () => {
  const service = new CountryService();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches and maps European countries correctly', async () => {
   
    mockedAxios.get.mockResolvedValueOnce({ data: mockApiResponse });

    const result: Country[] = await service.getEuropeanCountries();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${env.API_BASE_URL}/region/europe?fields=name,capital,flags,population,area`,
    );

    expect(result).toEqual([
      {
        name: 'France',
        capital: 'Paris',
        flagUrl: 'fr.png',
        population: 67000000,
        area: 640000,
      },
      {
        name: 'Germany',
        capital: 'Berlin',
        flagUrl: 'de.png',
        population: 83000000,
        area: 357000,
      },
    ]);
  });

  it('handles missing capital safely', async () => {
    const mockApiResponse = [
      {
        name: { common: 'Iceland' },
        capital: null,
        flags: { png: 'is.png' },
        population: 360000,
        area: 103000,
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockApiResponse });

    const result = await service.getEuropeanCountries();
    expect(result[0]?.capital).toBe('N/A');
  });
});
