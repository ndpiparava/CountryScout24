import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

import AppStack from './appstack';

function AppWrapper(): React.JSX.Element {
  const theme = useTheme();
  return (
    <RootWrapper>
      <StatusBar />
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: theme.colors.backgroundPrimary,
          },
        }}
      >
        <AppStack />
      </NavigationContainer>
    </RootWrapper>
  );
}

export default AppWrapper;

const RootWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
`;
