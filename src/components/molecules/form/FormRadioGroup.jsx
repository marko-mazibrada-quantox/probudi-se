import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { Controller } from 'react-hook-form';

export const FormRadioGroup = ({ name, control, rules, options }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <FormControl
        error={!!fieldState.error}
        margin="normal"
        sx={{
          alignSelf: 'center',
          marginBottom: 0
        }}
      >
        <RadioGroup aria-label={name} {...field} row>
          {options.map(opt => (
            <FormControlLabel key={opt.value} control={<Radio />} {...opt} />
          ))}
        </RadioGroup>
        <FormHelperText>{fieldState.error?.message ?? ' '}</FormHelperText>
      </FormControl>
    )}
  />
);
