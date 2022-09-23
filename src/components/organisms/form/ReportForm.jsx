import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import avatarImg from 'assets/images/avatar.png';
import { FormTextField } from 'components/molecules/form/FormTextField';

export const ReportForm = () => {
  const methods = useForm({ defaultValues: { message: '' } });
  const { handleSubmit, control, reset, formState } = methods;
  const onSubmit = (e, d) => {
    console.log({ formState });
    console.log({ e });
    console.log({ d });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ message: '' });
  }, [formState, reset]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#CFCFCF',
          border: '1px solid #000',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRadius: '8px',
          padding: '5%',
          marginTop: '20px'
        }}
      >
        <Avatar
          alt="Slika Operatera"
          src={avatarImg}
          sx={{
            width: 150,
            height: 150,
            position: 'absolute',
            top: 0,
            left: '50%',
            translate: '-50% -45%'
          }}
        />
        <Typography variant="body1" align="center" sx={{ padding: '40px 10% 20px 10%' }}>
          <div>Zdravo 'Petre', da li možeš da nam opišeš</div>
          <div>koji problem imaš, ko vrši diskriminaciju nad tobom i zašto?</div>
        </Typography>
        <FormTextField
          id="message"
          name="message"
          type="text"
          label="Poruka"
          helperText="help"
          control={control}
          rows={8}
          sx={{
            '& .MuiOutlinedInput-input, & .MuiOutlinedInput-root': {
              backgroundColor: 'white'
            }
          }}
          rules={{
            required: 'Ovo polje je obavezno popuniti!'
          }}
          multiline
          required
        />
        <Button
          color="customGreen"
          variant="contained"
          type="submit"
          sx={{
            textTransform: 'none',
            borderRadius: '10px',
            height: '100px',
            fontSize: '24px',
            '@media (min-width: 1080px)': {
              height: '55px'
            }
          }}
        >
          Pošalji
        </Button>
      </Paper>
    </Box>
  );
};
