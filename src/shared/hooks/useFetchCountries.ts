import {useQuery} from '@tanstack/react-query';

import {CountryRepository} from '@CountryScout24/domain/country';
import {CountryService} from '@CountryScout24/services';

const STALE_TIME = 1000 * 60 * 60; // 1 hour
const GC_TIME = 1000 * 60 * 60 * 24; // 24 hours, since country data rarely changes

export const useFetchCountries = (repo?: CountryRepository) => {
   const service = repo ?? new CountryService();
  const result = useQuery({
    queryKey: ['countries'],
    queryFn: () => service.getEuropeanCountries(),
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });

  return {
    ...result,
    data: result.data ?? [],
  };
};
