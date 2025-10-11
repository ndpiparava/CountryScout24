import {useTheme} from '@emotion/react';
import {createStackNavigator} from '@react-navigation/stack';
import {useIntl} from 'react-intl';

import {TEST_IDS} from '@CountryScout24/__specs__/testIDs';
import CountriesScreen from '@CountryScout24/screens/CountriesScreen';
import CountryDetailScreen from '@CountryScout24/screens/CountryDetailScreen';
import {AppStackParamList, Screen} from '@CountryScout24/screens/screen';

const NavigationStack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  const theme = useTheme();
  const intl = useIntl();
  return (
    <NavigationStack.Navigator
      initialRouteName={Screen.CountriesScreen}
      screenOptions={{
        headerBackButtonDisplayMode: 'minimal',
        headerShown: true,
        headerStyle: {backgroundColor: theme.colors.backgroundPrimary},
        headerTintColor: theme.colors.textSecondary,
      }}>
      <NavigationStack.Screen
        name={Screen.CountriesScreen}
        component={CountriesScreen}
        options={{title: intl.formatMessage({id: 'countries'})}}
      />
      <NavigationStack.Screen
        name={Screen.CountryDetailsScreen}
        component={CountryDetailScreen}
        options={{title: '', headerBackTestID: TEST_IDS.BACK_BUTTON}}
      />
    </NavigationStack.Navigator>
  );
};

export default AppStack;
