import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Image from 'mui-image';
import Grid from '@mui/material/Unstable_Grid2';

import reportDeskImg from 'assets/images/prijavi_desk.png';
import { ReportForm } from 'components/organisms/form/ReportForm';

export const Report = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('desktop'));

  return (
    <Box
      sx={{
        padding: '50px'
      }}
    >
      <Container>
        <Grid container spacing={8} justifyContent="center" position="relative">
          {!isMobile && (
            <>
              <Grid xs={12} position="relative">
                <Image src={reportDeskImg} />
                <Typography
                  color="white"
                  variant="h5"
                  sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    translate: '-50% -50%',
                    textAlign: 'center'
                  }}
                >
                  <p>PRIJAVI DISKRIMINACIJU </p>
                  <p>Ovo je aplikacija za pružanje podruške osobama nad kojima se vrši diskriminacija.</p>
                </Typography>
              </Grid>
              <Box
                sx={{
                  width: '50%',
                  position: 'absolute',
                  top: '70%',
                  left: '50%',
                  translate: '-50%'
                }}
              >
                <ReportForm />
              </Box>
            </>
          )}
          {isMobile && (
            <Grid xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '50px'
                }}
              >
                <Image src={reportDeskImg} />
                <Typography variant="h3" align="center">
                  Prijavi diskriminaciju
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: '300' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis.
                </Typography>
                <ReportForm />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
