import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {IntlProvider} from 'react-intl';
import {useLocaleStore} from './stores/useLocaleStore';
import {ThemeProvider} from '@emotion/react';
import {translations} from './translations';
import {theme} from './themes';
import AppWrapper from './AppWrapper';

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
