// src/components/molecules/CountryItem/CountryItem.spec.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CountryItem from './index';
import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';
import {Country} from '@CountryScout24/domain/country';

const COUNTRY_ITEM_TEST_ID = 'COUNTRY_ITEM_TEST_ID';
const COUNTRY_FLAG_TEST_ID = 'COUNTRY_FLAG_TEST_ID';

describe('CountryItem Component', () => {
  const country: Country = {
    name: 'France',
    capital: 'Paris',
    flagUrl: 'https://example.com/france.png',
    population: 67000000,
    area: 643801,
  };

  const renderComponent = (props = {}) =>
    render(
      <MockAppContainer>
        <CountryItem
          country={country}
          onSelect={jest.fn()}
          testID={COUNTRY_ITEM_TEST_ID}
          flagTestID={COUNTRY_FLAG_TEST_ID}
          {...props}
        />
      </MockAppContainer>,
    );

  it('renders country name and capital', () => {
    const {getByText} = renderComponent();

    expect(getByText('France')).toBeTruthy();
    expect(getByText('Paris')).toBeTruthy();
  });

  it('renders the country flag', () => {
    const {getByTestId} = renderComponent();
    const flag = getByTestId(COUNTRY_FLAG_TEST_ID);
    expect(flag.props.source.uri).toBe('https://example.com/france.png');
  });

  it('calls onSelect when pressed', () => {
    const onSelect = jest.fn();
    const {getByTestId} = renderComponent({onSelect});

    const pressable = getByTestId(COUNTRY_ITEM_TEST_ID);
    fireEvent.press(pressable);

    expect(onSelect).toHaveBeenCalledWith(country);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
