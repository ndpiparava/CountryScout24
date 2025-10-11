import {render} from '@testing-library/react-native';
import React from 'react';

import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';

import CountryCapital from './index';

describe('CountryCapital Component', () => {
  it('renders correctly with given capital', () => {
    const capitalName = 'Paris';

    const {getByText} = render(
      <MockAppContainer>
        <CountryCapital capital={capitalName} />
      </MockAppContainer>,
    );

    // Check if the capital text is rendered
    expect(getByText(capitalName)).toBeTruthy();
  });
});
