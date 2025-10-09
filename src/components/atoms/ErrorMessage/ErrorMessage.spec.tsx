import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorMessage from './index';
import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';

const RETRY_BUTTON_TEST_ID = 'retry-button';

const renderComponent = (props = {}) => {
  const defaultProps = {
    message: 'Something went wrong',
    onRetry: jest.fn(),
    ...props,
  };

  return render(
    <MockAppContainer>
      <ErrorMessage {...defaultProps} retryTestID={RETRY_BUTTON_TEST_ID} />
    </MockAppContainer>,
  );
};

describe('ErrorMessage Component with SVG', () => {
  it('renders the error message', () => {
    const message = 'Network error';
    const {getByText} = renderComponent({message});
    expect(getByText(message)).toBeTruthy();
  });

  it('renders retry button and calls onRetry when pressed', () => {
    const onRetry = jest.fn();
    const {getByTestId} = renderComponent({onRetry});

    const retryButton = getByTestId(RETRY_BUTTON_TEST_ID);
    expect(retryButton).toBeTruthy();

    fireEvent.press(retryButton);
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
