import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useMemo } from 'react';

const { useAuth0 } = require('@auth0/auth0-react');
const { useQueryClient } = require('react-query');

export const useNavMenu = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    queryClient.clear();
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => loginWithRedirect();

  const callbackFn = isAuthenticated ? handleLogout : handleLogin;
  const text = isAuthenticated ? 'Odjavi se' : 'Prijavi se';
  const Icon = useMemo(() => (isAuthenticated ? LogoutIcon : LoginIcon), [isAuthenticated]);

  return { text, callbackFn, Icon };
};
