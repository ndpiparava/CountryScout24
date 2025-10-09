// mockState.ts

import {
  LocaleStateType,
  useLocaleStore,
} from '@CountryScout24/stores/useLocaleStore';
import {merge} from 'lodash';

export interface AppState {
  locale: Partial<LocaleStateType>;
}

export const mockState: AppState = {
  locale: {
    language: 'en',
  },
};

export const setupMockStores = (mockStores: Partial<AppState> = {}) => {
  const merged = merge({}, mockStores);
  if (merged.locale) {
    useLocaleStore.setState(merged.locale, false);
  }
};
