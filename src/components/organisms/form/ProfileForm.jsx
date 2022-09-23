import { Box, Button, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { FormTextField } from 'components/molecules/form/FormTextField';
import { validateEmail } from 'utils/validateEmail';
import { FormRadioGroup } from 'components/molecules/form/FormRadioGroup';

const radioOptions = [
  { value: 'student', label: 'Student' },
  { value: 'pupil', label: 'Učenik' }
];

const defaultValues = {
  type: '',
  name: '',
  phone: '',
  parentPhone: '',
  email: '',
  institution: '',
  program: ''
};

export const ProfileForm = () => {
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
        <FormRadioGroup
          name="type"
          control={control}
          options={radioOptions}
          rules={{
            required: 'Ovo polje je obavezno odabrati!'
          }}
        />
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
          id="phone"
          name="phone"
          type="tel"
          label="Broj telefona"
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
          id="parentPhone"
          name="parentPhone"
          type="tel"
          label="Broj telefona roditelja"
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
          id="institution"
          name="institution"
          type="text"
          label="Skola, fax, univerzitet"
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
          id="program"
          name="program"
          type="text"
          label="smer/razred/odeljenje"
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
