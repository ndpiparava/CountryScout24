import {theme} from '@CountryScout24/themes';
import {translations} from '@CountryScout24/translations';
import {ThemeProvider} from '@emotion/react';

import React from 'react';
import {IntlProvider} from 'react-intl';
import {mockState, setupMockStores} from './MockStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
