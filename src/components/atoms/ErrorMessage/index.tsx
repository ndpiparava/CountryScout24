import styled from '@emotion/native';
import React from 'react';

import RetryIcon from '@CountryScout24/assets/svgs/RetryIcon';
import {noop} from '@CountryScout24/utils/common';

type ErrorMessageProps = {
  message: string;
  onRetry?: () => void;
  testID?: string;
  retryTestID?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong',
  onRetry = noop,
  testID,
  retryTestID,
}) => {
  return (
    <Container testID={testID}>
      <ErrorText>{message}</ErrorText>
      {onRetry && (
        <RetryButton onPress={onRetry} testID={retryTestID}>
          <RetryIcon />
        </RetryButton>
      )}
    </Container>
  );
};

export default ErrorMessage;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacing(1)}px;
`;

const ErrorText = styled.Text`
  color: ${({theme}) => theme.colors.warning};
  font-size: ${({theme}) => theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${({theme}) => theme.spacing(1)}px;
`;

const RetryButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${({theme}) => theme.colors.warning};
  border-radius: ${({theme}) => theme.radii.xlg};
`;
