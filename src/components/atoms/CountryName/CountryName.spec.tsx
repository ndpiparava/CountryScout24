// src/components/atoms/CountryName/CountryName.spec.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import CountryName from './index';
import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';

const renderComponent = (props = {}) => {
  const defaultProps = {
    name: 'France',
    ...props,
  };

  return render(
    <MockAppContainer>
      <CountryName {...defaultProps} />
    </MockAppContainer>,
  );
};

describe('CountryName Component', () => {
  it('renders correctly with the given name', () => {
    const countryName = 'Germany';
    const {getByText} = renderComponent({name: countryName});
    expect(getByText(countryName)).toBeTruthy();
  });

  it('renders default name if no props provided', () => {
    const {getByText} = renderComponent();
    expect(getByText('France')).toBeTruthy();
  });
});
