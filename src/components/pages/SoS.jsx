import { Box, Button, Container, Paper, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'mui-image';
import PhoneIcon from '@mui/icons-material/Phone';

import sosImgMob from 'assets/images/sos_mob.png';

export const SoS = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('desktop'));

  return (
    <Box
      sx={{
        padding: '50px'
      }}
    >
      <Container>
        <Grid container spacing={8}>
          <Grid xs={12} position="relative">
            <Image src={sosImgMob} />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                translate: '-50% -50%',
                textAlign: 'center'
              }}
            >
              <Typography color="white" variant={isMobile ? 'h3' : 'h5'}>
                SoS Telefon
              </Typography>
              {!isMobile && (
                <>
                  <Typography color="white" variant="body2" sx={{ margin: '20px 0' }}>
                    +3811273647489
                  </Typography>
                  <Button
                    component="a"
                    href="tel:+3811273647489"
                    color="customGreen"
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{
                      height: '55px',
                      width: '234px',
                      borderRadius: '10px'
                    }}
                  >
                    Pozovi
                  </Button>
                </>
              )}
            </Box>
          </Grid>
          {isMobile && (
            <Grid xs={12}>
              <Paper
                elevation={0}
                outline
                sx={{
                  backgroundColor: '#EFEFEF',
                  border: '1px solid #ECECEC',
                  padding: '15% 15%',
                  textAlign: 'center'
                }}
              >
                <Button
                  fullWidth
                  component="a"
                  href="tel:+3811273647489"
                  color="customGreen"
                  variant="contained"
                  startIcon={<PhoneIcon />}
                  sx={{
                    height: '100px',
                    fontSize: '36px',
                    borderRadius: '10px',
                    '& .MuiSvgIcon-root': {
                      fontSize: '50px !important'
                    }
                  }}
                >
                  Pozovi
                </Button>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
