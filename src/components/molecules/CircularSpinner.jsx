import { Box, CircularProgress } from '@mui/material';

export const CircularSpinner = () => (
  <Box
    sx={{
      display: 'flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      translate: '-50% -50%'
    }}
  >
    <CircularProgress size={120} />
  </Box>
);
