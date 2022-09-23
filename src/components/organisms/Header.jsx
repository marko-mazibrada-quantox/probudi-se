import { Box, useMediaQuery } from '@mui/material';
import Image from 'mui-image';

import logoImg from 'assets/images/logo_header.png';
import { DesktopMenu } from 'components/molecules/DesktopMenu';
import { MobileMenu } from 'components/molecules/MobileMenu';

export const Header = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('desktop'));
  return (
    <Box
      sx={{
        padding: '30px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '105px',
        borderBottom: '1px solid #BEBEBE'
      }}
    >
      <Box
        sx={{
          maxWidth: '25%'
        }}
      >
        <Image src={logoImg} width="288px" height="auto" duration={0} />
      </Box>
      {isMobile ? (
        <Box>
          <MobileMenu />
        </Box>
      ) : (
        <Box
          sx={{
            width: '70%'
          }}
        >
          <DesktopMenu />
        </Box>
      )}
    </Box>
  );
};
