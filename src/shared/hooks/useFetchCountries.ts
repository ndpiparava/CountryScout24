import {CountryService} from '@CountryScout24/services';
import {useQuery} from '@tanstack/react-query';

const countryService = new CountryService();

const STALE_TIME = 1000 * 60 * 60; // 1 hour
const GC_TIME = 1000 * 60 * 60 * 24; // 24 hours, since country data rarely changes

export const useFetchCountries = () => {
  const result = useQuery({
    queryKey: ['countries'],
    queryFn: () => countryService.getEuropeanCountries(),
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });

  return {
    ...result,
    data: result.data || [],
  };
};
