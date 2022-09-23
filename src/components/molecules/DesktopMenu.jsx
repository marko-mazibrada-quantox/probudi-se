import { Box, Button, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { useNavMenu } from './useNavMenu';

import { menuValues } from 'utils/menuValues';

export const DesktopMenu = () => {
  const { text, callbackFn } = useNavMenu();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {menuValues.map(({ key, label }) => {
        if (key === '/report')
          return (
            <Button
              color="customGreen"
              variant="contained"
              key={key}
              component={NavLink}
              to={key}
              sx={{
                textTransform: 'none',
                height: '55px',
                '&.active': {
                  fontWeight: '700'
                }
              }}
            >
              {label}
            </Button>
          );
        return (
          <Link
            variant="body2"
            underline="none"
            color="inherit"
            key={key}
            component={NavLink}
            to={key}
            sx={{
              '&.active': {
                fontWeight: '700'
              }
            }}
          >
            {label}
          </Link>
        );
      })}
      <Button onClick={callbackFn} variant="contained">
        {text}
      </Button>
    </Box>
  );
};
