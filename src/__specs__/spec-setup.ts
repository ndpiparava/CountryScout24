jest.mock('@react-navigation/native', () => {
  const {useEffect} = require('react');
  const actualNav = jest.requireActual('@react-navigation/native');
  
  process.env.API_BASE_URL =
    process.env.API_BASE_URL ?? 'http://localhost:3000';

  const navigate = jest.fn();
  const goBack = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();
  const useRoute = jest.fn();
  const setOptions = jest.fn();

  return {
    ...actualNav,
    useNavigation: () => ({
      navigate,
      dispatch,
      goBack,
      getState,
      setOptions,
    }),
    useIsFocused: () => true,
    useFocusEffect: useEffect,
    useRoute,
  };
});

// mock missing RefreshControl (defensive)
jest.mock(
  'react-native/Libraries/Components/RefreshControl/RefreshControl',
  () => ({
    __esModule: true,
    default: require('./mocks/RefreshControlMock'),
  }),
);

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.InteractionManager = {
    runAfterInteractions: (f: () => void) => {
      f();
    },
  };

  return RN;
});

process.env.API_BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000';
