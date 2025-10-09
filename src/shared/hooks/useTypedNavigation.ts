import {NavigationProp, useNavigation} from '@react-navigation/native';

const useTypedNavigation = <T extends object>() => {
  const navigation = useNavigation<NavigationProp<T>>();

  return navigation;
};

export default useTypedNavigation;
