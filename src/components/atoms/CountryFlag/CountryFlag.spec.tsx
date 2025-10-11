import {render} from '@testing-library/react-native';
import React from 'react';

import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';

import CountryFlag from './index';

const COUNTRY_FLAG_IMAGE_TEST_ID = 'COUNTRY_FLAG_IMAGE_TEST_ID';

const renderComponent = (props = {}) => {
  const defaultProps = {
    src: 'https://example.com/flag.png',
    ...props,
  };
  return render(
    <MockAppContainer>
      <CountryFlag {...defaultProps} testID={COUNTRY_FLAG_IMAGE_TEST_ID} />
    </MockAppContainer>,
  );
};

describe('CountryFlag Component', () => {
  const defaultSrc = 'https://example.com/flag.png';

  it('renders correctly with given src', () => {
    const {getByTestId} = renderComponent();
    const image = getByTestId(COUNTRY_FLAG_IMAGE_TEST_ID);
    expect(image.props.source.uri).toBe(defaultSrc);
  });

  it('applies default size if no size is provided', () => {
    const {getByTestId} = renderComponent();
    const image = getByTestId(COUNTRY_FLAG_IMAGE_TEST_ID);
    const imageStyle = Array.isArray(image.props.style)
      ? Object.assign({}, ...image.props.style)
      : image.props.style;

    expect(imageStyle.width).toBe(50);
    expect(imageStyle.height).toBe(30);
  });

  it('applies custom size if size is provided', () => {
    const {getByTestId} = renderComponent({size: 100});
    const image = getByTestId(COUNTRY_FLAG_IMAGE_TEST_ID);
    const imageStyle = Array.isArray(image.props.style)
      ? Object.assign({}, ...image.props.style)
      : image.props.style;

    expect(imageStyle.width).toBe(100);
    expect(imageStyle.height).toBe(60);
  });
});
