
import { renderHook } from '@testing-library/react-native';
import { useQuery } from '@tanstack/react-query';
import { useFetchCountries } from '../useFetchCountries';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

const mockData = [
    {
      name: 'France',
      capital: 'Paris',
      flagUrl: 'fr.png',
      population: 67000000,
      area: 640000,
    },
  ];


describe('useFetchCountries', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns successful country data', () => {
    // mock the result of useQuery
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
      isSuccess: true,
      error: null,
    });

    const { result } = renderHook(() => useFetchCountries());

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(mockData);
  });

  it('handles errors correctly', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: new Error('Network error'),
    });

    const { result } = renderHook(() => useFetchCountries());

    expect(result.current.isError).toBe(true);
    expect(result.current.error).toEqual(new Error('Network error'));
  });
});
