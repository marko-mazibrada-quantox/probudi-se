import { Box, Button, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { FormTextField } from 'components/molecules/form/FormTextField';
import { validateEmail } from 'utils/validateEmail';

const defaultValues = {
  name: '',
  email: '',
  message: ''
};

export const ContactForm = () => {
  const methods = useForm({ defaultValues });
  const { handleSubmit, control, reset, formState } = methods;
  const onSubmit = (e, d) => {
    console.log({ formState });
    console.log({ e });
    console.log({ d });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset(defaultValues);
  }, [formState, reset]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#CFCFCF',
          border: '1px solid #000',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRadius: '8px',
          padding: '5%'
        }}
      >
        <FormTextField
          id="name"
          name="name"
          type="text"
          label="Ime i Prezime"
          control={control}
          sx={{
            '& .MuiOutlinedInput-input': {
              backgroundColor: 'white'
            }
          }}
          rules={{
            required: 'Ovo polje je obavezno popuniti!'
          }}
          required
        />
        <FormTextField
          id="email"
          name="email"
          type="email"
          label="E - pošta"
          helperText="test"
          control={control}
          sx={{
            '& .MuiOutlinedInput-input': {
              backgroundColor: 'white'
            }
          }}
          rules={{
            required: 'Ovo polje je obavezno popuniti!',
            validate: value => validateEmail(value) || 'Molimo vas da koristite ispravanu E - poštu!'
          }}
          required
        />
        <FormTextField
          id="message"
          name="message"
          type="text"
          label="Poruka"
          helperText="help"
          control={control}
          rows={12}
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
