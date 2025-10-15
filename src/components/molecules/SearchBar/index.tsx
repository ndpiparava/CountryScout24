import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React, {useRef} from 'react';
import {TextInput, TextInputProps, Pressable} from 'react-native';

import {CloseIcon} from '@CountryScout24/assets/svgs/CloseIcon';
import {SearchIcon} from '@CountryScout24/assets/svgs/SearchIcon';

type SearchBarProps = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
  testID?: string;
  searchInputTestID?: string;
  clearButtonTestID?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
  testID,
  searchInputTestID,
  clearButtonTestID,
  ...rest
}) => {
  const ref = useRef<TextInput>(null);
  const theme = useTheme();
  const clearText = () => {
    onChangeText('');
    ref.current?.clear();
  };

  return (
    <Wrapper testID={testID}>
      <IconHolder>
        <SearchIcon />
      </IconHolder>

      <Input
        testID={searchInputTestID}
        placeholder={placeholder ?? 'Search...'}
        placeholderTextColor={theme.colors.textSecondary}
        onChangeText={onChangeText}
        ref={ref}
        {...rest}
      />

      {value.length > 0 && (
        <ClearButton onPress={clearText} testID={clearButtonTestID}>
          <CloseIcon />
        </ClearButton>
      )}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
  border-radius: ${({theme}) => theme.radii.lg};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.boarderPrimary};
  padding: 10px 14px;
  margin-bottom: ${({theme}) => theme.spacing(2)}px;
  height: 40px;
`;

const IconHolder = styled.View`
  margin-right: 8px;
`;

const Input = styled(TextInput)`
  flex: 1;
  font-size: ${({theme}) => theme.fontSizes.base};
  color: ${({theme}) => theme.colors.textPrimary};
`;

const ClearButton = styled(Pressable)`
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;
