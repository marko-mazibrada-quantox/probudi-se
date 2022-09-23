import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'mui-image';

import discImg from 'assets/images/diskriminacija_desk.png';

export const Discrimination = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('desktop'));

  return (
    <Box
      sx={{
        padding: '50px'
      }}
    >
      <Container>
        <Grid container spacing={8} justifyContent="center">
          <Grid xs={12}>
            <Image src={discImg} />
          </Grid>
          <Grid xs={12} md={8}>
            <Typography
              variant={isMobile ? 'h3' : 'h5'}
              align={isMobile ? 'left' : 'center'}
              sx={{ marginBottom: '20px' }}
            >
              Šta je to diskriminacija
            </Typography>
            <Typography variant={isMobile ? 'h4' : 'body1'} align="left" sx={{ fontWeight: 300 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid xs={12} md={8}>
            <Typography
              variant={isMobile ? 'h3' : 'h5'}
              align={isMobile ? 'left' : 'center'}
              sx={{ marginBottom: '20px' }}
            >
              Vrste Diskriminacije
            </Typography>
            <Typography variant={isMobile ? 'h4' : 'h6'} align="left" sx={{ marginBottom: '20px' }}>
              Neka vrsta Diskriminacije
            </Typography>
            <Typography variant={isMobile ? 'h4' : 'body1'} align="left" sx={{ fontWeight: 300 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
