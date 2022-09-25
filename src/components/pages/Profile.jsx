import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'mui-image';

import profileImg from 'assets/images/profile_desk.png';
import { ProfileForm } from 'components/organisms/form/ProfileForm';
import { useGetUser } from 'services/query/useGetUser';

export const Profile = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('desktop'));
  const { data, isLoading, isError } = useGetUser();
  return (
    <Box sx={{ padding: '50px' }}>
      <Container>
        <Grid container spacing={8} justifyContent="center" position="relative">
          <>
            <Grid xs={12} position="relative">
              {!isMobile && <Image src={profileImg} />}
              <Typography
                color={isMobile ? '#000' : '#fff'}
                variant="h5"
                sx={{
                  position: isMobile ? 'relative' : 'absolute',
                  top: '30%',
                  left: '50%',
                  translate: '-50% -50%',
                  textAlign: 'center'
                }}
              >
                Moj Profil (Mora biti popunjen u celosti)
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm={9}
              md={6}
              sx={{
                // width: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                translate: '-50%'
              }}
            >
              <ProfileForm />
            </Grid>
          </>
        </Grid>
      </Container>
    </Box>
  );
};
