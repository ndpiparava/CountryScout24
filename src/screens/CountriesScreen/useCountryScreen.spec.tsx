import {act, renderHook} from '@testing-library/react-native';
import useCountryScreen from './useCountryScreen';
import { useFetchCountries } from '@CountryScout24/shared/hooks/useFetchCountries';
import useTypedNavigation from '@CountryScout24/shared/hooks/useTypedNavigation';
import { useIntl } from 'react-intl';
import { Country } from '@CountryScout24/domain/country';

jest.mock('@CountryScout24/shared/hooks/useFetchCountries');
jest.mock('@CountryScout24/shared/hooks/useTypedNavigation');
jest.mock('react-intl');

 const mockCountries: Country[] = [
    { name: 'France', capital: 'Paris', flagUrl: 'fr.png', population: 67000000, area: 640000 },
    { name: 'Denmark', capital: 'Copenhagen', flagUrl: 'dk.png', population: 5800000, area: 43000 },
  ];

describe('useCountryScreen', () => {
  const mockNavigate = jest.fn();
  const mockIntl = { formatMessage: jest.fn((msg) => msg.id) };

 

  beforeEach(() => {
    jest.clearAllMocks();

    (useFetchCountries as jest.Mock).mockReturnValue({
      data: mockCountries,
      isLoading: false,
      isError: false,
    });

    (useTypedNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
    (useIntl as jest.Mock).mockReturnValue(mockIntl);
  });

  it('returns countries and other states correctly', () => {
    const { result } = renderHook(() => useCountryScreen());

    expect(result.current.data).toEqual(mockCountries);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.query).toBe('');
  });

  it('filters countries based on query', () => {
    const { result } = renderHook(() => useCountryScreen());

    act(() => result.current.setQuery('fra'));

    expect(result.current.data).toEqual([
      { name: 'France', capital: 'Paris', flagUrl: 'fr.png', population: 67000000, area: 640000 },
    ]);
  });

  it('calls navigation on selecting a country', () => {
    const { result } = renderHook(() => useCountryScreen());

    act(() => result.current.onSelectCountry(mockCountries[1]!));

    expect(mockNavigate).toHaveBeenCalledWith('CountryDetailsScreen', { country: mockCountries[1] });
  });

  it('returns all countries if query is empty', () => {
    const { result } = renderHook(() => useCountryScreen());

    act(() => result.current.setQuery(''));

    expect(result.current.data).toEqual(mockCountries);
  });
});
