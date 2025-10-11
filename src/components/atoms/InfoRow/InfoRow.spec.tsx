// src/components/molecules/InfoRow/InfoRow.spec.tsx
import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';

import InfoRow from './index';

describe('InfoRow Component', () => {
  const renderComponent = (props = {}) => {
    const defaultProps = {
      label: 'Country',
      value: 'France',
      icon: <Text>🏳️</Text>,
      testID: 'info-row',
      ...props,
    };

    return render(
      <MockAppContainer>
        <InfoRow {...defaultProps} />
      </MockAppContainer>,
    );
  };

  it('renders label and value correctly', () => {
    const {getByText} = renderComponent({label: 'Capital', value: 'Paris'});

    expect(getByText('Capital')).toBeTruthy();
    expect(getByText('Paris')).toBeTruthy();
  });

  it('renders the icon if provided', () => {
    const {getByText} = renderComponent({icon: <Text>⭐</Text>});
    expect(getByText('⭐')).toBeTruthy();
  });

  it('renders correctly with default props', () => {
    const {getByText} = renderComponent();
    expect(getByText('Country')).toBeTruthy();
    expect(getByText('France')).toBeTruthy();
    expect(getByText('🏳️')).toBeTruthy();
  });
});
