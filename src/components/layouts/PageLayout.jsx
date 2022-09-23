import { Box } from '@mui/material';
import { Outlet } from 'react-router';

import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';

export const PageLayout = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Header />
    <Outlet />
    <Footer />
  </Box>
);
