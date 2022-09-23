import { Link } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink as RouterLink } from 'react-router-dom';

export const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
      marginTop: 'auto',
      backgroundColor: '#00333B'
    }}
  >
    <Link
      variant="body2"
      underline="none"
      component={RouterLink}
      to="/privacy-policy"
      sx={{
        fontWeight: '300',
        color: '#017B8E',
        '&.active': {
          fontWeight: '700'
        }
      }}
    >
      Politika privatnosti
    </Link>
    <Box
      sx={{
        width: '1px',
        height: '21px',
        backgroundColor: '#017B8E',
        margin: '0 20px'
      }}
    />
    <Link
      variant="body2"
      underline="none"
      component={RouterLink}
      to="/sos-phone"
      sx={{
        fontWeight: '300',
        color: '#017B8E',
        '&.active': {
          fontWeight: '700'
        }
      }}
    >
      SoS Broj Telefona
    </Link>
    <Box
      sx={{
        width: '1px',
        height: '21px',
        backgroundColor: '#017B8E',
        margin: '0 20px'
      }}
    />
    <Link
      variant="body2"
      underline="none"
      component={RouterLink}
      to="/contact"
      sx={{
        fontWeight: '300',
        color: '#017B8E',
        '&.active': {
          fontWeight: '700'
        }
      }}
    >
      Kontakt
    </Link>
  </Box>
);
