import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'mui-image';

import contactImg from 'assets/images/kontakt_desk.png';
import { ContactForm } from 'components/organisms/form/ContactForm';

export const Contact = () => {
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
                <Image src={contactImg} />
                <Typography
                  color="white"
                  variant="h5"
                  sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    translate: '-50% -50%',
                    textAlign: 'center'
                  }}
                >
                  Kontaktirajte nas
                </Typography>
              </Grid>
              <Box
                sx={{
                  width: '40%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  translate: '-50%'
                }}
              >
                <ContactForm />
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
                <Typography variant="h3">Kontakt</Typography>
                <Typography variant="h5" sx={{ fontWeight: '300' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis.
                </Typography>
                <ContactForm />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
