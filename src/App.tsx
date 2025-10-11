import {ThemeProvider} from '@emotion/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {IntlProvider} from 'react-intl';

import AppWrapper from './AppWrapper';
import {useLocaleStore} from './stores/useLocaleStore';
import {theme} from './themes';
import {translations} from './translations';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const language = useLocaleStore(state => state.language);
  return (
    <IntlProvider messages={translations[language]} locale={language}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={{...theme}}>
          <AppWrapper />
        </ThemeProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default App;
