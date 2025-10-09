import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';

type LoadingProps = {
  message?: string;
  testID?: string;
};

const Loading: React.FC<LoadingProps> = ({message, testID}: LoadingProps) => {
  const theme = useTheme();
  return (
    <Container testID={testID}>
      <ActivityIndicator color={theme.colors.primary} />
      {message && <MessageText>{message}</MessageText>}
    </Container>
  );
};

export default Loading;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacing(1)}px;
`;

const MessageText = styled.Text`
  margin-top: ${({theme}) => theme.spacing(1)}px;
  font-size: ${({theme}) => theme.fontSizes.lg};
  color: ${({theme}) => theme.colors.textSecondary};
`;
