// src/components/atoms/Loading/Loading.spec.tsx
import {render} from '@testing-library/react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';

import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';

import Loading from './Index';

const LOADING_TEST_ID = 'LOADING_TEST_ID';

describe('Loading Component', () => {
  const renderComponent = (props = {}) =>
    render(
      <MockAppContainer>
        <Loading testID={LOADING_TEST_ID} {...props} />
      </MockAppContainer>,
    );

  it('renders ActivityIndicator', () => {
    const {getByTestId} = renderComponent();
    const container = getByTestId(LOADING_TEST_ID);
    expect(container).toBeTruthy();
    expect(container.findAllByType(ActivityIndicator)).toBeTruthy();
  });

  it('renders the message text when provided', () => {
    const message = 'Loading data...';
    const {getByText} = renderComponent({message});
    expect(getByText(message)).toBeTruthy();
  });

  it('renders without message', () => {
    const {queryByText} = renderComponent();
    expect(queryByText(/./)).toBeNull();
  });
});
