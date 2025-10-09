// src/components/molecules/SearchBar/SearchBar.spec.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from './index';
import {MockAppContainer} from '@CountryScout24/__specs__/mocks/MockAppContainer';

const SEARCH_BAR_TEST_ID = 'SEARCH_BAR_TEST_ID';
const SEARCH_INPUT_TEST_ID = 'SEARCH_INPUT_TEST_ID';
const CLEAR_BUTTON_TEST_ID = 'CLEAR_BUTTON_TEST_ID';
describe('SearchBar Component', () => {
  const renderComponent = (props = {}) =>
    render(
      <MockAppContainer>
        <SearchBar
          value=""
          onChangeText={jest.fn()}
          testID={SEARCH_BAR_TEST_ID}
          searchInputTestID={SEARCH_INPUT_TEST_ID}
          clearButtonTestID={CLEAR_BUTTON_TEST_ID}
          {...props}
        />
      </MockAppContainer>,
    );

  it('renders the SearchBar and input', () => {
    const {getByTestId} = renderComponent();
    expect(getByTestId(SEARCH_BAR_TEST_ID)).toBeTruthy();
    expect(getByTestId(SEARCH_INPUT_TEST_ID)).toBeTruthy();
  });

  it('calls onChangeText when typing', () => {
    const onChangeText = jest.fn();
    const {getByTestId} = renderComponent({onChangeText});
    const input = getByTestId(SEARCH_INPUT_TEST_ID);

    fireEvent.changeText(input, 'France');
    expect(onChangeText).toHaveBeenCalledWith('France');
  });

  it('clears input when clear button is pressed', () => {
    const onChangeText = jest.fn();
    const {queryByTestId} = renderComponent({
      value: 'Paris',
      onChangeText,
    });

    const clearButton = queryByTestId(CLEAR_BUTTON_TEST_ID);
    expect(clearButton).toBeTruthy();

    if (clearButton) fireEvent.press(clearButton);
    expect(onChangeText).toHaveBeenCalledWith('');
  });
});
