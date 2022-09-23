import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container } from '@mui/material';

export const Login = () => {
  const { loginWithRedirect, logout } = useAuth0();
  // add clear cache on logout
  return (
    <Box>
      <Container>
        <Button onClick={() => loginWithRedirect()}>Login</Button>
        <Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
      </Container>
    </Box>
  );
};
