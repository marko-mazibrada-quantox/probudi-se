import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useNavMenu } from './useNavMenu';

import { menuValues } from 'utils/menuValues';

const paperStyle = {
  minWidth: '60%',
  backgroundColor: '#00333B',
  color: '#fff'
};

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { text, callbackFn, Icon } = useNavMenu();

  return (
    <Box>
      <IconButton aria-label="open drawer" onClick={() => setIsOpen(true)}>
        <MenuIcon sx={{ fontSize: '54px' }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: paperStyle
        }}
      >
        <Box
          sx={{
            textAlign: 'end',
            padding: '50px'
          }}
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <IconButton aria-label="close drawe" onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{ fontSize: '80px' }} />
          </IconButton>
          <List sx={{ marginTop: '50px' }}>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemButton onClick={callbackFn}>
                <ListItemIcon sx={{ marginRight: '20px' }}>
                  <Icon sx={{ fontSize: '54px' }} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h4',
                    fontWeight: 300
                  }}
                >
                  {text}
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {menuValues.map(({ key, label }) => (
              <ListItem key={key}>
                <ListItemButton component={NavLink} to={key}>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h4',
                      fontWeight: 300
                    }}
                  >
                    {label}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
