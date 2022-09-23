import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useCallback } from 'react';

import { CircularSpinner } from '../CircularSpinner';

export const ProtectedRoute = ({ component, ...rest }) => {
  const onRedirecting = useCallback(() => <CircularSpinner />, []);

  const Component = withAuthenticationRequired(component, {
    onRedirecting
  });

  return <Component {...rest} />;
};
