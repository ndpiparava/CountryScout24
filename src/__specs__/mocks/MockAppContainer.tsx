import {ThemeProvider} from '@emotion/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {IntlProvider} from 'react-intl';

import {theme} from '@CountryScout24/themes';
import {translations} from '@CountryScout24/translations';

import {mockState, setupMockStores} from './MockStore';

type PropsType = {
  children?: React.ReactNode;
  mockStores?: Partial<typeof mockState>;
};

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // disable retries for tests
    },
  },
});

export const MockAppContainer = ({children, mockStores = {}}: PropsType) => {
  setupMockStores(mockStores);
  return (
    <QueryClientProvider client={mockQueryClient}>
      <ThemeProvider theme={theme}>
        <IntlProvider messages={translations.en} locale={'en'}>
          {children}
        </IntlProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
