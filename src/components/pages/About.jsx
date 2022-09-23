import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'mui-image';

import mobileImg from 'assets/images/about_mob_img.png';
import logoDesk from 'assets/images/logo_3.png';
import authorImg from 'assets/images/about_telok_1.png';
import authorMobImg from 'assets/images/about_telok_2.png';
import quantoxLogo from 'assets/images/quantox_logo.png';

export const About = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('desktop'));

  return (
    <Box
      sx={{
        padding: '50px'
      }}
    >
      <Container>
        <Grid container spacing={8} justifyContent="center">
          <Grid xs={12} md={6}>
            <Image src={isMobile ? mobileImg : logoDesk} style={{ aspectRatio: 1.5 }} />
          </Grid>
          <Grid xs={12} md={6} sx={{ alignSelf: 'center' }}>
            <Typography variant={isMobile ? 'h3' : 'h5'} sx={{ marginBottom: '20px' }}>
              O Nama
            </Typography>
            <Typography variant={isMobile ? 'h4' : 'body1'} sx={{ fontWeight: 300 }}>
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
          {isMobile && (
            <Grid xs={12}>
              <Image src={authorMobImg} style={{ width: '70%' }} />
            </Grid>
          )}
          <Grid xs={12} md={6} sx={{ alignSelf: 'center' }}>
            <Typography
              variant={isMobile ? 'h3' : 'h5'}
              align={isMobile ? 'left' : 'right'}
              sx={{ marginBottom: '20px' }}
            >
              O autoru aplikacije
            </Typography>
            <Typography
              variant={isMobile ? 'h4' : 'body1'}
              align={isMobile ? 'left' : 'right'}
              sx={{ fontWeight: 300 }}
            >
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
          {!isMobile && (
            <Grid md={6}>
              <Image src={authorImg} style={{ borderRadius: '10px' }} />
            </Grid>
          )}

          <Grid xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <Image src={quantoxLogo} width={400} height={96} />
              <Typography
                variant={isMobile ? 'h3' : 'h5'}
                align={isMobile ? 'left' : 'center'}
                sx={{ marginBottom: '20px' }}
              >
                O kreatoru aplikacije
              </Typography>
              <Typography
                variant={isMobile ? 'h4' : 'body1'}
                align={isMobile ? 'left' : 'center'}
                sx={{ fontWeight: 300 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
