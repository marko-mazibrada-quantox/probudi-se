import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import Image from 'mui-image';
import { Link } from 'react-router-dom';

import homeImg from 'assets/images/home_page.png';
import homeMobileImg from 'assets/images/home_mobile.png';

export const Home = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('desktop'));
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minHeight: 'calc(100vh - 165px)'
      }}
    >
      <Box
        sx={{
          // marginTop: '86px',
          width: '100%',
          maxWidth: isMobile ? '865px' : '1141px',
          height: 'auto'
        }}
      >
        <Image src={isMobile ? homeMobileImg : homeImg} />
      </Box>
      {isMobile && (
        <Box
          sx={{
            // marginTop: '86px',
            maxWidth: '660px'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#00333B'
            }}
          >
            PROBUDI SE
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          // marginTop: isMobile ? '50px' : '86px',
          maxWidth: '660px'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '300',
            textAlign: 'center'
          }}
        >
          Aplikacija namenjena učenicima i studentima nad kojima se vrši bilo kakava diskriminacija
        </Typography>
      </Box>
      <Button
        color="customGreen"
        variant="contained"
        component={Link}
        to="/report"
        sx={{
          // marginTop: '50px',
          borderRadius: '10px',
          height: '55px'
        }}
      >
        Prijavi diskriminaciju
      </Button>
    </Container>
  );
};
