// mockState.ts

import {merge} from 'lodash';

import {
  LocaleStateType,
  useLocaleStore,
} from '@CountryScout24/stores/useLocaleStore';

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
