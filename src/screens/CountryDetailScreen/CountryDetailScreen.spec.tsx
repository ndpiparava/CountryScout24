jest.mock('./useCountryDetailScreen', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import { render } from '@testing-library/react-native';
import useCountryDetailScreen from './useCountryDetailScreen';
import CountryDetailScreen from '../CountryDetailScreen';
import { TEST_IDS } from '@CountryScout24/__specs__/testIDs';
import { MockAppContainer } from '@CountryScout24/__specs__/mocks/MockAppContainer';

const mockCountry = {
  name: 'France',
  capital: 'Paris',
  flagUrl: 'https://flagcdn.com/fr.svg',
  population: 67000000,
  area: 551695,
};

const mockIntl = {
  formatMessage: jest.fn(({ id }) => id),
};

describe('CountryDetailScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useCountryDetailScreen as jest.Mock).mockReturnValue({
      country: mockCountry,
      intl: mockIntl,
    });
  });

  it('renders all country details correctly', () => {
    const { getByText, getByTestId } = render(<MockAppContainer> <CountryDetailScreen /></MockAppContainer>);

    expect(getByTestId(TEST_IDS.COUNTRY_DETAIL_SCREEN)).toBeTruthy();
    expect(getByText(mockCountry.name)).toBeTruthy();
    expect(getByText(mockCountry.capital)).toBeTruthy();

    // Population and Area labels
    expect(getByText('population')).toBeTruthy();
    expect(getByText('area')).toBeTruthy();
  });
});
