import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import Router from 'routing/Router';
import QueryClientSetup from 'config/queryClientSetup';
import { theme } from 'config/theme/theme';
import { security } from 'services/api/api.utils';
import { CircularSpinner } from 'components/molecules/CircularSpinner';

const queryClient = QueryClientSetup();

const App = () => {
  const { error, isLoading, getAccessTokenSilently } = useAuth0();
  security.setAccessTokenSilently(getAccessTokenSilently);

  if (error) return <div>Oops... {error.message}</div>;
  if (isLoading) return <CircularSpinner />;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactQueryDevtools initialIsOpen={false} />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
