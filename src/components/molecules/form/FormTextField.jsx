import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const FormTextField = ({ name, control, rules, ...rest }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField {...rest} {...field} helperText={fieldState.error?.message ?? ' '} error={!!fieldState.error} />
    )}
  />
);
