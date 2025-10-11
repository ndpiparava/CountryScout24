import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';

import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';
import {TEST_IDS} from '@CountryScout24/__specs__/testIDs';
import {Country} from '@CountryScout24/domain/country';

import CountryList from './index';

const mockCountries: Country[] = [
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
];

const renderComponent = (props = {}) => {
  const defaultProps = {
    data: mockCountries,
    isLoading: false,
    onSelectCountry: jest.fn(),
    onRefresh: jest.fn(),
    noCountriesFoundMessage: 'No countries found',
    testID: 'country-list',
    noCountryTestID: 'no-country',
    ...props,
  };

  return render(
    <MockAppContainer>
      <CountryList {...defaultProps} />
    </MockAppContainer>,
  );
};

describe('CountryList Component', () => {
  it('renders country items', () => {
    const {getByTestId} = renderComponent();
    const franceItem = getByTestId(TEST_IDS.COUNTRY_ITEM_ID('France'));
    const germanyItem = getByTestId(TEST_IDS.COUNTRY_ITEM_ID('Germany'));

    expect(franceItem).toBeTruthy();
    expect(germanyItem).toBeTruthy();
  });

  it('shows empty message when no countries and not loading', () => {
    const {getByTestId, getByText} = renderComponent({data: []});
    const emptyView = getByTestId('no-country');

    expect(emptyView).toBeTruthy();
    expect(getByText('No countries found')).toBeTruthy();
  });

  it('calls onSelectCountry when a country item is pressed', () => {
    const onSelectCountry = jest.fn();
    const {getByTestId} = renderComponent({onSelectCountry});
    const franceItem = getByTestId(TEST_IDS.COUNTRY_ITEM_ID('France'));

    fireEvent.press(franceItem);
    expect(onSelectCountry).toHaveBeenCalledWith(mockCountries[0]);
  });

  it('shows loading component when isLoading is true', () => {
    const {getByTestId, queryByText} = renderComponent({isLoading: true});
    expect(getByTestId('country-list')).toBeTruthy();

    // Should not show the "no country" message while loading
    expect(queryByText('No countries found')).toBeNull();
  });
});
